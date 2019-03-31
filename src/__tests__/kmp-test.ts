import * as mockData from "../mocks/mock-data";
import {kmp} from '../kmp-search';

test('kmp search - pattern found', () => {
    return kmp(mockData.searchData,mockData.patternToSearch).then(data => {
      expect(data).toBeGreaterThan(-1);
    });
  });

  test('kmp search - pattern not found', () => {
    return kmp(mockData.searchData,mockData.patternNotFound).then(data => {
      expect(data).toBe(-1);
    });
  });