import { VideoProps } from "../services/Type"


function VideoPriview(props: VideoProps) {
  const { src, className = '', title } = props
  return (
    <div className={`group max-w-screen w-[200px] xl:w-[300px] relative overflow-hidden border border-neutre  rounded-2xl hover:cursor-pointer ${className}`} >
      {/* <img
        src={src}
        className={`w-full h-auto scale-110 group-hover:scale-100 duration-500 group-hover:brightness-50 `}
        alt={`${title}_video preview`}
      />
      <Play className='w-[20%] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-110 duration-500' /> */}
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