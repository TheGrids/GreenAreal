import { FC } from "react";
import chainsawPNG from '../../../../assets/chainsaw.png'
import { Link } from "react-router-dom";

const ThirdCard: FC = () => {

    return (
        <Link to={import.meta.env.VITE_BASE_URL + '/search?WoodDestroyer'} className='main_content_card_third'>
            <img src={chainsawPNG} alt="WoodDestroyer series"/>
            <div style={{position: 'absolute', margin:'12px 10px'}}>WoodDestroyer<br/>series</div>
        </Link>
    );
};

export default ThirdCard;