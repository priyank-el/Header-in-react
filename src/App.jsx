// import { useState } from 'react'
import './App.css'
function Header() {
  return (
    <div className='grid grid-cols-6 gap-2 px-2 py-1 shadow-gray-600'>
      <div className='bg-slate-500 h-16 flex items-center text-center rounded-md col-start-1 col-span-6  grid grid-cols-12 gap-2 px-2 py-1 shadow-gray-600'>
        <div className='bg-white h-3/4 text-center rounded-md col-start-4 col-span-1 items-center justify-center flex'>
          Home
        </div>
        <div className='bg-white h-3/4 text-center rounded-md items-center justify-center flex'>
          about
        </div>
        <div className='bg-white h-3/4 text-center rounded-md items-center justify-center flex'>
          contact us
        </div>
        <div className=' h-14 text-center rounded-md items-center justify-center flex col-start-8 col-span-3 grid grid-cols-3'>
          <div className='col-start-1 col-span-2 h-full flex items-center'>
            <input class="shadow appearance-none border rounded-md pl-2 w-full h-3/4 text-gray-700 text-xl leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          </div>
          <div className='col-start-3 h-full flex items-center'>
            <button className='bg-black text-white ml-2 h-3/4 w-full rounded-2xl'>Search</button>
          </div>
        </div>
        <div className='h-14 text-center rounded-md items-center justify-center flex col-start-12 grid grid-cols-2'>
          <div></div>
          <div className='h-3/4 bg-white rounded-md flex justify-center'>
            <img class="rounded-full py-1 px-1 w-3/4 h-full" src="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="image description" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SideBar() {
  return (
    <div className='col-start-1 h-screen sticky top-0 rounded-md bg-slate-500'>
      hello
    </div>
  )
}

function MainContent() {
  return (
    <div className='col-start-2 col-span-5 rounded-md '>
      <div className='grid grid-cols-3 m-2 gap-2'>
        <div className='bg-white text-center rounded-md border border-gray-50 border-spacing-1 shadow-2xl'>
          <h1 className='text-2xl'>Priyank Ambliya</h1>
          <hr
            class="my-12 h-0.5 mx-1 border-t-0 bg-slate-400 my-3" />
          <p className='text-slate-400 overflow-y-hidden' s>Lorem </p>
        </div>
        <div className='bg-white text-center rounded-md border border-gray-50 border-spacing-1 shadow-xl'>
          <h1 className='text-2xl'>Priyank Ambliya</h1>
          <hr
            class="my-12 h-0.5 mx-1 border-t-0 bg-slate-400 my-3" />
          <p className='text-slate-400 overflow-y-hidden' s>Lorem ipsum dolor sit amet </p>
        </div>
        <div className='bg-white text-center rounded-md border border-gray-50 border-spacing-1 shadow-xl'>
          <h1 className='text-2xl'>Priyank Ambliya</h1>
          <hr
            class="my-12 h-0.5 mx-1 border-t-0 bg-slate-400 my-3" />
          <p className='text-slate-400 overflow-y-hidden' s>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure eum facilis molestiae voluptate ratione autem. Provident consectetur accusamus enim, obcaecati alias error voluptas rerum nulla quisquam, dolor labore maxime!</p>
        </div>
        <div className='bg-white text-center rounded-md border border-gray-50 border-spacing-1 shadow-xl'>
          <h1 className='text-2xl'>Priyank Ambliya</h1>
          <hr
            class="my-12 h-0.5 mx-1 border-t-0 bg-slate-400 my-3" />
          <p className='text-slate-400 overflow-y-hidden' s>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iure eum facilis molestiae voluptate ratione autem. Provident consectetur accusamus enim, obcaecati alias error voluptas rerum nulla quisquam, dolor labore maxime!</p>
        </div>
        <div className='bg-white text-center rounded-md border border-white border-spacing-1 shadow-xl'>
          <h1 className='text-2xl'>Priyank Ambliya</h1>
          <hr
            class="my-12 h-0.5 mx-1 border-t-0 bg-slate-400 my-3" />
          <p className='text-slate-400 overflow-y-hidden' s>Lorem ipsum dolor sit amet consectetur !</p>
        </div>
        <div className='bg-white text-center rounded-md border border-white border-spacing-1 shadow-xl'>
          <h1 className='text-2xl'>Priyank Ambliya</h1>
          <hr
            class="my-12 h-0.5 mx-1 border-t-0 bg-slate-400 my-3" />
          <p className='text-slate-400 overflow-y-hidden' s>Lorem ipsum dolor sit amet consectetur !</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='grid grid-cols-6 gap-2 px-2 py-1 shadow-gray-600'>
        <SideBar />
        <MainContent />
      </div>
    </>
  )
}

export default App
