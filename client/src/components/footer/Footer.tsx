import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer: FC = () => {

    const link = import.meta.env.VITE_BASE_URL

  return (
      <div className='main_footer'>
        <div className='footer_column'>
            <div style={{fontSize: '24px', fontFamily: 'InterB'}}>GreenAreal</div>
            <Link to={link}>Главная</Link>
            <Link to={link + '/search?SomeText'}>Поиск</Link>
            <Link to={link + '/cart'}>Корзина</Link>
            <Link to={link + '/products'}>Все товары</Link>
        </div>
        <div className='footer_column'>
            <div style={{fontSize: '24px', fontFamily: 'InterB'}}>Компания</div>
            <Link to={link + '/about'}>О нас</Link>
            <Link to={link + '/work'}>Работа</Link>
        </div>
        <div className='footer_column'>
            <div style={{fontSize: '24px', fontFamily: 'InterB'}}>Мы в соц. сетях:</div>
            <div>ВКонтакте</div>
            <div>Twitter</div>
            <div>Facebook</div>
        </div>
      </div>
  );
};
  
export default Footer;