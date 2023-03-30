import { LocalStorage } from '@/data/dtos/LocalStorage'

export function get<T>(key: string): T | null {
  const data = localStorage.getItem(key)
  if (data !== null) {
    const today = new Date()
    const parsedData = JSON.parse(data) as LocalStorage
    if (parsedData.expiry >= today.getTime()) {
      return JSON.parse(parsedData.value) as T
    } else {
      localStorage.removeItem(key)
    }
  }

  return null
}

export function set<T>(key: string, value: T): void {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const data: LocalStorage = {
    value: JSON.stringify(value),
    expiry: tomorrow.getTime()
  }
  localStorage.setItem(key, JSON.stringify(data))
}
