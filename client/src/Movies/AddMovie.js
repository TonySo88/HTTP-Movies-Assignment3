import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddMovie = (props) => {
  const [item, setItem] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });

  const history = useHistory();

  const handleChanges = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, item)
      .then((res) => {
          props.setMovieList(res.data)
          history.push("/")}
          )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChanges}
          placeholder="title"
          value={item.title}
        />
        <input
          type="text"
          name="director"
          onChange={handleChanges}
          placeholder="director"
          value={item.director}
        />
        <input
          type="number"
          name="metascore"
          onChange={handleChanges}
          placeholder="metascore"
          value={item.metascore}
        />
        {/* <input
          type="text"
          name="stars"
          onChange={handleChanges}
          placeholder="stars"
          value={item.stars}
        /> */}
        <button>Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
