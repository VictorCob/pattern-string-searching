import * as mockData from "../mocks/mock-data";
import { binSearch } from '../binary-search';

test('binary search - pattern found', () => {
    return binSearch(mockData.searchDataArray, mockData.patternIntToSearch).then(data => {
        expect(data).toBeGreaterThan(-1);
    });
});


test('binary search - pattern found', () => {
    return binSearch(mockData.searchDataArray, mockData.patterIntNotFound).then(data => {
        expect(data).toBe(-1);
    });
}); 