const Scores = ({ score, highScore }) => {
    return (
        <div className="Scores">
            <p className="Score">Score:  {score}</p>
            <p className="HighScore">High Score:   {highScore}</p>
        </div>
    )
}

export default Scores