import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const CobaFetch = () => {
  // const [dogs, setDogs] useState("")
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/users");
      // setDogs(data.message)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postData = async () => {
    try {
      const send = await axios.post("http://localhost:3000/users", {
        firstName: "Dani",
        lastName: "Pedrosa",
        email: "danip123@gmail.com",
        password: "ddd123",
      });
      console.log(send);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    postData();
  });

  return (
    <>
      <Box></Box>
    </>
  );
};
