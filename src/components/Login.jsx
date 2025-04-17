import React, { useState } from 'react';
import Logo from '../assets/Logo.png'; // Asegúrate de que la ruta sea correcta

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('cliente'); // Default to 'cliente'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      console.log('Iniciar sesión con:', { email, password });
      // Aquí puedes agregar lógica para verificar el inicio de sesión
    } else {
      console.log('Registrar cuenta con:', {
        name,
        lastName,
        phone,
        email,
        userType,
        password,
      });
      // Aquí puedes agregar lógica para registrar un nuevo usuario
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistered ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>

        {!isRegistered && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Apellido</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Número de Teléfono</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tipo de Usuario</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full p-2 border rounded"
                required
              >
                <option value="cliente">Cliente</option>
                <option value="vendedor">Vendedor</option>
              </select>
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#c49a6c] text-white py-2 rounded hover:bg-[#b88a5f]"
        >
          {isRegistered ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
        <p
          className="text-sm text-center text-gray-600 mt-4 cursor-pointer"
          onClick={() => setIsRegistered(!isRegistered)}
        >
          {isRegistered
            ? '¿No tienes cuenta? Regístrate'
            : '¿Ya tienes cuenta? Inicia sesión'}
        </p>
      </form>
      {/* Mensaje de bienvenida */}
      <p className="text-center text-gray-700 mt-6 px-4 text-2xl font-bold">
        Bienvenidos a <span className="font-bold">Ahorra Comprando</span>
      </p>
      <p className="text-center text-gray-700 px-4 text-lg">
        Encuentra los mejores precios en productos de tus tiendas locales favoritas.
      </p>
    </div>
  );
};

export default Login;