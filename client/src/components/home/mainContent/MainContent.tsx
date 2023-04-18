import { FC } from "react";
import './MainContent.css'
import './MainContentM.css'
import FirstCard from "./mainContentCards/FirstCard";
import SecondCard from "./mainContentCards/SeconCard";
import ThirdCard from "./mainContentCards/ThirdCard";
import FirstCardM from "./mainContentCards/FirstCardM";

const MainContent: FC = () => {

    return (
        <div>
            <div className='main_content'>
                <FirstCard/>
                <span className='main_content_some_cards'>
                    <SecondCard/>
                    <ThirdCard/>
                </span>
            </div>
            <div className="mobile_content">
                <FirstCardM/>
            </div>
        </div>
    );
};

export default MainContent;