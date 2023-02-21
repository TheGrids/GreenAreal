import { FC } from "react";
import chainsawPNG from '../../../../assets/chainsaw.png'

const ThirdCard: FC = () => {

    return (
        <div className='main_content_card_third'>
            <img src={chainsawPNG} alt=""/>
            <div style={{position: 'absolute', margin:'12px 10px'}}>WoodDestroyer<br/>series</div>
        </div>
    );
};

export default ThirdCard;