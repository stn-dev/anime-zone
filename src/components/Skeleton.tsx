function Skeleton() {
  return (
    <div className="w-full h-full min-h-[400px] max-h-[620px] rounded-xl bg-blue flex flex-col gap-5 p-5 relative overflow-hidden brightness-65" >
      <div className="w-full h-[70%] bg-dark rounded-lg" >
      </div>
      <div className="w-full h-[30%] bg-dark rounded-lg flex flex-col p-5 items-start justify-around" >
        <span className="w-[70%] h-[20%] bg-blue " ></span>
        <span className="w-[40%] h-[20%] bg-blue " ></span>
      </div>
      <div className="animate-skelton absolute w-[100%] h-[200%] bg-neutre opacity-5 blur-2xl rotate-45 top-[50%] translate-y-[-50%] " ></div>
    </div>
  )
}

export default Skeleton