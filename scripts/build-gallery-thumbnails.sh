#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
OUT_DIR="$ROOT_DIR/images/gallery"
MANIFEST="$ROOT_DIR/site-gallery.js"
CWEBP_BIN="${CWEBP_BIN:-cwebp}"
WIDTH="${GALLERY_THUMB_WIDTH:-640}"
QUALITY="${GALLERY_THUMB_QUALITY:-76}"
SOURCE_LIST="$OUT_DIR/.sources.tsv"
TMP_MANIFEST="$OUT_DIR/.site-gallery.$$.js"

mkdir -p "$OUT_DIR"

awk '
  /^[[:space:]]*id: "/ {
    line = $0
    sub(/^[^"]*"/, "", line)
    sub(/".*/, "", line)
    id = line
    next
  }

  id && /^[[:space:]]*(gallerySource|image): "/ {
    line = $0
    sub(/^[^"]*"/, "", line)
    sub(/".*/, "", line)
    print id "\t" line
    id = ""
  }
' "$ROOT_DIR/site-data.js" > "$SOURCE_LIST"

printf 'window.PUBLICATION_GALLERY = {\n' > "$TMP_MANIFEST"
first=1

while IFS='	' read -r id source; do
  case "$source" in
    http:*|https:*|//*)
      continue
      ;;
  esac

  input="$ROOT_DIR/$source"
  output="$OUT_DIR/$id.webp"

  if [ ! -f "$input" ]; then
    printf 'Skip missing source: %s\n' "$source" >&2
    continue
  fi

  "$CWEBP_BIN" -quiet -q "$QUALITY" -metadata none -resize "$WIDTH" 0 "$input" -o "$output"
  pixel_width=$(sips -g pixelWidth "$output" | awk '/pixelWidth/ { print $2 }')
  pixel_height=$(sips -g pixelHeight "$output" | awk '/pixelHeight/ { print $2 }')

  if [ "$first" -eq 0 ]; then
    printf ',\n' >> "$TMP_MANIFEST"
  fi

  first=0
  printf '  "%s": { "src": "images/gallery/%s.webp", "width": %s, "height": %s }' \
    "$id" "$id" "$pixel_width" "$pixel_height" >> "$TMP_MANIFEST"
  printf 'Generated %s\n' "${output#$ROOT_DIR/}"
done < "$SOURCE_LIST"

printf '\n};\n' >> "$TMP_MANIFEST"
mv "$TMP_MANIFEST" "$MANIFEST"
rm -f "$SOURCE_LIST"
printf 'Generated %s\n' "${MANIFEST#$ROOT_DIR/}"
