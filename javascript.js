
  // Function to update the counter with the specified number of trades
  function updateCounter(targetValue) {
    // Get the counter element
    var counterElement = document.getElementById("counter");
    // Initialize the counter value
    var currentValue = 0;
    // Set interval to gradually increment the counter
    var interval = setInterval(function() {
      // Increment the counter value
      currentValue += 1000; // Increment by 1000 for smoother animation, adjust as needed
      // Update the counter element with the current value
      counterElement.textContent = currentValue.toLocaleString();
      // Check if the target value is reached
      if (currentValue >= targetValue) {
        // Update the counter element with the target value
        counterElement.textContent = targetValue.toLocaleString();
        // Clear the interval
        clearInterval(interval);
      }
    }, 10); // Adjust the interval for smoother animation, if needed
  }

  // Start the counter with the specified number of trades
  window.addEventListener("load", function() {
    // Specify the target number of trades
    var targetTrades = 1450000;
    // Update the counter with the specified target value
    updateCounter(targetTrades);
  });

