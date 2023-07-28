const form = document.getElementById('post-form');
const result = document.getElementById('post-result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const { caption, image, location } = e.target.elements;

  const formData = new FormData();
  formData.append('caption', caption.value);
  formData.append('image', image.files[0]);
  formData.append('location', location.value);

  try {
    const response = await fetch('/create-post', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      result.innerHTML = `<p>Post created with ID: ${data.id}</p>`;
    } else {
      result.innerHTML = `<p id="error">Error creating post: ${response.statusText}</p>`;
    }
  } catch (error) {
    console.error(error);
    result.innerHTML = `<p id="error">Error creating post: ${error.message}</p>`;
  }
});
