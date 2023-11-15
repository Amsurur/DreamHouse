import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="mt-10 ml-5">
        <Link to="/">
          <Button variant="outlined" color="error">
            Rezka Home
          </Button>
        </Link>
      </div>
      <div className="text-center my-40">
        <p className="text-5xl font-extrabold font-mono mb-10 text-red-700">
          <span className="text-9xl">Chupa chups!</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
