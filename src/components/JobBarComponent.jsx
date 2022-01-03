import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const JobBarComponent = () => {

    const [data, setData] = useState();
    const URL = "http://localhost:3004/jobs";


    useEffect(() => {
    
    const getAllContacts = async () => {
        const response = await axios.get(URL)
                 .catch((error) => {
                     console.log("Couldn't fetch the data "+ error);
                 })
        setData(response.data);
    }
    getAllContacts();

    }, [URL])
 
    console.log(data);
    return (
        <div>
            JBC
        </div>
    )
}

export default JobBarComponent
