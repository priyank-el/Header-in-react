import { useEffect, useState } from "react"

import { Hourglass } from "react-loader-spinner"
import SideBar from "./SideBar"
import axios from "axios"

function Content() {

    const [users, setUsers] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState(users)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data)
                setLoading(true)
            })
            .catch((error) => console.log(error.message))
    }, [])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value
        setSearchItem(searchTerm)

        const filteredItems = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredUsers(filteredItems);
    }

    return (
        <div className='col-start-2 col-span-5 rounded-md '>
            {
                isLoading == false &&
                <div className="h-screen flex items-center justify-center">
                    <Hourglass />
                </div>
            }
            <div className="grid grid-cols-3 gap-2">
                <div></div>
                <div></div>
                <div className="h-20 flex items-center justify-center">
                    <input
                        className="rounded-md py-2 shadow-lg shadow-slate-600 border border-gray-300 focus:outline-none px-2 text-lg text-gray-600"
                        type="text"
                        placeholder='Type to search'
                        value={searchItem}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='grid grid-cols-3 m-2 gap-2'>
                {console.log(filteredUsers)}
                {
                    users.length > 0 &&
                    users.map(user => {
                        return (
                            <div key={user.id} className='bg-white h-56 text-center rounded-md border border-gray-300 shadow-xl'>
                                <h1 className='text-2xl text-gray-500 mt-2'>{user.name}</h1>
                                <hr
                                    class="h-0.5 mx-2 my-3" />
                                <p className='text-slate-400 overflow-y-hidden'>Id:{user.id}</p>
                                <p className='text-slate-400 overflow-y-hidden'>UserName:{user.username}</p>
                                <p className='text-slate-400 overflow-y-hidden'>Email:{user.email}</p>
                                <p className='text-slate-400 overflow-y-hidden'>Address:{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

function About() {
    return (
        <>
            <div className="grid grid-cols-6 mx-2">
                <SideBar />
                <Content />
            </div>
        </>
    )
}

export default About