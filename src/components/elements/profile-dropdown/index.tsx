import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"  
import { meUser, useControllerContext } from "@/context"
import { UserIcon } from "@heroicons/react/16/solid"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation"
import { FC, useEffect } from 'react'

interface Props {
    onLogout: any
    children: React.ReactNode
}

const ProfileDropdown: FC<Props> = ({ onLogout, children }) => {
    const router = useRouter()
    const [controller, dispatch] = useControllerContext()
    const { me, meError } = controller || {}

    useEffect(() => {
        meUser(dispatch)
    },[dispatch])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{me?.username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center" onClick={() => router.push('/profile') }>
                    <UserIcon className="w-4" />
                    <span className='mx-1'>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout} className='flex items-center'>
                    <ArrowLeftEndOnRectangleIcon className='w-4' />
                    <span className='mx-1'>Log out</span>
                </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
    )
}

export default ProfileDropdown