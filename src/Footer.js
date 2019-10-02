import React from 'react'
import StickyFooter from 'react-sticky-footer'

class Footer extends React.Component{
    render(){
        return(
            <StickyFooter className="stickyFooter"
            bottomThreshold={50}
            normalStyles={{margin: "0 auto", backgroundColor: "#546186", padding: "1rem", width: "102vw", zIndex: "2"}}
            stickyStyles={{display: "none"}}>
                <div id="footerContainer">
                    <div id="test">
                    <ul id="footer">
                        <li><a target="_blank" href="https://www.linkedin.com/in/dbarkerit">LinkedIn</a></li>

                        <li><a target="_blank" href="https://www.github.com/hiaximize">Github</a></li>

                        <li><a target="_blank" href="#">Credits</a></li>
                    </ul>
                    </div>
                </div>
            </StickyFooter>
        )
    }
}

export default Footer