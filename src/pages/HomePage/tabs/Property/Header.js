import React from 'react';
import { IoMdHome } from 'react-icons/io';
import HeaderSlider from './HeaderSlider';
import DropDownButton from '../../../../components/DropDownButton';

function Header({selected}) {
    return (
        <div className={`top-wrapper`}>
            <div className="text-icon">
                <h3>Property vault</h3>
                <IoMdHome color={"green"} size={"1.5rem"}/>
            </div>
            {
                selected && (
                    <React.Fragment>
                        <div className="drop-down">
                            <DropDownButton />
                        </div> 
                        <div className="slidder-wrapper">
                            <HeaderSlider />          
                        </div>
                    </React.Fragment>
                )
            }
            {!selected && <span>invite friend to co own</span>}
        </div>
    )
}

export default Header;
