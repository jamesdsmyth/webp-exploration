# webP images

### index.html

index.html uses webP images when in a supported browser and loads 24 images at a total weight of 704KB

### jpg.html

jpg.html uses jpg images only and loads 24 images at a total weight of 1.6MB

## Gulp task to minimise and create WebP images

1. `git clone` the repo
2. `npm install` to get the node_modules folder

`gulp optimiseImages` runs a gulp task that takes all your images from `src`, minifies and converts it to `.webp` extension.
