"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Mail,
  Phone,
  Building2,
  FileSignature,
  Globe,
  Shield,
  Pencil,
  Upload,
  Trash2
} from "lucide-react"

export function ProfileContent() {
  const [isEditing, setIsEditing] = useState(false)

  const tabTriggerClass = "rounded-none border-b font-medium text-muted-foreground transition-colors data-[state=active]:border-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:border-b-2"

  return (
    <div className="flex-1 space-y-4">
      <Tabs defaultValue="personal" className="w-full">
        <div className="border-b w-full">
          <TabsList className="w-1/2 justify-start bg-transparent p-0 h-auto ">
            <TabsTrigger value="personal" className={tabTriggerClass}>
              Personal
            </TabsTrigger>
            <TabsTrigger value="profesional" className={tabTriggerClass}>
              Profesional
            </TabsTrigger>
            <TabsTrigger value="seguridad" className={tabTriggerClass}>
              Seguridad
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Personal Tab */}
        <TabsContent value="personal" className="mt-4 space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-6 pt-6 pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <User className="h-4 w-4 text-teal-600" />
                Informacion de Contacto
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Pencil className="mr-1.5 h-3.5 w-3.5" />
                {isEditing ? "Cancelar" : "Editar"}
              </Button>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-xs text-muted-foreground">
                    Nombre
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Manuel"
                    disabled={!isEditing}
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-xs text-muted-foreground">
                    Apellidos
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="Isaias Navarro Montealegre"
                    disabled={!isEditing}
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs text-muted-foreground">
                    <Mail className="mr-1 inline h-3 w-3" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="manuelinavarro@gmail.com"
                    disabled={!isEditing}
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs text-muted-foreground">
                    <Phone className="mr-1 inline h-3 w-3" />
                    Telefono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+52 55 1234 5678"
                    disabled={!isEditing}
                    className="h-9"
                  />
                </div>
              </div>
              {isEditing && (
                <div className="mt-4 flex justify-end">
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Guardar Cambios
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Preferences - Compact */}
          <Card>
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <Globe className="h-4 w-4 text-teal-600" />
                Preferencias
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Idioma</p>
                  <p className="text-xs text-muted-foreground">Idioma de la interfaz</p>
                </div>
                <Select defaultValue="es">
                  <SelectTrigger className="w-32 h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Espanol</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="pt">Portugues</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Notificaciones Email</p>
                  <p className="text-xs text-muted-foreground">Recibir alertas por correo</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Professional Tab */}
        <TabsContent value="profesional" className="mt-4 space-y-4">
          <Card>
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <Building2 className="h-4 w-4 text-teal-600" />
                Informacion Profesional
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Nombre para Mostrar</Label>
                  <Input defaultValue="Dr. Manuel Isaias Navarro M." className="h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Especialidad</Label>
                  <Input defaultValue="Radiologia" className="h-9" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Licencia Medica</Label>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="LIC-2024-78945" className="h-9" />
                    <Badge variant="outline" className="shrink-0 text-teal-600 border-teal-200">
                      Verificada
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Institucion</Label>
                  <Input defaultValue="Hospital Universitario Neiva" className="h-9" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Digital Signature */}
          <Card>
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <FileSignature className="h-4 w-4 text-teal-600" />
                Firma Digital
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed p-6 sm:flex-row sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="font-medium">firma.png</p>
                  <p className="text-xs text-muted-foreground">Subida el 15 de Enero, 2026</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-1.5 h-3.5 w-3.5" />
                    Cambiar
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="seguridad" className="mt-4 space-y-4">
          <Card>
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-medium">
                <Shield className="h-4 w-4 text-teal-600" />
                Seguridad de la Cuenta
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Contrasena</p>
                  <p className="text-xs text-muted-foreground">Ultima actualizacion hace 3 meses</p>
                </div>
                <Button variant="outline" size="sm">Cambiar</Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Autenticacion de 2 Factores</p>
                  <p className="text-xs text-muted-foreground">Protege tu cuenta con 2FA</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Sesiones Activas</p>
                  <p className="text-xs text-muted-foreground">2 dispositivos conectados</p>
                </div>
                <Button variant="outline" size="sm">Ver</Button>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/30">
            <CardHeader className="px-6 pt-6 pb-2">
              <CardTitle className="text-base font-medium text-destructive">Zona de Peligro</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">Eliminar Cuenta</p>
                  <p className="text-xs text-muted-foreground">Esta accion es irreversible</p>
                </div>
                <Button variant="destructive" size="sm">Eliminar mi cuenta</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
