import React from 'react'
import { Dropdown } from "semantic-ui-react"
function dd() {
    return (
        <div>
            <Dropdown 
                fluid
                search
                selection
                placeholder="Daily"
                options={[{value:"Daily"},{value:"weekly"},{value:"Monthly"},{value:"yearly"}]}
            />
        </div>
    )
}

export default dd
