import {FC, useState} from 'react';
import '../auth.css';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/loader";

const signIn: FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
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

        axios.post(import.meta.env.VITE_API_URL + `/auth/signin`, {
            email: user.email,
            password: user.password
        }, { withCredentials: true })
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
                <title>Вход</title>
                <link rel="canonical" href="https://greenareal.ru/signin" />
            </Helmet>
            <h2>Вход</h2>
            <form method="post" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required/>
                <input type="submit" value="Войти"/>
                <div><Link to='/signup'>Зарегистрироваться</Link></div>
                {isLoading ? <Loader/> : <div/>}
            </form>
        </div>
    );
};

export default signIn;