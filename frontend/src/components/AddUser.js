import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [mqsto, setMqsto] = useState("");
  const [firma, setFirma] = useState("");
  const [broi, setBroi] = useState("");
  const [cena, setCena] = useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        gender,
        mqsto,
        firma,
        broi,
        cena,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Име</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Локация</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={mqsto}
                onChange={(e) => setMqsto(e.target.value)}
                placeholder="Mqsto"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Брой</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={broi}
                onChange={(e) => setBroi(e.target.value)}
                placeholder="Брой"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Цена</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={cena}
                onChange={(e) => setCena(e.target.value)}
                placeholder="Цена"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Фирма</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={firma}
                onChange={(e) => setFirma(e.target.value)}
                placeholder="Фирма"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Пол</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Запази
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddUser;