import React, { useState } from "react";
import ReactCalendar from "../components/Calendar";
import Auth from "../utils/auth"
import { Link } from "react-router-dom";


// import { useMutation } from '@apollo/client';
// import { ADD_RESERVATION } from "../utils/mutations";
// import { QUERY_RESERVATION } from "../utils/queries";


//  const [addArrivalDate, { error}] = useMutation(ADD_RESERVATION, {
//     update(cache, { data: { addArrivalDate } }) {
//         try{
//         const { reservation } = cache.readQuery({ query: QUERY_RESERVATION});

//         cache.writeQuery({
//             query: QUERY_RESERVATION,
//             data: { reservation: [addArrivalDate, ...reservation] }
//         });
//     } catch (e) {
//         console.warn("First reservation insertion by user")
//     }

// }
// });


  
const Reservation = () => {
  const loggedIn = Auth.loggedIn();

    return (
      <div className="resPage">
        <div className="resHead">
        <h1 className="text-center">Book your Reservation Today!</h1>
        </div>
            {loggedIn ? (
              <div className="calendar">
              <div>
                <ReactCalendar />
              </div>
              </div>
            ) : 
              <div className ="text-center loginPlsBtn">
                <Link to="/login">You need to log in first</Link>
              </div> }
        </div>
    );
};

export default Reservation;