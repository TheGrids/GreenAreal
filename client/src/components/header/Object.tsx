import { FC } from 'react';

interface props{
  name: string;
  category: string
  image: string
}

const Objects: FC<props> = (props) => {

  return (
    <a className='object'>
      <div>{props.name}</div>
    </a>
  );
};
  
export default Objects;