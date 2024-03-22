import * as React from 'react';
import {getTeams,getCompetions} from "../apis";
import {useEffect, useState} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useNavigate} from "react-router-dom";
import ActionAreaCardTeam from "./teamCard";
import {useContext} from "react";
import {CartContext} from "../country/Provider";
const FavoriteTeam=()=>{
    console.log('team')
    const [teams,SetTeams]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const[index,SetIndex]=useState(0)

    useEffect(() => {
        getTeams().then(teamsA => {
            SetTeams(teamsA)
            setIsLoading(false)
        })
        // console.log(teams)
    }, [])


    const increaseIndex=()=>{
        if(index===teams.length-1){
            SetIndex(0)
        }
        else{
            SetIndex(index+1)
        }
    }
    const decreaseIndex=()=>{
        if(index===0){
            SetIndex(teams.length-1)
        }
        else{
            SetIndex(index-1)

        }
    }
    const changeRouteToFav = () => {

    }

    return(<div>
        <div className="main2">
            <h1 className="h1">lets get started !</h1>
            <h1 className="h11">choose your favorite team </h1>
            {isLoading ? <div>Loading ...</div>:(<div className="container">
                <AiOutlineArrowLeft className="arrows" onClick={() => decreaseIndex()}/>
                <ActionAreaCardTeam team={teams[index]}/>
                <AiOutlineArrowRight className="arrows" onClick={() => increaseIndex()}/>
            </div>)}
        </div>
        <Button className="btnnn"  onClick={()=> changeRouteToFav()} variant="contained" endIcon={<SendIcon /> }>
            Next
        </Button>

    </div>)
}


export default FavoriteTeam