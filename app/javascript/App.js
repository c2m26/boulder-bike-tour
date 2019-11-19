import React from 'react'
import  {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/General/Navbar'
import Footer from './components/General/Footer'
import Home from './components/Home/Home'
import Riders from './components/Riders/Riders'


function App() {
    
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                <switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/riders" component={Riders} exact />
                </switch> 

                    <Footer />
                </div>
            </BrowserRouter>
            
        )
    
} 

export default App