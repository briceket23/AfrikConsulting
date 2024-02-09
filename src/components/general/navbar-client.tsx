"use client"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function NavbarClient({}: {}) {

    return (
        <div className='px-10 bg-black'>
            <Menubar>

                <MenubarMenu >
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarContent className='grid gap-3 p-2 md:w-[200px] md:grid-cols-1'>
                        <MenubarItem>
                            Who We Are <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Our Core Values</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Career Opportunities</MenubarItem>

                    </MenubarContent>
                
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Services</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Risk Assessment <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Competitive Intelligence</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Market Research</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Training</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                                <MenubarMenu>
                    <MenubarTrigger>Payements</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Swift <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Swift Components</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Swift Case Management</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Swift Payements Pre-validation</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

            </Menubar>

        </div>
        
    )
}