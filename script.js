const buttons = document.querySelectorAll('.filter-tabs button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Add filtering logic here if needed
  });
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Subscribed!");
});
