// Image cache to avoid re-decoding on every frame
const imageCache = new Map<string, HTMLImageElement>()

function isReady(img: HTMLImageElement): boolean {
  return img.complete && img.naturalWidth > 0
}

export function getOrLoadImage(url: string): HTMLImageElement | null {
  const cached = imageCache.get(url)
  if (cached) return isReady(cached) ? cached : null

  const img = new Image()
  img.onload = () => imageCache.set(url, img)
  img.src = url
  return null
}

/** Decode an image into the cache. Used by compositor RPCs so export waits for pixels. */
export function loadImage(url: string): Promise<HTMLImageElement> {
  const cached = imageCache.get(url)
  if (cached && isReady(cached)) return Promise.resolve(cached)
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      imageCache.set(url, img)
      resolve(img)
    }
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = url
  })
}

// SVG image cache (keyed by svgContent + tintColor)
export const svgImageCache = new Map<string, HTMLImageElement>()
