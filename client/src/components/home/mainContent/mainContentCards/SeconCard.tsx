import { FC } from "react";
import trimmerIMG from '../../../../assets/trimmer.png'

const SecondCard: FC = () => {

    return (
        <div className='main_content_card_second'>
            <img src={trimmerIMG} alt=""/>
            <div style={{position: 'absolute'}}>
                <div style={{borderRadius: '12px 12px 0px 12px'}} className="text">GRASSCLEANER</div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div style={{borderRadius: '0px 0px 12px 12px', marginBottom: '8px'}} className="text">Lite</div>
                </div>
            </div>
            
        </div>
    );
};

export default SecondCard;