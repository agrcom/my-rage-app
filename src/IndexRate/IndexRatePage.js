import React, { Component } from 'react'

class IndexRatePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            magicNumber: 0
        }
    }

    componentDidMount(){
        // this.setState({magicNumber: magicNumber + 1})
        // this.setState = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    handleClick() {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        this.setState({ random: this.state.magicNumber + rand });
      }

    componentWillUnmount(){

    }

    render(){

        return(
            <div className='text-white'>
                <p>State test page</p>
                <p onClick={this.handleClick.bind(this)}> Step 1 random numbers incrementally</p>
                <p>{this.state.random}</p>
                <p>Step 2 Connect to endpoint with data about WIG20</p>
            </div>
        )

    }
}

export default IndexRatePage;