import {FC, useEffect, useState} from 'react';
import '../auth.css';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import axios from 'axios';
import Loader from "../../loader/loader";

const signUp: FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    const handleChange = (e:any) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setIsLoading(true)

        axios.post(import.meta.env.VITE_API_URL + `/auth/signup`, {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="auth_container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Регистрация</title>
                <link rel="canonical" href="https://greenareal.ru/signup" />
            </Helmet>
            <h2>Регистрация</h2>
            <form method="post" onSubmit={handleSubmit}>
                <input type="name" name="name" placeholder="Имя" onChange={handleChange} required/>
                <input type="surname" name="surname" placeholder="Фамилия" onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required/>
                <input type="submit" onChange={handleSubmit} value="Зарегистрироваться"/>
                <div><Link to='/signin'>Вход</Link></div>
                {isLoading ? <Loader/> : <div/>}
            </form>
        </div>
    );
};

export default signUp;