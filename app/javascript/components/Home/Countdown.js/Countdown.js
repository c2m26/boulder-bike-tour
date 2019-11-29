import React from 'react'

class Countdown extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            eventDate: new Date('April 1, 2020 11:00:00'),
            date: new Date(), 
            delta: ''
        }
    }


    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    tick() {
        this.setState({
            date: new Date (),
            delta: new Date(this.state.eventDate.getTime()-this.state.date.getTime())
        })
    }

    render() {

        
/*        const hour = this.state.delta.getHours()
        const min = this.state.delta.getMinutes()
        const sec = this.state.delta.getSeconds()
 */      

        return (
            <div>
                <div>{this.state.date.toLocaleTimeString()}</div>
                
            </div>
            
            /*            <div>
                {month} : {day} : {hour} : {min} : {sec}
            </div>
*/
            )

    }
}

export default Countdown
