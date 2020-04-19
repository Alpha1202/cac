import React from 'react';
import Card1 from '../../../components/Cards/Card1';
import { GiWallet } from 'react-icons/gi';
import { BsShieldLockFill } from 'react-icons/bs';
import AccountInfomation from '../../../components/AccountInformation';
import Card2 from '../../../components/Cards/Card2';
import { IoMdHome } from 'react-icons/io';
import Card3 from '../../../components/Cards/Card3';

function Overview(props) {
    return (
        <div className="valut-container cover">
            <div className="vault-left">
                <Card1 loan={true}  icon={<GiWallet color={"white"} size={"1.5rem"}/>} text={"Wallet Balance"}/>
                <Card1 loan={false} icon={<BsShieldLockFill color={"white"} size={"1.5rem"}/>} text={"Vault Balance"}/>
                <AccountInfomation  info={props.info1} />
            </div>
            <div className="vault-right">
                <Card2 icon={<IoMdHome color={"white"} size={"1.5rem"}/>}/>
                <Card3 icon={<BsShieldLockFill color={"#white"} size={"1.5rem"}/>} />
                <AccountInfomation  info={props.info2} />
            </div>
        </div>
    )
}

export default Overview;
