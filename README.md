
# Pick Up Line Generator 
![enter image description here](https://img.shields.io/badge/Codecademy-CareerPath-yellow)
![enter image description here](https://img.shields.io/badge/Portfolio-Project-orange)

I created this project as a part of my `Codecademy` career path. My main intent here was to show a working knowledge of `JavaScript` syntax in the form of a random message generator. 

### Project objectives:


- Build a message generator program using `JavaScript`

- Use `Git` version control

- Use `command line`

- Develop locally on my computer


---
## Motivation


I wanted to showcase my **sense of humor**, so I decided that I would build a **random pick up line generator**.


This generator allowed me to satisfy the project **objectives**, while also having a little bit of **fun** showcasing a working knowledge of `JavaScript` syntax.  

---

## Code Style

![enter image description here](https://img.shields.io/badge/code%20style-standard-green)

## Screenshots



![enter image description here](https://user-images.githubusercontent.com/100433573/163993429-7b1174c3-04ad-4665-931b-d578f58ff66d.png)

---

![enter image description here](https://user-images.githubusercontent.com/100433573/163993485-7e598297-6fac-4d75-8754-2411c1999e46.png)

---

![enter image description here](https://user-images.githubusercontent.com/100433573/163993504-55d5f41d-0898-4583-9b07-e80ccad6833c.png)

---
## Tech/Framework


### Built with:

> [JavaScript](https://github.com/topics/javascript)
[CSS](https://github.com/topics/css)
[HTML](https://github.com/topics/html)


---

## Features / Project Description


#### My initial thoughts on creating this *Pick Up Line Generator* were to:

- Make the message generator user friendly.
- Create a fun / entertaining vibe with the design that supports the messages being produced.

---


I designed a button with both HTML and CSS that would allow the user to simply click to see a new message. 


I used [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to write a series of code that would:


- Make the button interactive.

- Produce a new random message each time the button is clicked.

---

1. I stored a host of pick up lines in an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

2. I wrote a [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) that would pull a random number based on the index of the [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) items. I used [Math.Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and [Math.Floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) functions to help determine the random index item that was selected. I then returned that item. This is the pick up line that the user will see once they click the button!


3. Once I had tested my code and it was working correctly, I finished styling the site with some basic [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). I included a funny image I thought set off the overall humor of the project. 


4. I used my terminal and command line to push my code from my local repository into my GitHub repository. This was good practice working with the [GitHub](https://github.com) environment. I am looking forward to working on bigger projects with other developers in the coming years!






## Code Example 

![enter image description here](https://img.shields.io/badge/JavaScript-syntax-red)


function  getRandomNumber(min, max) {

let  firstNum = max - min + 1;

let  secondNum = Math.random() * firstNum;

let  result = Math.floor(secondNum) + min;

return  result;
}


## Credits

> [Codecademy](https://www.codecademy.com)
> 
> Shout out to the folks at **Codecademy** for including this random message generator project in the curriculum. This is my first time building a project on my own with interactive code, so it has been a great learning experience!




## License



### MIT © 2022 - Brent Beamer












