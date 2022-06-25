export const createImage = (endpoint) => {
  return endpoint?.map((image) => ({
    id: image.id,
    likes: image.likes,
    url: image.largeImageURL,
    tags: image.tags,
    views: image.views,
  }))
}
