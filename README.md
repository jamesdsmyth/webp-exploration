# webP images

### index.html - loads 24 images at a total weight of 704KB

index.html uses webP images when in a supported browser.

### jpg.html - loads 24 images at a total weight of 1.6MB

jpg.html uses jpg images only.

## Gulp task to minimise and create WebP images

1. `git clone` the repo
2. `npm install` to get the node_modules folder

`gulp optimiseImages` runs a gulp task that takes all your images from `src`, minifies and converts it to `.webp` extension.
