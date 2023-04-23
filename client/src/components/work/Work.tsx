import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../home/itemsList/Card";
import LoadingSpinner from "../spinner/Spinner";
import { Helmet } from "react-helmet";
import './Work.css'


const Work: FC = () => {

    let location = useLocation();
    let res = decodeURIComponent(location.search.slice(1))
    let search_api_url = import.meta.env.VITE_API_URL + '/all'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);
    
    return (
        <div className="search_result">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Работа</title>
                <link rel="canonical" href={"https://greenareal.ru/work"} />
            </Helmet>
            <div>Работа</div>
            <div style={{fontSize: '20px'}}>Оставляй заявку и присоединяйся к нам!</div>
            <div id='wrapper' style={{fontSize: '20px'}}>
                <form action='' className='form'>
                    <p className='field required half'>
                    <label className='label required'>Имя</label>
                    <input className='text-input' id='name' name='name' required type='text'/>
                    </p>
                    <p className='field required half'>
                    <label className='label'>E-mail</label>
                    <input className='text-input' id='email' name='email' required type='email'/>
                    </p>
                    <p className='field'>
                    <label className='label'>Пожелания</label>
                    <textarea className='textarea' id='message' name='message'></textarea>
                    </p>
                    <p className='field'>
                    <input className='button' type='submit' value='Отправить'/>
                    </p>
                </form>
            </div>

        </div>
    );
    }

export default Work;