import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import loginImage from "../../Assests/login.png";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleAddCredits = () => {
    axios
      .get("http://localhost:4000/ts/profile")
      .then((res) => {
        console.log(res.data);
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].userName === userName && res.data[i].password === password){
            alert("Successfuly loggedIn!")
        localStorage.setItem("loggedInUser", JSON.stringify(res.data[i]));
        window.location.href = `/${res.data[i].role}/Account`;
        break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Grid container spacing={4} style={{ marginTop: "100px" }}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 575 }} style={{ backgroundColor: "#f5f5f5" }}>
            <Typography
              style={{
                textAlign: "center",
                marginLeft: "60px",
              }}
              sx={{ fontSize: 32 }}
            >
              LOGIN
            </Typography>
            <hr />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={loginImage}
                  style={{
                    height: "300px",
                    marginTop: "20px",
                    marginLeft: "120px",
                    marginBottom: "30px",
                  }}
                  alt="addCredits"
                  busImage
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <div style={{ display: "flex" }}>
                    <TextField
                      style={{
                        marginLeft: "45px",
                        textAlign: "start",
                      }}
                      id="outlined-basic"
                      label="User Name"
                      variant="outlined"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>

                  <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <br />
                    <div style={{marginTop:"30px",marginLeft:"40px"}}>
                    <a  href="/register">Not a registered user? Sign Up!</a>
                    </div>
                

                  <CardActions
                    style={{
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "30px",
                      marginRight: "100px",
                    }}
                  >
                    <Button
                      color="warning"
                      variant="contained"
                      size="large"
                      onClick={handleAddCredits}
                      fullWidth
                    >
                      Login
                    </Button>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
