import { useState } from "react" 

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(prevState => {
            return !prevState
        })
    }
    return {isOpen, toggleModal}
}

export default useModal