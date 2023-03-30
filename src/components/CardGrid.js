import Card from "./Card";

const CardGrid = ({ digimons, handleCardClicked }) => {
    return (
        <div className="Cards">
            {digimons.map((digimon, index) => {
                return <div className="row" key={index}>
                            <Card digimon={digimon} handleCardClick={() => handleCardClicked(index)} /> 
                </div>
            })}
        </div>
    )
}

export default CardGrid