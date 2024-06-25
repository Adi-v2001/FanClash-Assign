'use client'

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";
import { useDebounce } from "use-debounce";
import Navbar from "./components/Navbar";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchValue] = useDebounce(searchTerm, 500)
  const [error, setError] = useState("")

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      let url
      if(searchValue){
        url = `https://jsonplaceholder.typicode.com/users?q=${searchValue}`
      } else {
        url = 'https://jsonplaceholder.typicode.com/users'
      }
      const res = await axios.get(url)
      setUsers(res.data);
    };
    getUsers()
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [searchValue]);

  return (
    <main className="flex flex-col items-center bg-slate-800 min-h-[100vh]">
      <Navbar/>
      <h1 className="text-slate-200 pt-10 text-xl md:text-4xl font-semibold">Here is the list of all the users!</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, username, or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 mt-8 w-[80%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] rounded-md border border-gray-300"
      />
      {/* User list rendering */}
      {error ? (
        <div className="text-red-500">{error}</div>
      ):(
        users.length === 0 ? (
          <div className="p-3 border-2 border-slate-500 rounded-xl break-words bg-slate-700 text-slate-200">
            No users to show here!
          </div>
        ):(
          <UserCard users={users} loading={loading}/>
        )
      )}
    </main>
  );
}
