import React, {useEffect, useState, createContext, useContext} from "react";
import ActionAreaCard from './Countrycard'
import style from './favoriteCountryStyle.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {getCountries} from "../apis";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from "react-router-dom";
import {CartContext} from "./Provider";

const WANTED_COUNTRIES = ['England','Spain','France','Italy','Portugal']

const FavoriteCountry = ()=>{
    console.log('country')

    const[index,SetIndex]=useState(0) 
    const nav = useNavigate()
    const {countries, isLoading} = useContext(CartContext)
    const increaseIndex=()=>{
        if(index < countries.length - 1){
            SetIndex(index+1)
        } else {
            SetIndex(0)
        }
    }
    const decreaseIndex=()=>{
        if(index===0){
            SetIndex(countries.length - 1)
        }
        else{
            SetIndex(index-1)
        }
    }
    const changeRouteToFav = () => {
        // setSelectedCountry(countries[index])
        nav('/Favorite_team')
    }


    return(
        <div >
            <div className="main2">
                <h1 className="h1">lets get started !</h1>
                <h1 className="h11">choose your favorite country</h1>
                {isLoading ? <div>Loading ...</div>:(<div className="container">
                    <AiOutlineArrowLeft className="arrows" onClick={() => decreaseIndex()}/>
                    <ActionAreaCard country={countries[index]}/>
                    <AiOutlineArrowRight className="arrows" onClick={() => increaseIndex()}/>
                </div>)}
            </div>
            <Button className="btnnn"  onClick={()=> changeRouteToFav()} variant="contained" endIcon={<SendIcon /> }>
                Next
            </Button>
        </div>

    )
}

export default FavoriteCountry
