import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import profileIcon from "../../Assests/userProfileImage.png";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const DriverAccountDashboard = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

DriverAccountDashboard.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DriverAccountTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    const [date,setDate]=useState("")
    const [shift,setShift]=useState("")
    const [purpose,setPurpose]=useState("")
    const [route,setRoute]=useState("")
    const [loggedUserName,setLoggedUserName]=useState("")
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const deleteProfile = () => {
    axios
      .delete(`http://localhost:4000/ts/profile/${user._id}`)
      .then((res) => {
        console.log(res);
        window.confirm("Do you want to delete your profile?");
        if (true) {
          alert("Successfuly deleted!");
          localStorage.removeItem("loggedInUser");
          window.location.href = `/`;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured");
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 10,
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedUserName(user.userName);
    }
  }, []);
  const handleHistory=()=>{
    window.location.href="/driverOT"
  }

  const  handleOtRequest=async()=>{
    await axios.post("http://localhost:4000/ts/ot",{
        userName:loggedUserName,
        date:date,
        shift:shift,
        purpose:purpose,
        route:route,
        status:"pending",
        reason:"pending"
    }).then(res=>{
        console.log();
    }).catch(err=>{
        console.log(err);
    })
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl fullWidth>
            <TextField
              style={{
                textAlign: "start",
                marginTop: "10px",
              }}
              id="outlined-basic"
              label="Date"
              variant="outlined"

              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Shift</InputLabel>
            <Select
              style={{
                textAlign: "start",
                marginTop: "10px",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            //   value={age}
              label="Shift"
                onChange={(e) => {
                  setShift(e.target.value);
                }}
            >
              <MenuItem value="day">Day</MenuItem>
              <MenuItem value="midDay">Mid Day</MenuItem>
              <MenuItem value="night">Night</MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={{
              textAlign: "start",
              marginTop: "10px",
            }}
            id="outlined-basic"
            label="Purpose"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setPurpose(e.target.value);
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Route</InputLabel>
            <Select
              style={{
                textAlign: "start",
                marginTop: "10px",
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Route"
                onChange={(e) => {
                  setRoute(e.target.value);
                }}
            >
              <MenuItem value="malabe">Malabe</MenuItem>
              <MenuItem value="kaduwela">Kaduwela</MenuItem>
            </Select>
          </FormControl>
          <CardActions
            style={{
              justifyContent: "center",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            <Button
              color="warning"
              variant="contained"
              size="large"
              onClick={handleOtRequest}
              fullWidth
            >
              Request
            </Button>
          </CardActions>
        </Box>
      </Modal>

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
        <Grid item xs={4}>
          <Button
            color="warning"
            variant="contained"
            size="large"
            style={{ marginRight: "15px" }}
          >
            Routes
          </Button>

          <Button color="warning" variant="contained" size="large">
            Time Table
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={1}></Grid>
        <Grid
          style={{ backgroundColor: "#f5f5f5", marginTop: "30px" }}
          item
          xs={6}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Account" {...a11yProps(0)} />
                <Tab label="Payment" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <DriverAccountDashboard value={value} index={0}>
              <Grid item xs={6} style={{ marginLeft: "100px" }}>
                <Card sx={{ minWidth: 575 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 32 }}>Account</Typography>
                    <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                    <Typography
                      style={{
                        textAlign: "start",
                        marginLeft: "50px",
                        marginTop: "30px",
                      }}
                      variant="body2"
                    >
                      Employee ID: {user.nic}
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "start",
                        marginLeft: "50px",
                        marginTop: "30px",
                      }}
                      variant="body2"
                    >
                      Employee Name: {user.userName}
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "start",
                        marginLeft: "50px",
                        marginTop: "30px",
                      }}
                      variant="body2"
                    >
                      Address: {user.address}
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "start",
                        marginLeft: "50px",
                        marginTop: "30px",
                      }}
                      variant="body2"
                    >
                      Mobile Number: 032-5558874
                    </Typography>

                    <Typography
                      style={{
                        textAlign: "start",
                        marginLeft: "50px",
                        marginBottom: "35px",
                        marginTop: "20px",
                      }}
                      variant="body2"
                    />
                  </CardContent>

                  <CardActions
                    style={{ justifyContent: "center", marginBottom: "10px" }}
                  >
                    <Button color="warning" variant="contained" size="large">
                      Edit Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </DriverAccountDashboard>
            <DriverAccountDashboard value={value} index={1}>
              <Card sx={{ minWidth: 575 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 32 }}>Payment</Typography>
                  <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Last Payment Date:
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Monthly Salary:
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Account Balance:
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    OT Bonus in Month:
                  </Typography>

                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginBottom: "35px",
                      marginTop: "20px",
                    }}
                    variant="body2"
                  />
                </CardContent>
                <div style={{ display: "flex", marginLeft: "260px" }}>
                  <CardActions
                    style={{ justifyContent: "center", marginBottom: "10px" }}
                  >
                    <Button
                      onClick={handleOpen}
                      color="warning"
                      variant="contained"
                      size="large"
                    >
                      Request OT
                    </Button>
                  </CardActions>
                
                  <CardActions
                    style={{ justifyContent: "center", marginBottom: "10px" }}
                  >
                    <Button onClick={handleHistory} color="success" variant="contained" size="large">
                      History
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </DriverAccountDashboard>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 475 }} style={{ backgroundColor: "#f5f5f5",textAlign:"center" }}>
            <CardContent>
              <img
                src={profileIcon}
                alt="profileIcon"
                style={{ width: "150px" }}
              />
              <Typography sx={{ fontSize: 32 }}>
                <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                {user.userName}
              </Typography>
              <Typography style={{ marginTop: "20px" }} variant="body2">
                {user.email}
              </Typography>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <Button color="error" variant="contained" size="large">
                Edit Profile
              </Button>
            </CardActions>
            <CardActions
              style={{ justifyContent: "center", marginBottom: "95px" }}
            >
              <Button
                color="warning"
                variant="contained"
                size="large"
                onClick={deleteProfile}
              >
                Delete Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
