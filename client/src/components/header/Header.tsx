import { FC } from 'react';
import { useTheme } from '../../hooks/useTheme'
import searchSVG from '../../assets/search.svg'
import arrowSVG from '../../assets/arrow.svg'
import './Header.css'

const Header: FC = () => {

    const [theme, handleChange] = useTheme('dark');

    return (
        <div>
            <header>
                <nav>
                    <div className='nav_box'>
                        <div className='cname_box'>
                            <a href={import.meta.env.VITE_BASE_URL} className='cname_box_text'>GreenAreal</a>
                            <span className='cname_box_catalog'>
                                <div style={{pointerEvents: 'none', userSelect: 'none', margin: '0 12px'}}>Каталог</div>
                                <img src={arrowSVG} alt="" style={{pointerEvents: 'none', userSelect: 'none'}}/>
                            </span>
                        </div>
                        <div className='search_box'>
                            <input type="search" placeholder='Поиск по сайту'/>
                            <span className='search_button'>
                                <img src={searchSVG} alt="" style={{pointerEvents: 'none', userSelect: 'none'}}/>
                            </span>
                        </div>
                        <div className='nav_buttons'>
                            <div className='nav_some_button'></div>
                            <div className='nav_some_button'></div>
                            <div className='nav_some_button'></div>
                            <div className='nav_some_button'></div>
                        </div>
                    </div>
                </nav>
            </header>
            <span>Изменить тему</span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default Header;