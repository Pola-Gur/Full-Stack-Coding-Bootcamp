document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve values from the input fields
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;

    // Create a JSON object
    var data = {
        name: name,
        lastName: lastName
    };

    // Convert the JSON object to a string
    var jsonString = JSON.stringify(data);

    // Display the JSON string on the page
    document.getElementById('result').textContent = jsonString;
});