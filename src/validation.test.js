// @flow
import isValidResponseData from './validation';

describe('.isValidResponseData', () => {
  test('with valid data', () => {
    expect(isValidResponseData({
      resources: {},
      rate: {},
    })).toBe(true);
  });
  test('with invalid data', () => {
    expect(isValidResponseData('invalid response')).toBe(false);
  });
});
