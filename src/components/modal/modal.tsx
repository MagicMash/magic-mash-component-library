import React, { ReactNode } from 'react'
import Backdrop from './backdrop'
import { processTWClasses } from '../../utils/twStringsProcessor'

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
            {props.children}
        </div>
        <Backdrop toggleModal={props.toggleModal} />
       </> : null}
       </>
    )
}

export default Modal