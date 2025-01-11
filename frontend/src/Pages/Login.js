import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {   
            const response = await axios.post("http://localhost:4000/auth/login", {
                email,
                password
            });
            if (response.data.success) {
                localStorage.setItem('email',email)
                navigate("/", { state: { id: email } });
            } else {
                alert(response.data.message || "User has not signed up");
            }
        } catch (error) {
            alert("Wrong details or server error");
            console.error(error);
        }
    }

    return (
        <div className="login">
            <section className="vh-100" style={{ backgroundColor: '#3d7e8e' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Login</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block" onClick={submit} type="submit" style={{backgroundColor:"#3d7e8e"}}>Login</button>
                                </div>
                                    <Link to="/register" className="btn btn-link btn-lg btn-block">Signup</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
