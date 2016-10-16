
function addBtnClickAction(msg){
    return {
        type:'FORMSUBMIT',
        msg:msg
    }
}

function msgClickAction(item){
    return {
        msgitem:item,
        type:'MSGITEMCLICK'
    };
}
function filtMsgListAction(filter){
    return {
        type:'FILTERLINKCLICK',
        filter:filter
    }
}

export { addBtnClickAction, msgClickAction, filtMsgListAction };