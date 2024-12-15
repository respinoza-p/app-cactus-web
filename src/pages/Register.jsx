import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_REGISTER_URL = import.meta.env.VITE_API_REGISTER_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    direccion: "",
    pais: "Chile",
    region: "",
    comuna: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Manejar cambios en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(API_REGISTER_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSuccess(true);
      alert("Registro exitoso!");
      navigate("/login"); // Redirigir después del registro
    } catch (err) {
      setError(
        err.response?.data?.message || "Error al registrar. Intenta nuevamente."
      );
      console.error("Error:", err.response?.data || err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Ingresa tu nombre"
            required
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ingresa tu correo"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* Dirección */}
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="direccion"
            className="form-control"
            placeholder="Ingresa tu dirección"
            required
            value={formData.direccion}
            onChange={handleInputChange}
          />
        </div>

        {/* País */}
        <div className="mb-3">
          <label className="form-label">País</label>
          <select
            name="pais"
            className="form-control"
            required
            value={formData.pais}
            onChange={handleInputChange}
            disabled
          >
            <option value="Chile">Chile</option>
          </select>
        </div>

        {/* Región */}
        <div className="mb-3">
          <label className="form-label">Región</label>
          <input
            type="text"
            name="region"
            className="form-control"
            placeholder="Ingresa tu región"
            required
            value={formData.region}
            onChange={handleInputChange}
          />
        </div>

        {/* Comuna */}
        <div className="mb-3">
          <label className="form-label">Comuna</label>
          <input
            type="text"
            name="comuna"
            className="form-control"
            placeholder="Ingresa tu comuna"
            required
            value={formData.comuna}
            onChange={handleInputChange}
          />
        </div>

        {/* Mensaje de Error */}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {/* Mensaje de Éxito */}
        {success && (
          <div className="alert alert-success" role="alert">
            ¡Registro exitoso! Redirigiendo...
          </div>
        )}

        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;