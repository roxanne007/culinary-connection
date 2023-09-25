document.addEventListener('DOMContentLoaded', function () {
  const addCommentButton = document.querySelector('.add-comment-button');
  const commentInput = document.querySelector('.comment-input');
  const commentsContainer = document.querySelector('.comments'); // The container for comments
  const commentButton = document.querySelector('.comment-button'); // The button to toggle comments
  const searchTrigger = document.getElementById('search-trigger');
  const searchBarInput = document.getElementById('search-input');
  const likeButton = document.getElementById('like-button');
  const bookmarkButton = document.querySelector('.bookmark-button');


  // Variables to track like, bookmark
  let isLiked = false;
  let isBookmarked = false;


  // Initialize the like button appearance based on the initial state (unliked)
  const unlikedImage = likeButton.querySelector('.unliked');
  const likedImage = likeButton.querySelector('.liked');
  likedImage.style.display = 'none';
  unlikedImage.style.display = 'inline';

  // Function to handle the like button click
  likeButton.addEventListener('click', () => {
    if (isLiked) {
      unlikedImage.style.display = 'inline';
      likedImage.style.display = 'none';
    } else {
      unlikedImage.style.display = 'none';
      likedImage.style.display = 'inline';
    }

    isLiked = !isLiked;
  });

  // Function to handle the bookmark button click
  bookmarkButton.addEventListener('click', () => {
    isBookmarked = !isBookmarked;

    if (isBookmarked) {
      alert('Post bookmarked!');
    } else {
      alert('Post removed from bookmarks!');
    }

    const bookmarkImage = bookmarkButton.querySelector('img');
    bookmarkImage.src = isBookmarked ? 'images/bookmark-filled.png' : 'images/bookmark.png';
  });

  // Function to handle adding comments
  function addComment() {
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `
        <span class="username">pancakelover:</span>
        <span class="comment-text">${commentText}</span>
      `;

      commentsContainer.appendChild(newComment);
      commentInput.value = '';
    }
  }

  addCommentButton.addEventListener('click', () => {
  console.log('Add Comment button clicked'); // Add this line to check if the event listener is triggered
  addComment();
});

  // Event listener to toggle the visibility of comments when the "Comment" button is clicked
  commentButton.addEventListener('click', () => {
    // Toggle the visibility of the comments container
    if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
      commentsContainer.style.display = 'block';
    } else {
      commentsContainer.style.display = 'none';
    }
  });

  // Event listener to toggle the visibility of the search input when the search icon is clicked
  if (searchTrigger && searchBarInput) {
    searchTrigger.addEventListener('click', () => {
      // Toggle the visibility of the search input
      searchBarInput.style.display = (searchBarInput.style.display === 'none' || searchBarInput.style.display === '') ? 'block' : 'none';
    });
  }
});
