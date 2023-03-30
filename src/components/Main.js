import React, { useState, useEffect } from "react"
import CardGrid from "./CardGrid"
import shuffleArray from '../util'
import Scores from "./Scores"

const Main = () => {
    const digimonAmount = 10
    const [digimon, setDigimon] = useState([])
    const [clickedCards, setClickedCards] = useState([])
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    useEffect(() => {
        
        const loadCards = async () => {
            setDigimon(shuffleArray(await fetchDigimon(digimonAmount)))
        }

        loadCards()
    }, [])

    const fetchDigimon = async (amount) => {
        const digi = []
        for (let i = 1; i <= amount; i++) {
            const response = await fetch(`https://www.digi-api.com/api/v1/digimon/${i}`)
            const data = await response.json()
            const digimon = {}
            digimon.img = data.images[0].href
            digimon.name = data.name
            digimon.id = data.id
            digi.push(digimon)
        }
        return digi
    }

    const handleCardClick = (index) => {
        checkClicked(digimon[index].name)
        setDigimon(shuffleArray(digimon))
    }

    const checkClicked = (name) => {
        if (clickedCards.includes(name)) {
            reset()
        } else {
            const newScore = score + 1
            if (newScore > highScore) setHighScore(newScore)
            setScore(newScore)
            setClickedCards(prevCards => [...prevCards, name])
        }
    }

    const reset = () => {
        setScore(0)
        setClickedCards([])
    }

    return (
        <main>
            <div className="content">
                <Scores score={score} highScore={highScore} />
                <CardGrid digimons={digimon} handleCardClicked={handleCardClick} />                
            </div>
        </main>
    )
}

export default Main