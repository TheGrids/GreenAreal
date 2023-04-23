import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer: FC = () => {

    const link = import.meta.env.VITE_BASE_URL

  return (
      <div className='main_footer'>
        <div className='footer_column'>
            <div style={{fontSize: '24px'}}>GreenAreal</div>
            <Link to={link}>Главная</Link>
            <Link to={import.meta.env.VITE_BASE_URL + '/search?SomeText'}>Поиск</Link>
        </div>
        <div className='footer_column'>
            <div style={{fontSize: '24px'}}>Компания</div>
            <div>О нас</div>
        </div>
        <div className='footer_column'>
            <div style={{fontSize: '24px'}}>Мы в соц. сетях:</div>
            <div>ВКонтакте</div>
            <div>Twitter</div>
            <div>Facebook</div>
            <div>Habr</div>
        </div>
      </div>
  );
};
  
export default Footer;