document.addEventListener('DOMContentLoaded', ()=>{
    let counter = document.querySelector('#counter');
    let add = document.getElementById('+');
    let negative = document.getElementById('-');
    let hearty = document.getElementById('<3');
    let ulDomEl = document.querySelector('.likes');
    let pauseButton = document.getElementById('pause');
    let divList = document.getElementById('list');
    let inputEl = document.querySelector('input')
    inputEl.id = "userInp"
    let submitButton = document.getElementById('submit');


    // console.log(divList);
    let count = 0;
    let likedObj = {};

    function countIncrease() {
        //first increase the count and then output it on the DOM where innerText will coerce it into a string
        //this is a JS number and by the time it gets to the HTML it will be a string 
        counter.innerText = ++count;
    }
    //here I am slapping into the dom the increasing number on the DOM so that it increases every second
    setInterval(countIncrease, 1000);

    function heartHandler(d) {
        //here i am setting the likedObj to the count whatever the number is currently 
        //if the value of that has is defined or has a value then keep it other wise set the value to 0;
        likedObj[count] = likedObj[count] || 0;

        //than first increament the value 
        ++likedObj[count];
        ulDomEl.innerHTML = '';

        // loop through the object and create li and then append it
        for (let key in likedObj) {
            //create the li
            let liDomNode = document.createElement('li');
            //append the text to li created 
            liDomNode.innerText = `${[key]} has been liked ${likedObj[key]} times`
            //append the li to the ul by slapping it into it 
            ulDomEl.appendChild(liDomNode);
        }
    }

    function pauseButtonHandler(event) {
        add.disabled = true;
        negative.disabled = true;
        hearty.disabled = true;
        submitButton.disabled = true;
        pause.innerText = "resume";

        function resumeGame() {
            add.disabled = false;
            negative.disabled = false;
            hearty.disabled = false;
            submitButton.disabled = false;
            pause.innerText = "pause"
        }

        pauseButton.addEventListener('click', resumeGame)
    }

    function submitButtonHandler(event) {
        //prevent the form from refreshing
        event.preventDefault();
        //get the value of the user input inside the submit event handler
        let userInp = document.getElementById('userInp').value
        // console.log(userInp)
        //create a p element to bind to div list
        let paragraphEl = document.createElement('p');
        //adds the users text to the newly created p.
        paragraphEl.innerText = userInp
        //get the parenteldiv and add the child p to div
        divList.appendChild(paragraphEl);
        //reset the inp field to be empty
        inputEl.value = '';
        // document.getElementById('userInp').value = "";
    }

    //add an event listener to + button
    add.addEventListener('click', (event) => {
        counter.innerText = count += 1
    })

    //add an event listener to - button
    negative.addEventListener('click', (event) => {
        counter.innerText = -- count
    })
    //add an event listener to <3 button
    hearty.addEventListener('click', heartHandler)

    //add an event listener to pause button 
    pauseButton.addEventListener('click', pauseButtonHandler);

    //As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
    submitButton.addEventListener('click', submitButtonHandler)



})





