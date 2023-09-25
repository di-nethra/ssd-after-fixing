import React, { useEffect, useState } from "react";
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
import axios from "axios";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const DriverOTDashboard = (props) => {
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

DriverOTDashboard.propTypes = {
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

export default function OtTabs() {
  const [value, setValue] = useState(0);
  const [loggedUserName, setLoggedUserName] = useState("");
  const [responseData, setResponesData] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedUserName(user.userName);
    }

    axios
      .get("http://localhost:4000/ts/ot")
      .then((res) => {
        console.log(res.data);

        setResponesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(responseData);
  return (
    <div>
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
                <Tab label="Notifications" {...a11yProps(0)} />
                <Tab label="Rejected" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <DriverOTDashboard value={value} index={0}>
              {responseData.map((item) => {
                  if(item.userName===loggedUserName && item.status==='accepted'){
                return (
                  <Card sx={{ minWidth: 575 }} style={{ marginTop: "20px" }}>
                    <Grid container>
                      <Grid item xs={8}>
                      <CardContent>
                      <div style={{ fontWeight: "bold" }}>
                        OT Request Accepted
                      
                      </div>
                      Date: {item.date}
                      <br />
                      Route: {item.route}
                      <br />
                      Shift: {item.shift}
                    </CardContent>
                      </Grid>
                      <Grid item xs={4}>
                      <CheckRoundedIcon
                          sx={{ fontSize: 80, color: "green",marginTop:"20px" }}
                        />
                      </Grid>
                    </Grid>
             
                  </Card>
                );
                  }
              })}
            </DriverOTDashboard>
            <DriverOTDashboard value={value} index={1}>
            {responseData.map((item) => {
                  if(item.userName===loggedUserName && item.status==='rejected'){
                return (
                  <Card sx={{ minWidth: 575 }} style={{ marginTop: "20px" }}>
                    <Grid container>
                      <Grid item xs={8}>
                      <CardContent>
                      <div style={{ fontWeight: "bold" }}>
                        OT Request Rejected
                      
                      </div>
                      Date: {item.date}
                      <br />
                      Reason: {item.reason}
                
                    </CardContent>
                      </Grid>
                      <Grid item xs={4}>
                      <ClearRoundedIcon
                          sx={{ fontSize: 80, color: "red",marginTop:"20px" }}
                        />
                      </Grid>
                    </Grid>
             
                  </Card>
                );
                  }
              })}
            </DriverOTDashboard>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{ minWidth: 475 }}
            style={{ backgroundColor: "#f5f5f5", textAlign: "center" }}
          >
            <CardContent>
              <img
                src={profileIcon}
                alt="profileIcon"
                style={{ width: "150px" }}
              />
              <Typography sx={{ fontSize: 32 }}>
                <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
                {loggedUserName}
              </Typography>
              <Typography style={{ marginTop: "20px" }} variant="body2">
                {`${loggedUserName}@gmail.com`}`
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
