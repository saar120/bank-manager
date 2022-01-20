import React from "react";
import axios from "axios";
import InputForm from "../components/InputForm";

const apiUrl = process.env.REACT_APP_API_URL;
export default function MainPage() {
  // const [user, setUser] = useState(null);

  const getUser = async (id) => {
    console.log(apiUrl);
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
