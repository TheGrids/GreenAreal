import { FC } from "react";
import { Link } from "react-router-dom";
import lawnMowerPNG from '../../../../assets/lawnmower.png'

const FirstCard: FC = () => {

    const product_url = import.meta.env.VITE_BASE_URL + '/product/2'

    return (
        <Link to={product_url} style={{height: '100%'}}>
            <div className='main_content_card_first'>
                <img src={lawnMowerPNG} alt=""/>
                <div className="block_text">
                    <div>
                        <div style={{fontSize: '48px', fontFamily: 'InterB', marginTop: '45px'}}>GRASSCLEANER V3</div>
                        <div style={{fontSize: '24px', fontFamily: 'InterB'}}>Качественно. Практично. Надёжно.</div>
                    </div>
                    <div style={{marginBottom: '30px'}}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <div className="old_cost">Цена: 79990 руб.</div>
                        </div>
                        <div className="new_cost">Цена: 49990 руб.</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FirstCard;