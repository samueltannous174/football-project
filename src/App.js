import myImage from './/images/fo8.png';
import {IoMdFootball} from "react-icons/io";
import CustomizedMenus from './menuList'
import {FaBars} from "react-icons/fa";
import {useEffect, useState} from "react";
import {getCountries} from './components/apis'
import FavoriteCountry from './components/country/favoriteCountry'
import {Route, Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import style from './App.module.css'


const styles = {
    container: {
        width: '99vw',
        height: '120vh',
        display: 'flex',
        flexDirection: 'column', // Set flex direction to column to stack header above content
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${myImage})`, // Apply the background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: 'saturate(30%)',
        marginTop: 0
    },
};

function App() {
    const [sidebar, SetSidebar] = useState(false);
    const nav = useNavigate()



    const sidebarCheck = (sidebar) => {
        if (sidebar) {
            return (<div className={style.sidebar}>
                <button className={style.sidebarBtn}>
                    first
                </button>
                <button className={style.sidebarBtn}>
                    second
                </button>
                <button className={style.sidebarBtn}>
                    third
                </button>

            </div>)
        }
        return null
    }
    const sidebarOn = () => {
        if (sidebar) {
            return SetSidebar(false)

        }
        return SetSidebar(true)

    }

    const changeRouteToFav = () => {
        nav('/favorite')
    }



    return (
        <div className={style.App}>
            <div className={style.titleCon}>
                <div className={style.main}>
                    <h1 className={style.header}>
                        welcome to world of football <IoMdFootball/>
                    </h1>
                    <div className={style.part2}>
                        <CustomizedMenus/>
                        <CustomizedMenus/>

                        <FaBars className={style.bars}onClick={() => sidebarOn()}/>

                    </div>


                </div>

            </div>

            <div className={style.part3}>
                <div style={styles.container}>
                    <button className={style.btn} onClick={() => changeRouteToFav()}>play now</button>
                </div>
                {sidebarCheck(sidebar)}
            </div>
        </div>
    );
}

export default App;
