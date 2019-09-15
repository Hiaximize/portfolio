import React from 'react'
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.addClass = this.addClass.bind(this)
    }
    handleView(){
        this.props.handleView()
    }
    addClass(){
        document.getElementById("contact").classList.add("shake-horizontal")
    }

    render(){
        return(
            <StickyHeader className="headerContainer"
            backgroundImage={"headerGif.gif"} 
            backgroundColor={"#000000"}
            headerOnly={true}
            header={
                <div className="Header_root slide-in-left">
                    
                    <ul id="headerLinks">

                        <li onClick={()=>{this.props.handleView('home')}}>About Me</li>

                        <li onClick={()=>{this.props.handleView('skillz')}}>Tech Used</li>

                        <li onClick={()=>{this.props.handleView('projects')}}>Projects</li>

                        <li id="contact"><a href="mailto:dbarkerit@gmail.com">Contact Me</a></li>

                    </ul>
                </div>
            }>
                
                
            </StickyHeader>
        )
    }
}

export default Header