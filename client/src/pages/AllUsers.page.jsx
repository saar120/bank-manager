import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/users";

export default function AllUsersPage() {
  const [users, setAllUsers] = useState([]);

  useEffect(() => {
    const setAllUsers = async () => {
      const users = await getAllUsers();
      console.log(users);
    };
    setAllUsers();
  }, []);

  return <div>all users</div>;
}
