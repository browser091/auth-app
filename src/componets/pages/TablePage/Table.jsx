import React, {useEffect, useMemo, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import Row from "./components/Row";
import Status from "./components/Status";

import {useMappedState, useMappedActions} from "./bindings";
import './index.css'

const Table = () => {
    const {isAuth, isLoginning, tableIds} = useMappedState();
    const {fetchData} = useMappedActions();
    let navigate = useNavigate()
    let firstCellRef = useRef(null)

    let [offset, setOffset] = useState(0)


    useEffect(() => {
        if (!isLoginning && !isAuth) {
            navigate('/login')
        }
    }, [isAuth, isLoginning])


    useEffect(() => {
        fetchData()
    }, [])

    const handleHorScroll = (e) => {
        const parentX = e.target.getBoundingClientRect().x
        if (firstCellRef.current) {
            const childX = firstCellRef.current.getBoundingClientRect().x
            setOffset(parentX - childX + 1)
        }
    }

    const renderRows = useMemo(() => {
        if (!isAuth) {
            return null
        }
        return tableIds.map((id) => {
            return <Row key={id} id={id} offset={offset}/>
        })
    }, [tableIds, offset, isAuth])

    if (!isAuth) {
        return null
    }
    return (
        <div className='spreadsheet'>
            <h3>Spreadsheet</h3>
            <div className="fixedTable" onScroll={handleHorScroll}>
                <table className="table">
                    <thead>
                    <Row isHead id={tableIds[0]} offset={offset} firstRef={firstCellRef}/>
                    </thead>
                    <tbody className="tbody">
                    {renderRows}
                    </tbody>
                </table>
            </div>
            <Status/>
        </div>
    )
}

export default Table