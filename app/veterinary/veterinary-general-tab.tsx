"use client"

import { Building2, Phone, MapPin, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface VeterinaryGeneralTabProps {
  formData: {
    legalName: string
    registrationDate: string
    address: string
    phone: string
  }
  onInputChange: (field: string, value: string) => void
}

export function VeterinaryGeneralTab({ formData, onInputChange }: VeterinaryGeneralTabProps) {
  return (
    <div className="rounded-lg border bg-background">
      {/* Clinic Info Section */}
      <div className="border-b p-4">
        <div className="mb-4 flex items-center gap-2">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Informacion de la Clinica</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="legalName" className="text-xs text-muted-foreground">
              Nombre Legal
            </Label>
            <Input
              id="legalName"
              value={formData.legalName}
              onChange={(e) => onInputChange("legalName", e.target.value)}
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="regDate" className="text-xs text-muted-foreground">
              Fecha de Registro
            </Label>
            <div className="flex h-9 items-center gap-2 rounded-md border bg-muted/50 px-3">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm">{formData.registrationDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-4">
        <div className="mb-4 flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Contacto</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="address" className="text-xs text-muted-foreground">
              Direccion
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => onInputChange("address", e.target.value)}
                className="h-9 pl-9"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs text-muted-foreground">
              Telefono
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => onInputChange("phone", e.target.value)}
                className="h-9 pl-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
