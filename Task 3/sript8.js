const likeBtns = document.querySelectorAll('.like-btn');
const dislikeBtns = document.querySelectorAll('.dislike-btn');

likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const post = btn.parentNode;
    const likeCount = post.querySelector('.like-count');
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
  });
});

dislikeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const post = btn.parentNode;
    const dislikeCount = post.querySelector('.dislike-count');
    let count = parseInt(dislikeCount.textContent);
    count++;
    dislikeCount.textContent = count;
  });
});
