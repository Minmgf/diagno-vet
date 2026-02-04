"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

import { Step, FormData, ImageFile } from "./analyze-types"
import { AnalyzeHeader } from "./analyze-header"
import { AnalyzeStepPatient } from "./analyze-step-patient"
import { AnalyzeStepOwner } from "./analyze-step-owner"
import { AnalyzeStepStudy } from "./analyze-step-study"
import { AnalyzeStepImages } from "./analyze-step-images"
import { AnalyzeSummary } from "./analyze-summary"

export default function AnalyzePage() {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState<FormData>({
    date: new Date().toISOString().split("T")[0],
    patientName: "",
    age: "",
    ageUnit: "years",
    species: "",
    breed: "",
    weight: "",
    weightUnit: "kg",
    gender: "",
    neutered: false,
    referringVet: "",
    referringEmail: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    studyType: "",
    notes: "",
  })

  const [images, setImages] = useState<ImageFile[]>([])
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (field === "species") {
      setFormData((prev) => ({ ...prev, breed: "" }))
    }
  }

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return
    const newImages = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substring(2, 11),
      name: file.name,
      url: URL.createObjectURL(file),
    }))
    setImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleImageUpload(e.dataTransfer.files)
  }

  // Step validation
  const isStep1Valid = !!(formData.patientName && formData.species && formData.gender)
  const isStep2Valid = !!formData.ownerName
  const isStep3Valid = !!formData.studyType
  const isStep4Valid = images.length > 0

  const canProceed = () => {
    switch (currentStep) {
      case 1: return isStep1Valid
      case 2: return isStep2Valid
      case 3: return isStep3Valid
      case 4: return isStep4Valid
      default: return false
    }
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => (prev + 1) as Step)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as Step)
  }

  const goToStep = (step: Step) => {
    if (step < currentStep) setCurrentStep(step)
    else if (step === 2 && isStep1Valid) setCurrentStep(step)
    else if (step === 3 && isStep1Valid && isStep2Valid) setCurrentStep(step)
    else if (step === 4 && isStep1Valid && isStep2Valid && isStep3Valid) setCurrentStep(step)
  }

  const getStepStatus = (step: number): "complete" | "current" | "upcoming" => {
    if (step < currentStep) return "complete"
    if (step === currentStep) return "current"
    return "upcoming"
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AnalyzeHeader
        currentStep={currentStep}
        onStepClick={goToStep}
        getStepStatus={getStepStatus}
      />

      <main className="mx-auto max-w-6xl p-3 sm:p-4">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div className="rounded-xl border bg-background p-4 sm:p-5">
            {currentStep === 1 && (
              <AnalyzeStepPatient formData={formData} onInputChange={handleInputChange} />
            )}

            {currentStep === 2 && (
              <AnalyzeStepOwner formData={formData} onInputChange={handleInputChange} />
            )}

            {currentStep === 3 && (
              <AnalyzeStepStudy formData={formData} onInputChange={handleInputChange} />
            )}

            {currentStep === 4 && (
              <AnalyzeStepImages
                images={images}
                isDragging={isDragging}
                onImageUpload={handleImageUpload}
                onRemoveImage={removeImage}
                onPreviewImage={setPreviewImage}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              />
            )}

            {/* Navigation buttons */}
            <div className="mt-5 sm:mt-6 flex items-center justify-between border-t pt-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="gap-1 sm:gap-1.5 bg-transparent text-xs sm:text-sm"
                size="sm"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Anterior</span>
                <span className="sm:hidden">Atras</span>
              </Button>
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="gap-1 sm:gap-1.5 bg-teal-600 hover:bg-teal-700 text-xs sm:text-sm"
                  size="sm"
                >
                  Siguiente
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              ) : (
                <Button
                  disabled={!canProceed()}
                  className="gap-1 sm:gap-1.5 bg-teal-600 hover:bg-teal-700 text-xs sm:text-sm"
                  size="sm"
                >
                  <span className="hidden sm:inline">Enviar Analisis</span>
                  <span className="sm:hidden">Enviar</span>
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Summary */}
          <AnalyzeSummary
            currentStep={currentStep}
            formData={formData}
            images={images}
            isStep1Valid={isStep1Valid}
            isStep2Valid={isStep2Valid}
            isStep3Valid={isStep3Valid}
            isStep4Valid={isStep4Valid}
          />
        </div>
      </main>

      {/* Image Preview Dialog */}
      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-3xl p-0">
          {previewImage && (
            <div className="relative aspect-video w-full">
              <Image
                src={previewImage || "/placeholder.svg"}
                alt="Preview"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
