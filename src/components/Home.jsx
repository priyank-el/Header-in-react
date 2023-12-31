import SideBar from "./SideBar"

function Content(){
    return (
        <div className='col-start-2 col-span-5 rounded-md h-screen flex items-center justify-center'>
            <h1 className="font-extrabold text-gray-600 text-6xl">Hello devs from home side..</h1>
        </div>
    )
}

function Home(){
    return (
        <>
            <div className="grid grid-cols-6 mx-2">
                <SideBar />
                <Content />
            </div>
        </>
    )
}

export default Home