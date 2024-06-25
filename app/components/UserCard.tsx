"use client";
import { User } from "../page";

const UserCard = ({users, loading}:{users: User[], loading: boolean}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 py-10 px-10 w-full h-screen items-center">
      {loading && users.length === 0 ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="border-2 border-slate-500 rounded-xl p-4 break-words bg-slate-700 text-slate-200"
          >
            <h1 className="text-lg font-semibold pb-4">{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default UserCard;
