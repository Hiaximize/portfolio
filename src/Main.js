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
      width: window.innerWidth
    }
    this.handleView = this.handleView.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    // handleClick(){
    //   this.setState({
    //     open: !this.state.open
    //   })
    // }
  
    render(){
      // console.log(this.state.width)
      // window.addEventListener('resize', ()=>{
      //   this.setState({
      //       width: window.innerWidth
      //   })
      //   console.log(this.state.width)
      // })
        return(
            <div id="main">
                
                {/* {this.state.width < 414 ?
                <HamburgerMenu 
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={20}
                height={50}
                color="black"
                animationDuration={1}
                > <li>ITEM 1</li>
                <li>ITEM 2</li>
                <li>ITEM 3</li></HamburgerMenu>: ''} */}

                
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