import Skeleton from "./Skeleton"

function SkeletonGroup() {
  return (
    <div data-testid='skeleton-group' className="w-full min-h-screen pt-[50px] md:pt-[70px] xl:pt-[100px] grid items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-6 md:grid-rows-3 xl:grid-rows-2 gap-5 " >
      {
        Array.from({ length: 6 }, (_, id) => {
          return (
            <Skeleton key={id} />
          )
        })
      }
    </div>
  )
}

export default SkeletonGroup