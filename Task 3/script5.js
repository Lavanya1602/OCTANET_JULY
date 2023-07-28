// Get all the post elements
const posts = document.querySelectorAll('.post');

// Loop through each post element and add a click event listener to it
posts.forEach(post => {
  post.addEventListener('click', () => {
    // Get the image source and caption text of the clicked post
    const imgSrc = post.querySelector('img').src;
    const caption = post.querySelector('.caption').textContent;

    // Log the image source and caption text to the console
    console.log(`Image source: ${imgSrc}`);
    console.log(`Caption: ${caption}`);
  });
});
