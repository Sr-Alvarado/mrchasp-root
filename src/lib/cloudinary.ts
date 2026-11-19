export const cloudinaryUrl = (url: string, width: number) =>
  `https://res.cloudinary.com/xiismmrd/image/fetch/f_auto,q_auto,c_limit,w_${width}/${url}`

export const cloudinarySrcset = (url: string) =>
  [400, 800, 1200].map((width) => `${cloudinaryUrl(url, width)} ${width}w`).join(', ')
