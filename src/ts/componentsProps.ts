import { ReactNode } from "react"

// Utility types

export type classes = string | null

// Button component types

export type buttonTypes = "button" | "submit" | "reset" | undefined


export type modalWrapper = (children: ReactNode, modalClasses: string) => JSX.Element

