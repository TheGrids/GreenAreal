import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    window.scrollTo(0, 0)
    var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
    if (itemsFromStorage != null) {
        let b = JSON.parse(itemsFromStorage)
        setList(b)
        if (b.find((lst: { id: number; }) => lst.id == props.id)){
          setCount(b.find((lst: { id: number; }) => lst.id == props.id).count)
        } else {
          setCount(0)
        }
    } else {
        setList([])
        setCount(0)
    }
}, []);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
    if (itemsFromStorage != null) {
      lst = JSON.parse(itemsFromStorage)
      if (list.find((lst: { id: number; }) => lst.id == props.id)) {
        list.find((lst: { id: number; }) => lst.id == props.id).count += 1
      } else {
        list.push({id: props.id, 'name': props.name, 'price': props.price, 'image': props.image, 'count': 1})
      }
    } else {
      lst = []
      list.push({id: props.id, 'name': props.name, 'price': props.price, 'image': props.image, 'count': 1})
    }
    localStorage.setItem('cart', JSON.stringify(list));
    setCount(1)
  };

  const incr = ((sum: any, id: any) => {
    var itemsFromStorage = localStorage.getItem('cart')
    if (itemsFromStorage != null && sum) {
        let b = JSON.parse(itemsFromStorage)
        b.find((lst: { id: number; }) => lst.id == id).count += 1
        localStorage.setItem('cart', JSON.stringify(b));
        setCount(b.find((lst: { id: number; }) => lst.id == id).count)
    } else if (itemsFromStorage != null && !sum) {
        let b = JSON.parse(itemsFromStorage)
        b.find((lst: { id: number; }) => lst.id == id).count -= 1
        if (b.find((lst: { id: number; }) => lst.id == id).count < 1) {
            b.splice(b.findIndex((lst: { id: number; }) => lst.id == id), 1)
            setCount(0)
        }
        localStorage.setItem('cart', JSON.stringify(b));
        setCount(b.find((lst: { id: number; }) => lst.id == id).count)
        
    } else {
        console.log('Ошибка. Очистите localstorage и перезапустите страницу.')
    }
})

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
            {count > 0 ? (
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div onClick={() => incr(false, props.id)} style={{width: '30px', height: '30px'}} className="incr">-</div>
                <div style={{margin: '0 5px'}} className="count">{count}</div>
                <div onClick={() => incr(true, props.id)} style={{width: '30px', height: '30px'}} className="incr">+</div>
              </div>
            ) : (
              <div className='card_price' onClick={handleSubmit}>Купить</div>
            )}
          </div>
        </div>
      </div>
  );
};
  
export default ItemsList;