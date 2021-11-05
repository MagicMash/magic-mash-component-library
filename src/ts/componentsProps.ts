import { ReactNode } from "react"

// Utility types

export type classes = string | null

// Button component types

export type buttonTypes = "button" | "submit" | "reset" | undefined


export type modalWrapper = (children: ReactNode, modalClasses: string) => JSX.Element

export type linkData = {
    url?: string,
    as?: string,
    text: string,
    hander?: () => void 
}

export type iconsData = {
    url: string,
    as?: string,
    img: string,
    handler?: () => void 
}

export type navbarUser = {
    img: string;
    withLink?: boolean; 
    url?: string;
    as?: string;
    handler?: () => void;
}