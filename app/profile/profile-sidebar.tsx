"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Award, Camera, CheckCircle2 } from "lucide-react"

export function ProfileSidebar() {
  return (
    <aside className="w-full shrink-0 lg:w-72">
      <Card className="overflow-hidden">
        {/* Cover & Avatar */}
        <div className="relative">
          <div className="h-24 sm:h-20 bg-linear-to-r from-teal-600 to-teal-500" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-background">
                <AvatarFallback className="text-xl">MN</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="secondary"
                className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full shadow-sm"
              >
                <Camera className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-4 pb-4 pt-12">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="flex items-center gap-1.5 font-semibold">
              Manuel Navarro
              <CheckCircle2 className="h-4 w-4 text-teal-600" />
            </h2>
            <p className="text-sm text-muted-foreground">Dr. Manuel Isaias Navarro M.</p>
          </div>

          <div className="mt-4 flex items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              Feb 2026
            </span>
            <Badge variant="secondary" className="font-normal">Premium</Badge>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-2xl font-semibold text-teal-600">147</p>
              <p className="text-xs text-muted-foreground">Reportes</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-2xl font-semibold text-teal-600">23</p>
              <p className="text-xs text-muted-foreground">Estudios</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
              <FileText className="mr-2 h-4 w-4" />
              Ver Mis Reportes
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
              <Award className="mr-2 h-4 w-4" />
              Certificaciones
            </Button>
          </div>
        </div>
      </Card>
    </aside>
  )
}
