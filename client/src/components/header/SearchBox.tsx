import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import Object from "./Object";
import { Link, useNavigate } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string
    image: string
}

const SearchBox: FC = () => {

    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [display, setDisplay] = useState('none');
    const [borderRadius, setBorderRadius] = useState('12px');
    const [products, setProducts] = useState<Product[]>([]);

    const searchInput = useRef(document.createElement("input"))

    const searchProducts = async () => {
        if (query.length > 0) {
            const response = await axios.get(import.meta.env.VITE_API_URL + "/products", { params: { q: query } })
            setProducts(response.data)
        } else {
            setProducts([])
        }
    };

    useEffect(() => {
        if (isFocused) {
            setDisplay('block');
            setBorderRadius('12px 12px 0 0')
        } else {
            setDisplay('none');
            setBorderRadius('12px')
        }
    }, [isFocused]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          // ваша функция, которую нужно вызвать
          setQuery(value);
        }, 300);
    
        // очистка таймера при каждом изменении value
        return () => clearTimeout(delayDebounceFn);
      }, [value]);

    useEffect(() => {
        searchProducts()
    }, [query])

    const navigate = useNavigate();
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (query.length > 0) {
            navigate('/search?' + value, {replace: true});
            searchInput.current.blur()
            setIsFocused(false)
            setValue("")
            setProducts([])
        }
      };

    return (
        <div>
            <form style={{borderRadius}} onFocus={() => setIsFocused(true)} className='search_box' onSubmit={handleSubmit}>
                <input ref={searchInput} type="search" placeholder='Поиск по сайту' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onChange={handleSubmit} className='search_button'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black"/>
                    </svg>
                </button>
            </form>
            <div className="presearch_suggests" style={{display}}>
                {products.map((item) => (
                    <div onClick={() => { setIsFocused(false); setValue("") }}>
                        <Object key={item.id} id={item.id} name={item.name} category={item.category} image={item.image}/>
                    </div>
                ))}
            </div>
            <div className="presearch_overlay" style={{display}} onClick={() => setIsFocused(false)}></div>
        </div>
        
    )
}

export default SearchBox;