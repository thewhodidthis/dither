## about

3-bit Web Worker friendly implementation of common dithering algorithms, ordered and spatial.

## setup

Load via script tag:

```html
<!-- Just an IIFE namespaced `dither` -->
<script src="https://thewhodidthis.github.io/dither/dither.js"></script>
```

Source from an import map:

```json
{
  "imports": {
    "@thewhodidthis/dither": "https://thewhodidthis.github.io/dither/main.js"
  }
}
```

Download from GitHub directly if using a package manager:

```sh
# Add to package.json
npm install thewhodidthis/dither
```

## usage

Choose between ordered or spatial and initialize with a matrix array to get an `ImageData` processing function. For example:

```js
import { spatial as bender } from "@thewhodidthis/dither"

const source = document.createElement("img")
const target = document.createElement("canvas").getContext("2d")

const canvas = Object.assign(target.canvas, { width: 180, height: 180 })

// The Floyd/Steinberg variety is default
const filter = bender()

source.addEventListener("load", () => {
  target.drawImage(source, 0, 0)

  const pixels = target.getImageData(0, 0, canvas.width, canvas.height)
  const result = filter(pixels)

  target.putImageData(result, 0, 0)

  document.body.appendChild(canvas)
})

source.setAttribute("crossOrigin", "anonymous")
source.setAttribute(
  "src",
  `//source.unsplash.com/random/${canvas.width}x${canvas.height}`,
)
```

## see also

- [meemooapp](https://github.com/meemoo/meemooapp/blob/master/src/nodes/image-monochrome-worker.js)
- [FlickrDithr](https://github.com/flickr/FlickrDithr/blob/master/dither.js)
