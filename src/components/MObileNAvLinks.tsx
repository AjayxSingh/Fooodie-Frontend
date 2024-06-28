import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

function MObileNAvLinks() {
    const {logout} = useAuth0();
  return (
   <>
        <Link to="/user-profile" className="flex bg-white item-center font-bold hover:text-orange-500">
            User Poofile
        </Link>
        <Button onClick={()=> logout()} className="flex px-3 font-bold items-center hover:bg-gray-500">
            Log Out
        </Button>
   </>
  )
}

export default MObileNAvLinks