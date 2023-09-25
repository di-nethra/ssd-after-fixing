import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { TextField } from "@mui/material";

const AccountBalancePage = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [journey, setJourney] = useState([]);
  const [id, setId] = useState("");
  const [seat, setSeatNumber] = useState(0);
  const [selectedJourney, setSelectedJoueney] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4000/ts/journey")
      .then((res) => {
        setJourney(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured");
      });
  }, []);

  const bookSeats = () => {
    axios
      .post(`http://localhost:4000/ts/tickets/`, {
        userName: user.userName,
        journeyId: id,
        seats: seat,
        date: new Date(),
      })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get(`http://localhost:4000/ts/journey/${id}`)
      .then((res) => {
        console.log(res.data);
        setSelectedJoueney(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

      

      axios
      .put(`http://localhost:4000/ts/journey/${id}`, {
        jouneyCode: selectedJourney.jouneyCode,
        startUpLocation: selectedJourney.startUpLocation,
        destination: selectedJourney.destination,
        departureTime: selectedJourney.departureTime,
        journeyEndTime: selectedJourney.journeyEndTime,
        date: selectedJourney.date,
        link: selectedJourney.link,
        seats: (selectedJourney.seats-seat)
      })
      .then((res) => {
        console.log(res);
        alert("Tickets added!");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
      
      
  };

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
          <div>
            <Grid container spacing={4} style={{ marginTop: "100px" }}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Card
                  sx={{ minWidth: 575 }}
                  style={{ backgroundColor: "#f5f5f5" }}
                >
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
                        style={{
                          minHeight: "400px",
                          minWidth: "400px",
                          maxHeight: "500px",
                          maxWidth: "500px",
                        }}
                        alt=""
                        busImage
                      />
                    </Grid>
                  </Grid>

                  <CardActions
                    style={{
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "50px",
                    }}
                  >
                    <Button
                      color="warning"
                      variant="contained"
                      size="large"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => setId(item._id)}
                    >
                      Book Ticket
                    </Button>
                    <div
                      class="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              Book your journey tickets here
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <label>Enter number of seats</label>
                            <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="seat number"
                    variant="outlined"
                    onChange={(e)=>{
                        setSeatNumber(e.target.value)
                    }}
                  />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={bookSeats}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default AccountBalancePage;
