import React from "react";
import usersAPI from "../api/api.config";
import InputForm from "../components/InputForm";

export default function MainPage() {
  // const [user, setUser] = useState(null);

  const getUser = async (id) => {
    if (!id) return;
    try {
      const { data } = await usersAPI.get(id);
      console.log(data);
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
