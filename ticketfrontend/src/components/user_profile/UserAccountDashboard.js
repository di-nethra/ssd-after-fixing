import React from "react";
import axios from 'axios'

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profileIcon from "../../Assests/userProfileImage.png";
import { CreditCard } from "@mui/icons-material";
const UserAccountDashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const accountPage = () => {
    window.location.href = `/accountBalance`;
  }

  const editCard = () => {
    window.location.href = `/editCreditCard`;
  }

  const deleteProfile = () => {
   
    axios
      .delete(`http://localhost:4000/ts/profile/${user._id}`)
      .then((res) => {
        console.log(res);
        window.confirm("Do you want to delete your profile?");
        if(true){
        alert("Successfuly deleted!")
        localStorage.removeItem('loggedInUser');
        window.location.href = `/`;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured")
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
        <Grid item xs={4}>
          <Button
            color="warning"
            variant="contained"
            size="large"
            style={{ marginRight: "15px" }}
          >
            QR Code
          </Button>

          <Button color="warning" variant="contained" size="large" onClick={accountPage}>
            Account Balance
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 575 }} style={{ backgroundColor: "#f5f5f5" }}>
            <CardContent>
              <Typography sx={{ fontSize: 32 }}>Profile</Typography>
              <hr style={{ marginLeft: "60px", marginRight: "60px" }} />
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                User Name: {user.userName}
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
                Mobile Number: 032-123456789
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                NIC: {user.nic}
              </Typography>
              <Typography
                style={{
                  textAlign: "start",
                  marginLeft: "50px",
                  marginTop: "30px",
                }}
                variant="body2"
              >
                Card Type: {user.cardType}
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
              <Button color="warning" variant="contained" size="large" onClick={editCard}>
                Change Credit Card Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 475 }} style={{ backgroundColor: "#f5f5f5",textAlign:"center"  }}>
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
              style={{ justifyContent: "center", marginBottom: "20px" }}
            >
              <Button color="warning" variant="contained" size="large" onClick={deleteProfile}>
                Delete Profile
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserAccountDashboard;
