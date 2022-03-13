import React, {memo, useMemo} from "react";

import Cell from '../Cell';
import CellFixed from '../CellFixed';

import {useMappedState, useMappedActions} from "./bindings";
import './index.css'


const Row = ({id, isHead, offset, firstRef}) => {
    const {item} = useMappedState({id});
    const {updateRow} = useMappedActions();
    const {name, guid, isSelected, ...otherParam} = item

    const renderFirstColl = useMemo(() => {
        return <CellFixed isHead={isHead} offset={offset} firstRef={firstRef} value={name}/>
    }, [isHead, offset, firstRef, name])

    const renderOtherColl = useMemo(() => {
        return Object.keys(otherParam).map((key) => {
            return <Cell key={key} isHead={isHead} field={key} idRow={id} value={isHead ? key : otherParam[key]}/>
        })
    }, [isHead, otherParam, id])

    const handleOnClickRow = () => {
        if (!isHead) {
            updateRow({id: id, params: {isSelected: !isSelected}})
        }
    }

    return (
        <tr onClick={handleOnClickRow} className={isSelected && !isHead ? 'selected' : ''}>
            {renderFirstColl}
            {renderOtherColl}
        </tr>
    )
}

export default memo(Row)