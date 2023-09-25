import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from 'axios'


const AccountBalancePage = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [journey, setJourney] = useState([]);

useEffect(() => {
    axios
      .get("http://localhost:4000/ts/journey")
      .then((res) => {
        setJourney(res.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured")
      });
  }, []);

  return (

    <div>
        <Grid container spacing={4} style={{ marginTop: "5px" }}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <Typography
                            style={{
                                textAlign: "start",
                                marginLeft: "20px",
                                fontWeight: "bold",
                            }}
                            sx={{ fontSize: 32 }}
                        >
                            Hii {user.userName}....
                        </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
      {journey.map((item) => {
            return (
                <div><Grid container spacing={4} style={{ marginTop: "100px" }}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 575 }} style={{ backgroundColor: "#f5f5f5" }}>
                                <Typography
                                    style={{
                                        textAlign: "start",
                                        marginLeft: "60px",
                                    }}
                                    sx={{ fontSize: 32 }}
                                >
                                    Journey from {item.startUpLocation} to {item.destination}
                                </Typography>
                                <hr />
                                <Grid container spacing={4}>
                                    <Grid item xs={6}>
                                        <CardContent>
                                            <Typography
                                                style={{
                                                    textAlign: "start",
                                                    marginLeft: "50px",
                                                    marginTop: "30px",
                                                }}
                                                variant="body2"
                                            >
                                                Start location : {item.startUpLocation}
                                            </Typography>
                                            <Typography
                                                style={{
                                                    textAlign: "start",
                                                    marginLeft: "50px",
                                                    marginTop: "30px",
                                                }}
                                                variant="body2"
                                            >
                                                Destination : {item.destination}
                                            </Typography>

                                            <Typography
                                                style={{
                                                    textAlign: "start",
                                                    marginLeft: "50px",
                                                    marginTop: "30px",
                                                }}
                                                variant="body2"
                                            >
                                                Diparture Time : {item.departureTime}
                                            </Typography>

                                            <Typography
                                                style={{
                                                    textAlign: "start",
                                                    marginLeft: "50px",
                                                    marginTop: "30px",
                                                }}
                                                variant="body2"
                                            >
                                                Journey end time : {item.journeyEndTime}
                                            </Typography>

                                            <Typography
                                                style={{
                                                    textAlign: "start",
                                                    marginLeft: "50px",
                                                    marginTop: "30px",
                                                }}
                                                variant="body2"
                                            >
                                                Date : {item.date}
                                            </Typography>

                                            <Typography
                                                style={{
                                                    textAlign: "start",
                                                    marginLeft: "50px",
                                                    marginTop: "30px",
                                                }}
                                                variant="body2"
                                            >
                                                Available Seats : {item.seats}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img
                                            src={item.link}
                                            style={{ minHeight: "400px",minWidth: "400px",maxHeight: "500px",maxWidth: "500px" }}
                                            alt=""
                                            busImage />
                                    </Grid>
                                </Grid>

                                <CardActions
                                    style={{
                                        justifyContent: "center",
                                        marginBottom: "10px",
                                        marginTop: "50px",
                                    }}
                                >
                                    <Button color="warning" variant="contained" size="large">
                                        Book Ticket
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid></div>
            )
      })}
    </div>
  );
};

export default AccountBalancePage;


