import { Base_Url } from "../../utilities/API/BaseURl"
import { api_key } from "../../utilities/API/Key"
import { ActionTypes } from "./ActionTypes"

export const fectch_people = (currentPage) => {

    return (dispactch) => {
        fetch(`${Base_Url}/person/popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(resp => resp.json())
            .then(res => dispactch({
                type: ActionTypes.FECTCH_PEOPLE,
                payload: res
            })
            )
            .catch(er => console.log(`FECTCH: ${er.message}`))
    }
}