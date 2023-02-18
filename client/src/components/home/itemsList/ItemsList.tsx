import { FC } from 'react';
import Card from './Card';
import './ItemsList.css'

interface props{
    name: string;
}

const ItemsList: FC<props> = (props) => {


    return (
        <div className='main_items_list'>
            <div style={{margin: '20px 0'}}>{props.name}</div>
            <div className='cards_list'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
  };
  
export default ItemsList;