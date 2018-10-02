// @flow
import axios from 'axios';
import type { $AxiosXHR } from 'axios';

import isValidResponseData from './validation';

// types are imported from .flow file so ESLint error message may be suppressed
// eslint-disable-next-line
import type { RateLimitResponse } from '.';

// Query API endpoint
const queryApi = async (endpoint: string): Promise<$AxiosXHR<RateLimitResponse>> => (
  axios(`https://api.github.com/${endpoint}`)
);

// Get rate limits
const getRateLimitResponse = async (): Promise<RateLimitResponse> => {
  const result = await queryApi('rate_limit');
  if (!isValidResponseData(result.data)) {
    throw new Error(`Invalid response from Github API: ${JSON.stringify(result.data)}`);
  }
  return result.data;
};

export { getRateLimitResponse, isValidResponseData };
