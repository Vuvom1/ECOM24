import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import {Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material';


function PlayerBadge({flagUrl, playerImageUrl, firstName, surName, position}) {
    return (
        <>
        <Card className='player-badge'>
            <CardActionArea>
                <img src={flagUrl} className='flag-item' ></img>
                <CardMedia 
                    component="img"
                    height="auto"
                    width="100%"
                    image={playerImageUrl}
                    alt="green iguana"
                />

                <CardContent className='player-badge_content'>
                    <Typography variant='subtitle1' >{surName}</Typography>
                    <Typography variant='h6' fontWeight='bold'  >{firstName.toUpperCase()} </Typography>
                   
                   
                </CardContent>

                <Divider variant='middle' />

                <CardContent className='player-badge_content'>
                    <Typography variant='subtitle2'>{position.toUpperCase()}</Typography>
                </CardContent>

               
            </CardActionArea>
        </Card>
        </>
    )
}

export default PlayerBadge;