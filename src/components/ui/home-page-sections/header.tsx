import Link from "next/link"
import { ArrowDown, ArrowDown01, ArrowDown01Icon, ArrowDownIcon, ChevronDown, CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const HeaderSection = () => {
  return (
    <header
      className="sticky top-0 flex h-20 items-center gap-4 bg-background/95 px-4 lg:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50"
    >
      <nav className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:gap-5 lg:text-sm xl:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold lg:text-base"
        >
          <Image
            src="/skillspark-logo-transparent.png"
            alt="Skillspark Logo"
            className="max-w-12 min-w-12"
            width={300}
            height={300}
          />
          <span className="sr-only">Skillspark</span>
        </Link>
        <Link
          href="#"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          Courses
        </Link>
        <Link
          href="#"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          Blogs
        </Link>
        <Link
          href="#"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          Pricing
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Link
            href="#"
            className="flex gap-1 text-foreground/60 hover:text-foreground"
          >
              User
              <ChevronDown className="mt-[1px] h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 lg:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src="/skillspark-logo-transparent.png"
                alt="Skillspark Logo"
                className="max-w-12 min-w-12"
                width={300}
                height={300}
              />
              <span className="sr-only">Skillspark</span>
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground"
            >
              Blogs
            </Link>
            <Link
              href="#"
              className="text-foreground/60 hover:text-foreground"
            >
              Pricing
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Link
                href="#"
                className="flex gap-1 text-foreground/80 hover:text-foreground"
              >
                User
                <ChevronDown className="mt-1.5 h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <form className="flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground/60" />
                <Input
                  type="search"
                  placeholder="Search Courses..."
                  className="pl-8 sm:w-[300px] lg:w-[300px]"
                />
              </div>
            </form>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 lg:ml-auto lg:gap-4">
        <form className="hidden lg:block ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground/60" />
            <Input
              type="search"
              placeholder="Search Courses..."
              className="pl-8 sm:w-[300px] lg:w-[300px]"
            />
          </div>
        </form>
        <div className="ml-auto flex gap-4">
          <Button variant="outline">
            Sign Up
          </Button>
          <Button variant="outline-primary">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
