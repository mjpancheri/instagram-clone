document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.actions .like').forEach(button => {
    button.addEventListener('click', like);
  });

  document.querySelectorAll('.actions .dislike').forEach(button => {
    button.addEventListener('click', dislike);
  });
});

function like(event) {
  event.preventDefault();
  const actionElement = event.target.closest('.action');
  fetch('/likes', {
    method: 'POST',
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({ like: { post_id: actionElement.dataset.postId } })
  })
  .then(response => response.json())
  .then(json => handleLikeFeature({ ...json, actionElement }))
  .catch(error => console.log('parsing error', error));
}

function dislike(event) {
  event.preventDefault();
  const actionElement = event.target.closest('.action');
  fetch(`/likes/${actionElement.dataset.likeId}`, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
  .then(response => response.json())
  .then(json => handleLikeFeature({ ...json, actionElement }))
  .catch(error => console.log('parsing error', error));
}

function handleLikeFeature({ id, successful, actionElement }) {
  if (successful) {
    actionElement.dataset.likeId = id;

    actionElement.querySelectorAll('.like, .dislike').forEach(div => {
      div.classList.toggle('hidden');
    });
  } else {
    // alert(json.error);
  }
}
