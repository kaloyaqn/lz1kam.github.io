import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="btn btn-primary">
          Добави
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>№</th>
              <th>Име</th>
              <th>Фирма</th>
              <th>Брой</th>
              <th>Цена</th>
              <th>Общо</th>
              <th>Mqsto</th>
              <th>Локация</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.firma}</td>
                <td>{user.broi}</td>
                <td>{user.cena} лв.</td>
                <td>{user.cena * user.broi} лв.</td>
                <td>{user.gender}</td>
                <td>{user.mqsto}</td>

                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="btn btn-warning me-2 "
                  >
                    Редактирай
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-danger "
                  >
                    Изтрий
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default UserList;