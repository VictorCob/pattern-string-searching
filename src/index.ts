import {bfSearch} from './bf-search';


async function bruteForceSearch(text: String, pattern: String){
    return await bfSearch(text,pattern);
}


bruteForceSearch('test','s').then((a)=>{
    console.log(a);
});

