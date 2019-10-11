import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'
import Skillz from './Skillz.js'
import MyProjects from './MyProjects.js'
import ContactMe from './ContactMe.js'
import AboutMe from './AboutMe.js'
import HamburgerMenu from 'react-hamburger-menu'


class Main extends React.Component{
    constructor(props){
    super(props)
    this.state={
      view: {
        pageTitle: "My Projects",
        page: 'home'
      },
      width: window.innerWidth,
      // width: window.screen.availWidth,
      //these values are opposite what would be logical right now open menu is = false will have the menu open NOT closed. A value of true the menu IS NOT opened but closed
      open: false,
      menuOpen: false
    }
    this.handleView = this.handleView.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
      this.setState({
          [event.target.id]: event.target.value
      })
  }

  handleView(view){
    let pageTitle = ''

    switch(view){
      case 'projects':
        pageTitle = "My Projects"
        break
      case 'skillz':
        pageTitle = "Tech I've Used"
        break
      case 'contact':
        pageTitle = "Contact Me"
        break
      case 'home':
        pageTitle = "About Me"
        break;
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }
 
    handleClick(){
      this.setState({
        open: !this.state.open,
        menuOpen: !this.state.menuOpen
      })

      const menu = document.getElementById("hamburgerMenu")
     
      if(this.state.menuOpen === true){
        menu.style.height = "30px"
       

        menu.style.borderBottom = "4px solid #fb3640"
        document.getElementById("home").style.display = "none"
        document.getElementById("tech").style.display = "none"
        document.getElementById("projects").style.display = "none"

      }
      else if(this.state.menuOpen === false){
        document.getElementById("hamburgerMenu").style.height = "100%"
        menu.style.borderBottom = "4px solid #fb3640"
        document.getElementById("home").style.display = "block"
        document.getElementById("tech").style.display = "block"
        document.getElementById("projects").style.display = "block"
      }
      // console.log(this.state.menuOpen)
    }
  
  
    render(){
      // console.log(this.state.width)
      // window.addEventListener('resize', ()=>{
        // this.setState({
        //     width: window.screen.availWidth
        // })
      // })
      
        return(
            <div id="main">
                <div id="hamburgerMenu">
                
                    <HamburgerMenu 
                    isOpen={this.state.open}
                    menuClicked={this.handleClick}
                    width={20}
                    height={30}
                    color="white"
                    animationDuration={.5}
                  />
                  <ul id="hamburgerMenuItems">
                    <li className="menuItem slide-in-left" id="home" onClick={()=>{{this.handleClick()}{this.handleView('home')}}}>Home</li>
                    <li className="menuItem slide-in-left" id="tech" onClick={()=>{{this.handleClick()}{this.handleView('skillz')}}}>What I've used</li>
                    <li className="menuItem slide-in-left" id="projects" onClick={()=>{{this.handleClick()}{this.handleView('projects')}}}>Projects</li>
                  </ul>
                </div>

                
                <Header 
                handleChange={this.handleChange}
                handleView={this.handleView}
                view={this.state.view}/>

                {this.state.view.page==='projects'
                ? <MyProjects 
                handleView={this.handleView}
                handleChange={this.handleChange}
                view={this.state.view}/> : ''}

                {this.state.view.page==='skillz' ? <Skillz 
                handleView={this.handleView}
                handleChange={this.handleChange}
                view={this.state.view}/> : ''}

                {this.state.view.page==='home' ?<AboutMe 
                handleView={this.handleView}
                handleChange={this.handleChange}
                view={this.state.view}/> : ''}

                {this.state.view.page==='contact' ? <ContactMe 
                handleView={this.handleView}
                handleChange={this.handleChange}
                view={this.state.view}
                /> : ''} 
                
                <Footer />

            </div>
        )
    }
}

export default Main