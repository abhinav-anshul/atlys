import { useState } from "react"
import { Modal } from "../components/Modal"
import { ModalForm } from "../components/ModalForm"

function CreatePost() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handlePostClick = () => {
    // POST API call here - else open Modal
    setIsOpen(true)
  }
  return (
    <>
      <main>
        <div className="text-[#C5C7CA] text-[18px] bg-[#35373B] rounded-md border-2 border-[#35373B] p-3">
          <div className="space-y-3">
            <div className="text-[#C5C7CA] text-[18px] font-[500]">Create post</div>
            <div className="flex items-center space-x-2 bg-[#191920] p-4 rounded-md">
              <div className="bg-[#27292D] px-3 py-2 rounded-full">💬</div>
              <input
                placeholder="How are you feeling today?"
                className="text-[#7F8084] text-[16px] w-full bg-[#191920] border-none outline-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handlePostClick}
                className="bg-[#4A96FF] cursor-pointer text-[#FFFFFF] text-[16px] rounded-sm px-8 py-2"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <ModalForm modalType="signup" />
        </Modal>
      </main>
    </>
  )
}

export { CreatePost }
