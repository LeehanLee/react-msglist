
export default function reducer(oldcount=0,action){
    let tmp=oldcount;
    if(action.type==='INCREASE'){
        return tmp+1;
    }
    else{
        return oldcount;
    }
}