// Name: Varun Deep Singh
// Student ID:100865156
// Date Completed: 20-03-2024



// Waiting until the DOM is completely loaded and then calling the function to fetch posts
document.addEventListener('DOMContentLoaded', function () {
    fetchPosts();
});


//Function to fetch image from the url source
async function fetchImage(searchkeyword) {

    // THE API KEY FROM THE SOURCE
    const apiKey = '42991462-37ffcb4a4f6377020be478efd'; 
    // URL FORMAT 
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchkeyword)}&image_type=photo`;


    // TRY AND CATCH BLOCK TO HANDLE ANY EXCEPTIONS
    try {
        // USING AWAIT TO WAIT FOR THE FETCH FUNCTION TO COMPLETE PROCESSING
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // RETRIEVING JSON DATA FROM THE RESPONSE
        const data = await response.json();

        // if the searchkeyword gives us a result
        if (data.hits && data.hits.length > 0) {
            return data.hits[0].webformatURL;
        } else {
            // if no result, returning a local image path
            console.error('No image found in Pixabay API response for query:', searchkeyword);
            return './img/img1.webp';
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return './img/img1.webp';
    }
}


// function to create card
function createCards(post, Url) {
    const card = document.createElement('div');
    card.classList.add('card_container', 'mb-3');
    card.style.height = '100%'; 
    const cardBody = document.createElement('div');
    cardBody.classList.add('cbody');
    const title = document.createElement('h3');
    title.classList.add('ctitle');
    title.textContent = post.title;
    const img = document.createElement('img');
    img.classList.add('imgTop');
    img.src = Url; 
    img.style.width = '100%'; 
    img.style.height = 'auto';
    const description = document.createElement('p');
    description.classList.add('card_des');
    description.textContent = post.body;
    const button = document.createElement('button');
    button.classList.add('more_details'); 
    button.textContent = 'More Details';
    cardBody.appendChild(title);
    cardBody.appendChild(img);
    cardBody.appendChild(description);
    cardBody.appendChild(button); 
    card.appendChild(cardBody);
    return card;
}

// function to display the cards
function displayPosts(reponse_posts, urls) {
    // getting reference to the empty container.
    const cardContainer = document.getElementById('posts');
    // looping through the results and adding posts
    reponse_posts.forEach((post, index) => {
        const card = createCards(post, urls[index]);
        cardContainer.appendChild(card);
    });
}




// Function to fetch posts
async function fetchPosts() {
    try {
        // retrieving data from the url
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // getting json data
        const reponse_posts = await response.json(); 
        // fetching first 20 results
        const fetchedImages = reponse_posts.slice(0, 20).map(post => fetchImage(post.id));
        const urls = await Promise.all(fetchedImages);      
        // displayinh
        displayPosts(reponse_posts.slice(0, 20), urls);
    } catch (e) {
        console.error('Something Went Wrong', e);
    }
}







