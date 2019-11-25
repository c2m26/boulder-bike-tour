import React from 'react'



class PicIndex extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            picParams: {
                farmId:'',
                serverId:'',
                id:'',
                secret:'',
            },
            pp: 40,
            page: 1,
            totalPages: '',
        }  

        /*this.componentWillMount() {
            this.loadPics()
        } */   

        function loadPics () {
            const {pp, page, picParams} = this.state
            const key = 'bafdef3feb254155830234ac6b57985b'
            const tags = {
                tag1: 'bikerace',
                tag2: 'BoulderBikeTour',
                mode: 'OR'
            }
            const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=%23${tags.tag1}%2C+%23${tags.tag2}&tag_mode=${tags.mode}&per_page=${pp}&format=json&nojsoncallback=${page}`
        
            return (apiUrl)
        }   
        
        console.log(loadPics())
       
        /*this.componentDidMount () {
            
            const pics = response.json().photos;
            this.setState(
                {
                farmId: pics.photo.farm,
                serverId: pics.photos.photo.server,
                id: pics.photo.id,
                secret: pics.photo.secret,
                loading: false
                }
            );
        }
        
        const url = "https://farm"+{farmId}+".staticflickr.com/"+{serverId}+"/"+{id}+{secret}+"_n.jpg";
        */
    }
    
    
    render (){
        return(
            <div className="card-columns">
                Teste
            </div>
        )    
    }
    
}

export default PicIndex