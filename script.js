var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.idea-body');
var saveButton = document.querySelector('.save-button');
var ideaForm = document.querySelector('.idea-form');
var ideaBox = document.querySelector('.idea-container');
var upVoteButton = document.querySelector('.upvote-idea-button')
// titleInput.addEventListener('keyup', enableSaveButton);
// bodyInput.addEventListener('keyup', enableSaveButton);
ideaForm.addEventListener('submit', createIdea);


window.onload = retrieveIdea();

// function enableSaveButton() {
//   if (titleInput.value === '' || bodyInput.value === '') {
//     saveButton.prop('disabled', true);
//   } else {
//     saveButton.prop('disabled', false);
//   }
// };

function prependIdea(mostRecentIdea) {
  var newIdeaCard = document.createElement('li');
  newIdeaCard.innerHTML = `
  <li class="idea-mockup">
    <header class="bottom-wrapper">
      <h2 class="idea-card-title">${mostRecentIdea.title}</h2>
      <button class="idea-button delete-idea-button" alt="the button for upvoting an idea"></button>
    </header>
    <p class="idea-content">${mostRecentIdea.body}</p>
    <footer>
      <button class="idea-button upvote-idea-button" alt="the button for upvoting an idea"></button>
      <button class="idea-button downvote-idea-button" alt="the button for upvoting an idea"></button>
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

