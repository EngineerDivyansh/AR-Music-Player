document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve input values from form fields
    const name = document.querySelector('#name').value;
    const destination = document.querySelector('#destination').value;
  
    // Generate a unique identifier for the itinerary (e.g., using a library or built-in function)
    const itineraryId = generateUniqueIdentifier();
  
    // Create a new itinerary object with the provided details
    const newItinerary = {
      id: itineraryId,
      name: name,
      destination: destination,
      // Add other properties as needed
    };
  
    // Store the new itinerary in the desired location (e.g., local storage)
    storeItinerary(newItinerary);
  
    // Add any additional actions or redirections after form submission
  });

  

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form fields
    const name = document.querySelector('#name').value;
    const destination = document.querySelector('#destination').value;
  
    if (name.trim() === '') {
      alert('Please enter a name.'); // Show an error message
      return; // Exit the function, preventing itinerary creation
    }
  
    if (destination.trim() === '') {
      alert('Please enter a destination.'); // Show an error message
      return; // Exit the function, preventing itinerary creation
    }
  
    // If form is valid, proceed with itinerary creation
  });