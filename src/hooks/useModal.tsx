import { useState, ReactNode } from "react";
import Modal from "../components/modal/modal";
import { modalComponents } from "../ts/componentsProps";

const useModal = () : [boolean, () => void, modalComponents] => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };

  return[ 
    isOpen,
    toggleModal,
    (children: ReactNode, modalClasses: string) => {
      return (
        <Modal classes={modalClasses} toggleModal={toggleModal} isOpen={isOpen}>
          {children}
        </Modal>
      );
    },
  ];
};

export default useModal;

/* isOpen: isOpen,
    toggleModal: toggleModal,
    component: (children: ReactNode, modalClasses: string) => {
      return (
        <Modal classes={modalClasses} toggleModal={toggleModal} isOpen={isOpen}>
          {children}
        </Modal>
      );
    }, */