// import React, { useState, useEffect, Component } from 'react'
// import config from '../components/config.json'
// import TeamItem from '../features/Team/widgets/TeamItem';

// const {SERVER_API} = config.SERVER_API;
// const {API_KEY} = config.API_KEY;


// export class Teams extends Component {
//     constructor() {
//        super();
       
//        this.state = {
//         teams: [],
//         isLoading: true,
//        };

//        getTeams = async () => {
//         const response = await fetch(`${SERVER_API}/?action=get_teams&league_id=302&APIkey=${API_KEY}`);
        
//         if (response.ok) {
//             const teams = await response.json();
//             this.setState({
//                 teams: teams,
//                 isLoading: false,
//             });
//         }
//        }

//        this.componentDidMount = () => {
//         this.getTeams();
//        };

//     }
// }

// export default Teams;