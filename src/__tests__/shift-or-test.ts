import * as mockData from "../mocks/mock-data";
import {shiftOr} from '../shift-or';


test('shift-Or search - pattern found', () => {
    return shiftOr(mockData.searchData,mockData.patternToSearch).then(data => {
      expect(data).toBeGreaterThan(-1);
    });
  });

  test('shift-Or search - pattern not found', () => {
    return shiftOr(mockData.searchData,mockData.patternNotFound).then(data => {
      expect(data).toBe(-1);
    });
  });