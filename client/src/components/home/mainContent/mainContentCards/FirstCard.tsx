import { FC } from "react";
import lawnMowerPNG from '../../../../assets/lawnmower.png'

const FirstCard: FC = () => {

    return (
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
    );
};

export default FirstCard;