const Card = ({ digimon, handleCardClick }) => {
    return (
        <div onClick={handleCardClick} className="Card">
            <img src={digimon.img} className="Card-img" alt={digimon.name}></img>
            <p className="Card-name">{digimon.name}</p>
        </div>
    )
}

export default Card