
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

// Maintenance

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/maintenanceCounter';

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


            let maintenanceValue = specificValue/2000*100;
            // Display the API response on the HTML page
            document.getElementById('maintenance').style.width=maintenanceValue + "%";
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

            // Display the API response on the HTML page
            document.getElementById('temperature').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Humidity Sensor

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/humidityValue';

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

            // Display the API response on the HTML page
            document.getElementById('humidity').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Vibration Sensor

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/vibrationValue';

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

            // Display the API response on the HTML page
            document.getElementById('vibration').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Batch ID

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/batchIDValue';

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

            // Display the API response on the HTML page
            document.getElementById('batchID').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Products/min

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/CurMachSpeedValue';

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

            // Display the API response on the HTML page
            document.getElementById('prod/min').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
});

// Acceptable Products

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/acceptableProductsValue';

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

            // Display the API response on the HTML page
            document.getElementById('acceptableProducts').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('acceptableProducts').innerHTML = `Error: ${error.message}`;
        });
});

// Defect Products

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/defectProductsValue';

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

            // Display the API response on the HTML page
            document.getElementById('defectProducts').textContent=specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('defectProducts').innerHTML = `Error: ${error.message}`;
        });
});

// Remaining Products - Missing Logic as it may have to find batch size in DB

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/acceptableProductsValue';


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

            const batchSize = "";
            let remainingProducts = batchSize - specificValue;
            // Display the API response on the HTML page
            //document.getElementById('defectProducts').textContent=remainingProducts;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('defectProducts').innerHTML = `Error: ${error.message}`;
        });
});

// Total Produced Not done cause has to get two apiEndpoints;

// document.addEventListener("DOMContentLoaded", function () {
//     const apiEndpoint1 = 'http://localhost:8080/fetch/defectProductsValue';
//     const apiEndpoint2 = 'http://localhost:8080/fetch/accptableProductsValue';
//
//     // Function to make API call and return the parsed JSON
//     const makeApiCall = (apiEndpoint) => {
//         return fetch(apiEndpoint)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             });
//     };
//
//     // Make the first API call
//     makeApiCall(apiEndpoint1)
//         .then(data1 => {
//             const value1 = data1.value;
//             console.log('API Response 1:', data1);
//
//             // Make the second API call
//             return makeApiCall(apiEndpoint2)
//                 .then(data2 => {
//                     const value2 = data2.value;
//                     console.log('API Response 2:', data2);
//
//                     // Perform subtraction
//                     const result = value1 + value2;
//
//                     // Display the result on the HTML page
//                     document.getElementById('totalProducts').textContent=result;
//                 });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             document.getElementById('result').innerHTML = `Error: ${error.message}`;
//         });
// });
