import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import busImage from "../../Assests/busImage.png";
import axios from "axios"

const AccountBalancePage = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const addCreditPage = () => {
    window.location.href = `/addCredit`;
  }

  useEffect(() => {
    axios
  .get("http://localhost:4000/ts/credit")
  .then((res) => {
    console.log(res.data);
    for(let i=0;i<res.data.length;i++){
      if(res.data[i].userName === user.userName){
        setCredit(res.data[i])
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
  }, []);
  
  const [credit, setCredit] = useState([]);
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
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
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
              Account Balance
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
                    Last Added Date: {credit.date}
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Last Added Amount: {credit.lastAdded}
                  </Typography>

                  <Typography
                    style={{
                      textAlign: "start",
                      marginLeft: "50px",
                      marginTop: "30px",
                    }}
                    variant="body2"
                  >
                    Account Balance: {credit.amount}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={busImage}
                  style={{ height: "200px" }}
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
              <Button color="warning" variant="contained" size="large" onClick={addCreditPage}>
                Add Credits
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default AccountBalancePage;
