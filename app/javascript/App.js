import React from 'react'
import  {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/General/Navbar'
import Footer from './components/General/Footer'
import Home from './components/Home/Home'
import Slogan from './components/Slogan/Slogan'
import Riders from './components/Riders/Riders'
import PicIndex from './components/Pictures/PicIndex'


function App() {
    
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                <switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/api/v1/slogans/new" component={Slogan} exact />
                    <Route path="/pictures" component={PicIndex} exact />
                    <Route path="/riders" component={Riders} exact />
                </switch> 

                    <Footer />
                </div>
            </BrowserRouter>
            
        )
    
} 

export default App