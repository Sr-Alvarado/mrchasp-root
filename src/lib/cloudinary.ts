export const cloudinaryUrl = (secureUrl: string, width: number) =>
  secureUrl.replace('/upload/', `/upload/f_auto,q_auto,c_limit,w_${width}/`)
