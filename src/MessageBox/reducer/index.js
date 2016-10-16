
let index=0;
export default function(oldmessageList=[],action){
    if(action.type==='FORMSUBMIT'){
        return [...oldmessageList,{
            id:index++,
            msg:action.msg,
            isread:false,
        }];
    }
    else if(action.type==='MSGITEMCLICK'){
        console.log(action);
        let tmp=oldmessageList[action.msgitem.id];
        return [...oldmessageList.slice(0,action.msgitem.id),{
            id:tmp.id,
            msg:tmp.msg,
            isread:!tmp.isread
        },...oldmessageList.slice(action.msgitem.id+1)];
    }
    else{
        return oldmessageList;
    }
} 