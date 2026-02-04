"use client"

import { Check, PawPrint, User, Stethoscope, ImageIcon } from "lucide-react"
import Image from "next/image"
import { Step, FormData, ImageFile, speciesOptions, studyTypes } from "./analyze-types"

interface AnalyzeSummaryProps {
  currentStep: Step
  formData: FormData
  images: ImageFile[]
  isStep1Valid: boolean
  isStep2Valid: boolean
  isStep3Valid: boolean
  isStep4Valid: boolean
}

export function AnalyzeSummary({
  currentStep,
  formData,
  images,
  isStep1Valid,
  isStep2Valid,
  isStep3Valid,
  isStep4Valid,
}: AnalyzeSummaryProps) {
  return (
    <div className="lg:sticky lg:top-[72px] lg:self-start">
      <div className="rounded-xl border bg-background p-4 sm:p-5">
        <h3 className="mb-4 font-semibold">Resumen del Estudio</h3>

        <div className="space-y-3 sm:space-y-4">
          {/* Patient */}
          <div className={`rounded-lg border p-2.5 sm:p-3 transition-colors ${currentStep === 1 ? "border-teal-500 bg-teal-50" : ""}`}>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <PawPrint className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium">Paciente</span>
              {isStep1Valid && <Check className="ml-auto h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-600" />}
            </div>
            {formData.patientName ? (
              <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                <p className="font-medium">{formData.patientName}</p>
                <p className="text-muted-foreground">
                  {speciesOptions.find((s) => s.value === formData.species)?.label || "—"}
                  {formData.breed && ` / ${formData.breed}`}
                </p>
                <p className="text-muted-foreground">
                  {formData.age && `${formData.age} ${formData.ageUnit === "years" ? "anos" : "meses"}`}
                  {formData.age && formData.weight && " · "}
                  {formData.weight && `${formData.weight} ${formData.weightUnit}`}
                </p>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-muted-foreground">Sin completar</p>
            )}
          </div>

          {/* Owner */}
          <div className={`rounded-lg border p-2.5 sm:p-3 transition-colors ${currentStep === 2 ? "border-teal-500 bg-teal-50" : ""}`}>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <User className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium">Propietario</span>
              {isStep2Valid && <Check className="ml-auto h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-600" />}
            </div>
            {formData.ownerName ? (
              <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                <p className="font-medium">{formData.ownerName}</p>
                {formData.ownerEmail && <p className="text-muted-foreground truncate">{formData.ownerEmail}</p>}
                {formData.referringVet && (
                  <p className="text-muted-foreground truncate">Derivado por: {formData.referringVet}</p>
                )}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-muted-foreground">Sin completar</p>
            )}
          </div>

          {/* Study */}
          <div className={`rounded-lg border p-2.5 sm:p-3 transition-colors ${currentStep === 3 ? "border-teal-500 bg-teal-50" : ""}`}>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Stethoscope className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium">Estudio</span>
              {isStep3Valid && <Check className="ml-auto h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-600" />}
            </div>
            {formData.studyType ? (
              <div className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
                <p className="font-medium">
                  {studyTypes.find((s) => s.value === formData.studyType)?.label}
                </p>
                {formData.notes && (
                  <p className="line-clamp-2 text-muted-foreground">{formData.notes}</p>
                )}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-muted-foreground">Sin completar</p>
            )}
          </div>

          {/* Images */}
          <div className={`rounded-lg border p-2.5 sm:p-3 transition-colors ${currentStep === 4 ? "border-teal-500 bg-teal-50" : ""}`}>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <ImageIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium">Imagenes</span>
              {isStep4Valid && <Check className="ml-auto h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-600" />}
            </div>
            {images.length > 0 ? (
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-muted-foreground">{images.length} imagen(es) cargadas</p>
                <div className="flex gap-1">
                  {images.slice(0, 3).map((img) => (
                    <div key={img.id} className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded border">
                      <Image src={img.url || "/placeholder.svg"} alt="" fill className="object-cover" />
                    </div>
                  ))}
                  {images.length > 3 && (
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded border bg-muted text-[10px] sm:text-xs text-muted-foreground">
                      +{images.length - 3}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-muted-foreground">Sin imagenes</p>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 border-t pt-4">
          <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-medium">
              {[isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid].filter(Boolean).length} / 4
            </span>
          </div>
          <div className="flex gap-1">
            {[isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid].map((valid, i) => (
              <div
                key={i}
                className={`h-1 sm:h-1.5 flex-1 rounded-full transition-colors ${
                  valid ? "bg-teal-500" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
