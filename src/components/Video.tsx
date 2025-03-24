import { VideoProps } from "../services/Type"



function Video(props: VideoProps) {
  const { src, title, className = '' } = props
  return (
    <iframe
      className={`w-full h-auto ${className} `}
      src={src}
      frameBorder="0"
      title={`${title}_trailler`}
      allowFullScreen
    ></iframe>
  )
}

export default Video