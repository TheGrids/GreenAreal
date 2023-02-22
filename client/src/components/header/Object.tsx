import { FC } from 'react';
import { Link } from 'react-router-dom';

interface props{
  id: number
  name: string
  category: string
  image: string
}

const Objects: FC<props> = (props) => {

  const product_url = import.meta.env.VITE_BASE_URL + '/product/' + props.id

  return (
    <Link to={product_url} className='object'>
      <div>{props.name}</div>
    </Link>
  );
};
  
export default Objects;