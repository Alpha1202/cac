import React from 'react';
import ActivityCard from "../../../../components/ActivityCard" 
import Form from '../../../../components/Form';
import Input from '../../../../components/Input';
import DropDownButton from '../../../../components/DropDownButton';
import RadioButton from '../../../../components/RadioButton';
import NewButton from '../../../../components/newButton';

function DepositTab(props) {
    return (
    <div className="form-wrapper">                        
        <Form>
            <Input text="Ammount"/> 
            <div className="card-slider-container right-slider">
                <span></span>
                    {props.cardSlider(true,false)}
                <span></span>
            </div>    
            <div className="default-card-wrapper">
                <RadioButton name={"Automate deposit"}/>
            </div>
            <div>
                <DropDownButton />
            </div>
            <div className="card-button-wrapper">
                <NewButton type>{props.tab}</NewButton>
            </div>
        </Form>
    </div>
    )
}

export default DepositTab;
