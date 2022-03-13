import {tableActions} from "../../actions";
import mockData from "./mockTable";

const headers = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
}

export const fetchData = () => async (dispatch) => {
    dispatch(tableActions.loadStart())

    const nextData = prepareData(mockData)

    dispatch(tableActions.loadSuccess(nextData))

    // fetch(`./data/data.json`, headers)
    //     .then((response) => response.json())
    //     .then((messages) => {
    //         console.log("messages", messages);
    //         dispatch(tableActions.loadSuccess(messages))
    //     }).catch((e) => {
    //     console.log('error', e)
    //     dispatch(tableActions.loadFailure())
    // })

}
export default fetchData

const prepareData = (data) => {
    return data.reduce((acc, item) => {
        const {guid} = item
        acc[guid] = item
        return acc
    },{})
}
