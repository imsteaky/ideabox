var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.idea-body');
var saveButton = document.querySelector('.save-button');
var ideaForm = document.querySelector('.idea-form');
var ideaBox = document.querySelector('.idea-container');


titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
ideaForm.addEventListener('submit', createIdea);
ideaBox.addEventListener('click', handleIdeaButtons);
window.onload = retrieveIdea();

function enableSaveButton() {
  if (titleInput.value === '' || bodyInput.value === '') {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
};

function prependIdea(mostRecentIdea) {
  var newIdeaCard = document.createElement('li');
  newIdeaCard.innerHTML = `
  <li class="idea-mockup" id="${mostRecentIdea.id}">
    <header class="bottom-wrapper">
      <h2 class="idea-card-title">${mostRecentIdea.title}</h2>
      <button class="idea-button delete-button" alt="the button for upvoting an idea"></button>
    </header>
    <p class="idea-content">${mostRecentIdea.body}</p>
    <footer>
      <button class="idea-button upvote-button" alt="the button for upvoting an idea"></button>
      <button class="idea-button downvote-button" alt="the button for upvoting an idea"></button>
      <p class="id-quality-rating">${mostRecentIdea.quality}</p>
    </footer>
  </li>`;
  ideaBox.prepend(newIdeaCard);
  ideaForm.reset();
};

function storeIdea(mostRecentIdea) {
  var stringifiedIdea = JSON.stringify(mostRecentIdea);localStorage.setItem(mostRecentIdea.id, stringifiedIdea);
};

function retrieveIdea() {
  for (var i = 0; localStorage.length; i++) {
    var parsedIdea = JSON.parse(localStorage.getItem(localStorage.key(i)));
    prependIdea(parsedIdea);
  }
};

function IdeaGenerator(title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
  this.id = Date.now();
}; 

function createIdea(event) {
  event.preventDefault();
  var titleValue = titleInput.value;
  var bodyValue = bodyInput.value;
  var mostRecentIdea = new IdeaGenerator(titleValue, bodyValue);
  prependIdea(mostRecentIdea);
  storeIdea(mostRecentIdea);
};

function handleIdeaButtons(event) {
  var uniqueId = event.target.parentNode.parentNode.id;
  if (event.target.className === 'idea-button delete-button') {
    event.target.closest('li').remove();
    localStorage.removeItem(uniqueId);
  }
  if (event.target.className === 'idea-button upvote-button') {
    if (event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML === 'swill') {
      event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = 'plausible';
    } else {
      event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = 'genius';
    }
  }
  if (event.target.className === 'idea-button downvote-button') {
    if (event.target.nextSibling.nextSibling.innerHTML === 'genius') {
      event.target.nextSibling.nextSibling.innerHTML = 'plausible';
    } else {
      event.target.nextSibling.nextSibling.innerHTML = 'swill';
    }
  }
};