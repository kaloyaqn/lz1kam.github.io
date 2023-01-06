import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [name, setName] = useState("");
  const [mqsto, setMqsto] = useState("");
  const [firma, setFirma] = useState("");
  const [broi, setBroi] = useState("");
  const [cena, setCena] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        mqsto,
        firma,
        broi,
        cena,
        date,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="container d-flex flex-row justify-content-center align-items-center vh-100">
      <div className="col-md-3">
        <form onSubmit={saveUser}>
          <div className="field mb-2">
            <label className="form-label">Име</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Име"
              />
            </div>
          </div>
          <div className="field mb-2">
            <label className="form-label">Фирма</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                value={firma}
                onChange={(e) => setFirma(e.target.value)}
                placeholder="Фирма"
              />
            </div>
          </div>


          <div className="field mb-2">
            <label className="form-label">Брой</label>
            <div className="control">
              <input
                type="number"
                className="form-control"
                value={broi}
                onChange={(e) => setBroi(e.target.value)}
                placeholder="Брой"
              />
            </div>
          </div>
          <div className="field mb-2">
            <label className="form-label">Цена</label>
            <div className="control">
              <input
                type="number"
                className="form-control"
                value={cena}
                onChange={(e) => setCena(e.target.value)}
                placeholder="Цена"
              />
            </div>
          </div>
          <div className="field mb-2">
            <label className="form-label">Локация</label>
            <div className="control">
              <input
                type="text"
                className="form-control"
                value={mqsto}
                onChange={(e) => setMqsto(e.target.value)}
                placeholder="Локация"
              />
            </div>
          </div>
          <div className="field mb-2">
            <label className="form-label">Дата</label>
            <div className="control">
              <input
                type="date"
                className="form-control"
                value={mqsto}
                onChange={(e) => setMqsto(e.target.value)}
                placeholder="Дата"
              />
            </div>
          </div>
          <div className="field mt-3">
            <div className="control">
              <button type="submit" className="btn btn-primary w-100">
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