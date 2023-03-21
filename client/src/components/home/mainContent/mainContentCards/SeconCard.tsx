import { FC } from "react";
import { Link } from "react-router-dom";
import trimmerIMG from '../../../../assets/trimmer.png'

const SecondCard: FC = () => {

    const product_url = import.meta.env.VITE_BASE_URL + '/product/1'

    return (
        <Link to={product_url}>
            <div className='main_content_card_second'>
                <img src={trimmerIMG} alt="GRASSCLEANER Lite"/>
                <div style={{position: 'absolute'}}>
                    <div style={{borderRadius: '12px 12px 0px 12px'}} className="text">GRASSCLEANER</div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <div style={{borderRadius: '0px 0px 12px 12px', marginBottom: '8px'}} className="text">Lite</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SecondCard;