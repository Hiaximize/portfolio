import React from 'react'

class AboutMe extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div id="aboutMeContainer">
                
                <div id="aboutMeTileContainer">
                    <div className="aboutMeTile">User Focused</div>

                    <div className="aboutMeTile">Responsive<br />Designs</div>

                    <div className="aboutMeTile">Static/<br />Dynamic</div>

                    <div className="aboutMeTile">Tenacious</div>
                </div>

            </div>
        )
    }
}
export default AboutMe