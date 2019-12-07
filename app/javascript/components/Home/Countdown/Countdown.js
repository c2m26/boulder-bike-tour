import React from 'react'
import './Countdown.css'

class Countdown extends React.Component {

    constructor(props) {
        super(props)

        const eventDate = new Date('April 1, 2020 11:00:00')
        const date = new Date()

        this.state = {
            eventDate,
            date, 
            delta: new Date(eventDate.getTime()-date.getTime()),
            monthText: 'months',
            dayText: 'days',
            hourText: 'hours',
            minText: 'minutes',
            secText: 'seconds',
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
        // match name number with number  
        if (this.state.delta.getMonth() >1 || this.state.delta.getMonth() ==0 ){
            this.setState({monthText: 'months'})
        } else {
            this.setState({monthText: 'month'})
        }
        
        if (this.state.delta.getDay() >1 || this.state.delta.getDay()==0){
            this.setState({dayText: 'days'})
        } else{
            this.setState({dayText: 'day'})
        }

        if (this.state.delta.getHours() >1 || this.state.delta.getHours()==0){
            this.setState({hourText: 'hours'})
        } else{
            this.setState({hourText: 'hour'})
        }
        
        if (this.state.delta.getMinutes() >1 || this.state.delta.getMinutes()==0){
            this.setState({minuteText: 'minutes'})
        } else {
            this.setState({minuteText: 'minute'})
        }

        if (this.state.delta.getSeconds() >1 || this.state.delta.getSeconds()==0){
            this.setState({secText: 'seconds'})
        } else {
            this.setState({secText: 'second'})
        }
    }

    render() {

        const cdData = [
            {time: this.state.delta.getMonth(), label: this.state.monthText},
            {time: this.state.delta.getDay(), label: this.state.dayText},        
            {time: this.state.delta.getHours(),label: this.state.hourText},
            {time: this.state.delta.getMinutes(),label: this.state.minText},
            {time: this.state.delta.getSeconds(), label: this.state.secText}
        ]

        return (
            <div className="row d-flex justify-content-center" id="cdrow">
                {cdData.map(data => {
                    return(
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2">
                            <div className="card" id="cardStyle">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="p-1" id="time">{data.time}</div> 
                                    <div className="p-1" id="label">{data.label}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
                
            </div>
        )
    }
}

export default Countdown
