import { useEffect, useState, useRef, startTransition } from 'react';
import frame from './Frame.svg';
import stars from './stars.svg'
import stars2 from './stars2.svg'
import stars3 from './stars3.svg'
import stars4 from './stars4.svg'
import stars5 from './stars5.svg'
import stars6 from './stars6.svg'
import stars7 from './stars7.svg'
import stars8 from './stars8.svg'
import stars9 from './stars9.svg'
import card1 from './card (1).svg'
import card2 from './card (2).svg'
import card3 from './card (3).svg'
import card4 from './card (4).svg'
import card5 from './card (5).svg'
import art1 from './art1.svg'
import art2 from './art2.svg'
import art3 from './art3.svg'
import art4 from './art4.svg'
import art5 from './art5.svg'
import art6 from './art6.svg'
import demo from './demo.svg'
import person1 from './person (1).png'
import person2 from './person (2).png'
import person3 from './person (3).png'
import person4 from './person (4).png'
import person5 from './person (5).png'
import Logo0 from './Logo_0.svg'
import Logo1 from './Logo_1.svg'
import Logo2 from './Logo_2.svg'
import Logo3 from './Logo_3.svg'
import Logo4 from './Logo_4.svg'
import Logo5 from './Logo_5.svg'
import Logo6 from './Logo_6.svg'
import Logo7 from './Logo_7.svg'
import Logo8 from './Logo_8.svg'
import Logo9 from './Logo_9.svg'
import Logo10 from './Logo_10.svg'
import Logo11 from './Logo_11.svg'
import lines from './lines.svg'

import './App.sass';

function App() {
  const [buttons, setButtons] = useState(["Investment DAO", "Startup DAO", "Service DAO", "Community DAO", "Impact DAO", "DeFi DAO", "+More"])
  const [colors, setColors] = useState(["#FFB4D3", "#FFC24C", "#D387F7", "#77E6FF", "#23C9DE", "#FF9E9E", "#707F8D"])
  const [titles, setTitles] = useState(["Organisation design", "Smart contract development", "Fundraising", "Launch marketing", "Member onboarding", "Contributor management", "DAO operations"])
  const [colored, setColored] = useState(0)
  const [tools, setTools] = useState(["NFT membership", "Member directory", "Treasury", "Feed", "Governance", "App store"])
  const [dist, setDist] = useState(50)
  const [opdist, setOpdist] = useState(-210)
  const [cards, setCards] = useState([card1, card2, card3, card4, card5])
  const [counter, setCounter] = useState(0)
  const [opcounter, setOpcounter] = useState(0)
  const [workWith, setWorkWith] = useState(["Ethereum", "Polygon", "Gnosis Safe", "Snapshot", "ENS", "OpenSea"])
  const [workWithArts, setWorkWithArts] = useState([art1, art2, art3, art4, art5, art6])
  const [people, setPeople] = useState([person1, person2, person3, person4, person5])
  useEffect(() => {
    console.log(1);
    setInterval(() => {
      setColored(colored => {
        colored++
        if (colored == 7) {
          colored = 0
        }
        return colored
      })

    }, 1000)
    setInterval(() => {
      setDist(dist => {
        let nextdist = dist + 0.6
        if (nextdist >= 210) {
          nextdist = 50
          setCounter(c => c + 1)
          // setCards(cards => {
          //   let nextcards
          // })
        }
        return nextdist
      })
      setOpdist(opdist => {
        let nextopdist = opdist + 0.6
        if (nextopdist >= -50) {
          nextopdist = -210
          setOpcounter(c => {
            let nextC = c
            nextC = nextC - 1
            if (nextC < 0) {
              nextC = cards.length - 1
            }
            return nextC
          })
          // setCards(cards => {
          //   let nextcards
          // })
        }
        return nextopdist
      })
    }, 20)
  }, [titles])


  return (
    <div className="App">
      <header>
        <div className="container">
          <a href="" className="logo"></a>
          <nav>
            <a href="" className="headerButton">Product</a>
            <a href="" className="headerButton">Use cases</a>
            <a href="" className="headerButton">Learn</a>
            <a href="" className="headerButton">About</a>
            <a href="" className="headerButton">Jobs</a>
          </nav>
          <a href="" className="headerButton">Login</a>
        </div>
      </header>
      <div className="hero">
        <h1>The easiest way <br /> to start a DAO</h1>
        <p>An all-in-one platform to start, manage and grow <br /> a decentralized autonomous organization</p>
        <a href="">Get started</a>
        <img src={frame} alt="" />
      </div>
      <div className="buttons">
        <div className="container">
          <h2 className="title"><img src={stars} alt="" />Ready for every project</h2>
          <div>
            {
              buttons.map((el, i) =>
                <a key={i} href="" style={{ color: colors[i] }}>{el}</a>
              )
            }
          </div>
        </div>
      </div>
      <div className="container">
        <div className="artWorks">
          <div className="lines">
            <div className="line" style={{ transform: "translateY(-" + dist + "px)" }}>
              <img src={cards[(counter + 1) % 5]} alt="" />
              <img src={cards[(counter + 2) % 5]} alt="" />
              <img src={cards[(counter + 3) % 5]} alt="" />
              <img src={cards[(counter + 4) % 5]} alt="" />
            </div>
            <div className="line" style={{ transform: "translateY(" + opdist + "px)" }}>
              <img src={cards[opcounter % 5]} alt="" />
              <img src={cards[(opcounter + 1) % 5]} alt="" />
              <img src={cards[(opcounter + 2) % 5]} alt="" />
              <img src={cards[(opcounter + 3) % 5]} alt="" />
            </div>
            <div className="line" style={{ transform: "translateY(-" + dist + "px)" }}>
              <img src={cards[counter % 5]} alt="" />
              <img src={cards[(counter + 1) % 5]} alt="" />
              <img src={cards[(counter + 2) % 5]} alt="" />
              <img src={cards[(counter + 3) % 5]} alt="" />
            </div>
            <div className="line" style={{ transform: "translateY(" + opdist + "px)" }}>
              <img src={cards[opcounter % 5]} alt="" />
              <img src={cards[(opcounter + 1) % 5]} alt="" />
              <img src={cards[(opcounter + 2) % 5]} alt="" />
              <img src={cards[(opcounter + 3) % 5]} alt="" />
            </div>
            <div className="line" style={{ transform: "translateY(-" + dist + "px)" }}>
              <img src={cards[(counter + 2) % 5]} alt="" />
              <img src={cards[(counter + 3) % 5]} alt="" />
              <img src={cards[(counter + 4) % 5]} alt="" />
              <img src={cards[(counter + 5) % 5]} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="designedFor">
        <div className="container">
          <h2 className="title">Designed for the full journey<img className="stars2" src={stars2} alt="" /></h2>
          <div>
            {
              titles.map((el, i) =>
                <a key={i} href="" style={colored == i ? { color: colors[i] } : {}}>{el}</a>
              )
            }
          </div>
        </div>
        <div className="tools">
          <div className="container">
            <h2><img src={stars3} alt="" />All the tools in one app</h2>
            <div>
              {
                tools.map((el, i) =>
                  <a key={i} href="">{el}</a>
                )
              }
            </div>
          </div>
          <div className="demo">
            <img src={demo} alt="" />
          </div>

        </div>
      </div>
      <div className="workWith">
        <h2>Works with<img src={stars4} alt="" /></h2>
        <div className="container">
          {
            workWithArts.map((el, i) =>
              <div key={i} className="card">
                <div className="art">
                  <img src={el} arl="" style={i === 0 ? { filter: "drop-shadow(0px 0px 47px rgba(98, 126, 234, 0.30))" } : i === 1 ? { filter: "drop-shadow(0px 0px 47px  rgba(130, 71, 229, 0.30))" } : {}}></img>
                </div>
                <h2>{workWith[i]}</h2>
              </div>

            )
          }

        </div>
      </div>
      <div className="creators">
        <div className="container">
          <h2>Help at every step</h2>
          {
            people.map((el, i) =>
              <img key={i} src={el} alt="" className="person" />
            )
          }
          <p>Success managers <img src={stars5} alt="" /> Knowledge base <br /> Chat support <img src={stars6} alt="" /> Tutorials <img src={stars7} alt="" /> Templates <br /> Smart Contract development <img src={stars8} alt="" /> Events <br /> Education <img src={stars9} alt="" /> Guides</p>
        </div>
      </div>
      <div className="container">
        <form className="subscribe">
          <h2>Weekly digest</h2>
          <p>Latest news in DAOs and Web3</p>
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="sponsors">
        <h2>Backed by <img src={stars3} alt="" /></h2>
        <div className="sponsorsLine">
          <a href="">
            <img src={Logo0} alt="" />
          </a>
          <a href="">
            <img src={Logo1} alt="" />
          </a>
          <a href="">
            <img src={Logo2} alt="" />
          </a>
          <a href="">
            <img src={Logo3} alt="" />
          </a>
          <a href="">
            <img src={Logo4} alt="" />
          </a>
          <a href="">
            <img src={Logo5} alt="" />
          </a>
          <a href="">
            <img src={Logo0} alt="" />
          </a>
          <a href="">
            <img src={Logo1} alt="" />
          </a>
          <a href="">
            <img src={Logo2} alt="" />
          </a>
          <a href="">
            <img src={Logo3} alt="" />
          </a>
          <a href="">
            <img src={Logo4} alt="" />
          </a>
          <a href="">
            <img src={Logo5} alt="" />
          </a>
        </div>
        <div className="sponsorsLine">
          <a href="">
            <img src={Logo6} alt="" />
          </a>
          <a href="">
            <img src={Logo7} alt="" />
          </a>
          <a href="">
            <img src={Logo8} alt="" />
          </a>
          <a href="">
            <img src={Logo9} alt="" />
          </a>
          <a href="">
            <img src={Logo10} alt="" />
          </a>
          <a href="">
            <img src={Logo11} alt="" />
          </a>
          <a href="">
            <img src={Logo6} alt="" />
          </a>
          <a href="">
            <img src={Logo7} alt="" />
          </a>
          <a href="">
            <img src={Logo8} alt="" />
          </a>
          <a href="">
            <img src={Logo9} alt="" />
          </a>
          <a href="">
            <img src={Logo10} alt="" />
          </a>
          <a href="">
            <img src={Logo11} alt="" />
          </a>
        </div>
      </div>
    </div >
  );
}

export default App;


// сделать следущую секцию works with