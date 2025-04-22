

export function findValidMoves(boardState, player: number){
    let rows = boardState.length;
    let columns = boardState[0].length;
    let possibleMoves: [number,number][] = [];

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            if (boardState[i][j] === player){
                let validRightMove =  checkinDirection([0,1], [i,j], boardState)
                if (validRightMove.length != 0){ possibleMoves.push(validRightMove)}
                let validRightUpMove =  checkinDirection([-1,1], [i,j], boardState)
                if (validRightUpMove.length != 0){ possibleMoves.push(validRightUpMove)}
                let validUpMove =  checkinDirection([-1,0], [i,j], boardState)
                if (validUpMove.length != 0){ possibleMoves.push(validUpMove)}
                let validLeftUpMove =  checkinDirection([-1,-1], [i,j], boardState)
                if (validLeftUpMove.length != 0){ possibleMoves.push(validLeftUpMove)}
                let validLeftMove =  checkinDirection([0,-1], [i,j], boardState)
                if (validLeftMove.length != 0){ possibleMoves.push(validLeftMove)}
                let validLeftDownMove =  checkinDirection([1,-1], [i,j], boardState)
                if (validLeftDownMove.length != 0){ possibleMoves.push(validLeftDownMove)}
                let validDownMove =  checkinDirection([1,0], [i,j], boardState)
                if (validDownMove.length != 0){ possibleMoves.push(validDownMove)}
                let validRightDownMove =  checkinDirection([1,1], [i,j], boardState)
                if (validRightDownMove.length != 0){ possibleMoves.push(validRightDownMove)}
            }
        }
    }
    return possibleMoves;
}


    function checkinDirection(directionValue: number[], currentLocation:number[], boardState): [number, number]|[]{
    let stepsInDirection = 1;
    const [row, col] = currentLocation;
    const [dirRow, dirCol] = directionValue;
    let nextRow = row + (dirRow*(stepsInDirection+1));
    let nextCol = col + (dirCol*(stepsInDirection+1));
    while (nextRow < boardState.length && nextRow >= 0 && nextCol < boardState[0].length && nextCol >= 0){
        const currentCheckLocation= boardState[row + (dirRow*stepsInDirection)][col + (dirCol*stepsInDirection)];
        const originalLocation = boardState[row][col];
        if (currentCheckLocation != 0 && currentCheckLocation != originalLocation){
            if (boardState[nextRow][nextCol] === 0) {
                return([nextRow, nextCol]);
            }
        }
        stepsInDirection++;
        nextRow = row + (dirRow*(stepsInDirection+1));
        nextCol = col + (dirCol*(stepsInDirection+1));
    }
    return [];
}