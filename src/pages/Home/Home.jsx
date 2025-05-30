import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={heroBanner} alt="" className='banner-img' />
            <div className="hero-caption">
                <img src={heroTitle} alt=""  className='caption-img'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ea, dolorem repellat laudantium assumenda recusandae 
                    quo nostrum ullam, ab consequatur excepturi omnis dolorum 
                    delectus expedita ratione doloremque, aliquid itaque 
                    accusamus id.</p>
                <div className="hero-btns">
                    <button className='btn '><img src={playIcon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>
                </div>
                <TitleCards/>
            </div>
        </div>
        <div className="more-cards">
            <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCards title={"Only on Netflix"} category={"popular"}/>
            <TitleCards title={"Upcomping"} category={"upcoming"}/>
            <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home