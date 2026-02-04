"use client"

import { ProfileSidebar } from "./profile-sidebar"
import { ProfileContent } from "./profile-content"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Mi Perfil</h1>
        <p className="text-sm text-muted-foreground">
          Administra tu información personal y preferencias
        </p>
      </div>

      {/* Layout: Sidebar left, Content right on desktop. Stacked on mobile */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar - Full width on mobile, fixed width on desktop */}
        <ProfileSidebar />

        {/* Content - Fills remaining space */}
        <ProfileContent />
      </div>
    </div>
  )
}
