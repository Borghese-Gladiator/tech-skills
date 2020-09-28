import React from 'react'
import './Header.css'

const iconPath = process.env.PUBLIC_URL + '/assets/icons/' + 'icons8-learn-more-64.png';

export default function Header() {
  
  return (
    <header className="App-header">
      <h1 style={{justifyContent:"right"}}>
        Borghese-Gladiator Skills List
      </h1>
      <img src={iconPath} className="App-logo" alt="logo" />
      <p>
        Group my skills with directory structure. <br />
        (used Material UI Lab components like TreeView)
      </p>
      <p>
        Learn more everyday:
      </p>
      <a
        className="App-link"
        href="https://www.gartner.com/smarterwithgartner/5-trends-drive-the-gartner-hype-cycle-for-emerging-technologies-2020/"
        target="_blank"
        rel="noopener noreferrer"
      >
        (Gartner Hype Cycle)
      </a>
    </header>
  )
}