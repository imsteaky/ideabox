var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.idea-body');
var saveButton = document.querySelector('.save-button');
var ideaForm = document.querySelector('.idea-form');
var ideaBox = document.querySelector('.idea-container');

// titleInput.addEventListener('keyup', enableSaveButton);
// bodyInput.addEventListener('keyup', enableSaveButton);
ideaForm.addEventListener('submit', newIdea);


// var enableSaveButton = function () {
//   if (titleInput.value === '' || bodyInput.value === '') {
//     saveButton.disabled = true;
//   } else {
//     saveButton.disabled = false;
//   }
// };
var arr = [];
// var idea = new IdeaGenerator;
// var idea2 = new IdeaGenerator('hello 2', 'body 2', 'so hot 2', 2);
// arr.push(idea);
// arr.push(idea2);
console.log(arr);



function creatIdea(title, body, quality) {
 var idea = new IdeaGenerator(title, body, quality);
 arr.push(idea);
}

creatIdea('hello', 'body', 'so hot', 2);
creatIdea('hello2', 'body', 'so hot', 2);
creatIdea('hello3', 'body', 'so hot', 2);
creatIdea('hello4', 'body', 'so hot', 2);

arr.forEach(function(item) {
  ideaBox.innerHTML = newIdea(item);
});
console.log(arr)
function newIdea (crap) {
  // Grab title and body input.
  // Generate ID.
  // Pass info to IdeaGenerator and create card.
  // event.preventDefault();
  var newIdeaCard =  `
  <li class="idea-mockup">
    <header class="bottom-wrapper">
      <h2 class="idea-card-title">${crap.title}</h2>
      <button class="idea-button delete-idea-button" alt="the button for upvoting an idea"></button>
    </header>
    <p class="idea-content">${crap.body}</p>
    <footer>
      <button class="idea-button upvote-idea-button" alt="the button for upvoting an idea"></button>
      <button class="idea-button downvote-idea-button" alt="the button for upvoting an idea"></button>
      <p class="id-quality-rating">${crap.quality}</p>
    </footer>
  </li>`;
  return newIdeaCard;
  // ideaForm.reset();
};



function IdeaGenerator (title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
  this.id = id; 
}; 

