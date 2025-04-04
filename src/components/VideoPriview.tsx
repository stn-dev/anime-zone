import { VideoProps } from "../services/Type"


function VideoPriview(props: VideoProps) {
  const { src, className = '', title } = props
  return (
    <div className={`group max-w-screen w-[200px] xl:w-[300px] relative overflow-hidden border border-neutre  rounded-2xl hover:cursor-pointer ${className}`} >
      <iframe
        className="w-full h-auto"
        src={src}
        frameBorder="0"
        title={`${title}_trailer`}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPriview