import React from 'react';
import '../../../App.css';
import '../../../styles/Team.css';
import { Typography, Stack, Divide, Card, CardContent, Grid } from '@mui/material';


function TeamMatchITem() {
    return (
        <>
            <div className="team-matches">
                <Stack >
                    <Typography variant="h6" className='time-match'  align="left" >27 March 2023</Typography>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent align='center' >
                           
                            <Typography variant="subtitle1" className='match-group'>Group E</Typography>
                            <Stack direction="row" spacing={2} justifyContent={'center'}>
                            <Typography variant="h5" >Croatia</Typography>

                            <img src={'https://img.uefa.com/imgml/flags/70x70/CRO.png'}  className='team-icon'/>

                                <Typography variant="h4" >3 - 1</Typography>
                                <img src={'https://img.uefa.com/imgml/flags/70x70/CRO.png'}  className='team-icon'/>
                                <Typography variant="h5" >Croatia</Typography>

                            </Stack >
                            

                        </CardContent>
                        
                    </Card>
                </Stack>
            </div>
        </>
    )
}

export default TeamMatchITem;