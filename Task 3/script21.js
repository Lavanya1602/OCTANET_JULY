const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(postForm);
  const caption = formData.get('caption');
  const image = formData.get('image');
  
  // Call Instagram API to create a post
  // Include caption and image in the request
  // Display success or error message to the user
});