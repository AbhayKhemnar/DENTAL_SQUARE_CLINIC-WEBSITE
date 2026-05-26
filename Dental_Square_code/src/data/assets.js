import logo from '../assets/logo/logo.png'

const photoModules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,webp,jfif,svg}', {
  eager: true,
  import: 'default',
})

const galleryModules = import.meta.glob('../assets/photos/gallery/*.{jpg,jpeg,png,webp,jfif}', {
  eager: true,
  import: 'default',
})

export const allPhotoImages = Object.entries(photoModules).map(([path, src]) => ({
  src,
  name: path.split('/').pop().replace(/\.[^.]+$/, '').replaceAll('_', ' '),
}))

export const galleryImages = Object.entries(galleryModules).map(([path, src]) => ({
  src,
  name: path.split('/').pop().replace(/\.[^.]+$/, '').replaceAll('_', ' '),
}))

export const hydraImages = allPhotoImages.filter((image) =>
  image.name.toLowerCase().includes('hydra'),
)

export const clinicImages = allPhotoImages.filter((image) =>
  image.name.toLowerCase().includes('shop'),
)

export const doctorImage = allPhotoImages.find((image) =>
  image.name.toLowerCase().includes('doctor-female-real'),
)

export const equipmentImage =
  allPhotoImages.find((image) => image.name.toLowerCase().includes('hydra facail machine 2')) ||
  hydraImages[0]

export const brandLogo = logo
