import React, { useState } from 'react'
import BackDropMain from "./BackDropMain"
import AdminPage from '../../pages/AdminPage'
function BackDrop() {
    const [Edit, setEdit] = useState(false)
    return (
        <React.Fragment>
            {(!Edit ? <BackDropMain editHandler={setEdit}/> : <AdminPage editHandler={setEdit}/>)}
        </React.Fragment>
    );
}

export default BackDrop
