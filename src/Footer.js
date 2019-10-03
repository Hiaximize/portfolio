import React from 'react'
// import StickyFooter from 'react-sticky-footer'

class Footer extends React.Component{
    render(){
        return(
            // <StickyFooter className="stickyFooter"
            // bottomThreshold={100}
            // normalStyles={{margin: "0 auto", position: "absolute", bottom: "0", left: "0", backgroundColor: "#546186", padding: "25px", width: "100%", height: "30px", zIndex: "2"}}
            // stickyStyles={{display: "none"}}>
                <div id="footerContainer">
                    <div id="test">
                    <ul id="footer">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dbarkerit">LinkedIn</a></li>

                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/hiaximize">Github</a></li>

                        <li><a target="_blank" rel="noopener noreferrer" href="#">Credits</a></li>
                    </ul>
                    </div>
                </div>
            // </StickyFooter>
        )
    }
}

export default Footer