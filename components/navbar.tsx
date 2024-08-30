"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation"; // Correct hook import for App Router

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="shadow-md bg-white"
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit justify-start">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Sentosaku.id</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-12 justify-center mr-12">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href; // Check if the link is active

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "text-[20px] transition duration-300 ease-in-out transform hover:scale-105",
                    "hover:bg-[#A1B986] hover:text-white px-5 py-3 rounded-lg",
                    "Nunito Sans hover:Nunito Sans",
                    isActive &&
                      "text-primary font-extrabold bg-[#A1B986] text-white", // Apply active styles
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={clsx(
                  index === 2 ? "text-primary" : "text-foreground",
                  index === siteConfig.navMenuItems.length - 1 && "text-danger",
                )}
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
