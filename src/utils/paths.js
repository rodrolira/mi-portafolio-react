const baseUrl = import.meta.env.BASE_URL || '/'

export const getAssetPath = (path) => {
  // Eliminar barras duplicadas
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${baseUrl}${cleanPath}`
}