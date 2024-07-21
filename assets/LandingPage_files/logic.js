//Declare all posts array to both pages
allPosts = [];

//Populate allPosts array with previous posts from local storage
function maintainPosts(){
    previousPosts = JSON.parse(localStorage.getItem("blog posts"));
    if (previousPosts){
    allPosts = previousPosts
    }


}

maintainPosts()

