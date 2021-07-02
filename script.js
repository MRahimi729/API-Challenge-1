const display = (picture) => {
    const img1 = document.getElementById('random-image')
    img1.src = picture
}

const catFact = document.querySelector('.fact')
const pictures = document.querySelector('#random-image')

//button refresh page setup
const button = document.querySelector('.button')
button.addEventListener('click', fetchResults)

function fetchResults() {
    //fetching the cat facts from the cat fact API
    catFact.innerText = "";
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(result => result.json())
        .then(details => {
            displayResults(details);
        })
    //fetching the cat images from the cat images API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(result => result.json())
        .then(images => {
            //console.log(images);
            const picture = images[0].url;
            displayImages(picture);
        })

    // //display the images from the cat images API
    function displayImages(pics) {
        pictures.style.height = "35vh"
        pictures.src = pics
    }

    //display the cat facts from the cat fact API
    function displayResults(details) {
        var x = Math.floor((Math.random() * 4) + 0);
        console.log(x);
        let catText = details[x].text
        console.log(catText);
        catFact.innerText = catText

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