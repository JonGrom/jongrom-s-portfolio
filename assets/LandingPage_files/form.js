//Get user inputs from form feilds
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');

//Declare allPosts array and set it to local storage

//Begin logic when submit button is pressed
document.querySelector('#btn').addEventListener('click', start);

//Prevent default and check form validity
function start(event){
    event.preventDefault();
    checkValidity();
};

//If any form fields are unfilled, display an error message, otherwise store the blog post
function checkValidity(){
    if (!username.value || !title.value || !content.value){
        document.querySelector('#invalid').textContent = "Oops! You haven't filled out all of the form feilds. Please do before submitting, thanks!";
    } else {
        storeBlogPost();
    };
};

function storeBlogPost(){
    //Build object from user inputs
    let blogPost = {
        'username': username.value,
        'title': title.value,
        'content': content.value
    };
    
    //Push object to allPosts array
    allPosts.push(blogPost);

    //Update local storage
    localStorage.setItem("blog posts", JSON.stringify(allPosts))

    //continue to next function
    pageRedirect()
};

//Redirect to blog page
function pageRedirect(){
    location.href = "blog.html"
};

