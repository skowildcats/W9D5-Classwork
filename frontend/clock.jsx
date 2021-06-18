import React from 'react'


class Clock extends React.Component{
    
    componentDidMount(){
        this.intervalId = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    constructor(){
        super()
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toDateString(),
        }
    }

    render(){
        return(
            <div className = "clock">
                <h1> Clock</h1>
                <div className = "clock-elements">
                    <div className = "clock-time">
                    <p>Time:</p>
                    <p>{this.state.time}</p>
                    </div>
                    <div className ="clock-date">
                    <p>Date:</p>
                    <p>{this.state.date}</p>
                    </div>
                </div>
            </div>
        )
    }

    tick(){
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toDateString(),
        })
    }
}

export default Clock