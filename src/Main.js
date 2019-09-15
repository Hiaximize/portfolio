import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'
import Skillz from './Skillz.js'
import MyProjects from './MyProjects.js'
import ContactMe from './ContactMe.js'
import AboutMe from './AboutMe.js'


class Main extends React.Component{
    constructor(props){
    super(props)
    this.state={
      view: {
        pageTitle: "My Projects",
        page: 'home'
      }
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
        pageTitle = "My Skillz"
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




    render(){
        return(
            <div id="main">
                
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