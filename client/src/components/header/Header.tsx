import { FC } from 'react';
import { useTheme } from '../../hooks/useTheme'
import searchSVG from '../../assets/search.svg'
import arrowSVG from '../../assets/arrow.svg'
import statsSVG from '../../assets/stats.svg'
import cartSVG from '../../assets/cart.svg'
import profileSVG from '../../assets/profile.svg'
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
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black"/>
                                </svg>
                            </span>
                        </div>
                        <div className='nav_buttons'>
                            <label className='nav_some_button theme'>
                                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.2852 17.6133C26.2248 17.4185 26.1032 17.2484 25.9386 17.1281C25.774 17.0078 25.575 16.9437 25.3711 16.9453L25.1133 16.9922C23.4348 17.4555 21.6634 17.4652 19.9799 17.0205C18.2964 16.5757 16.7609 15.6923 15.5303 14.4605C14.2996 13.2286 13.4177 11.6923 12.9746 10.0084C12.5314 8.32443 12.5429 6.55307 13.0078 4.875C13.0308 4.80703 13.0427 4.73581 13.043 4.66406C13.0541 4.51283 13.0279 4.36117 12.9667 4.22243C12.9055 4.08368 12.8112 3.9621 12.692 3.86836C12.5728 3.77462 12.4324 3.71159 12.2831 3.68482C12.1338 3.65806 11.9803 3.66837 11.8359 3.71484C9.8658 4.26706 8.07457 5.32548 6.64044 6.78481C5.20631 8.24415 4.17926 10.0535 3.66145 12.033C3.14364 14.0125 3.15313 16.093 3.68896 18.0677C4.22479 20.0423 5.2683 21.8423 6.71567 23.2885C8.16305 24.7347 9.96385 25.7767 11.9389 26.311C13.914 26.8452 15.9946 26.853 17.9736 26.3336C19.9527 25.8142 21.7612 24.7856 23.2194 23.3503C24.6776 21.915 25.7345 20.1229 26.2852 18.1523C26.3441 17.9775 26.3441 17.7881 26.2852 17.6133ZM15 24.8438C12.7547 24.8455 10.5763 24.0797 8.82605 22.6733C7.07583 21.2668 5.85901 19.3043 5.37744 17.1113C4.89588 14.9182 5.1785 12.6265 6.17844 10.6161C7.17838 8.60577 8.83553 6.99768 10.875 6.05859C10.6543 7.82721 10.8404 9.62286 11.419 11.3087C11.9976 12.9944 12.9535 14.5259 14.2138 15.7862C15.4741 17.0465 17.0056 18.0024 18.6913 18.581C20.3771 19.1596 22.1728 19.3457 23.9414 19.125C23.1485 20.8294 21.8864 22.2725 20.3028 23.2853C18.7192 24.2982 16.8798 24.8387 15 24.8438Z" fill='black'/>
                                </svg>
                            </label>
                            <div className='nav_some_button'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.75 3.75H6.25C5.58696 3.75 4.95107 4.01339 4.48223 4.48223C4.01339 4.95107 3.75 5.58696 3.75 6.25V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V6.25C26.25 5.58696 25.9866 4.95107 25.5178 4.48223C25.0489 4.01339 24.413 3.75 23.75 3.75ZM23.75 23.75H6.25V6.25H23.75V23.75ZM11.25 21.25H8.75V15H11.25V21.25ZM16.25 21.25H13.75V8.75H16.25V21.25ZM21.25 21.25H18.75V12.5H21.25V21.25Z" fill="black"/>
                                </svg>
                            </div>
                            <div className='nav_some_button'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.25 25.3125C11.25 25.6833 11.14 26.0459 10.934 26.3542C10.728 26.6625 10.4351 26.9029 10.0925 27.0448C9.74992 27.1867 9.37292 27.2238 9.00921 27.1515C8.64549 27.0791 8.3114 26.9005 8.04918 26.6383C7.78695 26.3761 7.60837 26.042 7.53603 25.6783C7.46368 25.3146 7.50081 24.9376 7.64273 24.595C7.78464 24.2524 8.02496 23.9595 8.33331 23.7535C8.64165 23.5475 9.00416 23.4375 9.375 23.4375C9.87228 23.4375 10.3492 23.635 10.7008 23.9867C11.0525 24.3383 11.25 24.8152 11.25 25.3125ZM21.5625 23.4375C21.1917 23.4375 20.8291 23.5475 20.5208 23.7535C20.2125 23.9595 19.9721 24.2524 19.8302 24.595C19.6883 24.9376 19.6512 25.3146 19.7235 25.6783C19.7959 26.042 19.9745 26.3761 20.2367 26.6383C20.4989 26.9005 20.833 27.0791 21.1967 27.1515C21.5604 27.2238 21.9374 27.1867 22.28 27.0448C22.6226 26.9029 22.9155 26.6625 23.1215 26.3542C23.3275 26.0459 23.4375 25.6833 23.4375 25.3125C23.4375 24.8152 23.24 24.3383 22.8883 23.9867C22.5367 23.635 22.0598 23.4375 21.5625 23.4375ZM26.8828 8.69531L23.7891 19.5234C23.6192 20.1104 23.2635 20.6265 22.7754 20.9941C22.2873 21.3618 21.6931 21.5612 21.082 21.5625H9.85547C9.24439 21.5612 8.65021 21.3618 8.16211 20.9941C7.67401 20.6265 7.31832 20.1104 7.14844 19.5234L4.05469 8.70703V8.68359L2.90625 4.6875H0.9375C0.68886 4.6875 0.450403 4.58873 0.274587 4.41291C0.0987721 4.2371 0 3.99864 0 3.75C0 3.50136 0.0987721 3.2629 0.274587 3.08709C0.450403 2.91127 0.68886 2.8125 0.9375 2.8125H2.90625C3.31348 2.81398 3.7093 2.94717 4.03457 3.19218C4.35985 3.4372 4.59712 3.78088 4.71094 4.17187L5.66016 7.5H25.9805C26.1257 7.49985 26.2689 7.53343 26.399 7.5981C26.529 7.66277 26.6422 7.75676 26.7297 7.87265C26.8172 7.98855 26.8766 8.12319 26.9031 8.26595C26.9297 8.40871 26.9227 8.5557 26.8828 8.69531ZM24.7383 9.375H6.19922L8.95313 19.0078C9.00918 19.2038 9.1276 19.3762 9.29042 19.4988C9.45325 19.6215 9.65162 19.6877 9.85547 19.6875H21.082C21.2859 19.6877 21.4842 19.6215 21.6471 19.4988C21.8099 19.3762 21.9283 19.2038 21.9844 19.0078L24.7383 9.375Z" fill="black"/>
                                </svg>
                            </div>
                            <div className='nav_some_button'>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5Z" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.33875 22.9325C5.33875 22.9325 8.125 19.375 15 19.375C21.875 19.375 24.6625 22.9325 24.6625 22.9325M15 15C15.9946 15 16.9484 14.6049 17.6516 13.9017C18.3549 13.1984 18.75 12.2446 18.75 11.25C18.75 10.2554 18.3549 9.30161 17.6516 8.59835C16.9484 7.89509 15.9946 7.5 15 7.5C14.0054 7.5 13.0516 7.89509 12.3483 8.59835C11.6451 9.30161 11.25 10.2554 11.25 11.25C11.25 12.2446 11.6451 13.1984 12.3483 13.9017C13.0516 14.6049 14.0054 15 15 15Z" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;