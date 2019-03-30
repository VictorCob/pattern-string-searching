import * as mockData from "../mocks/mock-data";
import {bfSearch} from '../bf-search';


test('brute force search - pattern found', () => {
    return bfSearch(mockData.searchData,mockData.patternToSearch).then(data => {
      expect(data).toBeGreaterThan(-1);
    });
  });

  test('brute force search - pattern not found', () => {
    return bfSearch(mockData.searchData,mockData.patternNotFound).then(data => {
      expect(data).toBe(-1);
    });
  });