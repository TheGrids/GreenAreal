import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface props{
  id: number
  name: string;
  price: number
  category: string
  image: string
}

const ItemsList: FC<props> = (props) => {

  const image_url = import.meta.env.VITE_API_URL + '/image/products/' + props.image
  const product_url = import.meta.env.VITE_BASE_URL + '/product/' + props.id
  const [buy, setBuy] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [count, setCount] = useState(0)
  const [list, setList] = useState<any>([])
  let lst: any = [];

  

  useEffect(() => {
    var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
    if (itemsFromStorage != null) {
        let b = JSON.parse(itemsFromStorage)
        setList(b)
        if (b.find((lst: { id: number; }) => lst.id == props.id)){
          setBuy(true)
        } else {
          setBuy(false)
        }
    } else {
        setList([])
        setBuy(false)
    }
}, []);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
    if (itemsFromStorage != null) {
      lst = JSON.parse(itemsFromStorage)
      lst.push({id: props.id, 'name': props.name, 'price': props.price, 'image': props.image, 'count': 1})
    } else {
      lst = []
      lst.push({id: props.id, 'name': props.name, 'price': props.price, 'image': props.image, 'count': 1})
    }
    toast("Товар добавлен в корзину.");
    localStorage.setItem('cart', JSON.stringify(lst));
    setBuy(true)
  };

  return (
      <div className='card'>
        <div className='card_img'>
          <Link to={product_url}>
            <img src={image_url} alt={props.name}/>
          </Link>
        </div>
        <div className='card_info'>
          <Link to={product_url}>
            <div>{props.name}</div>
          </Link>
          <div className='card_cart'>
            <div style={{fontFamily: 'InterB', letterSpacing: '-0.05em', fontSize: '20px'}}>{props.price} ₽</div>
            {buy ? (
              <Link to={import.meta.env.VITE_BASE_URL + '/cart'} style={{backgroundColor: 'white', color: 'black'}} className='card_price'>В корзину</Link>
            ) : (
              <div className='card_price' onClick={handleSubmit}>Купить</div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
  );
};
  
export default ItemsList;