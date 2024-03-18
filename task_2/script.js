
document.querySelector('.play_btn').addEventListener('click', function(e) {
    e.target.closest('.play_btn').classList.toggle('play_btn--toggle');
  })