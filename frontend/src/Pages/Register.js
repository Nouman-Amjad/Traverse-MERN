import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/auth/register", {
                username,
                email,
                password
            });
            if (response.data.success) {
                navigate("/", { state: { id: email } });
            } else {
                setError(response.data.message || "Could not register user");
            }
        } catch (error) {
            setError("Server error or invalid details");
            console.error(error);
        }
    }

    return (
        <div className="register">
            <section className="vh-100" style={{ backgroundColor: '#3d7e8e' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Signup</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeUsernameX">Username</label>
                                        <input type="text" id="typeUsernameX" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={submit} style={{backgroundColor:"#3d7e8e"}}>Register</button>

                                    {error && <p className="error-message">{error}</p>}
                                </div>
                                <div className="text-center mt-3">
                                    <p>OR</p>
                                    <Link to="/login" className="btn btn-link btn-lg">Login Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
