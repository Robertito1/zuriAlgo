
const { convertFahrToCelsius, checkYuGiOh } = require('./index.js')


describe('To ensure correct behaviour of the \"convertFahrToCelsius\" function',()=>{
    test('convertFahrToCelsius Function should be defined', () => {
        expect(convertFahrToCelsius).toBeDefined();
        expect(typeof convertFahrToCelsius).toBe('function')
    });
    test('that correct name is returned', () => {
        expect(convertFahrToCelsius(0)).toEqual("-17.7778")
        expect(convertFahrToCelsius('0')).toEqual("-17.7778")
        expect(convertFahrToCelsius([1,2,3])).toEqual('[1,2,3] is not a valid number but a/an array.')
        expect(convertFahrToCelsius({temp: 0})).toEqual('{"temp":0} is not a valid number but a/an object.')
    })
})

describe('To ensure correct behaviour of the \"checkYuGiOh\" function',()=>{
    test('checkYuGiOh Function should be defined', () => {
        expect(checkYuGiOh).toBeDefined();
        expect(typeof checkYuGiOh).toBe('function')
    });
    test('that correct name is returned', () => {
        expect(checkYuGiOh(10)).toEqual([1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"])
        expect(checkYuGiOh('5')).toEqual([1, "yu", "gi", "yu", "oh"])
        expect(checkYuGiOh('fizzbuzz is meh')).toEqual("Invalid Parameter: \"fizzbuzz is meh\"")
    })
})
