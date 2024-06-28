import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import {CircleUserRound, Menu} from'lucide-react'
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MObileNAvLinks from "./MObileNAvLinks"



function MobileNav() {

    const  {isAuthenticated , user , loginWithRedirect} = useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                {isAuthenticated? (<span className="flex items-center font-bold gap-2">
                    <CircleUserRound className="text-orange-500 text-lg"/>
                    {user?.email }
                </span>) :  (<span>Welcome to Fooodie</span>)}
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col gap-4">
                {isAuthenticated? <MObileNAvLinks/>:  (<Button onClick={async ()=> await loginWithRedirect()} className="flex-1 font-bold bg-orange-500">Log In</Button>)}
                
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav