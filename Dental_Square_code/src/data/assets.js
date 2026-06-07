import logo from '../assets/logo/perfect-smile-logo.svg'

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

export const clinicImages = allPhotoImages.filter((image) =>
  image.name.toLowerCase().includes('perfect-smile-dental-clinic-moshi-pune'),
)

export const doctorImage = allPhotoImages.find((image) =>
  image.name.toLowerCase().includes('dr-prradnya-uttarwar-perfect-smile-dental-clinic'),
)

export const equipmentImage =
  allPhotoImages.find((image) =>
    image.name.toLowerCase().includes('perfect-smile-dental-clinic-equipment-moshi'),
  )

export const brandLogo = logo
