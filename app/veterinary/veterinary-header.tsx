"use client"

import { Building2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VeterinaryHeaderProps {
  hasChanges: boolean
  onSave: () => void
  onCancel: () => void
}

export function VeterinaryHeader({ hasChanges, onSave, onCancel }: VeterinaryHeaderProps) {
  return (
    <header className="sticky top-0 z-50 pt-5">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-semibold">Configuracion Veterinaria</h1>
            <p className="text-xs text-muted-foreground">Administra tu clinica</p>
          </div>
          <h1 className="text-sm font-semibold sm:hidden">Configuracion</h1>
        </div>
        <div className="flex items-center gap-2">
          {hasChanges && (
            <>
              <Button variant="ghost" size="sm" onClick={onCancel} className="hidden sm:flex">
                <X className="mr-1 h-4 w-4" />
                Cancelar
              </Button>
              <Button variant="ghost" size="icon" onClick={onCancel} className="sm:hidden">
                <X className="h-4 w-4" />
              </Button>
              <Button size="sm" onClick={onSave}>
                <Save className="mr-1 h-4 w-4 sm:mr-1.5" />
                <span className="hidden sm:inline">Guardar cambios</span>
                <span className="sm:hidden">Guardar</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
