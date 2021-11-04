interface props {
    toggleModal: () => void
}

const Backdrop = (props: props) => {

    return(
        <div onClick={props.toggleModal} className='absolute z-40 w-full h-screen backdrop-filter backdrop-blur-xl top-0 left-0 ' />
    )
}

export default Backdrop