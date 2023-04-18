import { FC } from "react";
import { Link } from "react-router-dom";
import lawnMowerPNG from '../../../../assets/lawnmower.png'

const FirstCard: FC = () => {

    const product_url = import.meta.env.VITE_BASE_URL + '/product/2'

    return (
        <Link to={product_url}>
            <div className='mobile_content_card_first'>
                <img src={lawnMowerPNG} alt="GRASSCLEANER V3"/>
                <div className="mobile_content_card_first_block_text">
                    <div>
                        <div style={{fontSize: '9vw', fontFamily: 'InterB', margin: '0 10px'}}>GRASSCLEANER V3</div>
                        {/* <div style={{fontSize: '24px', fontFamily: 'InterB'}}>Качественно. Практично. Надёжно.</div> */}
                    </div>
                    <div style={{marginBottom: '30px'}}>
                        {/* <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <div className="old_cost">Цена: 79990 руб.</div>
                        </div> */}
                        <div className="new_cost">Цена: 49990 руб.</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FirstCard;