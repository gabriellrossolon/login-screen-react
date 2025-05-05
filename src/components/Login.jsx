import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        clearForm();

        alert("Enviando os dados: " + username + " " + password);    
    }

    const clearForm = () => {
        setUsername("");
        setPassword("");
    }

    return (
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md p-6 rounded-3xl shadow-2xl bg-white/60">
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl text-center mb-6 font-semibold text-gray-800">Acesse o Sistema</h1>
      
              <div>
                <div className="flex items-center border rounded-xl border-gray-600 px-2 mb-2">
                  <FaUser className="text-gray-600"/>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="py-2 px-1 outline-none flex-1 text-gray-700"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="flex items-center border rounded-xl border-gray-600 px-2">
                  <FaLock className="text-gray-600" />
                  <input
                    type="password"
                    placeholder="Senha"
                    className="py-2 px-1 outline-none flex-1 text-gray-700"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <input className="cursor-pointer" type="checkbox" />
                  <span>Lembre de mim</span>
                </div>
              </div>
      
              <div className="mt-2">
                <button
                  type="submit"
                  className="text-2xl w-full py-1 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition duration-300 cursor-pointer">
                    Entrar
                </button>
                <a href="#" className="text-blue-700 hover:underline hover:text-blue-800">Esqueci minha senha</a>
              </div>

              <div className="mt-2 text-center text-gray-600">
                <p>Não tem uma conta? <a href="#" className="text-blue-700 hover:underline hover:text-blue-800">Registrar-se</a></p>
              </div>
            </form>
          </div>
        </div>
      );
      
}

export default Login
