import React, { useState } from "react";

export default function InputForm({ getUser }) {
  const [searchId, setSearchId] = useState("");
  return (
    <div>
      <h3>Get User data</h3>
      <div className="form">
        <input value={searchId} onChange={setSearchId} type="text" />
        <button onClick={() => getUser(searchId)}>Get User</button>
      </div>
    </div>
  );
}
