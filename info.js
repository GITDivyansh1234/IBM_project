// info.js

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const validAges = ["0-6", "7-12", "13-18", "19-24"];

  const age = params.get("age");

  // Redirect if invalid or missing
  if (!validAges.includes(age)) {
    window.location.href = "select.html";
    return;
  }

  document.getElementById('infoTitle').textContent = `Care for your child (${age} months)`;

  // Sample content (expand as needed)
  const nutritionContent = {
      "0-6": "Know more about the essential nutrients required by your child",
      "7-12": "Know more about the essential nutrients required by your child",
      "13-18":  "Know more about the essential nutrients required by your child",
      "19-24":  "Know more about the essential nutrients required by your child",
    };

  const todoContent = {
      "0-6": "Know about the to-do's for parents while taking care of their child",
      "7-12": "Know about the to-do's for parents while taking care of their child",
      "13-18": "Know about the to-do's for parents while taking care of their child",
      "19-24": "Know about the to-do's for parents while taking care of their child",
    };

  const essentialsContent = {
      "0-6": "Know about the essentials required for your child",
      "7-12": "Know about the essentials required for your child",
      "13-18": "Know about the essentials required for your child",
      "19-24": "Know about the essentials required for your child",
    };

  const toysContent = {
      "0-6": "Know about the toys to provide your child with",
      "7-12": "Know about the toys to provide your child with",
      "13-18": "Know about the toys to provide your child with",
      "19-24": "Know about the toys to provide your child with",
  };

  const clothesContent = {
      "0-6": "Know about what clothes to choose for your child",
      "7-12": "Know about what clothes to choose for your child",
      "13-18": "Know about what clothes to choose for your child",
      "19-24": "Know about what clothes to choose for your child",
  };

  const immunizationContent = {
      "0-6": "Know about the immunization schedule for your child",
      "7-12": "Know about the immunization schedule for your child",
      "13-18": "Know about the immunization schedule for your child",
      "19-24": "Know about the immunization schedule for your child",
  };

  // Populate page content
  document.getElementById('nutritionText').textContent =
    nutritionContent[age] || "No info.";

  document.getElementById('todoList').innerHTML =
    todoContent[age] || "No info.";

  document.getElementById('essentialsList').innerHTML =
    essentialsContent[age] || "No info.";

  document.getElementById('toysList').innerHTML =
    toysContent[age] || "No info.";

  document.getElementById('clothesList').innerHTML =
    clothesContent[age] || "No info.";
  
  document.getElementById('immunizationList').innerHTML =
    immunizationContent[age] || "No info.";

  // Navigation buttons
  document.getElementById("exploreNutrition").onclick = function () {
    window.location.href = `nutrition.html?age=${age}`;
  };
  document.getElementById("exploreTodo").onclick = function () {
    window.location.href = `todo.html?age=${age}`;
  };
  document.getElementById("exploreEssentials").onclick = function () {
    window.location.href = `essentials.html?age=${age}`;
  };
  document.getElementById("exploreToys").onclick = function () {
    window.location.href = `toys.html?age=${age}`;
  };
  document.getElementById("exploreClothes").onclick = function () {
    window.location.href = `clothes.html?age=${age}`;
  };
  document.getElementById("exploreImmunization").onclick = function () {
    window.location.href = `immunization.html?age=${age}`;
  };
});
