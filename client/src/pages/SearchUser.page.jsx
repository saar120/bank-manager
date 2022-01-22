import React, { useState } from "react";
import SearchUserPageStyled from "./pages.styled/SearchUser.styled";
import { getUserById } from "../api/users";
import SearchForm from "../components/SearchForm";
import UserCard from "../components/UserCard";

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
      <SearchForm callback={getUser} />
      {user && <UserCard user={user} />}
      {errorMessage && <div>{errorMessage}</div>}
    </SearchUserPageStyled>
  );
}
