import { useState } from "react";

const useModal = (initialValue = "false") => {
  const [isModalActive, seTisModalActive] = useState(initialValue);
  const openModal = () => seTisModalActive(true)

  const closeModal = () => seTisModalActive(false)

  return [openModal, closeModal, isModalActive]
}

export default useModal;