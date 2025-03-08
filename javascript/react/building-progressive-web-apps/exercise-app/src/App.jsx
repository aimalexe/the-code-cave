import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos");
      const json = await result.json();
      console.log("🚀 ~ fetchData ~ json:", json)
      
      setData(json);
    };
    fetchData();
  }, []); // Empty array ensures it runs only once when the component mounts


  return (
    <div>
      <header>
        <h1>Videos</h1>
      </header>
      <section id="videos">
        {data.map((video) => (
          <div key={video.id}>
            <h2>{video.name}</h2>
            <video height="200" controls>
              <source src={video.video_url} type="video/mp4" />
            </video>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App
