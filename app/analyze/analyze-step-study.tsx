"use client"

import { Check } from "lucide-react"
import { Label } from "@/components/ui/label"
import { FormData, studyTypes } from "./analyze-types"

interface AnalyzeStepStudyProps {
  formData: FormData
  onInputChange: (field: string, value: string | boolean) => void
}

export function AnalyzeStepStudy({ formData, onInputChange }: AnalyzeStepStudyProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">Tipo de Estudio</h2>
        <p className="text-sm text-muted-foreground">Selecciona el tipo de analisis</p>
      </div>

      <div className="grid gap-2 sm:gap-3">
        {studyTypes.map((study) => (
          <button
            key={study.value}
            type="button"
            onClick={() => onInputChange("studyType", study.value)}
            className={`flex items-center justify-between rounded-lg border p-3 sm:p-4 text-left transition-all hover:border-teal-300 hover:bg-teal-50 ${
              formData.studyType === study.value
                ? "border-teal-500 bg-teal-50 ring-1 ring-teal-500"
                : "border-border"
            }`}
          >
            <div>
              <p className="font-medium text-sm sm:text-base">{study.label}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{study.description}</p>
            </div>
            {formData.studyType === study.value && (
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-teal-500 text-white shrink-0 ml-2">
                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        <Label className="text-xs">Notas adicionales</Label>
        <textarea
          placeholder="Observaciones clinicas, sintomas, historia relevante..."
          value={formData.notes}
          onChange={(e) => onInputChange("notes", e.target.value)}
          className="h-20 sm:h-24 w-full resize-none rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
    </div>
  )
}
