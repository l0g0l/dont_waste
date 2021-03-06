//Axios para solicitudes HTTP y LocalStorage para información de usuario y JWT.
import axios from "axios";

const API_URL = "/api/auth/";


//Envía nombre , apellidos, correo electrónico, contraseña
const register = (name, lastname, email, password) => {
    return axios.post(API_URL + "signup", {
        name,
        lastname,
        email,
        password,
    });
};

//Envía email y contraseña y guarda JWT en el LocalStorage
const login = (email, password) => {
    return axios.post(API_URL + "login", {
        email,
        password,
    })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

//Elimina JWT del LocalStorage
const logout = () => {
    localStorage.removeItem("user");
};

//obtiene información de usuario almacenada (incluido JWT)
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const functionsAuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};
export default functionsAuthService
