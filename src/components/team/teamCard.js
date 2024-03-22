import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCardTeam({team}) {
    console.log(team)
    return (
        <Card sx={{ maxWidth: 330 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={team.team_badge}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {
                            team.team_name
                        }
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}
