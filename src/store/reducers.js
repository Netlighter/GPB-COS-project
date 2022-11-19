const initialState = {
  services: [],
  details: {},
  loading: false,
  error: false,
};

// TODO: перезаписывать ли data? решить

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SERVICES':
      return {
        services: [],
        loading: true,
        error: false,
      };
    case 'REQUESTED_SERVICES_SUCCEEDED':
      return {
        services: action.payload,
        loading: false,
        error: false,
      };
    case 'REQUESTED_SERVICES_FAILED':
      return {
        services: [],
        loading: false,
        error: true,
      };
    case 'REQUEST_DETAILS':
      return {
        details: {},
        loading: true,
        error: false,
      };
    case 'REQUESTED_DETAILS_SUCCEEDED':
      return {
        details: action.payload,
        loading: false,
        error: false,
      };
    case 'REQUESTED_DETAILS_FAILED':
      return {
        details: {},
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
