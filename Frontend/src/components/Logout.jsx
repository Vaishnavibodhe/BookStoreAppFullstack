import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user:null,
      });

      localStorage.removeItem("Users");
      toast.success("Logout successful");
    } catch (err) {
      toast.error("Error logging out");
    }
  };

  return (
    <div>
      <button
        className="px-2 py-1 rounded-md text-white bg-red-500 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
