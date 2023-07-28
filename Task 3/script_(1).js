const searchBox = document.getElementById('search-box');
const itemList = document.querySelectorAll('.item');

searchBox.addEventListener('input', function() {
  const query = this.value.toLowerCase();
  
  itemList.forEach(function(item) {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});