function checkWin(element){
    return element.result === "W";
}

function superbowlWin(array){
    const result = array.find(checkWin);
    if (result !== undefined) {
        return result.year;
    }
}
