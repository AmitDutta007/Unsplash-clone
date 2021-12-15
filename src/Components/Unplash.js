import React, { useState } from "react";

export const Unplash = () => {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);

  const fetchimgs = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=BzZPkDq8VXeCFMnZiJ8JuvxMfOiyqtxX1YeQvLEoVso&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((val) => {
        //   console.log(val)
        setResult(val.results);
      });
  };

  return (
    <>
      <div className="mydiv">
        {/* <span>search</span> */}
        <input
          type="search"
          value={value}
          placeholder="Search"
          className="inputfld"
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button className="btn" onClick={fetchimgs}>
          Search
        </button>
      </div>

      <div className="gallery">
        {result.map((item) => {
          return <img className="item" key={item.id} src={item.urls.regular} />;
        })}
      </div>
    </>
  );
};

// BzZPkDq8VXeCFMnZiJ8JuvxMfOiyqtxX1YeQvLEoVso

// p9u_9rmJc6cX0yOM_grVTo_XAlS59wmRTWs381L1_mY
