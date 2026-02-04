"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VeterinaryHeader } from "./veterinary-header"
import { VeterinaryGeneralTab } from "./veterinary-general-tab"
import { VeterinaryBrandingTab } from "./veterinary-branding-tab"

const initialVetData = {
    legalName: "Clinica Veterinaria San Francisco",
    registrationDate: "15/03/2024",
    address: "Av. Principal 1234, Col. Centro",
    phone: "+52 55 1234 5678",
    logo: null as string | null,
    brandColors: {
        primary: "#0D9488",
        secondary: "#1E293B",
        accent: "#F59E0B",
    },
}

export default function VeterinarySettingsPage() {
    const [formData, setFormData] = useState(initialVetData)
    const [hasChanges, setHasChanges] = useState(false)

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        setHasChanges(true)
    }

    const handleColorChange = (colorType: "primary" | "secondary" | "accent", value: string) => {
        setFormData((prev) => ({
            ...prev,
            brandColors: { ...prev.brandColors, [colorType]: value },
        }))
        setHasChanges(true)
    }

    const handleSave = () => {
        // Simulate save
        setHasChanges(false)
    }

    const handleCancel = () => {
        setFormData(initialVetData)
        setHasChanges(false)
    }

    return (
        <div className="min-h-screen bg-muted/30">
            <VeterinaryHeader
                hasChanges={hasChanges}
                onSave={handleSave}
                onCancel={handleCancel}
            />

            <main className="mx-auto max-w-6xl px-4 py-4 sm:py-6">
                <Tabs defaultValue="general" className="space-y-4 sm:space-y-6">
                    <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:max-w-md">
                        <TabsTrigger value="general" className="text-xs sm:text-sm">
                            General
                        </TabsTrigger>
                        <TabsTrigger value="branding" className="text-xs sm:text-sm">
                            Branding
                        </TabsTrigger>

                    </TabsList>

                    <TabsContent value="general" className="space-y-0">
                        <VeterinaryGeneralTab
                            formData={formData}
                            onInputChange={handleInputChange}
                        />
                    </TabsContent>

                    <TabsContent value="branding" className="space-y-4">
                        <VeterinaryBrandingTab
                            logo={formData.logo}
                            brandColors={formData.brandColors}
                            onColorChange={handleColorChange}
                        />
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    )
}
