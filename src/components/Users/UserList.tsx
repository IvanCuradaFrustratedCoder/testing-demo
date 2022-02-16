import React, { useEffect, useState } from "react";
import { HttpService } from "../../services/HttpService";
import { User } from "../../types/Types";
import Card from "../Cards/Card";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [httpState, setHttpState] = useState("idle");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setHttpState("pending");
        const service = new HttpService();

        const data = await service.get();

        setHttpState("fulfilled");
        setUsers(data);
      } catch (err) {
        console.log(err);
        setHttpState("rejected");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {httpState === "pending" && "Loading..."}
      {httpState === "rejected" && "Unable to fulfill the request"}
      <ul>
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
