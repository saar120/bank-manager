import React, { useState } from "react";

export default function InputForm({ callback }) {
  const [searchTerm, setSearchTerm] = useState("");

  const getHandler = () => {
    callback(searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <div className="form">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" />
        <button onClick={getHandler}>Get User</button>
      </div>
    </div>
  );
}
