import React, { FC, useEffect, useState } from "react";
import "./Result.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../home/itemsList/Card";
import LoadingSpinner from "../spinner/Spinner";
import { Helmet } from "react-helmet";

interface IResult {
    id: number;
    name: string;
    price: number
    category: string
    image: string
}

const Result: FC = () => {

    let location = useLocation();
    let res = decodeURIComponent(location.search.slice(1))
    let search_api_url = import.meta.env.VITE_API_URL + '/products'
    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setResults] = useState<IResult[]>([]);
    
    useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoaded(false)
        axios
            .get<IResult[]>(search_api_url, {
                params: {
                    q: res
                }
            })
            .then(response => {
                setResults(response.data)
                setIsLoaded(true)
            })
            .catch(error => {
                setError(error)
                console.log(error.response.data.error)
                setIsLoaded(true)
            })
    }, [location]);

    if (error) {
        return <div>Ошибка: {error}</div>;
    } else if (!isLoaded) {
        return <div><LoadingSpinner/></div>;
    } else {
        return (
            <div className="search_result">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Поиск: {res}</title>
                    <link rel="canonical" href={"http://greenareal.ru/search" + location.search} />
                </Helmet>
                <div>Поиск: {res}</div>
                <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', justifyContent: 'center'}}>
                    {results.length ? (results.map(item => (
                        <div style={{margin: '10px'}}><Card key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image}/></div>
                    ))
                    ) : (
                        <div style={{fontSize: '24px'}}>Ничего не найдено :(</div>
                    )}
                </div>
            </div>
        );
        }
    }

export default Result;