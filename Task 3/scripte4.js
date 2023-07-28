var newEntryBtn = document.getElementById("new_entry_btn");
var entryList = document.getElementById("entries");
var entryContent = document.querySelector(".entry_content");
var entryTitle = document.getElementById("entry_title");
var entryText = document.getElementById("entry_text");
var saveBtn = document.getElementById("save_btn");
var cancelBtn = document.getElementById("cancel_btn");
var entries = JSON.parse(localStorage.getItem("entries")) || [];
displayEntries();
newEntryBtn.addEventListener("click", function() {
  entryTitle.innerText = "New Entry";
  entryText.value = "";
  entryContent.classList.remove("hidden");
});
saveBtn.addEventListener("click", function() {
  var title = entryTitle.innerText;
  var text = entryText.value;
  if (title.trim() == "" || text.trim() == "") {
    return;
  }

  entries.push({title: title, text: text, date: new Date()});
  localStorage.setItem("entries", JSON.stringify(entries));

  displayEntries();
  entryContent.classList.add("hidden");
});
cancelBtn.addEventListener("click", function() {
  entryContent.classList.add("hidden");
});
function displayEntries() {
  entryList.innerHTML = "";
  
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var li = document.createElement("li");
    li.innerText = entry.title + " (" + entry.date.toLocaleString() + ")";
    li.setAttribute("data-index", i);
    li.addEventListener("click", function() {
      var index = parseInt(this.getAttribute("data-index"));
      displayEntry(index);
    });
    entryList.appendChild(li);
  }
}
function displayEntry(index) {
  var entry = entries[index];
  entryTitle.innerText = entry.title + " (" + entry.date.toLocaleString() + ")";
  entryText.value = entry.text;
  entryContent.classList.remove("hidden");
}