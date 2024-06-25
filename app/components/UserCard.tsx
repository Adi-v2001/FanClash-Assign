"use client";
import { User } from "../page";
import Loader from "./Loader";

const UserCard = ({users, loading}:{users: User[], loading: boolean}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 py-10 px-10 w-full">
      {loading ? (
        <div className="col-span-full flex justify-center"><Loader/></div>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="border-2 border-slate-500 rounded-xl p-4 break-words bg-slate-700 hover:bg-slate-600 text-slate-200 shadow-2xl hover:shadow-blue-900/50 hover:scale-105 duration-200 ease-in-out"
          >
            <h1 className="text-lg font-bold pb-4">{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default UserCard;
