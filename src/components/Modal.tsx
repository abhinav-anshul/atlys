import { ReactNode, useEffect } from "react"
import ModalPortal from "./ModalPortal"

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  handleClose: () => void
}

function Modal({ children, isOpen, handleClose }: ModalProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? handleClose() : null)
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <>
      <ModalPortal wrapperId="react-portal-modal-container">
        <div className="modal">
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </ModalPortal>
    </>
  )
}

export { Modal }
