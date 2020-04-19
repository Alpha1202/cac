import React, { Component } from "react";
import "./style/style.css";
import "./style/responsive.css";
import Overview from "./tabs/Overview";
import SideBar from "../../components/SideBar/SideBar";
import Property from "./tabs/Property/";
import Wallet from "./tabs/Wallet/";
import VaultBalance from "./tabs/VaultBalance";
import Vault from "./tabs/Vault";
import { withRouter } from "react-router";
import AuthHeader from "../../components/AuthHeader/";
class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: "wallet",
      info1: [
        ["Last Deposit", "Jan. 23 2020"],
        ["Last Withdrawal", "Dec. 1 2019"],
      ],
      info2: [
        ["Number  of properties I own", "20"],
        ["Number of Groups i'm in", "3"],
      ],
    };
  }
  componentDidMount() {
    function notAuth() {
      this.props.history.push("/signin");
    }
    let notAuthenticated = notAuth.bind(this);
    let isUserAuthenticated = localStorage.getItem("auth");
    if (!isUserAuthenticated) notAuthenticated();
    let authenticatedUser = JSON.parse(isUserAuthenticated);
    if (!authenticatedUser["auth"]) notAuthenticated();
    let tab;
    let str = this.props.location.search;
    if (!str) this.setState({ tab: "dashboard" });
    else tab = str.slice(5);
    ["dashboard", "vault", "wallet", "propVault", "loan"].map(
      (item, idx) => item == tab && this.setState({ tab: tab })
    );
  }
  setTab = (tab) => {
    this.props.history.push(`/home?tab=${tab}`);
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;
    return (
      <div className="home-container">
        <AuthHeader />
        <div className="home-wrapper">
          <aside className="left-side">
            <SideBar tab={this.state.tab} setTabHandler={this.setTab} />
          </aside>
          <div className="right-side">
            {tab == "vault" && <Vault />}
            {tab == "wallet" && <Wallet />}
            {tab == "loan" && <Property />}
            {tab == "propVault" && <VaultBalance />}
            {tab == "dashboard" && (
              <Overview info1={this.state.info1} info2={this.state.info2} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(index);
