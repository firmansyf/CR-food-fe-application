import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"  
import { UserIcon } from "@heroicons/react/16/solid"
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation"
import { FC } from 'react'

interface Props {
    // show: boolean,
    // setShow: any,
    onLogout: any
    children: React.ReactNode
}

const ProfileDropdown: FC<Props> = ({ onLogout, children }) => {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
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