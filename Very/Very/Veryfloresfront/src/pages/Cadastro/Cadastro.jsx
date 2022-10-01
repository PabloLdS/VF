import React from 'react';
import { useState } from 'react'
import './Cadastro.css'
import { Footer } from '../Components/footer/style';
import { App } from '../Components/Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import axios from 'axios';


export function Cadastro(){

    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [show, setShow] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post("http://localhost:4000/usuario/novo", {
                nomeUser : name,
                emailUser : email,
                senhaUser : password
            })
            console.log(resp.data)
            navigate("/Sobre")
        }catch {
            console.log("Deu muito errado" )
        }
      };

    return(
        <>
        <App />
            <div className='login'>

                <div className="login-right">
                <h1>Crie sua conta</h1>

            <form className='form' onSubmit={handleSubmit}>

                <div className="login-loginInputUser">
                    <FaUser />
                    <input 
                    type="text"
                    placeholder="Nome completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                    placeholder="Senha"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                CADASTRAR
                </button>
            </form>

                </div>

            </div>
        <Footer />
        </>
    )
}