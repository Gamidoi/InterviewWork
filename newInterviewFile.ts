

export function findValidMoves(boardState, player: number){
    let rows = boardState.length;
    let columns = boardState[0].length;
    let possibleMoves: [number,number][] = [];

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            if (boardState[i][j] === player){
                let validRightMove =  checkinDirection([0,1], [i,j], boardState)
                if (validRightMove.length != 0){ possibleMoves.push(validRightMove)}


                let shiftValue = 1
                while(boardState[i+shiftValue][j] != player && boardState[i+shiftValue][j] != 0 && i + shiftValue < rows){
                    if (boardState[i+shiftValue + 1][j] === 0) {
                        possibleMoves.push([i + shiftValue + 1, j]);
                        break
                    }
                    shiftValue++;
                }
                shiftValue = 1
                while(boardState[i+shiftValue][j+shiftValue] != player && boardState[i+shiftValue][j+shiftValue] != 0 && i + shiftValue < rows && j + shiftValue < columns) {
                    if (boardState[i + shiftValue + 1][j + shiftValue + 1] === 0) {
                        possibleMoves.push([i + shiftValue + 1, j + shiftValue + 1]);
                        break
                    }
                    shiftValue++;
                }
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