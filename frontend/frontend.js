
//Barley

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/barley';

    // Make the API call using fetch
    fetch(apiEndpoint)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Access and print the values from the JSON response
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let barleyValue = specificValue/40000*100;
            // Display the API response on the HTML page
            document.getElementById('barley').setAttribute("style", "height:"+barleyValue);
      ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Hops

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/hops';

    // Make the API call using fetch
    fetch(apiEndpoint)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Access and print the values from the JSON response
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let hopsValue = specificValue/40000*100;
            // Display the API response on the HTML page
            document.getElementById('hops').setAttribute("style", "height:"+hopsValue);
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Malt

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/malt';

    // Make the API call using fetch
    fetch(apiEndpoint)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Access and print the values from the JSON response
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let maltValue = specificValue/40000*100;
            // Display the API response on the HTML page
            document.getElementById('malt').setAttribute("style", "height:"+maltValue);
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Wheat

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/wheat';

    // Make the API call using fetch
    fetch(apiEndpoint)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Access and print the values from the JSON response
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let wheatValue = specificValue/40000*100;
            // Display the API response on the HTML page
            document.getElementById('wheat').setAttribute("style", "height:"+wheatValue);
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Yeast

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/yeast';

    // Make the API call using fetch
    fetch(apiEndpoint)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Access and print the values from the JSON response
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let yeastValue = specificValue/40000*100;
            // Display the API response on the HTML page
            document.getElementById('yeast').setAttribute("style", "height:"+yeastValue);
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Temperature Sensor

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/temperatureValue';

    // Make the API call using fetch
    fetch(apiEndpoint)
        .then(response => {
            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Access and print the values from the JSON response
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let temperatureValue = specificValue;
            // Display the API response on the HTML page
            document.getElementById('temperature').setAttribute("style", "height:"+temperatureValue)
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});