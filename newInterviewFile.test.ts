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
test("finding 8 possible moves, testing all directions", () => {
    let boardState = [[0,0,0,0,0], [0,2,2,2,0], [0,2,1,2,0], [0,2,2,2,0], [0,0,0,0,0]]
    let answer: [number, number][] = findValidMoves(boardState, 1)
    let expectation: number[][] = [[0,0],[0,2],[0,4],[2,0],[2,4],[4,0],[4,2],[4,4]].sort();
    answer = answer.sort();
    expect(answer.sort()).toEqual(expectation)
})