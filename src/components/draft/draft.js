import React from 'react';
import style from './draftStyle.module.css'; // Create a CSS file for styling
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useNavigate} from "react-router-dom";

const Draft=()=>{
    const nav = useNavigate()

    const print=()=>{
        console.log('hiiiii')
    }
    const numberOfTimesToRender = 3;

    const componentsToRender = [];
    for (let i = 0; i < numberOfTimesToRender; i++) {
        componentsToRender.push( <Fab color="primary" aria-label="add" className="grid-item" onClick={()=>print()} key={i}>
            <AddIcon />
        </Fab> );
    }
    const changeRouteToFav = () => {
        nav('/Favorite_team')
    }

    return(
        <div className={style.bodyDraft}>

            <div className={style.container}>
                <div className={style.field}>
                    <div className="left">
                        <span className={style.halfwayLine}></span>
                        <span className={style.centreCircle}></span>
                        <span className={style.centreMark}></span>
                        <span className={style.penaltyArea}></span>
                        <span className={style.penaltyMark}></span>
                        <span className={style.penaltyArc}></span>
                        <span className={style.goalArea}></span>
                        <span className={style.cornerArc}></span>

                    </div>
                    <div className={style.right}>
                        <span className={style.halfwayLine}></span>
                        <span className={style.centreCircle}></span>
                        <span className={style.centreMark}></span>
                        <span className={style.penaltyArea}></span>
                        <span className={style.penaltyMark}></span>
                        <span className={style.penaltyArc}></span>
                        <span className={style.goalArea}></span>
                        <span className={style.cornerArc}></span>

                    </div>
                </div>
                <div className={style.gridContainer}>
                    {componentsToRender.map((item,index)=>{
                        if (index===1){
                            return  <Fab color="primary" aria-label="add" className={style.align} onClick={()=>print()}>
                                <AddIcon />
                            </Fab>
                        }
                        else return item
                    })}
                    <Fab color="primary" aria-label="add" className="gridItem" onClick={()=>print()}>
                        <AddIcon />
                    </Fab>
                    <Fab color="primary" aria-label="add" className="grid-item"  onClick={()=>print()}>
                        <AddIcon />
                    </Fab>
                    <Fab color="primary" aria-label="add" className="grid-item" onClick={()=>print()}>
                        <AddIcon />
                    </Fab>
                    <Fab color="primary" aria-label="add" className="grid-item" onClick={()=>print()}>
                        <AddIcon />
                    </Fab>
                    <Fab color="primary" aria-label="add" className="grid-item" onClick={()=>print()}>
                        <AddIcon />
                    </Fab>
                    <Fab color="primary" aria-label="add" className="grid-item" onClick={()=>print()}>
                        <AddIcon />
                    </Fab>



                </div>
            </div>
            <Fab color="primary" aria-label="add" className={style.align2} onClick={()=>print()}>
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="add" className={style.align3} onClick={()=>print()}>
                <AddIcon />
            </Fab>
            <Button className={style.btn2}  onClick={()=> changeRouteToFav()} variant="contained" endIcon={<SendIcon /> }>
                Next
            </Button>
        </div>





    )
}

export default Draft