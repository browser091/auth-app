import React, {memo} from "react";

import './index.css'

const CellFixed = ({isHead, offset, firstRef, value}) => {
    const style = {left: offset}
    const Component = isHead ? 'th' : 'td'

    return <Component>
        <div ref={firstRef} className="row-box">
            <div className="row-head" style={style}>
                {isHead ? 'Name' : value}
            </div>
        </div>
    </Component>
}

export default memo(CellFixed)