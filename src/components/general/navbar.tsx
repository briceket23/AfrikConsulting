import NavbarClient from "@/components/general/navbar-client";
import { NavigationMenuDemo } from "./navbar_afrikconsult";
import Image from "next/image";


export default async function Navbar() {
    return (
        <div className="flex relative py-10 px-40">
            <Image src={"/images/logo.png"} width={100} height={50} alt={""} />
            
            <NavigationMenuDemo/>

        </div>
        
    )
}