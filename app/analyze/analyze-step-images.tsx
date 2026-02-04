"use client"

import { Upload, X, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ImageFile } from "./analyze-types"

interface AnalyzeStepImagesProps {
  images: ImageFile[]
  isDragging: boolean
  onImageUpload: (files: FileList | null) => void
  onRemoveImage: (id: string) => void
  onPreviewImage: (url: string) => void
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: () => void
  onDrop: (e: React.DragEvent) => void
}

export function AnalyzeStepImages({
  images,
  isDragging,
  onImageUpload,
  onRemoveImage,
  onPreviewImage,
  onDragOver,
  onDragLeave,
  onDrop,
}: AnalyzeStepImagesProps) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold">Imagenes del Estudio</h2>
        <p className="text-sm text-muted-foreground">Sube las imagenes para analizar</p>
      </div>

      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`rounded-lg border-2 border-dashed p-4 sm:p-6 transition-colors ${
          isDragging
            ? "border-teal-500 bg-teal-50"
            : "border-muted-foreground/25 hover:border-muted-foreground/50"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-3 rounded-full bg-muted p-3">
            <Upload className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-sm sm:text-base">Arrastra imagenes aqui</p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            o haz clic para seleccionar
          </p>
          <label htmlFor="file-upload-main" className="mt-3">
            <Button variant="outline" size="sm" className="cursor-pointer bg-transparent" asChild>
              <span>Seleccionar archivos</span>
            </Button>
            <input
              id="file-upload-main"
              type="file"
              multiple
              accept="image/*"
              className="sr-only"
              onChange={(e) => onImageUpload(e.target.files)}
            />
          </label>
          <p className="mt-3 text-[10px] sm:text-xs text-muted-foreground">
            PNG, JPG, DICOM - Max 50MB por archivo
          </p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg border bg-muted"
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-white hover:bg-white/20 hover:text-white"
                  onClick={() => onPreviewImage(image.url)}
                >
                  <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-white hover:bg-white/20 hover:text-white"
                  onClick={() => onRemoveImage(image.id)}
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
