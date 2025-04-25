// Example: Alert message when a user clicks on a project
document.querySelectorAll('.project').forEach(item => {
  item.addEventListener('click', () => {
    alert('You clicked on a project!');
  });
});
