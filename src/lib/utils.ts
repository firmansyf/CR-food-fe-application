import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function numberFormat(val : number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
    val,
  )
}
