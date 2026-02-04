"use client"

import { useState } from "react"
import { ImageIcon, Palette, Pipette, Upload, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

const presetColors = [
  "#0D9488", "#14B8A6", "#06B6D4", "#0EA5E9", "#3B82F6", "#6366F1",
  "#8B5CF6", "#A855F7", "#D946EF", "#EC4899", "#F43F5E", "#EF4444",
  "#F97316", "#F59E0B", "#EAB308", "#84CC16", "#22C55E", "#10B981",
  "#1E293B", "#334155", "#475569", "#64748B", "#94A3B8", "#CBD5E1",
]

interface VeterinaryBrandingTabProps {
  logo: string | null
  brandColors: {
    primary: string
    secondary: string
    accent: string
  }
  onColorChange: (colorType: "primary" | "secondary" | "accent", value: string) => void
}

export function VeterinaryBrandingTab({ logo, brandColors, onColorChange }: VeterinaryBrandingTabProps) {
  const [editingColor, setEditingColor] = useState<"primary" | "secondary" | "accent" | null>(null)
  const [tempColor, setTempColor] = useState("")

  const openColorPicker = (colorType: "primary" | "secondary" | "accent") => {
    setEditingColor(colorType)
    setTempColor(brandColors[colorType])
  }

  const saveColor = () => {
    if (editingColor && tempColor) {
      onColorChange(editingColor, tempColor)
    }
    setEditingColor(null)
  }

  return (
    <div className="space-y-4">
      {/* Logo Section */}
      <div className="rounded-lg border bg-background p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
            <div>
              <span className="text-sm font-medium">Logo de la Clinica</span>
              <p className="text-xs text-muted-foreground">PNG, JPG o SVG. Max 2MB</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:justify-end">
            {logo ? (
              <div className="relative h-16 w-16 overflow-hidden rounded-lg border">
                <img src={logo} alt="Logo" className="h-full w-full object-contain" />
              </div>
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed bg-muted/50">
                <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
              </div>
            )}
            <Button variant="outline" size="sm">
              <Upload className="mr-1.5 h-3.5 w-3.5" />
              Subir
            </Button>
          </div>
        </div>
      </div>

      {/* Color Palette Section */}
      <div className="rounded-lg border bg-background p-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-muted-foreground" />
            <div>
              <span className="text-sm font-medium">Paleta de Colores</span>
              <p className="text-xs text-muted-foreground">
                Personaliza los colores de tu marca
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Pipette className="mr-1.5 h-3.5 w-3.5" />
            Extraer de logo
          </Button>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          {(["primary", "secondary", "accent"] as const).map((colorType) => (
            <Dialog key={colorType}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  onClick={() => openColorPicker(colorType)}
                  className="group flex items-center gap-3 rounded-lg border p-3 text-left transition-colors hover:bg-muted/50"
                >
                  <div
                    className="h-10 w-10 shrink-0 rounded-md border shadow-sm transition-transform group-hover:scale-105"
                    style={{ backgroundColor: brandColors[colorType] }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium capitalize">
                      {colorType === "primary"
                        ? "Primario"
                        : colorType === "secondary"
                          ? "Secundario"
                          : "Acento"}
                    </p>
                    <p className="truncate font-mono text-xs text-muted-foreground">
                      {brandColors[colorType].toUpperCase()}
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <div
                      className="h-5 w-5 rounded border"
                      style={{ backgroundColor: tempColor || brandColors[colorType] }}
                    />
                    Seleccionar Color{" "}
                    {colorType === "primary"
                      ? "Primario"
                      : colorType === "secondary"
                        ? "Secundario"
                        : "de Acento"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  {/* Color Preview */}
                  <div
                    className="h-20 sm:h-24 w-full rounded-lg border shadow-inner"
                    style={{ backgroundColor: tempColor || brandColors[colorType] }}
                  />

                  {/* Hex Input */}
                  <div className="flex gap-2">
                    <Input
                      value={tempColor || brandColors[colorType]}
                      onChange={(e) => setTempColor(e.target.value)}
                      placeholder="#000000"
                      className="h-9 font-mono"
                    />
                    <input
                      type="color"
                      value={tempColor || brandColors[colorType]}
                      onChange={(e) => setTempColor(e.target.value)}
                      className="h-9 w-12 cursor-pointer rounded border p-1"
                    />
                  </div>

                  {/* Preset Colors */}
                  <div>
                    <p className="mb-2 text-xs font-medium text-muted-foreground">
                      Colores predefinidos
                    </p>
                    <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                      {presetColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setTempColor(color)}
                          className="group relative h-7 sm:h-8 w-full rounded-md border shadow-sm transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        >
                          {(tempColor || brandColors[colorType]) === color && (
                            <Check className="absolute inset-0 m-auto h-3 w-3 sm:h-4 sm:w-4 text-white drop-shadow-md" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter className="flex-col gap-2 sm:flex-row">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full sm:w-auto">Cancelar</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button onClick={saveColor} className="w-full sm:w-auto">Aplicar Color</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Preview */}
        <div className="mt-4 rounded-lg border p-3">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Vista previa</p>
          <div className="flex items-center gap-2">
            <div
              className="h-8 flex-1 rounded"
              style={{ backgroundColor: brandColors.primary }}
            />
            <div
              className="h-8 w-16 sm:w-24 rounded"
              style={{ backgroundColor: brandColors.secondary }}
            />
            <div
              className="h-8 w-12 sm:w-16 rounded"
              style={{ backgroundColor: brandColors.accent }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
