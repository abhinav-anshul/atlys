import { CreatePost, Posts, Spacer } from "../ui"

function Dashboard() {
  return (
    <main className="max-w-2xl mx-auto space-y-8">
      <Spacer x={0} y={8} />
      <div className="text-[#C5C7CA] font-[500] text-[28px] text-left">Hello Jane</div>
      <div className="text-[#7F8084] w-4/5">
        How are you doing today? Would you like to share something with the community 🤗
      </div>
      <div>
        <CreatePost />
      </div>
      <div>
        <Posts />
      </div>
    </main>
  )
}

export { Dashboard }
