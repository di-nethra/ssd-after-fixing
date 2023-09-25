import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import loginImage from "../../Assests/login.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
const SignUpPage = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [nic, setnic] = useState("");
  const [role, setrole] = useState("");
  const [cardType, setcardType] = useState("");

  const handleRegister = () => {
    const data={
      userName: userName,
      password: password,
      email: email,
      address: address,
      nic: nic,
      cardType:cardType,
      role:role
    }
    axios
      .post("http://localhost:4000/ts/profile", data)
      .then((res) => {
        console.log(res);
        alert("Successfuly Registered!")
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        window.location.href = `/${role}/Account`;
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured")
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
              Sign Up
            </Typography>
            <hr />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={loginImage}
                  style={{
                    height: "400px",
                    marginTop: "70px",
                    marginLeft: "30px",
                    marginBottom: "30px",
                  }}
                  alt="addCredits"
                  busImage
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <TextField
                    style={{
                    
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    onChange={(e) => {
                      setuserName(e.target.value);
                    }}
                  />
                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />

                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="address"
                    variant="outlined"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                  />
                  <TextField
                    style={{
                     
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="NIC"
                    variant="outlined"
                    onChange={(e) => {
                      setnic(e.target.value);
                    }}
                  />

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                     style={{
                    
                        textAlign: "start",
                        marginTop: "10px",
                      }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Role"
                      onChange={(e) => {
                        setrole(e.target.value);
                      }}
                    >
                      <MenuItem value="customer">Customer</MenuItem>
                      <MenuItem value="driver">Driver</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    style={{
                
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label="Card Type"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      setcardType(e.target.value);
                    }}
                  />
                  <br />
                  <div style={{ marginTop: "30px", marginLeft: "40px" }}>
                    <a href="/">Already a registered user? Login!</a>
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
                      onClick={handleRegister}
                      fullWidth
                    >
                      Sign Up
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

export default SignUpPage;
