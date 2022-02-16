import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../types/Types";
import Card from "../Cards/Card";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [httpState, setHttpState] = useState("idle");

  const fetchUsers = async () => {
    try {
      setHttpState("pending");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setHttpState("fulfilled");
      setUsers(response.data);
    } catch (err) {
      console.log(err);
      setHttpState("rejected");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {httpState === 'pending' && 'Loading...'}
      {httpState === 'rejected' && 'Unable to fulfill the request'}
      <ul>
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
