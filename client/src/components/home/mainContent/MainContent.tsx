import { FC } from "react";
import './mainContent.css'
import FirstCard from "./mainContentCards/FirstCard";
import SecondCard from "./mainContentCards/SeconCard";
import ThirdCard from "./mainContentCards/ThirdCard";

const MainContent: FC = () => {

    return (
        <div className='main_content'>
            <FirstCard/>
            <span className='main_content_some_cards'>
                <SecondCard/>
                <ThirdCard/>
            </span>
        </div>
    );
};

export default MainContent;