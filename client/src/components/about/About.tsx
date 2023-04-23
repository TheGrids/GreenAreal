import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../home/itemsList/Card";
import LoadingSpinner from "../spinner/Spinner";
import { Helmet } from "react-helmet";


const About: FC = () => {

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
                <title>О нас</title>
                <link rel="canonical" href={"https://greenareal.ru/about"} />
            </Helmet>
            <div>О нас</div>
            <div style={{fontFamily: 'PTSans', fontSize: '24px', textAlign: 'start'}}>Мы - GreenAreal, профессиональная компания по продаже первоклассной садовой техники и приспособлений. Мы присутствуем на рынке уже более 10 лет и пытаемся радовать Вас своим удобным сервисом, быстрой поддержкой и качественным обслуживанием.</div>
            <div style={{fontFamily: 'PTSans', fontSize: '30px', margin: '50px auto'}}>Хочешь присоединиться к нашей команде? <Link style={{fontFamily: 'InterB'}} to={import.meta.env.VITE_BASE_URL + '/work'}>Подавай заявку</Link></div>
        </div>
    );
    }

export default About;