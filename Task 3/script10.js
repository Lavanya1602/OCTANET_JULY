let followBtns = document.querySelectorAll('.follow-btn');

for(let i = 0; i < followBtns.length; i++) {
  followBtns[i].addEventListener('click', function() {
    if(followBtns[i].innerHTML == 'Follow') {
      followBtns[i].innerHTML = 'Following';
      followBtns[i].style.backgroundColor = '#fff';
      followBtns[i].style.color = '#000';
      followBtns[i].style.border = '1px solid #000';
    } else {
      followBtns[i].innerHTML = 'Follow';
      followBtns[i].style.backgroundColor = '#3897f0';
      followBtns[i].style.color = '#fff';
      followBtns[i].style.border = 'none';
    }
  });
}