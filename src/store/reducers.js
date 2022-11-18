const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SERVICES':
      return {
        data: [],
        loading: true,
        error: false,
      };
    case 'REQUESTED_SERVICES_SUCCEEDED':
      return {
        data: action.payload,
        loading: false,
        error: false,
      };
    case 'REQUESTED_SERVICES_FAILED':
      return {
        data: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};


export default reducer;

