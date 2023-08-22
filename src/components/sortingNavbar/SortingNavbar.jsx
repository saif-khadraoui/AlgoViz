import React from 'react'
import "./SortingNavbar.scss"

function SortingNavbar() {
  return (
    <div className='sortingnavbar'>
        <div className="left">
            <div className="logo">
                <p>AlgoViz</p>
            </div>
        </div>
        <div className="middle">
            <p>Bubble</p>
            <p>Merge</p>
            <p>Selection</p>
        </div>
    </div>
  )
}

export default SortingNavbar