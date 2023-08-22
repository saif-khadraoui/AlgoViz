import React from 'react'
import "./AlgorithmSelector.scss"
import sortingImage from "../../assets/sorting_bars.png"
import { useNavigate } from "react-router-dom"

function AlgorithmSelector() {
    const navigate = useNavigate();

    const algorithms = [
        {
            name: "Sorting",
            image: sortingImage,
            related : ["bubble", "merge", "array"],
            url: "/sorting"
        },
        {
            name: "Pathfinding",
            image: sortingImage,
            related : ["Dijkstras", "A-star"],
            url: "/pathfinding"
        }
    ]

    const openAlgorithm = (algorithm) => {
        navigate(algorithm.url)
    }


  return (
    <div className='algorithmselector'>
        <div className="algorithms">
            {algorithms.map((algorithm, idx) => {
                return (
                <div className="algorithm" onClick={() => openAlgorithm(algorithm)}>
                    <img src={algorithm.image} />
                    <div className="bottom">
                        <div className="titleRow">
                            <p>{algorithm.name}</p>
                        </div>
                        <div className="relatedRow">
                            {algorithm.related.map((element) => {
                                return (
                                    <p>{element}</p>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default AlgorithmSelector