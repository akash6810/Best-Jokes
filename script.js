







const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {
    const setHeader = {
        headers: {
            accept: "text/html"
        }
    };

    fetch('https://icanhazdadjoke.com', setHeader)
    .then(response => response.text())
    .then(data => {
        // Extracting the joke from the HTML response
        //To understand the below line ,read the comment below 👇
        const jokeElement = new DOMParser().parseFromString(data, 'text/html').querySelector('.card-content p');
        jokes.innerHTML = jokeElement.textContent;
    })
    .catch(error => {
        console.log(error);
        jokes.innerHTML = "Failed to fetch joke. Please try again later.";
    });
};

jokeBtn.addEventListener('click', generateJokes);

generateJokes();


/*

1)new DOMParser(): DOMParser is a built-in JavaScript object 
    that provides an interface for parsing XML or HTML source code
    from a string into a DOM Document. new DOMParser() creates a 
    new instance of the DOMParser object.

2).parseFromString(data, 'text/html'): .parseFromString() is a
    method of the DOMParser object. It takes a string of 
    text (data in this case) and parses it as an HTML or XML document.
    In this case,it's parsing the received data as an HTML document.

3).querySelector('.card-content p'): After parsing the HTML string 
    into a document, querySelector() is used to find and select an 
    element within that parsed document. It looks for an element that
    matches the CSS selector provided: .card-content p. Here's a breakdown
    of the selector:

4).card-content: This targets elements with the class name 'card-content'.
    p: This further filters the selection to find <p> elements (paragraphs)
    inside elements with the class 'card-content'.
    const jokeElement = ...: This entire line assigns the result of the querySelector() method
    to the variable jokeElement. If an element matching the .card-content p selector exists 
    in the parsed HTML document, jokeElement will refer to that specific <p> element.
    If the element is not found, jokeElement will be null.
*/
















/* ASK Sir to fix this : 

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {

    const setHeader = {
        Headers: {
            accept : "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
    .then((response) =>  response.json() )
    .then((data) => {
        jokes.innerHTML = data.joke;
    })
    .catch((error) => {
        console.log(error);
    })
}

jokeBtn.addEventListener('click', generateJokes);

generateJokes();

*/


