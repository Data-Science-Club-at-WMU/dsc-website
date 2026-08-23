// Regenerates every raster icon from the club logo:
//
//     node scripts/create-favicon.js
//
// favicon.ico is not produced here (sharp can't write ICO) — the PNG + apple
// icons cover every modern browser, and app/favicon.ico stays as the fallback.
const sharp = require('sharp');
const path = require('path');

// The transparent logo, trimmed to its artwork bounds and flattened onto white —
// the padded white-background copy wastes pixels that matter at 32x32.
const SOURCE = path.join(__dirname, '../public/dsaic-logo.png');

const ICONS = [
  ['favicon-32x32.png', 32],
  ['favicon.png', 64],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];

Promise.all(
  ICONS.map(([name, size]) =>
    sharp(SOURCE)
      .trim()
      .resize(size, size, { fit: 'contain', background: '#ffffff00' })
      .flatten({ background: '#ffffff' })
      .png()
      .toFile(path.join(__dirname, '../public', name))
      .then(() => console.log(`wrote public/${name} (${size}x${size})`))
  )
).catch((error) => {
  console.error(error);
  process.exit(1);
});
