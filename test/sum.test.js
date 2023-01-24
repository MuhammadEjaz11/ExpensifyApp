const sum = (a,b)=>a+b;
const teststring = (name)=>`Hello ${name}`;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 3)).toBe(4);
});
test('greet Hello', ()=>{
    expect(teststring('Ejaz')).toBe('Hello Ejaz')
})