'use client'

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

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
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    getUsers()
      .catch((err) => console.log("An error occured while getting users", err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="flex flex-col items-center justify-center bg-slate-800">
      <h1 className="text-slate-200 pt-10 text-3xl">Here is the list of all the users!</h1>
      <input
        type="text"
        placeholder="Search by name, username, or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 mt-8 w-[80%] md:w-[60%] rounded-md border border-gray-300"
      />
      <UserCard users={users} loading={loading}/>
    </main>
  );
}
