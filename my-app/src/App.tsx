// import Collections from "./components/ReactQuery/Collections"
// import ReactHookForm from "./components/HookForm/ReactHookForm"
// import IpAdress from "./components/IPAdress/IpAdress"
import { Outlet } from "react-router"
// import Users from "./components/ReactQuery/Users/Users"

function App() {
  return (
    <>
      {/* <Collections /> */}
      {/* <ReactHookForm /> */}
      {/* <Users /> */}
      <Outlet />
    </>
  )
}

export default App
