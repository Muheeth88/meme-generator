import { Button, TextField } from "@mui/material";
import React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import memesData from "../memesData";

const Form = () => {
  let [imgUrl, setImgUrl] = React.useState("");

  const handleClick = () => {
    let randomNumber = Math.ceil(Math.random() * memesData.data.memes.length);
    setImgUrl(memesData.data.memes[randomNumber].url);
  };

  return (
    <div className="w-1/2 mt-10 mx-auto">
      <div>
        <form>
          <div className="flex justify-center">
            <span className="mx-2">
              <TextField
                className="w-80"
                variant="outlined"
                label="Top Line"
              ></TextField>
            </span>
            <span className="mx-2">
              <TextField
                className="w-80 "
                variant="outlined"
                label="Bottom Line"
              ></TextField>
            </span>
          </div>
          <div className="text-center mt-4 mx-20">
            <Button
              onClick={handleClick}
              endIcon={<PhotoCamera />}
              className="w-full h-12"
              size="large"
              variant="contained"
            >
              Get New Meme
            </Button>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-2">
        <img width="80%" className="" src={imgUrl} alt="Meme_Image"></img>
      </div>
    </div>
  );
};

export default Form;
