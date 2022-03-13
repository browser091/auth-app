import React from "react";

const Table=()=>{
    return(
        <div>
            <h3>Spreadsheet</h3>
            <tr>
                <td><input type="text" name="name"  placeholder="1"/></td>
                <td><input type="text" name="costo"  placeholder="2"/></td>
                <td><input type="text" name="quantita" placeholder="3"/></td>

            </tr>
        </div>
    )
}

export default Table