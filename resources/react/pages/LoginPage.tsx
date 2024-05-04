
import React, { useState } from "react";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import AuthService from "../service/Auth.service";


export const LoginPage = () => {

    let [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    let [error, setError] = useState<string>();
    let [email, setEmail] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let navigate: NavigateFunction = useNavigate();

    let login = () => {
        navigate("/dashboard");
        // setIsFormSubmitting(true);
        // AuthService.login({ email, password })
        //     .then((response) => {
        //         navigate("/dashboard");
        //     })
        //     .catch((e) => {
        //         setError(e.response.data.message);
        //         setIsFormSubmitting(false);
        //     });
    };

    return (
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="col">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>Ferias Camelidos</h3>
                            </a>
                            <h3>Ingresar</h3>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Usuario o Correo Electronico</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Recordar usuario</label>
                            </div>
                            <a href="">Olvidaste tu Password</a>
                        </div>

                            <button class="btn btn-primary py-3 w-100 mb-4" onClick={login}>Ingresar
                                
                            </button>
                        <p class="text-center mb-0">Todavia no tienes una cuenta? <a href="#">Registrarse</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}