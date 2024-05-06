import React from 'react';
import Card from '../../components/Card';
import '../../App.css';
import './Team.css';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';
import PlayerBadge from './PlayerBadge';


function TeamSquad() {
    return (
        <>
            <div>
                <div className="team-overview-group">
                <Typography className="position-label" variant='h4'>Goal Keepers</Typography>

                    <div className="player-badge-wrapper">


                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                    </div>


                </div>

                <div className="team-overview-group">
                    <Typography className="position-label" variant='h4'>Defenders</Typography>

                    <div className="player-badge-wrapper">


                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>

                        <PlayerBadge flagUrl='https://api.fifa.com/api/v3/picture/flags-sq-4/BEL'
                            playerImageUrl='https://digitalhub.fifa.com/transform/0ac06079-73ec-4dd4-a0ca-77e9c79cb411/1442830156?io=transform:fill,aspectratio:1x1&quality=75'
                            firstName='COURTOIS'
                            surName='Thibaut'
                            position='Goal Keeper'

                        ></PlayerBadge>



                    </div>


                </div>


            </div>

        </>
    )
}

export default TeamSquad;