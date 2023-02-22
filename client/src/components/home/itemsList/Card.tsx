import { FC } from 'react';

interface props{
  name: string;
  price: number
  category: string
  image: string
}

const ItemsList: FC<props> = (props) => {

  const url = import.meta.env.VITE_API_URL + '/image/category/'+ props.category.toLowerCase() + '/' + props.image

  return (
      <div className='card'>
        <div className='card_img'>
          <img src={url} alt=""/>
        </div>
        <div className='card_info'>
          <a>{props.name}</a>
          <div className='card_cart'>
            <div style={{fontFamily: 'InterB', letterSpacing: '-0.05em', fontSize: '20px'}}>{props.price} ₽</div>
            <div className='card_price'>Купить</div>
          </div>
        </div>
      </div>
  );
};
  
export default ItemsList;