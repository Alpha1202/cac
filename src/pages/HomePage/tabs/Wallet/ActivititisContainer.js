import React from 'react';
import ActivityCard from '../../../../components/ActivityCard';

function ActivititisContainer() {
    return (
        <div className="activities-container">
            <h2>activities</h2>
            <div className="activity-wrapper">
                <ActivityCard status={true}/> 
                <ActivityCard status={false}/> 
            </div>
        </div>
    )
}

export default ActivititisContainer;
