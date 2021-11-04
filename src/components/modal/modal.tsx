import React, { ReactNode } from 'react'
import Backdrop from './backdrop'
import { processTWClasses } from '../../utils/twStringsProcessor'
import Image from 'next/image'

interface props {
    children?: ReactNode,
    toggleModal: () => void,
    isOpen: boolean,
    classes?: string
}

const baseClasses = 'w-64 h-80 max-w-2/3 absolute rounded-xl m-auto bg-white filter drop-shadow-3xl p-4 z-50 '

const Modal = (props: props) => {

    return (
        <>
       {props.isOpen ? <>
        <div className={props.classes ? processTWClasses(baseClasses, props.classes) : baseClasses } >
            <div className='relative flex flex-row justify-end cursor-pointer ' onClick={props.toggleModal} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
            {props.children}
        </div>
        <Backdrop toggleModal={props.toggleModal} />
       </> : null}
       </>
    )
}

export default Modal