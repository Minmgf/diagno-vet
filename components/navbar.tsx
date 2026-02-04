"use client"

import { ClipboardList, Plus, ChevronDown, Settings, LogOut, ChevronRight, User, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="">
            {/* <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 sm:h-7 sm:w-7 text-teal-500"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              <circle cx="7" cy="8" r="1.5" fill="currentColor" />
              <circle cx="17" cy="8" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="8" cy="14" r="1.5" fill="currentColor" />
              <circle cx="16" cy="14" r="1.5" fill="currentColor" />
            </svg> */}
            <Image src={'https://app.diagnovet.ai/static/media/logo2.ed2d60d9beada6345b94.png'} width={30} height={30} alt=""></Image>
          </div>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mis Estudios */}
          <Link href="/analyze">
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-2 text-muted-foreground hover:text-foreground">
              <ClipboardList className="h-4 w-4" />
              Mis Estudios
            </Button>
            <Button variant="ghost" size="icon" className="sm:hidden text-muted-foreground">
              <ClipboardList className="h-5 w-5" />
            </Button>
          </Link>

          {/* Nuevo Reporte */}
          <Link href="/analyze">
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-2 text-muted-foreground hover:text-foreground">
              <Plus className="h-4 w-4" />
              Nuevo Reporte
            </Button>
            <Button variant="ghost" size="icon" className="sm:hidden text-muted-foreground">
              <Plus className="h-5 w-5" />
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 sm:px-3 h-auto py-1.5">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-teal-100 text-teal-700 text-xs">MN</AvatarFallback>
                </Avatar>
                <div className="hidden sm:flex flex-col items-start text-left">
                  <span className="text-sm font-medium leading-tight">Manuel Isaias Navarro Montealegre</span>
                  <span className="text-xs text-teal-600">MANUEL TEST</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-0 rounded-xl shadow-lg border">
              {/* User Header */}
              <div className="flex items-center gap-3 p-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-teal-500 text-white text-sm">MN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium leading-tight">Manuel Isaias Navarro Montealegre</span>
                  <span className="text-xs text-teal-600 font-medium">MANUEL TEST</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground -rotate-180" />
              </div>

              {/* Menu Items */}
              <div className="py-2 border-t">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="flex items-center justify-between px-4 py-2.5 text-sm text-sky-500 hover:bg-muted cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Settings className="h-4 w-4" />
                      <span>Configuracion</span>
                    </div>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="rounded-xl shadow-lg border p-2 min-w-35">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                      >
                        <User className="h-4 w-4" />
                        <span>Personal</span>
                      </Link>
                      <Link
                        href="/veterinary"
                        className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                      >
                        <Building2 className="h-4 w-4" />
                        <span>Veterinaria</span>
                      </Link>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <button
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Cerrar Sesion</span>
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
