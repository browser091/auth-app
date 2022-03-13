import React from "react";

import {useMappedState} from "./bindings";
import './index.css'


const Status = () => {
    const {selectedCount, allCount} = useMappedState()


    return <>
        <div className='count'>All rows: {allCount}</div>
        <div className='count'>Selected rows: {selectedCount}</div>
    </>
}

export default Status