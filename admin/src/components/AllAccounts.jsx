import React, { useEffect, useRef, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const AllAccounts = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState([]);
    const inputref = useRef(null);

    const fetchInfo = async() => {
        await fetch('http://localhost:4000/alluser').then((data) => data.json()).then((data) => {setUsers(data); setSearch(data)});
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const ClickSearch = () => {
        let InputValue = inputref.current.value.toLowerCase();
        const filtered = users.filter((user) => (user.email.toLowerCase().includes(InputValue.toLowerCase())));
        setSearch(filtered);
    }

    const Delete = async(emailuser) => {
        let responseData;
        await fetch('http://localhost:4000/deleteuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: emailuser})
        }).then((data) => data.json()).then((data) => responseData = data);
        fetchInfo();
    }

  return (
    <div className='mt-10'>
        <div className='flex gap-3'>
            <input type="text" placeholder='Email' className='w-[30rem] h-[38px] rounded-xl ring-1 ring-black pl-3' ref={inputref} />
            <button onClick={ClickSearch} className='bg-customColor text-black px-3 py-3 ring-1 ring-black rounded-xl font-bold hover:text-customText'>
            <IoSearch />
            </button>
        </div>
          <table className='w-full mt-20 max-sm:mt-10'>
            <thead>
                <tr>
                    <th className='p-1 py-2 cursor-default'>User name</th>
                    <th className='p-1 py-2 cursor-default'>Email</th>
                    <th className='p-1 py-2 cursor-default'>Password</th>
                    <th className='p-1 py-2 cursor-default'>Date</th>
                    <th className='p-1 py-2 cursor-default'>Delete</th>
                </tr>
            </thead>
            <tbody className='gap-3'>
                {search.map((user) => (
                    <tr key={user.email}>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{user.name}</div></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{user.email}</div></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{user.password}</div></td>
                    <td className='p-1 py-2 cursor-default'><div className='flex justify-center items-center max-md:text-sm'>{user.date}</div></td>
                    <td className='p-1 py-2 cursor-pointer'><div className='flex justify-center items-center max-md:text-sm'><FaTrashAlt onClick={() => {Delete(user.email)}} /></div></td>
                </tr>
                ))}
            </tbody>
          </table>
    </div>
  )
}

export default AllAccounts;
