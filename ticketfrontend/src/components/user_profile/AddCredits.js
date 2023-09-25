import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import paymentImage from "../../Assests/payment.png";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios"
const AddCredits = () => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    axios
  .get("http://localhost:4000/ts/creditCard")
  .then((res) => {
    for(let i=0;i<res.data.length;i++){
      if(res.data[i].userId === user.userName){
        setCard(res.data[i])
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
  }, []);
  
const [card, setCard] = useState([]);

useEffect(() => {
  axios
.get("http://localhost:4000/ts/credit")
.then((res) => {
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

console.log(credit.amount)


      const [amount,setAmount]=useState(0);

    const handleAddCredits=()=>{
      axios.post(`http://localhost:4000/ts/credit/`,{
        userName:user.userName,
        amount:amount,
        lastAdded:amount,
        creditCard:card.creditCard,
        cvc:card.cvc,
        expDate:card.expDate,
        date:new Date(),
    }).then(res=>{
        console.log(res);
        alert("Successfully added!")
    }).catch(err=>{
        console.log(err);
    })
    }

    const handleUpdateCredits=()=>{
      axios.put(`http://localhost:4000/ts/credit/${credit._id}`,{
          userName:user.userName,
          amount:credit.amount+amount,
          lastAdded:amount,
          creditCard:card.creditCard,
          cvc:card.cvc,
          expDate:card.expDate,
          date:new Date(),
      }).then(res=>{
          console.log(res);
          alert("Successfully updated!")
      }).catch(err=>{
          console.log(err);
      })
  }
    

    const editPage = () => {
      window.location.href = `/editCreditCard`;
    }



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
            Hii John....
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
              Add Credits
            </Typography>
            <hr />
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <img
                  src={paymentImage}
                  style={{ height: "200px", marginTop: "20px" }}
                  alt="addCredits"
                  busImage
                />
                <CardActions
                  style={{
                    justifyContent: "center",
                    marginBottom: "10px",
                    marginTop: "95px",
                  }}
                >
                  <Button color="warning" variant="contained" size="large" onClick={editPage}>
                    Edit Card Details
                  </Button>
                </CardActions>
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
                      label="Amount"
                      variant="outlined"
                      onChange={(e)=>{
                          setAmount(parseInt(e.target.value))
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
                    label={card.creditCard}
                    variant="outlined"
                    inputProps={

                      { readOnly: true, }
            
                    }
                    
                  />

                  <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label={card.cvc}
                    variant="outlined"
                  />
                  <TextField
                    style={{
                      marginLeft: "45px",
                      textAlign: "start",
                      marginTop: "10px",
                    }}
                    id="outlined-basic"
                    label={card.expDate}
                    variant="outlined"
                  />
                  <CardActions
                    style={{
                      justifyContent: "center",
                      marginBottom: "10px",
                      marginTop: "50px",
                      marginRight:"100px"
                    }}
                  >
                    {(!credit.amount) && (
                    <Button color="warning" variant="contained" size="large" onClick={handleAddCredits}>
                      Add Credits
                    </Button>
                    )}
                    {(credit.amount>=1) && (
                    <Button color="warning" variant="contained" size="large" onClick={handleUpdateCredits}>
                      Add Credits
                    </Button>
                    )}
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

export default AddCredits;
