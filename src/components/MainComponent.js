import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import RequestSpecialBusComponent from "./RequestSpecialBusComponent";
import RequestOutpassComponent from "./RequestOutpassComponent";
import AddBusComponent from "./AddBusComponent";
import RemoveBusComponent from "./RemoveBusComponent";
import UpdateScheduleComponent from "./UpdateScheduleComponent";
import ApproveOutpassComponent from "./ApproveOutpassComponent";
import SelectBusComponent from "./SelectBusComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { loginUser, googleLogin, logoutUser ,postBus,postOutpass,
  postStore,postTicket,postWallet,fetchBus,fetchWallet,fetchOutpass,
  fetchStore,fetchTicket,deleteBus,deleteOutpass,
  postSpecialBusRequest,fetchSpecialBusRequest,deleteSpecialBusRequest,postSchedule,fetchSchedule} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    bus: state.bus,
    specialbusrequest: state.specialbusrequest,
    schedule: state.schedule,

  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  googleLogin: () => dispatch(googleLogin()),
  
  postOutpass: (user,outpass)=> dispatch(postOutpass(user,outpass)),
  fetchOutpass: ()=>dispatch(fetchOutpass()),
  
  postWallet: (wallet)=> dispatch(postWallet(wallet)),
  fetchWallet: ()=>dispatch(fetchWallet()),

  postStore: (store)=> dispatch(postStore(store)),
  fetchStore: ()=>dispatch(fetchStore()),

  postBus: (bus)=> dispatch(postBus(bus)),
  fetchBus: ()=>dispatch(fetchBus()),

  postTicket: (ticket)=> dispatch(postTicket(ticket)),
  fetchTicket: ()=>dispatch(fetchTicket()),

  
  postSchedule: (schedule)=> dispatch(postSchedule(schedule)),
  fetchSchedule: ()=>dispatch(fetchSchedule()),

  deleteBus: (bus)=> dispatch(deleteBus(bus)),
  deleteOutpass: (outpass)=>dispatch(deleteOutpass(outpass)),

  postSpecialBusRequest: (user,specialbusrequest) => dispatch(postSpecialBusRequest(user,specialbusrequest)),
  fetchSpecialBusRequest: ()=> dispatch(fetchSpecialBusRequest()),
  deleteSpecialBusRequest: (specialbusrequest)=> dispatch(fetch(deleteSpecialBusRequest(specialbusrequest))),
});

class Main extends Component {
  render() {
    return (
      <div>
        <Header
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          googleLogin={this.props.googleLogin}
          logoutUser={this.props.logoutUser}
        />
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={300}>
            <Switch>

              <Route
                path="/home"
                component={() => (
                  <Home
                    auth={this.props.auth}
                    loginUser={this.props.loginUser}
                    googleLogin={this.props.googleLogin}
                  />
                )}
              />
              <Route
                path="/requestSpecialBus"
                component={() => <RequestSpecialBusComponent auth={this.props.auth}
                  postSpecialBusRequest={this.props.postSpecialBusRequest} />}
              />
              <Route
                path="/requestOutpass"
                component={() => <RequestOutpassComponent auth={this.props.auth}
                  postOutpass={this.props.postOutpass} />}
              />
              <Route path="/addBus" component={() => <AddBusComponent postBus={this.props.postBus} />} />
              <Route
                path="/removeBus"
                component={() => <RemoveBusComponent />}
              />
              <Route
                path="/updateSchedule"
                component={() => <UpdateScheduleComponent />}
              />
              <Route
                path="/approveOutpass"
                component={() => <ApproveOutpassComponent/>}
              />
              <Route
                path="/selectBus"
                component={() => <SelectBusComponent />}
              />
              <Redirect to="/home" />

            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
