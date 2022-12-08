// Get the items from the API
async function getItems() {
  try {
    // Send the request to the API
    const response = await fetch('index.php?action=get_items');

    // Check for a successful response
    if (!response.ok) {
      throw new Error('API request failed');
    }

    // Get the items from the response
    const items = await response.json();

    // Do something with the items
    console.log(items);
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error(error);
  }
}

// Update an item in the database
async function updateItem() {
  try {
    // Send the request to the API
    const response = await fetch('index.php?action=update_item', {
      method: 'POST',
      body: JSON.stringify({
        item_id: 1,
        new_value: 'Hello World'
      })
    });

    // Check for a successful response
    if (!response.ok) {
      throw new Error('API request failed');
    }

    // Get the result from the response
    const result = await response.json();

    // Do something with the result
    console.log(result);
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error(error);
  }
}
