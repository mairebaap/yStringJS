document.addEventListener("DOMContentLoaded", function () {
    const generatedStrings = [];
  
    // Function to count occurrences and update the <ol> element
    function updateOccurrencesList() {
      // Count occurrences of each string
      const occurrences = {};
      generatedStrings.forEach((str) => {
        occurrences[str] = (occurrences[str] || 0) + 1;
      });
  
      // Clear the existing list
      const occurrencesList = document.getElementById("occurrencesList");
      occurrencesList.innerHTML = '';
  
      // Update the <ol> with the occurrences
      Object.entries(occurrences).forEach(([string, count]) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${string}: ${count}`;
        occurrencesList.appendChild(listItem);
      });
    }
  
    // Event listener for the button click
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", function () {
      // Generate a random string and add it to the array
      const generatedString = generateRandomString();
      generatedStrings.push(generatedString);
  
      // Update the occurrences list
      updateOccurrencesList();
    });
  });