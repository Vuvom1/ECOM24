import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import defaultAvatar from '../../../images/player/default_image.png'
import {Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material';


function PlayerBadge({flagUrl, playerImageUrl, firstName, surName, position}) {

    const handleImgLoadingError = (e) => {

        e.target.src = defaultAvatar;
    
      };

    return (
        <>
        <Card className='player-badge'>
            <CardActionArea >
                <img src={flagUrl} className='flag-item' ></img>
                <CardMedia 
                    component="img"
                    height="auto"
                    width="100%"
                    image={playerImageUrl != "" ? playerImageUrl : defaultAvatar}
                    
                    onError={(e) => handleImgLoadingError(e)}
                />

                <CardContent className='player-badge_content'>
                    {/* <Typography variant='subtitle1' >{surName}</Typography> */}
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