import React, { useState } from "react";
import { getUserById } from "../api/users";
import InputForm from "../components/InputForm";

export default function MainPage() {
  const [user, setUser] = useState(null);

  const getUser = async (id) => {
    if (!id) return;
    try {
      const { user } = await getUserById(id);
      setUser(user);
    } catch (error) {
      console.error(error.response.data.error || "Error");
    }
  };

  return (
    <div>
      <InputForm getUser={getUser} />
    </div>
  );
}
