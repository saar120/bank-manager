import React, { useState } from "react";

export default function InputForm({ getUser }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <h3>Get User data</h3>
      <div className="form">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" />
        <button onClick={() => getUser(searchTerm)}>Get User</button>
      </div>
    </div>
  );
}
