const serverUrl = 'http://localhost:8080'
let state;
setInterval(function () {

    const apiEndpointBarley = serverUrl + '/fetch/barley';
    const elementIDBarley = 'barley';
    setIngredientAmount(apiEndpointBarley, elementIDBarley);

    const apiEndpointHops = serverUrl + '/fetch/hops';
    const elementIDHops = 'hops';
    setIngredientAmount(apiEndpointHops, elementIDHops);

    const apiEndpointMalt = serverUrl + '/fetch/malt';
    const elementIDMalt = 'malt';
    setIngredientAmount(apiEndpointMalt, elementIDMalt);

    const apiEndpointWheat = serverUrl + '/fetch/wheat';
    const elementIDWheat = 'wheat';
    setIngredientAmount(apiEndpointWheat, elementIDWheat);

    const apiEndpointYeast = serverUrl + '/fetch/yeast';
    const elementIDYeast = 'yeast';
    setIngredientAmount(apiEndpointYeast, elementIDYeast);
}, 1000);

function setIngredientAmount(apiEndpoint, elementID) {
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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);


            let Value = specificValue / 35000 * 100;
            // Display the API response on the HTML page
            document.getElementById(elementID).setAttribute("style", "height:"+Value+'%');
            // console.log(elementID);
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById(elementID).innerHTML = `Error: ${error.message}`;
        });
};
// Empty Inventory Alert
function checkIfEmpty(apiEndpoint, elementName) {
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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            if(specificValue == 0) {
                alert("Please refill " + elementName);
            };
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
        });
}
// Maintenance

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/maintenanceCounter';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);


            let maintenanceValue = specificValue / 35000 * 100;
            // Display the API response on the HTML page
            document.getElementById('maintenance').style.width = maintenanceValue + "%";
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
}, 1000);


// Maintance Alert
setInterval(function() {
    const apiEndpoint = serverUrl + '/fetch/maintenanceState';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const maintenanceState = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Maintenece State', maintenanceState);

            if (maintenanceState == 20) {
                document.getElementById("customAlert").style.display="block";
            } else {
                document.getElementById("customAlert").style.display="none";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });

}, 1000);


// Temperature Sensor

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/temperatureValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('temperature').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Humidity Sensor

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/humidityValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('humidity').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Vibration Sensor

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/vibrationValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('vibration').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Batch ID

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/batchIDValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('batchID').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Products/min

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/MachSpeedValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('prod/min').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Acceptable Products

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/acceptableProductsValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('acceptableProducts').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('acceptableProducts').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Defect Products

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/defectProductsValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('defectProducts').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('defectProducts').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Remaining Products - Missing Logic as it may have to find batch size in DB

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/remainingProducts';

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
            console.log(typeof data)
            console.log('API Response:', data);

            const specificValue = data; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Remaining products:', specificValue);
            document.getElementById('remainingProducts').textContent=specificValue;

            // Display the API response on the HTML page
            //document.getElementById('defectProducts').textContent=remainingProducts;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('defectProducts').innerHTML = `Error: ${error.message}`;
        });
}, 1000);

// Total Produced

setInterval(function () {
    const apiEndpoint = serverUrl + '/fetch/totalProducts';

    // Function to make API call and return the parsed JSON
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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            // console.log('Specific Value Total Products:', specificValue);
            // Display the API response on the HTML page
            document.getElementById('totalProducts').textContent = specificValue;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('totalProducts').innerHTML = `Error: ${error.message}`;
        });
    //code goes here that will be run every 5 seconds.
}, 1000);


// document.addEventListener("DOMContentLoaded", function () {
//     const apiEndpoint = serverUrl + '/fetch/totalProducts';
//
//     // Function to make API call and return the parsed JSON
//         fetch(apiEndpoint)
//             .then(response => {
//                 // Check if the request was successful (status code 200)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//
//                 // Parse the JSON in the response
//                 return response.json();
//             })
//             .then(data => {
//                 // Access and print the values from the JSON response
//                 console.log('API Response:', data);
//
//                 // Example: Access a specific value from the JSON
//                 const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
//                 console.log('Specific Value Total Products:', specificValue);
//
//                 const batchSize = "";
//                 let remainingProducts = batchSize - specificValue;
//                 // Display the API response on the HTML page
//                 document.getElementById('totalProducts').textContent=remainingProducts;
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 // Display the error on the HTML page
//                 document.getElementById('totalProducts').innerHTML = `Error: ${error.message}`;
//             });
//
// });

// Current State

setInterval(function () {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = serverUrl + '/fetch/currentStateValue';

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
            // console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            const elementToColor = document.getElementById('stateColor');
            const stateText = document.getElementById('stateText');
            state = specificValue;
            // console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('stateNumber').textContent = specificValue;

            //Change what state is shown in the UI
            switch (specificValue) {
                case 0:
                    elementToColor.style.backgroundColor = 'red';
                    stateText.textContent = 'Deactivated';
                    break;
                case 1:
                    elementToColor.style.backgroundColor = 'blue';
                    stateText.textContent = 'Clearing';
                    break;
                case 2:
                    elementToColor.style.backgroundColor = 'red';
                    stateText.textContent = 'Stopped';
                    break;
                case 3:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent = 'Starting';
                    break;
                case 4:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Idle';
                    break;
                case 5:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Suspended';
                    break;
                case 6:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent = 'Execute';
                    break;
                case 7:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Stopping';
                    break;
                case 8:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Aborting';
                    break;
                case 9:
                    elementToColor.style.backgroundColor = 'red';
                    stateText.textContent = 'Aborted';
                    break;
                case 10:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Holding';
                    break;
                case 11:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Held';
                    break;
                case 15:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Resetting';
                    break;
                case 16:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent = 'Completing';
                    break;
                case 17:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent = 'Complete';
                    break;
                case 18:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent = 'Deactivating';
                    break;
                case 19:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent = 'Activating';
                    break;
                default:
                    // Default color
                    elementToColor.style.backgroundColor = 'blue';
                    stateText.textContent = '*Default*';
            }

        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('stateNumber').innerHTML = `Error: ${error.message}`;
        });


}, 1000);

