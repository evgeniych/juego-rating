import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Добавляет UTM-параметры из текущего URL к партнёрской ссылке
 * @param baseUrl - базовая партнёрская ссылка
 * @returns ссылка с UTM-параметрами из текущего URL
 */
export function addUtmParams(baseUrl: string): string {
  if (typeof window === 'undefined') {
    return baseUrl
  }

  const currentUrl = new URL(window.location.href)
  const targetUrl = new URL(baseUrl)
  
  // UTM-параметры для переноса
  const utmParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content'
  ]
  
  // Переносим UTM-параметры из текущего URL
  utmParams.forEach(param => {
    const value = currentUrl.searchParams.get(param)
    if (value) {
      targetUrl.searchParams.set(param, value)
    }
  })
  
  return targetUrl.toString()
}
