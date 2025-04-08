import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { getMatchDetail } from "./api";

const MyCard = ({ match }) => {
  console.log(match);

  return (
    <div>
      {match.map((item, index) => (
        <div>
          <Grid container alignItems="center" justifyContent="center">
            <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>{item.matchType}</Typography>
          </Grid>

          {item.seriesMatches.map((item, index) => (
            <div>
              <Card
                style={{
                  background: "#e2e2e2",
                  marginTop: 15,
                }}
              >
                {item.seriesAdWrapper ? (
                  <CardContent>
                    <Grid>{item.seriesAdWrapper.seriesName}</Grid>
                    {item.seriesAdWrapper.matches.map((match, index) => (
                      <div>
                        <div>
                          <Grid container justify="center" alignItems="center" spacing={4}>
                            <Grid item>
                              <Typography variant="h5">{match.matchInfo.team1.teamName}</Typography>
                            </Grid>
                            <Grid item>
                              <img
                                style={{ width: 85 }}
                                src={require("../img/vs.png")}
                                alt=""
                              />
                            </Grid>
                            <Grid item>
                              <Typography variant="h5">{match.matchInfo.team2.teamName}</Typography>
                            </Grid>
                          </Grid>

                          <Grid container alignItems="center" justifyContent="center">
                            <Typography>{match.matchInfo.status}</Typography>
                          </Grid>
                          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                            <Grid>
                              {match.matchScore && match.matchScore.team1Score ? (
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td>{match.matchInfo.team1.teamName} Inning Score</td>
                                      </tr>
                                      <tr>
                                        <td>Runs: {match.matchScore.team1Score.inngs1.runs}</td>
                                      </tr>
                                      <tr>
                                        <td>Overs: {match.matchScore.team1Score.inngs1.overs}</td>
                                      </tr>
                                      <tr>
                                        <td>Wickets: {match.matchScore.team1Score.inngs1.wickets ? ( match.matchScore.team1Score.inngs1.wickets) : "0"}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              ) : (
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                  <div style={{ flex: 1 }}>
                                    <Typography>Inning not started yet</Typography>
                                  </div>
                                </div>
                              )}
                            </Grid>
                            <Grid>
                              {match.matchScore && match.matchScore.team2Score && match.matchScore.team2Score.inngs1 ? (
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                  {match.matchScore.team2Score.inngs1.runs && match.matchScore.team2Score.inngs1.overs && match.matchScore.team2Score.inngs1.wickets ? (
                                    <table >
                                      <tbody>
                                        <tr>
                                          <td>{match.matchInfo.team2.teamName} Inning Score</td>
                                        </tr>
                                        <tr>
                                          <td>Runs: {match.matchScore.team2Score.inngs1.runs}</td>
                                        </tr>
                                        <tr>
                                          <td>Overs: {match.matchScore.team2Score.inngs1.overs}</td>
                                        </tr>
                                        <tr>
                                          <td>Wickets: {match.matchScore.team2Score.inngs1.wickets ? (match.matchScore.team2Score.inngs1.wickets) : "0"}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  ) :
                                    (
                                      <Grid>
                                        <Typography>Not Present</Typography>
                                      </Grid>
                                    )}

                                </div>
                              ) : (
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                  <div style={{ flex: 1 }}>
                                    <Typography>Inning not started yet</Typography>
                                  </div>
                                </div>
                              )}
                            </Grid>
                          </Grid>
                        </div>
                        <hr />
                      </div>
                    ))}

                  </CardContent>
                ) : null}

              </Card>
            </div>
            // )
          ))}

        </div>
      ))}
    </div>

  )
};

export default MyCard;
