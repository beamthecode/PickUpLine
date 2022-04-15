let btnRandom = document.querySelector('button');
let result = document.querySelector('h2');

let pickupLines = ['Well, here I am. What are your other two wishes?', 'I must be a snowflake, because I have fallen for you.', 
'If you were a Transformer... you would be Optimus Fine.', 'If you were a vegetable you would be a cute-cumber.', 
'Baby, if you were word on a page, you would be fine print.', 'Are you a bank loan? Because you have my interest.', 
'Life without you is like a broken pencil... pointless.', 'Do you have a map? Because I keep getting lost in your eyes.', 
'Do you like Star Wars? Because Yoda only one for me!', 'Are you cake? Because I want a piece of that.', 
'If you were a triangle, you would be acute one.', 'Your hand looks heavy, let me hold it for you.', 
'I think you are suffering from a lack of vitamin me.', 'Is your name Google? Because you have everything I am searching for.',
'I am in the mood for pizza, a pizza you that is!', 'Are you Siri... because you autocomplete me!', 'If you were a fruit you would be a fineapple.',
'I ought to complain to Spotify for you not being named the hottest single this week.', 'If you were a chicken, you would be im-peck-able.',
'You are a 9/10 and I am the 1 you need.', 'Do you like raisins? How do you feel about a date?'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
let index = getRandomNumber(0, pickupLines.length-1);
result.innerText = pickupLines[index];
});










