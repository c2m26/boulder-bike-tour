import React from 'react'

class ContestBanner extends React.Component {
    
    /*constructor(props) {
        super(props)
        this.state ={
            duration: 10,
            show: true
        } 
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          )
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    tick() {
        this.setState(state => ({
            duration: state.duration-1,
        }))
        console.log(this.state.duration)
        this.showStatus()
    }

    showStatus(){
        const durationStatus = this.state.duration
        if ( durationStatus <= 0){
            this.setState({
                show: false
            })
        }  
        console.log(this.state)
    }
*/
    

    render () {

        /*if (this.state.show) {
            const styles = {
                backgroundColor: 'yellow'
            }
    */
            return(
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2>The contest for the event's <span className="text-bold">slogan</span> is on!</h2>
                        <p>We count on your catchy suggestion to hit the spot.</p>
                        <p>The winner will be awarded a free pass to the event and a monetary prize of 1000 USD.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Submit your slogan below!</a>
                    </div>
                </div>
            )
     /*   } else{
            return null
        }
       */ 
        
    }
  
}

export default ContestBanner