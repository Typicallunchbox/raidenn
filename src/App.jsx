import React from 'react'
import Navbar from './components/Navbar'
import AboutMe from './components/home-about-me/AboutMe'
import FullscreenVisualizer from './components/fullscreen-visualizer/FullscreenVisualizer'
import SkillsCardList from './components/home-skills-card/SkillsCardList'
import SocialBar from './components/socials/SocialBar'

const App = () => {
  return (
    <>
    <Navbar/>
    <SocialBar/>
    <FullscreenVisualizer/>
    <AboutMe/>
    <SkillsCardList/>
    </>
  )
}

export default App
