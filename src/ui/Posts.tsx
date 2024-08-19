import { useState } from "react"
import { Modal } from "../components/Modal"
import { ModalForm } from "../components/ModalForm"

interface IPosts {
  id: number
  name: string
  timeStamp: string
  mood: string
  post: string
  profile_picture: string
  comments_number: number
}

function Posts({ id, name, timeStamp, mood, post, profile_picture, comments_number }: IPosts) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleCommentClick = () => {
    setIsOpen(true)
  }

  console.log(id, name, timeStamp, mood, post, profile_picture, comments_number)

  return (
    <>
      <section>
        <div className="text-[#C5C7CA] text-[18px] bg-[#35373B] rounded-md border-2 border-[#35373B] p-3">
          <div className="space-y-3">
            <div className="text-[#C5C7CA] text-[18px] font-[500]">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <div>
                    <img width={44} height={44} className="rounded-full" src={profile_picture} />
                  </div>
                  <div>
                    <div>{name}</div>
                    <div className="text-[#7F8084] text-[14px] font-[500]">{timeStamp}</div>
                  </div>
                </div>
                <div className="cursor-pointer">⋯</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-[#191920] p-4 rounded-md">
              <div className="bg-[#27292D] px-3 py-2 rounded-full">{mood}</div>
              <textarea
                rows={3}
                value={post}
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
                  {comments_number} comments
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
