// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { whisper } from "../utils.js";

const test = QUnit.test;

// name your test by what it is testing
// input: 'Hello'
// expected output: 'hello
test('whisper lowercases strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'hello';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = whisper('Hello'); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('whisper returns false with non-string input', (assert)=>{
    // arrange
    const expected = false
    // act
    const actual = whisper(4);

    assert.equal(actual, expected);
});
