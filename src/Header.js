import React from 'react'
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css'


class Header extends React.Component{
    render(){
        return(
            <StickyHeader className="headerContainer" 
            backgroundColor={"#000000"}
            header={
                <div className="Header_root">
                    <ul id="headerLinks">
                        <li><a href="#skillzContainer">My Skillz</a></li>
                        <li><a href="#portfolioContainer">My Work</a></li>
                        <li>item 3</li>
                    </ul>
                </div>
            }>
                
            </StickyHeader>
        )
    }
}

export default Header