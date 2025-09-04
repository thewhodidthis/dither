importScripts("./dither.js")

self.addEventListener("message", ({ data }) => {
  const { config, source } = data

  const filter = dither[config.nature]
  const lookup = dither.matrix[config.lookup]
  const result = filter(lookup)(source)

  self.postMessage({ result })
})
