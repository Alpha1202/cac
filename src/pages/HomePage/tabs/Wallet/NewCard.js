import React from 'react'
import Form from '../../../../components/Form'
import Input from '../../../../components/Input'
import RadioButton from '../../../../components/RadioButton'
import Botton from '../../../../components/Botton'


function NewCard() {
    return (
        <div className="new-card-container">
        <Form>
            <div className="form-input-wrapper">
                <Input text="Card number"/>        
                <Input text="Expiry date" small/>        
            </div>
            <div className="form-input-wrapper">
                <Input text="Card holder" />
                <Input text="CVV" small/>        
            </div>
            <div className="default-card-wrapper">
                <span>Set as default card</span>
                <RadioButton /> 
            </div>
            <div className="card-button-wrapper">
                <Botton>add card</Botton>
            </div>
        </Form> 
    </div>   
    )
}

export default NewCard
