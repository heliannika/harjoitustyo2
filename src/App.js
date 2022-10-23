import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/';


function App() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [time, setTime] = useState('')
  const [title2, setTitle2] = useState('')
  const [url2, setUrl2] = useState('')
  const [time2, setTime2] = useState('')
  const [title3, setTitle3] = useState('')
  const [url3, setUrl3] = useState('')
  const [time3, setTime3] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const address = API_URL +
    'top-headlines?' + 'country=se' +
    '&apiKey=' + API_KEY

    axios.get(address)
      .then((response) => {
        setTitle(response.data.articles[0].title);
        setUrl(response.data.articles[0].url);
        setTime(response.data.articles[0].publishedAt);
        setTitle2(response.data.articles[1].title);
        setUrl2(response.data.articles[1].url);
        setTime2(response.data.articles[1].publishedAt);
        setTitle3(response.data.articles[2].title);
        setUrl3(response.data.articles[2].url);
        setTime3(response.data.articles[2].publishedAt);
        console.log(response.data)
        setIsLoading(false)
      }).catch(error => {
        console.log(error)
        alert("Uutisten haku ei onnistunut!")
      })
  }, [])
  
  if(isLoading) {
    return <p>Loading...</p>
  } else {
  return (
    <>
      <div>
      <h3 style={{padding: "20px", fontSize: "50px", fontFamily: "serif"}}>Top 3 uutiset Ruotsissa</h3>
      </div>
    <div style={{columns: 3}}>
        <h4>Otsikko</h4>
          <p>{title}</p>
        <h4>Osoite</h4>
          <a href={url} target="_blank">{url}</a>
        <h4>Aika</h4>
          <p>{time}</p>
      <div>
        <h4>Otsikko</h4>
          <p>{title2}</p>
        <h4>Osoite</h4>
          <a href={url2} target="_blank">{url2}</a>
        <h4>Aika</h4>
          <p>{time2}</p>
      </div>
      <div>
        <h4>Otsikko</h4>
          <p>{title3}</p>
        <h4>Osoite</h4>
          <a href={url3} target="_blank">{url3}</a>
        <h4>Aika</h4>
          <p>{time3}</p>
      </div>
    </div>
    </>
  )
  }
}

export default App;
