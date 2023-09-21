import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,} from "@nextui-org/react";

export function NavBar() {
  return (
    <Navbar isBordered className="bg-blue-600 w-full rounded-b-2xl">
      <NavbarContent className="flex gap-4 justify-between items-center w-full text-white" justify="center">
      <NavbarItem className=" w-1/3 text-center">
          <Link className="text-gray-300 text-[1.2rem]"  href="#">
            Noviembre
          </Link>
        </NavbarItem>
        <NavbarItem className=" w-1/3 text-center font-bold ">
          <Link className="text-white text-[1.5rem]"  href="#">
            Diciembre
          </Link>
        </NavbarItem>
        <NavbarItem className=" w-1/3 text-center">
          <Link className="text-gray-300 text-[1.2rem]" href="#">
            Enero
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>   
  )
}