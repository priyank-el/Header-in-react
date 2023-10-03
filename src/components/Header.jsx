import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';

// FONT AWESOME ICON MIN FILE
function Header() {

    return (
        <Router>
            <div className='grid grid-cols-6 gap-2 px-2 py-1 shadow-gray-600 sticky top-0'>
                <div className='bg-slate-500 h-16 flex items-center text-center rounded-md col-start-1 col-span-6  grid grid-cols-12 gap-2 px-2 py-1 shadow-gray-600'>
                    <div className='h-3/4 text-center rounded-md col-start-1 flex items-center text-gray-400 text-2xl font-extrabold col-span-3'>
                        <h1>
                            Learning By Doing
                        </h1>
                    </div>
                    <div className='h-3/4 rounded-md col-start-4 col-span-3 items-center justify-center flex text-gray-400 grid grid-cols-3 gap-1'>
                        <div onClick={"/"} className='bg-white h-full rounded-md items-center justify-center flex text-gray-400'>
                            <Link to="/">Home</Link>
                        </div>
                        <div onClick={"/about"} className='bg-white h-full rounded-md items-center justify-center flex text-gray-400'>
                            <Link to="/about">About</Link>
                        </div>
                        <div className='bg-white h-full rounded-md items-center justify-center flex text-gray-400'>
                            <Link to="/contact-us">contact us</Link>
                        </div>
                    </div>
                    <div className=' h-14 text-center rounded-md items-center justify-center flex col-start-8 col-span-3 grid grid-cols-3'>
                        {/* <div className='col-start-1 col-span-2 h-full flex items-center'>
                            <input class="shadow appearance-none border rounded-md pl-2 w-full h-3/4 text-gray-500 text-xl leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                        </div>
                        <div className='col-start-3 h-full flex items-center'>
                            <button className='bg-black text-white ml-2 h-3/4 w-full rounded-2xl'>Search</button>
                        </div> */}
                    </div>
                    <div className='h-14 text-center rounded-md items-center justify-center flex col-start-12 grid grid-cols-2'>
                        <div className='h-3/4 bg-white rounded-md flex justify-center'>
                            <img class="rounded-full py-1 px-1 w-3/4 h-full" src="https://plus.unsplash.com/premium_photo-1661302846246-e8faef18255d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="image comes here.." />
                            
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact-us' element={<ContactUs />}></Route>
            </Routes>
        </Router>

    )
}

export default Header