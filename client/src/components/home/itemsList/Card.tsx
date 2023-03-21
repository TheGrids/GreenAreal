import { FC } from 'react';
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
            <div className='card_price'>Купить</div>
          </div>
        </div>
      </div>
  );
};
  
export default ItemsList;