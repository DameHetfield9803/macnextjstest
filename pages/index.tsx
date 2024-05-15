export default function Home() {
  return (
    <div className="flex-auto text-center container mx-auto max-w-fit bg-gradient-to-r from-black to-slate-950 min-w-full min-h-screen p-4 px-4 py-4">
      <div className="mx-auto border-[2.5px] border-l-teal-400 border-t-emerald-500 border-r-cyan-400 border-b-sky-400 rounded-xl min-h-screen p-4 py-2">
        <h1><strong className="text-6xl text-purple-500 font-light">Hey <span className="text-pink-500">there!</span></strong></h1>
        <hr className="mt-2 mb-3.5 bg-gradient-to-r from-indigo-500 via-teal-500 to-pink-500 border-0 h-[4.5px] rounded-xl" />
        <p className={"text-3xl bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 text-transparent text-clip bg-clip-text"}><strong>This is a test text for using new things that I've learnt.</strong></p>
      </div>
    </div>
  )
}
