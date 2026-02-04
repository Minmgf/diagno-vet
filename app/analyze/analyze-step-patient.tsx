"use client"

import { Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormData, speciesOptions, breedsBySpecies, genderOptions } from "./analyze-types"

interface AnalyzeStepPatientProps {
  formData: FormData
  onInputChange: (field: string, value: string | boolean) => void
}

export function AnalyzeStepPatient({ formData, onInputChange }: AnalyzeStepPatientProps) {
  const availableBreeds = formData.species ? breedsBySpecies[formData.species] || [] : []

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">Datos del Paciente</h2>
        <p className="text-sm text-muted-foreground">Informacion basica del animal</p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="patientName" className="text-xs">
              Nombre <span className="text-destructive">*</span>
            </Label>
            <Input
              id="patientName"
              placeholder="Ej: Max"
              value={formData.patientName}
              onChange={(e) => onInputChange("patientName", e.target.value)}
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="date" className="text-xs">Fecha</Label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => onInputChange("date", e.target.value)}
                className="h-9 pl-8"
              />
              <Calendar className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs">Especie <span className="text-destructive">*</span></Label>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {speciesOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onInputChange("species", opt.value)}
                className={`flex flex-col items-center gap-1 rounded-lg border p-2 sm:p-2.5 text-xs transition-all hover:border-teal-300 hover:bg-teal-50 ${
                  formData.species === opt.value
                    ? "border-teal-500 bg-teal-50 ring-1 ring-teal-500"
                    : "border-border"
                }`}
              >
                <span className="text-base sm:text-lg">{opt.icon}</span>
                <span className="text-[10px] sm:text-xs">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className="text-xs">Raza</Label>
            <Select
              value={formData.breed}
              onValueChange={(v) => onInputChange("breed", v)}
              disabled={!formData.species}
            >
              <SelectTrigger className="h-9">
                <SelectValue placeholder={formData.species ? "Seleccionar" : "Selecciona especie"} />
              </SelectTrigger>
              <SelectContent>
                {availableBreeds.map((breed) => (
                  <SelectItem key={breed} value={breed.toLowerCase()}>
                    {breed}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Genero <span className="text-destructive">*</span></Label>
            <Select
              value={formData.gender}
              onValueChange={(v) => onInputChange("gender", v)}
            >
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                {genderOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label className="text-xs">Edad</Label>
            <div className="flex gap-1">
              <Input
                type="number"
                placeholder="0"
                value={formData.age}
                onChange={(e) => onInputChange("age", e.target.value)}
                className="h-9"
              />
              <Select
                value={formData.ageUnit}
                onValueChange={(v) => onInputChange("ageUnit", v)}
              >
                <SelectTrigger className="h-9 w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">Meses</SelectItem>
                  <SelectItem value="years">Anos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Peso</Label>
            <div className="flex gap-1">
              <Input
                type="number"
                step="0.1"
                placeholder="0.0"
                value={formData.weight}
                onChange={(e) => onInputChange("weight", e.target.value)}
                className="h-9"
              />
              <Select
                value={formData.weightUnit}
                onValueChange={(v) => onInputChange("weightUnit", v)}
              >
                <SelectTrigger className="h-9 w-14 sm:w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lb">lb</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-end pb-2 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <Checkbox
                id="neutered"
                checked={formData.neutered}
                onCheckedChange={(checked) => onInputChange("neutered", !!checked)}
              />
              <Label htmlFor="neutered" className="text-xs font-normal">
                Castrado
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
