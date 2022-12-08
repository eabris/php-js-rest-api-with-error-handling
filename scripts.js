// Get the items from the API
fetch('index.php?action=get_items')
  .then(response => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  })
  .then(items => {
    // Do something with the items
    console.log(items);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });

// Update an item in the database
fetch('index.php?action=update_item', {
  method: 'POST',
  body: JSON.stringify({
    item_id: 1,
    new_value: 'Foo bar'
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  })
  .then(result => {
    // Do something with the result
    console.log(result);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
