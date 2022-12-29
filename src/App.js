import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  let [list, setList] = useState([{ oUrl: '', sUrl: '' }]);
  let [url, setUrl] = useState("http://www.google.com");
  const baseUrl = "https://api.shrtco.de/v2/";
  const endpoint = "shorten";

  let urlUpdate = (e) => {
    setUrl(e.target.value);
  };

  const formatUrl = (url) => {
    return `${baseUrl}/${endpoint}?url=${url}`;
  };

  const short = (e) => {
    e.preventDefault();
    url = formatUrl(url);
    /* Make api call here */
    axios(url)
      .then((res) => {
        console.log(res.data.result.full_short_link);
        console.log(res);
        const shortUrl = res.data.result.full_short_link;
        setList((state, props) => [...state, { oUrl: `${url}`, sUrl: `${shortUrl}` }],);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(() => {
        setUrl("");
      });
  };

  return (
    <div className="App">
      <h1>URL Shortner</h1>
      <form onSubmit={short}>
        <input type="url" value={url} onChange={urlUpdate} required />
        <button type="submit"> Short </button>
      </form>
      {
        list.map((item) => (
          <div key={uuidv4()}>
            <p>{item.oUrl.split('=')[1]}</p><h5>{item.sUrl}</h5>
            <hr></hr>
          </div>
        ))
      }
    </div>
  );
}