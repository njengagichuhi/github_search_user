import React from "react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setusername] = useState("njengagichuhi");
  const [repositories, setrepositories] = useState([]);
  const [state, setState] = useState("");
  //const [auto, setAuto] = useState("");
  const handler = (e) => {
    setState(e.key);
  };

  const onChangeHandler = (e) => {
    setusername(e.target.value);
  };
  const submitHundler = async (e) => {
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profilejson = await profile.json();
    //console.log(profilejson);
    const repositories = await fetch(profilejson.repos_url);
    const reosjson = await repositories.json();
    console.log(reosjson);
    if (profilejson) {
      setData(profilejson);
      setrepositories(reosjson);
    }
  };

  return (
    <>
      <form action="">
        <div className="container pt-3  d-flex justify-content-center">
          <input
            className="form-control "
            type="text"
            value={username}
            placeholder="username"
            onChange={onChangeHandler}
            onKeyUpCapture={(e) => handler(e)}

          />
          <button type="submit" onClick={submitHundler}>
            searchuser
          </button>
        </div>
      </form>

      <div className="container mt-2 d-flex  justify-content-center bg-secondary ">
        <img
          className="rounded-pill p-3"
          src={data.avatar_url}
          alt={data.html_url}
        />

        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5>
                Name: {data.name} {username}{" "}
              </h5>
            </li>
            <li className="list-group-item">
              <h5> Location: {data.location} </h5>
            </li>
            <li className="list-group-item">
              {" "}
              <h5>email: {data.email}</h5>
            </li>
            <li className="list-group-item">
              <h5>public_repos: {data.public_repos}</h5>
            </li>
            <li className="list-group-item">
              <h5>created at: {data.created_at}</h5>
            </li>
          </ul>
          <div className="container  d-inline-block justify-content-evenly">
            <button className="m-2 rounded bg-primary">
              followers: {data.followers}
            </button>
            <button className="m-2 rounded bg-secondary">
              following: {data.following}
            </button>
            <button className="m-2 rounded bg-success">
              public_gists: {data.public_repos}
            </button>
            <button className="m-2 rounded bg-info">
              public_gists: {data.public_gists}
            </button>
            <button className="rounded"><a href={data.html_url}>view profile</a></button>
          </div>
        </div>
      </div>
      <div>

      
      </div>

    </>
  );
};

export default Profile;
