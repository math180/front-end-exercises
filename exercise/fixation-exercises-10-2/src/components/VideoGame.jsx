import React from "react";

class VideoGame extends React.Component {
    render() {

    const { id, title, developer, sales, } = this.props.game;

        return (
            <div className="video-game">
                <p><strong>ID:</strong> { id } </p>
                <p><strong>Título:</strong> { title } </p>
                <p><strong>Empresa desenvolvedora:</strong> { developer } </p>
                <p><strong>Vendas:</strong> { sales.toLocaleString('pt-BR') } </p>
            </div>
        );
    }
}

export default VideoGame;