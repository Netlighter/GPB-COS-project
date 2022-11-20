const servicesState = {
  data: [],
  loading: false,
  error: false,
};

export default function details(state = servicesState, action) {
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
}

