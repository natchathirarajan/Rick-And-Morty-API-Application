import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./FetchDataComponent.css"

const APIComponent = () => {
  const [pages,setPages] = useState(1);
  const [response,setResponse] = useState([])
  const [nextButton,setNextButton] = useState(false);
  const [previousButton,setPreviousButton] = useState(true);

  useEffect(()=>{
    fetchData(pages);
  },[pages])

  const fetchData = async (pages) => {
    let apiresponse = await axios.get(`https://rickandmortyapi.com/api/character?page=${pages}`)
    console.log(apiresponse.data.results);
    setResponse(apiresponse.data.results);
  }

  const handleNext = () =>{
     if(pages > 42)
    {
      setNextButton(true);
      setPreviousButton(false);
    } 
    else 
    {
      setPages(pages+1);
      setNextButton(false);
      setPreviousButton(false);
    }
  }

  const handlePrevious = () => {
    if (pages < 1) 
    {
      setPreviousButton(false);
      setNextButton(true);
    }
    else 
    {
      setPages (pages-1)
      setNextButton(false);
      setPreviousButton(false);
    }
  }

  return (
    <section className='main-page'>
      <h1 className='main-header'>RICK AND MORTY API APPLICATION</h1>
      <div className='main-container'>
      {
        response.map((responseValue,responseIndex)=> {
        return (
          <ul key={responseIndex} className='list'>
            <div className='list-items'>
              <li><img src={responseValue.image} alt="Rick and Morty Images" className='response-images'/></li>
                <div className='list-text'>  
                  <li>Name: {responseValue.name}</li>
                  <li>Status: {responseValue.status}</li>
                  <li>Gender: {responseValue.gender}</li>
                </div>
            </div>
          </ul>
        )
        })
      }
      </div>

      <div className='button-container'>
        <button onClick={handleNext} disabled={nextButton} className='buttons'>Next</button>
        <button  onClick={handlePrevious} disabled={previousButton} className='buttons'>Previous</button>
      </div>
    </section>    
  )
}

export default APIComponent