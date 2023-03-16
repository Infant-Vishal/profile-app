import React from "react";
import axios from "axios";

const GettingData = async () =>{
    
        const response = await axios
          .get("https://itunes.apple.com/in/rss/topalbums/limit=25/json")
          .then(function (response) {
            console.log("response", response);
            return response.data;
          })
      
    }

export default GettingData;
