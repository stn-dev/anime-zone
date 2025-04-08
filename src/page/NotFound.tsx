import { Link } from "react-router"
import Container from "../components/Container"

function NotFound() {
  return (
    <Container className="h-screen flex flex-col justify-end items-center gap-5 " >

      <h1 className=" flex gap-5 xl:gap-10 font-jaro text-[150px] xl:text-[200px] leading-[1]" >
        <span className="h-fit" >4</span>
        <span className="text-contrasted -translate-y-10" >0</span>
        <span className="h-fit" >4</span>
      </h1>

      <h4 className="text-2xl" > Page Not Found! </h4>

      <p className="font-semibold"> Go to  <Link to={'/'} className="text-contrasted" > Home </Link>  </p>

      <img
        src={'/404-image.png'}
        alt="error image"
        className="w-[50%] h-auto lg:w-[40%] xl:w-[50%] min-w-[300px] max-w-[500px] "
      />
    </Container>
  )
}

export default NotFound