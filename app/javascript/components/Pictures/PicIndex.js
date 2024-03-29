import React from 'react'
import Picture from './Picture'
import Config from '../Config'

class PicIndex extends React.Component {
    
    constructor(props) {
        super(props)    

        this.state = {
            apiData: [],
            pp: 40,
            page: 1,
            totalPages: '',
            scrolling: false
        } 

        this.loadMore = this.loadMore.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.loadPics()
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        const {scrolling, page, totalPages} = this.state
        if (scrolling) return
        if (totalPages <= page) return
        const lastPic = document.querySelector('div.card-columns > img:last-child')
        const lastPicOffset = lastPic.offsetTop + lastPic.clientHeight
        const pageOffset = window.pageYOffset + window.innerHeight
        const bottomOffset = 20
        if (pageOffset > lastPicOffset - bottomOffset) this.loadMore()
    }
    
    async loadPics () {
        const {pp, page} = this.state
        const config = {Config}
        const tags = {
            tag1: 'bikerace',
            tag2: 'BoulderBikeTour',
            mode: 'OR'
        }
        const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.Config.flickr_api_key}&tags=%23${tags.tag1}%2C+%23${tags.tag2}&tag_mode=${tags.mode}&per_page=${pp}&page=${page}&format=json&nojsoncallback=1`
    
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        this.setState(state => ({
            apiData : [...state.apiData, ...data.photos.photo],
            totalPages: data.photos.total,
            scrolling: false,

        }))
    }

    loadMore () {
        this.setState(state => ({
            page: state.page + 1,
            scrolling: true
        }))
        
        console.log(this.state.page) // to check if state is being updated correctly
        console.log("passed through loadMore")

        this.loadPics()
        
    }
    
    
    render() {

        const Pics = this.state.apiData.map(
            data => {
                return( <Picture key={data.id} {...data}/>)
            }
        )

        return(
            <div>
                <div className="card-columns mt-3 p-2">
                    {Pics}
                </div>
                
            </div>
            
        )
    }        
}

export default PicIndex


