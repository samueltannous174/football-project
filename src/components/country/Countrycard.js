import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useState} from "react";

export default function ActionAreaCard({country}) {
    console.log(country)
    return (
        <Card sx={{ maxWidth: 330 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={country.country_logo}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {
                            country.country_name
                        }
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
