import { Base_Url } from "../../utilities/API/BaseURl"
import { api_key } from "../../utilities/API/Key"
import { ActionTypes } from "./ActionTypes"

export const fectch_people = (currentPage) => {

    return (dispatch) => {
        fetch(`${Base_Url}/person/popular?api_key=${api_key}&language=en-US&page=${currentPage}`)
            .then(resp => resp.json())
            .then(res => dispatch({
                type: ActionTypes.FECTCH_PEOPLE,
                payload: res
            })
            )
            .catch(er => console.log(`FECTCH: ${er.message}`))
    }
}

// export const fectch_people = (page) => async (dispatch, getState) => {
//     const response = await fetch(`${Base_Url}/person/popular?api_key=${api_key}&language=en-US&page=${page}`);
//     const data = await response.json();

//     // Get the current state of people
//     const currentPeople = getState().peopleReducer.people;
//     console.log("Current", currentPeople)
//     // Append the new page to the existing people array
//     const updatedPeople = [...currentPeople, ...data.results];

//     dispatch({
//         type: 'FECTCH_PEOPLE',
//         payload: {
//             people: updatedPeople,
//             currentPage: data.page,
//             totalPages: data.total_pages,
//         },
//     });
// };