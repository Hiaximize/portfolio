import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'
import Skillz from './Skillz.js'
import MyProjects from './MyProjects.js'
// import Gif from './Gif.js'

class Main extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         height: 0,
    //         width: 0,
            // viewportWidthHeight
    //     }
    //     this.handleResize = this.handleResize.bind(this)
    // }

    // handleResize(event){
    //     setState({

    //     })
    // }
    render(){
       
        return(
            <div id="main">
                {/* <Gif /> */}
                <Header />
                <MyProjects /> 
                <Skillz />
                <Footer />
            </div>
        )
    }
}

export default Main