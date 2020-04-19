import React, { useState } from 'react';
import SelectedDashboard from "../../static/icons/selected/DASHBOARD P.png"
import UnSelectedDashboard from "../../static/icons/unselected/DASHBOARD.png"
import SelectedLoan from "../../static/icons/selected/LOAN P.png"
import UnSelectedLoan from "../../static/icons/unselected/LOAN.png"
import SelectedPropVaultP from "../../static/icons/selected/PROPVAULT P.png"
import UnSelectedPropVaultP from "../../static/icons/unselected/PROPVAULT.png"
import SelectedVaultP from "../../static/icons/selected/VAULT P.png"
import UnSelectedVaultP from "../../static/icons/unselected/VAULT.png"
import SelectedWalletP from "../../static/icons/selected/WALLET P.png"
import UnSelectedWalletP from "../../static/icons/unselected/WALLET.png"
import { FiMessageSquare } from 'react-icons/fi';
import Tab from "./Tab";
const tabs = [
    ["dashboard",SelectedDashboard,UnSelectedDashboard],
    ["vault",SelectedVaultP,UnSelectedVaultP],
    ["wallet",SelectedWalletP,UnSelectedWalletP],
    ["propVault",SelectedPropVaultP,UnSelectedPropVaultP],
    ["loan",SelectedLoan,UnSelectedLoan],
];
function SideBar(props) {
    return (
        <React.Fragment>
            <div>
                <div>
                    <div className="side-nav cover">
                        {tabs.map((item,idx)=><Tab item={item} tab={props.tab} setTab={props.setTabHandler}/>)}
                    </div>  
                </div>
                <div className="message">
                    <FiMessageSquare color={"#432d78"} size={"2rem"}/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SideBar;