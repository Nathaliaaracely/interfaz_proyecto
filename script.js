document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="candidate"]:checked');
  const result = document.getElementById("resultMessage");

  if (selected) {
    result.textContent = `You voted for: ${selected.value}`;
    result.style.color = "green";
  } else {
    result.textContent = "Please select a candidate before submitting.";
    result.style.color = "red";
  }
});
