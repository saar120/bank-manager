import React from "react";
import axios from "axios";
import InputForm from "../components/InputForm";

const apiUrl = process.env.API_URL || "http://localhost:8080/api/users/";

export default function MainPage() {
  // const [user, setUser] = useState(null);

  const getUser = async (id) => {
    if (!id) return;
    const { data } = await axios.get(apiUrl + id);
    console.log(data);
  };

  return (
    <div>
      <InputForm getUser={getUser} />
    </div>
  );
}
