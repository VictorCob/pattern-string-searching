import { bfSearch } from './bf-search';
import { binSearch } from './binary-search';
import { karpRabin } from './karp-rabin';
import {kmp} from './kmp-search';
import { shiftOr } from './shift-or';


async function bruteForceSearch(text: string, pattern: string) {
    return await bfSearch(text, pattern);
}


async function karpRabinSearch(text: string, pattern: string) {
    return await karpRabin(text, pattern);
}

async function binarySearch(sortedArray:[], element: any) {
    return await binSearch(sortedArray, element);
}


async function shiftOrSearch(text: string, pattern: string) {
    return await shiftOr(text, pattern);
}

async function kmpSearch(text: string, pattern: string) {
    return await kmp(text, pattern);
}


