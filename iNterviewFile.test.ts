import {findValidMoves} from "./newInterviewFile";


test("testing jest", () => {
    expect("test").toBe("test");
})

test("finding a single valid move", () => {
    let boardState = [[0,0,0], [1,2,0], [0,0,0]]
    let answer = findValidMoves(boardState, 1)
    expect(answer).toEqual([[1, 2]])
})
test("finding no valid moves", () => {
    let boardState = [[0,0,0], [1,2,1], [0,0,0]]
    let answer = findValidMoves(boardState, 1)
    expect(answer).toEqual([])
})
test("second iteration of finding no valid moves", () => {
    let boardState = [[0,0,0,0,0], [1,2,1,1,0], [0,0,0,0,0]]
    let answer = findValidMoves(boardState, 1)
    expect(answer).toEqual([])
})
test("finding a different location", () => {
    let boardState = [[2,0,0], [1,0,0], [0,0,0]]
    let answer = findValidMoves(boardState, 2)
    expect(answer).toEqual([[2, 0]]);
})
test("finding a diagonal location", () => {
    let boardState = [[2,0,0], [0,1,0], [0,0,0]]
    let answer = findValidMoves(boardState, 2)
    expect(answer).toEqual([[2, 2]]);
})