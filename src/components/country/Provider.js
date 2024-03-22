import React, {createContext, useEffect, useState} from "react";
import {getCompetions, getCountries} from "../apis";

export const CartContext=createContext();

export const CartProvider=({children})=> {
    console.log('rendering')

    const [countryIdes,setCountryIdes]=useState([])
    const [countries,setCountires]=useState([])
    const [competitions,setCompetions]=useState([])
    const [isLoading, setIsLoading] = useState(true)


    const WANTED_COUNTRIES = ['England','Spain','France','Italy','Portugal']

    useEffect(async () => {
        const idsResponse=[]
        const countriesResponse = await getCountries();
        setCountires(countriesResponse)
        console.log(countriesResponse)
        countriesResponse.forEach((obj)=>{
            if(WANTED_COUNTRIES.includes(obj.country_name)) {
                idsResponse.push(obj.country_id)
            }
        })
        setCountryIdes([...idsResponse])
        const competitionsPromises=[]
        idsResponse.forEach(
            (id)=> {
            competitionsPromises.push(getCompetions(id))
        })
        Promise.all(competitionsPromises).then(competitionsResponse => {
            setCompetions(competitionsResponse)
            setIsLoading(false)
        })
        console.log(competitions)

    }, [])
    return (
        <CartContext.Provider value={{countryIdes, countries, isLoading,competitions}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider