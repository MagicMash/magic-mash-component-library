import { useState, ReactNode } from "react";
import Modal from "../components/modal/modal";

import { modalWrapper } from "../ts/componentsProps";

const useModal = (initial = false) : [boolean, () => void, modalWrapper] => {

  const [isOpen, setIsOpen] = useState(initial);
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
