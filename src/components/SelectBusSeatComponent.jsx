import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import moment from "moment";

class SelectBusSeatComponent extends Component {
  render() {

    const getSeatRow = (i) => {
      let content = [];
      for(let j = 0; j<4; j++){
        content.push(
          <li className="seat">
          { this.props.bus.seats[i+j] === true ?
            <input type="checkbox" id={i+j}/>
            :
            <input type="checkbox" disabled id={i+j}/>
          }
            <label htmlFor={i+j}>{i+j+1}</label>
          </li>
        );
      }

      return content;
    }
    const getSeatLayout = seatNumber => {
      let content = [];
      for(let i = 0; i<seatNumber; i+=4){
        content.push(<ol className="cabin fuselage">
          <li className="row ml-1">
            <ol className="seats">
              {getSeatRow(i)}
            </ol>
          </li>
        </ol>);
      }

      return content;
    }


    return (
      <div className="container pt-5 c-width">
        <div className="row up-row">
          <div className="col-lg-5 offset-1 offset-xl-0 col-10 mt-3">
            <div className="card mb-4 px-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-7">
                    <h3>Bus No. 1</h3>
                  </div>
                  <div className="justify-content-end d-flex col-12 col-sm-5">
                    <h5>Regular</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-1 ">
                    <div className="row h5 d-flex py-1 justify-content-center">
                      <h5>
                        Source
                        <ArrowForwardIcon /> Destination
                      </h5>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="col-sm-8 col-12 my-1">
                  <AccessTimeIcon /> Departure Date: 15/01/22
                </div>
                <div className="col-sm-8 col-12">
                  <AccessTimeIcon /> Departure Time: 08:00 AM
                </div>
                <div className="row m-1 ">
                  <div className="col-sm-8 col-12">Drivers Name : Imran</div>
                </div>
                <div className="row m-1">
                  <div className="col-sm-8 col-12">Contact No : 987654321</div>
                </div>
                <div className="row d-flex py-1 justify-content-center ">
                  <div className="col-sm-4 m-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary nav-link"
                    >
                      Request Bus <ArrowForwardIcon />
                    </button>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card col-10 mb-4 offset-1 offset-sm-1">
                <div className="card-body p-3">
                  <div className="row h4 d-flex justify-content-center">
                    Seats Available: 15
                  </div>
                  <div className="row h4 d-flex justify-content-center">
                    Extra Bus Requests: 0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <div className="row">wheel</div>
                <div className="col-12">
                <div className="plane">
                    <div className="fuselage"></div>
                      {getSeatLayout(40)}
                    <div className=" fuselage">
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBusSeatComponent;
