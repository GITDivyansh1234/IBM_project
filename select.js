// select.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("selectionForm").onsubmit = function(e) {
    e.preventDefault();
    const age = document.querySelector('input[name="age"]:checked').value;
    window.location.href = `info.html?age=${age}`;
  };
});
