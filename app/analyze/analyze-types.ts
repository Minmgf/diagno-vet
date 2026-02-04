export type Step = 1 | 2 | 3 | 4

export interface FormData {
  date: string
  patientName: string
  age: string
  ageUnit: string
  species: string
  breed: string
  weight: string
  weightUnit: string
  gender: string
  neutered: boolean
  referringVet: string
  referringEmail: string
  ownerName: string
  ownerEmail: string
  ownerPhone: string
  studyType: string
  notes: string
}

export interface ImageFile {
  id: string
  name: string
  url: string
}

export const speciesOptions = [
  { value: "canino", label: "Canino", icon: "🐕" },
  { value: "felino", label: "Felino", icon: "🐈" },
  { value: "equino", label: "Equino", icon: "🐴" },
  { value: "bovino", label: "Bovino", icon: "🐄" },
  { value: "ave", label: "Ave", icon: "🦜" },
  { value: "exotico", label: "Exotico", icon: "🦎" },
]

export const breedsBySpecies: Record<string, string[]> = {
  canino: ["Labrador", "Golden Retriever", "Pastor Aleman", "Bulldog", "Chihuahua", "Mestizo"],
  felino: ["Persa", "Siames", "Maine Coon", "Bengala", "Mestizo"],
  equino: ["Pura Sangre", "Cuarto de Milla", "Arabe", "Criollo"],
  bovino: ["Holstein", "Angus", "Hereford", "Brahman"],
  ave: ["Canario", "Periquito", "Loro", "Cacatua"],
  exotico: ["Hamster", "Conejo", "Huron", "Reptil"],
}

export const studyTypes = [
  { value: "radiografia", label: "Radiografia", description: "Imagenes por rayos X" },
  { value: "ecografia", label: "Ecografia", description: "Ultrasonido diagnostico" },
  { value: "tomografia", label: "Tomografia", description: "Imagenes 3D por TC" },
  { value: "resonancia", label: "Resonancia", description: "Imagenes por RM" },
  { value: "electrocardiograma", label: "ECG", description: "Actividad cardiaca" },
]

export const genderOptions = [
  { value: "macho", label: "Macho" },
  { value: "hembra", label: "Hembra" },
]

export const steps = [
  { num: 1, title: "Paciente" },
  { num: 2, title: "Propietario" },
  { num: 3, title: "Estudio" },
  { num: 4, title: "Imagenes" },
]
