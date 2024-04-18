import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";

import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="flex h-16 items-center border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <HelpCircleIcon className="h-6 w-6" />
          <span>Support Desk</span>
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Image
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Jared Palmer</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href="/login">
              <DropdownMenuItem className="cursor-pointer">
                Logout
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;

function HelpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}
