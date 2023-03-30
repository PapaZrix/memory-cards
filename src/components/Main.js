import React, { useState, useEffect } from "react"
import CardGrid from "./CardGrid"

const Main = () => {
    const [digimon, setDigimon] = useState([])
    const [clickedCards, setClickedCards] = useState([])
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    return (
        <main>
            <CardGrid digimons={digimon} />
        </main>
    )
}

export default Main