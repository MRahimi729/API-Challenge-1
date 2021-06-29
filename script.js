
const catFact = document.querySelector('fact')

//button refresh page setup
const button = document.querySelector('.button')
button.addEventListener('click', fetchResults)

function fetchResults() {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(result => result.json())
        .then(details => {
            displayResults(details);
        })

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(result => result.json())
        .then(images => {
            console.log("[0]", images)
        })




    function displayResults(jsonData) {
        for (let i = 0; i <= jsonData.length; i++) {
            let catFact = jsonData[i].text
        }
    }
}


















// function Paragraph() {
//     const para = document.createElement('p').className = "catFact"; //created a function and in the function created a variable 'factPara' and for that variable created a 'p' element and gave it the className 'catFact'
//     fact.appendChild("catFact"); //appended 'factPara' to the 'fact' div as a child of the div (inside of the div element')
// }

// const text = document.getElementsByClassName('.catfact')


//const randomImage = document.querySelector('.random-Image');

// fetch('https://api.thecatapi.com/v1/images/search')
//     .then(result => result.json())
//     .then(images => {
//         console.log("[0]", images)
//     })

/*let randomImage = document.querySelector('.random-image');
console.log("randomImage:", randomImage);

fetch('https://source.unsplash.com/random/800x450/?type=cats')
    .then(function (response) {
        if (!response.ok) {
            console.log(response);
            return new Error(response);
        }
        console.log("Response:", response);
        return response.blob();
    })
    .then(function (photoBlob) {
        console.log("My Blob:", photoBlob)
        let objectURL = URL.createObjectURL(photoBlob);
        console.log("Object URL:", objectURL);
        randomImage.src = objectURL;

        console.log("randomImage.src:", randomImage.src);
    })
    .catch(function (err) {
        console.log(err);
    });*/