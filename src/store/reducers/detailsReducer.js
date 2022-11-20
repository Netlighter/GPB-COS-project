const detailsState = {
  data: {},
  loading: false,
  error: false,
};

export default function services(state = detailsState, action) {
  switch (action.type) {
    case 'REQUEST_DETAILS':
      return {
        data: {},
        loading: true,
        error: false,
      };
    case 'REQUESTED_DETAILS_SUCCEEDED':
      return {
        data: action.payload,
        loading: false,
        error: false,
      };
    case 'REQUESTED_DETAILS_FAILED':
      return {
        data: {},
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

