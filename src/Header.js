import React from 'react'
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css'

class Header extends React.Component{
    handleView(){
        this.props.handleView()
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

                        <li onClick={()=>{this.props.handleView('skillz')}}>My Skillz</li>

                        <li onClick={()=>{this.props.handleView('projects')}}>My Work</li>

                        <li onClick={()=>{this.props.handleView('contact')}}>Contact Me</li>

                    </ul>
                </div>
            }>
                
                
            </StickyHeader>
        )
    }
}

export default Header