
export default function(oldactive='show-all',action){
    if(action.type==='FILTERLINKCLICK'){
        return action.filter;
    }
    else{
        return oldactive;
    }
} 