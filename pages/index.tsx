'use client';
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex-auto text-center container mx-auto max-w-fit bg-black min-w-full min-h-screen p-4 px-6 py-4">
      <div className="mx-auto border-[2.5px] border-l-teal-400 border-t-emerald-400 border-r-cyan-400 border-b-sky-400 rounded-xl text-center min-h-screen p-4 py-2">
        <h1><strong className="text-7xl text-purple-500 font-light">Hey <span className="text-pink-500">there!</span></strong></h1>
        <hr className="mt-3.5 mb-3.5 bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 border-0 h-[4.5px] rounded-xl" />
        <p className={"text-3xl bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 text-transparent text-clip bg-clip-text"}><strong>This is a test text for using new things that I've learnt.</strong></p>
        <p className={"text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-slate-500 text-transparent text-clip bg-clip-text"}><strong>This is built using NextJS and Tailwind CSS.</strong></p>
        <p><strong className="text-xl bg-gradient-to-r from-pink-500 via-cyan-500 to-emerald-500 text-transparent bg-clip-text">
          <TypeAnimation
            sequence={
              ["This allows us to make interactivity more fun and reactive to the client.", 300]
            } speed={50} deletionSpeed={80} omitDeletionAnimation={false} />
        </strong></p>
      </div>
    </div>
  )
}
