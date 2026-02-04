"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormData } from "./analyze-types"

interface AnalyzeStepOwnerProps {
  formData: FormData
  onInputChange: (field: string, value: string | boolean) => void
}

export function AnalyzeStepOwner({ formData, onInputChange }: AnalyzeStepOwnerProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">Propietario y Derivante</h2>
        <p className="text-sm text-muted-foreground">Datos de contacto</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
          <h3 className="mb-3 text-sm font-medium">Tutor / Propietario</h3>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label className="text-xs">Nombre <span className="text-destructive">*</span></Label>
              <Input
                placeholder="Nombre completo"
                value={formData.ownerName}
                onChange={(e) => onInputChange("ownerName", e.target.value)}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Telefono</Label>
              <Input
                type="tel"
                placeholder="+54 9 11 1234-5678"
                value={formData.ownerPhone}
                onChange={(e) => onInputChange("ownerPhone", e.target.value)}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label className="text-xs">Email</Label>
              <Input
                type="email"
                placeholder="tutor@email.com"
                value={formData.ownerEmail}
                onChange={(e) => onInputChange("ownerEmail", e.target.value)}
                className="h-9"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
          <h3 className="mb-3 text-sm font-medium">Profesional Derivante (opcional)</h3>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label className="text-xs">Nombre</Label>
              <Input
                placeholder="Dr. Nombre"
                value={formData.referringVet}
                onChange={(e) => onInputChange("referringVet", e.target.value)}
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Email</Label>
              <Input
                type="email"
                placeholder="profesional@email.com"
                value={formData.referringEmail}
                onChange={(e) => onInputChange("referringEmail", e.target.value)}
                className="h-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
