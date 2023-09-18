import { Base_Url } from "../../utilities/API/BaseURl"
import { api_key } from "../../utilities/API/Key"
import { ActionTypes } from "./ActionTypes"

export const fectch_all_trending=() =>{
    return (dispactch) => {
        fetch(`${Base_Url}/trending/all/day?api_key=${api_key}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(res => dispactch({
                type: ActionTypes.FECTCH_TRENDING,
                payload: res
            }))
            .catch(er => console.log(`FECTCH: ${er.message}`))
    }
}