import React, { useEffect, useState } from "react";

function NavBar() {

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [loggedUser, setLoggedUser] = useState("null");
  const [loggedUserName, setLoggedUserName] = useState("User Not Logged In");
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedUser(user.role);
      setLoggedUserName(user.userName);
    }
  }, []);

  
let handleLogout = () =>{
  localStorage.removeItem('loggedInUser');
    alert("Logged out successfuly!")
    window.location.href="/";
}

  return (
    <div data-testid="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            Ticket MS
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* driver */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {(loggedUser == "driver") && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <a className="nav-link" aria-current="page" href="/driver/Account">
                 Add Ot
               </a>
             </li>

             <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/driver/Account">
                  Dashboard
                </a>
              </li>

             </ul>
             )}

             

            

            {/*customer*/}
            {(loggedUser == "customer") && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/addCredit">
                  Add credit
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/journey">
                  journey
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/creditCard">
                  Credit card
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/customer/Account">
                  Dashboard
                </a>
              </li>

            </ul>
            )}

            {/*NOt logged in*/}
            {(loggedUser == null) && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                 Login
                </a>
              </li>


            </ul>
            )}
           

            
            <div className="dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {loggedUserName}
                <span className="nav-values"></span>
              </button>
              
            </div>
            
          </div>
        </div>
        {(loggedUser == null) && (
            <li className="nav-item">
             <a className="nav-link" href="/">
             Login
            </a>
            </li>
             )} 

            {(loggedUser !== null) && (
            <li className="nav-item">
             <button className="nav-link btn btn-secondary" onClick={handleLogout}>
             Logout
            </button>
            </li>
             )}
      </nav>
    </div>
  );
}

export default NavBar;