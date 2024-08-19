import { useState } from "react"
import { Modal } from "../components/Modal"
import { ModalForm } from "../components/ModalForm"

function Posts() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleCommentClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <section>
        <div className="text-[#C5C7CA] text-[18px] bg-[#35373B] rounded-md border-2 border-[#35373B] p-3">
          <div className="space-y-3">
            <div className="text-[#C5C7CA] text-[18px] font-[500]">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <div>
                    <img
                      width={44}
                      height={44}
                      className="rounded-full"
                      src="./profile-pic-1.png"
                    />
                  </div>
                  <div>
                    <div>Theresa Webb</div>
                    <div className="text-[#7F8084] text-[14px] font-[500]">5mins ago</div>
                  </div>
                </div>
                <div className="cursor-pointer">⋯</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-[#191920] p-4 rounded-md">
              <div className="bg-[#27292D] px-3 py-2 rounded-full">🖐</div>
              <textarea
                rows={3}
                value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                className="text-[#7F8084] w-full text-[16px] bg-[#191920] border-none outline-none"
              />
            </div>
            <div className="flex justify-start">
              <div className="flex items-center space-x-2">
                <div>
                  <img width={19} height="auto" src="./comment-icon.png" />
                </div>
                <div
                  onClick={handleCommentClick}
                  className="text-[#7F8084] text-[14px] font-[500] cursor-pointer"
                >
                  24 comments
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <ModalForm modalType="login" />
        </Modal>
      </section>
    </>
  )
}

export { Posts }
