// @flow

// Validate response
const isValidResponseData = (data: any): boolean => {
  if (data.resources && data.rate) {
    return true;
  }
  return false;
};

export default isValidResponseData;
