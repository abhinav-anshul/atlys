import { Link } from "wouter"

interface IModalType {
  modalType: "login" | "signup"
  setIsOpen: (isOpen: boolean) => void
}

function ModalForm({ modalType, setIsOpen }: IModalType) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative p-[1px] bg-gradient-to-br from-[#969696] to-[#343434] rounded-md">
          <div className="bg-[#27292D] rounded-md p-8 min-w-[28rem]">
            <div onClick={() => setIsOpen(false)} className="flex justify-end cursor-pointer">
              <img
                className="rounded-full bg-[#131319] w-[30px] h-[30px] p-2"
                width={10}
                height={10}
                src="./cross-icon.png"
              />
            </div>
            {/* Login form */}
            {modalType === "login" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-center text-[#6B6C70] uppercase text-[14px] font-[500]">
                    WELCOME BACK
                  </div>
                  <div className="text-center text-[#FFFFFF] text-[18px] font-[500]">
                    Log into your account
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="font-[500] text-[#C5C7CA] text-[14px]">Email or Username</div>
                    <div className="border-[#35373B] border-[1px] p-2 rounded-md">
                      <input
                        className="bg-[#27292D] outline-none border-none text-[#ffffff] w-full placeholder:text-[#7F8084] placeholder:text-[14px]"
                        placeholder="Enter your email or username"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-[500] text-[#C5C7CA] text-[14px]">Password</div>
                      <div className="text-[#C5C7CA] text-[12px]">Forgot password?</div>
                    </div>
                    <div className="border-[#35373B] border-[1px] p-2 rounded-md flex items-center">
                      <input
                        className="bg-[#27292D] outline-none border-none text-[#ffffff] w-full placeholder:text-[#7F8084] placeholder:text-[14px]"
                        placeholder="Enter your password"
                      />
                      <div>
                        <img width={20} height={20} src="./eye-logo.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-[#4A96FF] w-full cursor-pointer text-[#FFFFFF] text-[16px] rounded-sm px-8 py-2">
                    Login now
                  </button>
                </div>
                <div>
                  <div className="text-[14px] font-[500]">
                    <span className="text-[#7F8084]">Not registered yet?</span>{" "}
                    <span className="text-[#C5C7CA] cursor-pointer">Register →</span>
                  </div>
                </div>
              </div>
            )}
            {/* // Signup form */}
            {modalType === "signup" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-center text-[#6B6C70] uppercase text-[14px] font-[500]">
                    SIGN UP
                  </div>
                  <div className="text-center text-[#FFFFFF] text-[18px] font-[500]">
                    Create an account to continue
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="font-[500] text-[#C5C7CA] text-[14px]">Email</div>
                    <div className="border-[#35373B] border-[1px] p-2 rounded-md">
                      <input
                        className="bg-[#27292D] outline-none border-none text-[#ffffff] w-full placeholder:text-[#7F8084] placeholder:text-[14px]"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="font-[500] text-[#C5C7CA] text-[14px]">Username</div>
                    <div className="border-[#35373B] border-[1px] p-2 rounded-md">
                      <input
                        className="bg-[#27292D] outline-none border-none text-[#ffffff] w-full placeholder:text-[#7F8084] placeholder:text-[14px]"
                        placeholder="Choose a preferred username"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="font-[500] text-[#C5C7CA] text-[14px]">Password</div>
                    </div>
                    <div className="border-[#35373B] border-[1px] p-2 rounded-md flex items-center">
                      <input
                        className="bg-[#27292D] outline-none border-none text-[#ffffff] w-full placeholder:text-[#7F8084] placeholder:text-[14px]"
                        placeholder="Choose a strong password"
                      />
                      <div>
                        <img width={20} height={20} src="./eye-logo.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-[#4A96FF] w-full cursor-pointer text-[#FFFFFF] text-[16px] rounded-sm px-8 py-2">
                    Continue
                  </button>
                </div>
                <div>
                  <div className="text-[14px] font-[500]">
                    <span className="text-[#7F8084]">Already have an account?</span>{" "}
                    <span className="text-[#C5C7CA] cursor-pointer">
                      <Link href="/login">Login →</Link>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export { ModalForm }
