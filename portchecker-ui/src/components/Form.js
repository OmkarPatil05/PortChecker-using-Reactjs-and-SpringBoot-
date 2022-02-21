import { useState } from "react";

const Form = () => {

    const [portNumber , setPortNumber ] = useState();
    const [isPortFree , setIsPortFree ] = useState(false);
    const [isLoading , setIsLoading ] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        setPortNumber(e.target.value);
        console.log(portNumber);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8082/getPortInfo/${portNumber}`,{ 
            method: 'GET',
            headers:{
                "Content-Type": 'application/json'
            }
         })
        .then((response) => {
            if(!response.ok)
            {
                console.log('error')
            }
            return response.json();
        })
        .then((data) => {
            setIsPortFree(data)
            setIsLoading(true)
        })
    }

    return(
        <div className="form-input">
            <form  
            onSubmit={e => handleSubmit(e)} >
                <input 
                onChange={e => handleChange(e)}
                value={portNumber}
                type="text"
                placeholder="Enter the Port Number" 
                className="inputField" />
                <input 
                type="submit" 
                value="Check" 
                className="btn"/>
               
            </form>
            {isPortFree && <div className="answer green">Port {portNumber} is Free on the Server.</div> }
            {isLoading && !isPortFree &&<div className="answer red">Port {portNumber} is Used on the Server.</div> }
        </div>
    );
}


export default Form;