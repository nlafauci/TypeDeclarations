declare module 'lodash' {
    // multiplier the first number, multiplicand the second number, return a number
    function multiply(multiplier: number, multiplicand: number): number
    
    // 
    function reverse(arr:number[]):number[]
    function reverse(arr:string[]):string[]

    function dropRight(arr:(string|number)[], dropped: number):(string|number)[]
    
}
