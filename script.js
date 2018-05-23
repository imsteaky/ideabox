var titleInput = document.querySelector('.idea-title');
var bodyInput = document.querySelector('.idea-body');
var saveButton = document.querySelector('.save-button');
var ideaForm = document.querySelector('.idea-form');
var ideaBox = document.querySelector('.idea-main');

titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
// ideaForm.addEventListener('submit', newIdea);

var titleValue = titleInput.value;
var bodyValue = bodyInput.value;

var enableSaveButton = function() {
  if (titleValue === '' || bodyValue === '') {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
};

function newIdea () {
  // Grab title and body input.
  // Generate ID.
  // Pass info to IdeaGenerator and create card.
};

function IdeaGenerator (title, body, quality, id) {
  this.title = title;
  this.body = body;
  this.quality = quality || 'swill';
  this.id = id; 
};

IdeaGenerator.prototype.addIdea = function () {
  ideaBox.preprend(newIdea);
};