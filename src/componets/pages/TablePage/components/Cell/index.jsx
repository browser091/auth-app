import React, {useState, useCallback, memo} from "react";
import TextField from "../TextField";
import {useMappedActions} from "./bindings";

const Cell = ({isHead, value, field, idRow}) => {
    const Component = isHead ? 'th' : 'td'
    const {updateRow} = useMappedActions()
    const [isEditing, setEditing] = useState(false)

    const handleOnDoubleClick = (e) => {
        e.stopPropagation()
        if (!isHead) {
            setEditing(true)
        }
    }

    const handleOnClick = (e) => {
        if (!isHead) {
            e.preventDefault()
            e.stopPropagation()
        }
    }

    const handleOnChange = useCallback((nextValue) => {
        setEditing(false)
        updateRow({id: idRow, params: {[field]: nextValue}})
    }, [field, idRow])


    return <Component onDoubleClick={handleOnDoubleClick} onClick={handleOnClick}>{isEditing ?
        <TextField value={value} onChange={handleOnChange}/> : value}</Component>
}

export default memo(Cell)