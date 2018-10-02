// @flow
import axiosBase from 'axios';
import { getRateLimitResponse } from './index';

// TODO: this might have better Flow annotations
// https://github.com/flow-typed/flow-typed/issues/291
const mock = (mockObject: any): any => mockObject;
const axios = mock(axiosBase);

// Flow doesn't understand how Babel Rewire Plugin works
// $FlowFixMe
const get = require('./index').__get__;

describe('.getRateLimitResponse', () => {
  test('handles valid response', async () => {
    axios.mockResolvedValueOnce({
      data: { resources: {}, rate: {} },
    });
    const result = await getRateLimitResponse();
    expect(result).toEqual({ resources: {}, rate: {} });
  });
  test('handles invalid response', async () => {
    axios.mockResolvedValueOnce({
      data: 'invalid response',
    });
    // expecting async to throw is not so easy with Jest
    // https://github.com/facebook/jest/issues/1377
    const errorHandler = jest.fn();
    try {
      await getRateLimitResponse();
    } catch (error) {
      errorHandler(error);
    }
    expect(errorHandler).toHaveBeenCalledWith(new Error('Invalid response from Github API: "invalid response"'));
  });
});

// test non-exported functions with Rewire
test('.queryApi', async () => {
  const queryApi = get('queryApi');
  const mockApiResponse = jest.fn(() => '');
  axios.mockImplementationOnce(mockApiResponse);

  await queryApi('test');

  expect(mockApiResponse.mock.calls[0][0]).toBe('https://api.github.com/test');
});
