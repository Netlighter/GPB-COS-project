export const getServices = () => {
    return { type: 'GET_SERVICES' }
  };

export const requestServicesSuccess = (data) => {
    return {type: "REQUESTED_SERVICES_SUCCEEDED", payload: data}
  };

export const requestServicesError = () => {
    return {type: "REQUESTED_SERVICES_FAILED"}
  };

export const requestServices = () => {
    return {type: "REQUEST_SERVICES", loading: true}
  };

