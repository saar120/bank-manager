import React, { useState } from "react";
import SearchUserPageStyled from "./pages.styled/SearchUser.styled";
import { getUserById } from "../api/users";
import InputForm from "../components/InputForm";

export default function SearchUser() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getUser = async (id) => {
    if (!id) return;
    try {
      const { user } = await getUserById(id);
      setErrorMessage("");
      setUser(user);
    } catch (error) {
      setUser(null);
      console.error(error.response.data.error || "Error");
      setErrorMessage(error.response.data.error || "Error");
    }
  };

  return (
    <SearchUserPageStyled>
      <div className="header">Search User</div>
      <InputForm callback={getUser} />
      {user && <div>{user._id}</div>}
      {errorMessage && <div>{errorMessage}</div>}
    </SearchUserPageStyled>
  );
}
