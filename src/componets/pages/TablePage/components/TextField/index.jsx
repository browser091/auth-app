import React, {memo, useState} from "react";

import './index.css'

const TextField = ({value, onChange}) => {
    const [nextValue, setValue] = useState(value)

    const handleOnBlur = () => {
        onChange(nextValue)
    }
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    return <input type='text' className="input" value={nextValue} onChange={handleOnChange} onBlur={handleOnBlur}/>

}

export default memo(TextField)