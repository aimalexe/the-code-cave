import React from "react";
import "./fetchRandomUser.css";

function FetchRandomUser() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(res => res.json())
      .then(json => setUser(json.results[0]))
      .catch(err => console.log(err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className="randomUser">
      <h1>Customer data</h1>
      <h2>Name: {user.name.first}</h2>
      <img src={user.picture.large} alt={user.name.first} />

    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default FetchRandomUser;
