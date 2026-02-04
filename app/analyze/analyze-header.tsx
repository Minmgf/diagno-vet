"use client"

import { Heart, ChevronRight, Check, PawPrint, User, Stethoscope, ImageIcon } from "lucide-react"
import { Step, steps } from "./analyze-types"

const stepIcons = {
  1: PawPrint,
  2: User,
  3: Stethoscope,
  4: ImageIcon,
}

interface AnalyzeHeaderProps {
  currentStep: Step
  onStepClick: (step: Step) => void
  getStepStatus: (step: number) => "complete" | "current" | "upcoming"
}

export function AnalyzeHeader({ currentStep, onStepClick, getStepStatus }: AnalyzeHeaderProps) {
  return (
    <header className="pt-4 sm:pt-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-background">
            <Heart className="h-4 w-4" />
          </div>
          <span className="font-semibold hidden sm:inline">Nuevo Analisis</span>
          <span className="font-semibold sm:hidden text-sm">Analisis</span>
        </div>

        {/* Step indicator - desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {steps.map((step, idx) => {
            const Icon = stepIcons[step.num as keyof typeof stepIcons]
            return (
              <div key={step.num} className="flex items-center">
                <button
                  type="button"
                  onClick={() => onStepClick(step.num as Step)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    getStepStatus(step.num) === "complete"
                      ? "bg-teal-100 text-teal-700 hover:bg-teal-200"
                      : getStepStatus(step.num) === "current"
                      ? "bg-teal-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {getStepStatus(step.num) === "complete" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Icon className="h-3 w-3" />
                  )}
                  {step.title}
                </button>
                {idx < steps.length - 1 && (
                  <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground" />
                )}
              </div>
            )
          })}
        </div>

        {/* Step indicator - mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex gap-1">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`h-1.5 w-6 rounded-full transition-colors ${
                  getStepStatus(step.num) === "complete"
                    ? "bg-teal-500"
                    : getStepStatus(step.num) === "current"
                    ? "bg-teal-500"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {currentStep}/4
          </span>
        </div>
      </div>
    </header>
  )
}
