export const getServices = () => {
  return { type: 'GET_SERVICES' };
};

export const requestServicesSuccess = (data) => {
  return { type: 'REQUESTED_SERVICES_SUCCEEDED', payload: data };
};

export const requestServicesError = () => {
  return { type: 'REQUESTED_SERVICES_FAILED' };
};

export const requestServices = () => {
  return { type: 'REQUEST_SERVICES' };
}
;
export const getDetails = (id) => {
  return { type: 'GET_DETAILS', id };
};

export const requestDetailsSuccess = (data) => {
  return { type: 'REQUESTED_DETAILS_SUCCEEDED', payload: data };
};

export const requestDetailsError = () => {
  return { type: 'REQUESTED_DETAILS_FAILED' };
};

export const requestDetails = () => {
  return { type: 'REQUEST_DETAILS' };
};
