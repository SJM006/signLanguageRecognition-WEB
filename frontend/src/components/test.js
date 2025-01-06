import React, { useEffect, useState } from "react";
import axios from "axios";

const ExampleComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <h1>{message}</h1>;
};

export default ExampleComponent;
