import { ReactNode } from "react";
import Link from 'next/link'

export const wrappWithLink = ( url: string, component: ReactNode, as?: string ) => {
    return (
        <Link href={url} as={as ? as : url} >
            {component}
        </Link>
    )
}