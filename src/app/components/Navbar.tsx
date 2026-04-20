import Image from "next/image";


export default function Navbar() {


    return (
        <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
            <Image 
                src='/images/nav-logo.svg' 
                alt="nav log" 
                className="md:w-24 w-20" 
                width={100} 
                height={100} 
                priority
            />
        </nav>
    )
}