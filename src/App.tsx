import { Outlet } from "react-router"
import Header from "./components/Header"

function App() {

  return (
    <div className="bg-dark">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
