"""Make a QR code in the brand colors.

Usage:  python3 tools/make-qr.py "https://example.com/page" out.png
Needs:  pip install segno pillow

Prints the link the finished image decodes to (if opencv is installed) so you can
confirm it before anything goes to print.
"""
import sys
import segno

DARK, LIGHT = "#1b1815", "#f3ece1"  # brand dark on cream; keep strong contrast so it scans

url, out = sys.argv[1], sys.argv[2]
qr = segno.make(url, error="m", micro=False)
qr.save(out, scale=24, border=1, dark=DARK, light=LIGHT)
print(f"Saved {out}: version {qr.version}, {qr.symbol_size(border=0)[0]} modules across")

try:
    import cv2
    img = cv2.imread(out, cv2.IMREAD_GRAYSCALE)
    img = cv2.copyMakeBorder(img, 80, 80, 80, 80, cv2.BORDER_CONSTANT, value=255)
    print("Scans to:", cv2.QRCodeDetector().detectAndDecode(img)[0] or "(could not read - check it)")
except ImportError:
    print("Install opencv-python-headless to auto-check the scan.")
