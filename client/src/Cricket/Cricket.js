import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./Navbar";
import MyCard from "./MyCard";
import { getMatches } from "./api";
import { Container, Grid, Typography } from "@material-ui/core";
function Cricket() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        ////console.log(data.typeMatches);
        setMatches(data.typeMatches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {/* {matches.map((match) => ( */}
              <MyCard match={matches}></MyCard>
            {/* ))} */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Cricket;
