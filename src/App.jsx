import {React ,useState,useEffect} from 'react'
import axios from "axios"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import "./style.css"
import Header from "./components/includes/Header.jsx"
import Footer from "./components/includes/Footer.jsx"
import CreateData from './components/CreateData.jsx'
import ReadData from './components/ReadData.jsx'


const App = () =>{

    let[load, setLoad] = useState(false)

    let CallBackEnd = async () =>{
        try {
            let result =await axios ({
                method:"Get",
                url: "http://localhost:8885/api"
            })
            console.log(result.data.message)
        }catch(err){
            console.log("unable to get data from backend", err)
        }

    }

    let callFromCreateData = () => {
        setLoad(!load)
        
    }
     return(
        <div className="position-relative">

         <Header/>
         
         <CreateData call={callFromCreateData}/>

         <ReadData isload={load} call={callFromCreateData}/>

         <Footer/>
        
         </div>
    )
    
}

export default App