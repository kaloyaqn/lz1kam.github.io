import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditUser = () => {
  const [name, setName] = useState("");
  const [mqsto, setMqsto] = useState("");
  const [firma, setFirma] = useState("");
  const [broi, setBroi] = useState("");
  const [cena, setCena] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setMqsto(response.data.mqsto);
    setFirma(response.data.firma);
    setBroi(response.data.broi);
    setCena(response.data.broi);
  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
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
    <div className="container d-flex flex-row justify-content-center align-items-center vh-100">
      <div className="col-md-3">
        <form onSubmit={updateUser}>
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
            <label className="form-label">Брой</label>
            <div className="control">
              <input
                type="text"
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
                type="text"
                className="form-control"
                value={cena}
                onChange={(e) => setCena(e.target.value)}
                placeholder="Цена"
              />
            </div>
          </div>
          <div className="field">
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
 
export default EditUser;