import { CreatePost, Posts, Spacer } from "../ui"
import { USER_DETAIL } from "../constants/userdetails"
import { Fragment } from "react/jsx-runtime"

interface IDetail {
  id: number
  name: string
  timeStamp: string
  mood: string
  post: string
}

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
      <div className="space-y-2">
        {USER_DETAIL?.map((itm: IDetail, index: number) => (
          <Fragment key={index}>
            <Posts
              id={itm?.id}
              name={itm?.name}
              timeStamp={itm?.timeStamp}
              mood={itm?.mood}
              post={itm?.post}
            />
          </Fragment>
        ))}
      </div>
    </main>
  )
}

export { Dashboard }
