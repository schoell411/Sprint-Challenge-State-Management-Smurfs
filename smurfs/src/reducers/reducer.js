const initialState = {
	smurf: [],
	error: null,
	isFetching: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_SMURF_LOADING":
			return {
				...state,
				isFetching: true,
				error: null
			};
		case "FETCH_SMURF_SUCCESS":
			return {
				...state,
				smurf: action.payload,
				isFetching: false,
				error: null
			};
		case "FETCH_SMURF_FAILED":
			return {
				...state,
				smurf: [],
				isFetching: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
