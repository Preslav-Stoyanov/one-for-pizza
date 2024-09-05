import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getPriceInLevas(price: number) {
    return `${(price / 100).toFixed(2)} лв.`;
}

export function getSizeGrams(size: number) {
    return `${size} гр.`;
}
