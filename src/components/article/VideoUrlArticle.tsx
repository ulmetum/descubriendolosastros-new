import type { VideoURL } from '@/interfaces/articles.interface'

interface Props {
  videoUrl?: VideoURL
}

const getEmbedCode = (url: string): string | null => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    // Si es un enlace de YouTube
    const videoId = new URL(url).searchParams.get('v') || url.split('/').pop()
    return `https://www.youtube.com/embed/${videoId}`
  }
  if (url.includes('vimeo.com')) {
    // Si es un enlace de Vimeo
    const videoId = url.split('/').pop()
    return `https://player.vimeo.com/video/${videoId}`
  }
  // Puedes añadir más proveedores aquí si lo deseas
  return null
}

export const VideoUrlArticle = ({ videoUrl }: Props) => {
  if (!videoUrl?.url) {
    return null
  }

  // Obtener el embed de la URL del video
  const embedUrl = getEmbedCode(videoUrl.url)

  if (!embedUrl) {
    throw new Error('No se pudo generar un embed para la URL proporcionada.')
  }

  return (
    <section className='section-article'>
      <iframe
        src={embedUrl}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        sandbox='allow-scripts allow-same-origin allow-presentation'
        allowFullScreen
        className='iframe-article aspect-video w-[min(100%,768px)] mx-auto '
      ></iframe>
    </section>
  )
}
