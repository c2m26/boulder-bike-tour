import React, {Component} from 'react'
import Picture from './Picture'



class PicIndex extends React.Component {
    
    constructor(props) {
        super(props)    

        this.state = {
            apiData: [],
            pp: 40,
            page: 1,
            totalPages: '',
        } 
    }

    componentDidMount() {
        this.loadPics()
    }   

    async loadPics () {
        const {pp, page} = this.state
        const key = 'bafdef3feb254155830234ac6b57985b'
        const tags = {
            tag1: 'bikerace',
            tag2: 'BoulderBikeTour',
            mode: 'OR'
        }
        const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=%23${tags.tag1}%2C+%23${tags.tag2}&tag_mode=${tags.mode}&per_page=${pp}&format=json&nojsoncallback=${page}`
    
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        this.setState({
            apiData : data.photos.photo,
//            page: data.photos.page,
            totalPages: data.photos.total
        })    
    }
    
    render() {

        const Pics = this.state.apiData.map(
            data => {
                return( <Picture {...data}/>)
            }
        )

        return(
            <div>
                <h1>Teste</h1>
                <div className="card-columns">
                    {Pics}
                </div>
            </div>
            
        )
    }        
}

export default PicIndex


