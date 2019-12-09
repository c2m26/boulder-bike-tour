import React from 'react'
import  {BrowserRouter, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Navbar from './components/General/Navbar'
import Footer from './components/General/Footer'
import Home from './components/Home/Home'
import Slogan from './components/Slogan/Slogan'
import Riders from './components/Riders/Riders'
import PicIndex from './components/Pictures/PicIndex'
import MapPage from './components/Map/MapPage'

library.add(fab)

function App() {
    
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    
                <switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/api/v1/slogans/new" component={Slogan} exact />
                    <Route path="/tracker" component={MapPage} exact />
                    <Route path="/pictures" component={PicIndex} exact />
                    <Route path="/riders" component={Riders} exact />
                </switch> 

                
                </div>
            </BrowserRouter>
            
        )
    
} 

export default App