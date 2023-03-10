import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * It takes a list of class names, and returns a function that takes a list of Tailwind classes, and
 * returns a list of Tailwind classes
 * @param {ClassValue[]} classes - ClassValue[]
 */
export const clsxm = (...classes: ClassValue[]) =>
    twMerge(clsx(...classes));
