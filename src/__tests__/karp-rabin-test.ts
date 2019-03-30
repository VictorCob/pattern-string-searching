import * as mockData from "../mocks/mock-data";
import {karpRabin} from '../karp-rabin';


test('karp-rabin search - pattern found', () => {
    return karpRabin(mockData.searchData,mockData.patternToSearch).then(data => {
      expect(data).toBeGreaterThan(-1);
    });
  });

  test('karp-rabin search - pattern not found', () => {
    return karpRabin(mockData.searchData,mockData.patternNotFound).then(data => {
      expect(data).toBe(-1);
    });
  });