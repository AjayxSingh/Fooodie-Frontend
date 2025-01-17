import { useAuth0 } from '@auth0/auth0-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DropdownMenuItem } from './ui/dropdown-menu'
import {Separator} from './ui/separator'
import { Button } from './ui/button'

type Props = {}

function UsernameMenu({}: Props) {
    const {user , logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-orange-500 gap-2'>
            <CircleUserRound className='text-orange-500'/>
            {user?.email }
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-gray-200 bg-opacity-50 mt-2 shadow-sm py-2 px-2 rounded-md text-2xl'>
            <DropdownMenuItem>
                <Link to='/user-profile' className='font-bold hover:text-orange-500'>
                    User Profile
                </Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button className='bg-orange-500 font-bold flex flex-1'
                    onClick={()=> logout()}>
                        Log Out
                </Button>
            </DropdownMenuItem>
            
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu