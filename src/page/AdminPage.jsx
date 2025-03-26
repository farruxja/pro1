import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";


const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users") // Foydalanuvchilarni olish
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ism</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>
                <QRCode value={`https://300/menu/${user.id}`} size={100} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;