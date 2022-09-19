import React, { Component } from "react";
import  PropTypes from "prop-types";
import VideoGame from "./VideoGame";

class VideoGameList extends Component {
    render() {

       const gamesList = this.props.games;

      const gamesElements = gamesList.map((game) => {
        return <VideoGame key={ game.id } game={ game } />
       });

        return (
            <div className="video-game-list">
            <h1>Lista de jogos mais vendidos!!</h1>
            { gamesElements }
            </div>
        );
    }
}

VideoGameList.propTypes = {
    keyIn: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        titlle: PropTypes.string,
        developer: PropTypes.string,
        sales: PropTypes.number,
        img: PropTypes.string
    }))
}

export default VideoGameList;