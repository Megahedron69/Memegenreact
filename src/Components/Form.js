import React from "react";

export default function Form() {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  React.useEffect(() => {
    const mame = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      try {
        console.log("api connected");
        const data = await res.json();
        setAllMemes(data.data.memes);
      } catch {
        console.log("api failure");
      }
    };
    mame();
  }, []);
  function randoimg() {
    const randno = Math.floor(Math.random() * allMemes.length);
    const urle = allMemes[randno].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: urle,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="Mypage">
      <div className="inputs">
        <input
          htmlFor="Toptext"
          placeholder="Enter top text"
          name="topText"
          type="text"
          className="form--input"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          className="form--input"
          value={meme.bottomText}
          onChange={handleChange}
          htmlFor="Bottomtext"
        ></input>
      </div>
      <div className="button">
        <button type="submit" onClick={randoimg}>
          Get a new meme image{" "}
        </button>
      </div>
      <div className="meme">
        <div className="Toptext">
          <h3>{meme.topText}</h3>
        </div>
        <img src={meme.randomImage} alt="meme" />
        <div className="Bottomtext">
          <h3>{meme.bottomText}</h3>
        </div>
      </div>
    </div>
  );
}
