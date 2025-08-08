document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('show-text');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('show-text');
  });
});
