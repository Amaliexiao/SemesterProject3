
document.addEventListener("DOMContentLoaded", function() {

    const apiEndpointBarley = 'http://localhost:8080/fetch/barley';
    const elementIDBarley = 'barley';
    setIngredientAmount(apiEndpointBarley, elementIDBarley);

    const apiEndpointHops = 'http://localhost:8080/fetch/hops';
    const elementIDHops = 'hops';
    setIngredientAmount(apiEndpointHops, elementIDHops);

    const apiEndpointMalt = 'http://localhost:8080/fetch/malt';
    const elementIDMalt = 'malt';
    setIngredientAmount(apiEndpointMalt, elementIDMalt);

    const apiEndpointWheat = 'http://localhost:8080/fetch/wheat';
    const elementIDWheat = 'wheat';
    setIngredientAmount(apiEndpointWheat, elementIDWheat);

    const apiEndpointYeast = 'http://localhost:8080/fetch/yeast';
    const elementIDYeast = 'yeast';
    setIngredientAmount(apiEndpointYeast, elementIDYeast);
});

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
            console.log('API Response:', data);

            // Example: Access a specific value from the JSON
            const specificValue = data.value; // Replace 'propertyName' with the actual property name in your JSON
            console.log('Specific Value:', specificValue);


            let Value = specificValue/40000*100;
            // Display the API response on the HTML page
            document.getElementById(elementID).setAttribute("style", "height:"+Value+'px');
            console.log(elementID);
            ;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById(elementID).innerHTML = `Error: ${error.message}`;
        });
};

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

// Current State

document.addEventListener("DOMContentLoaded", function() {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
    const apiEndpoint = 'http://localhost:8080/fetch/currentStateValue';

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
            const elementToColor = document.getElementById('stateColor');
            const stateText = document.getElementById('stateText');

            console.log('Specific Value:', specificValue);

            // Display the API response on the HTML page
            document.getElementById('stateNumber').textContent=specificValue;

            //Change what state is shown in the UI
            switch (specificValue) {
                case 0:
                    elementToColor.style.backgroundColor = 'red';
                    stateText.textContent='Deactivated';
                    break;
                case 1:
                    elementToColor.style.backgroundColor = 'blue';
                    stateText.textContent='Clearing';
                    break;
                case 2:
                    elementToColor.style.backgroundColor = 'red';
                    stateText.textContent='Stopped';
                    break;
                case 3:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent='Starting';
                    break;
                case 4:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Idle';
                    break;
                case 5:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Suspended';
                    break;
                case 6:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent='Execute';
                    break;
                case 7:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Stopping';
                    break;
                case 8:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Aborting';
                    break;
                case 9:
                    elementToColor.style.backgroundColor = 'red';
                    stateText.textContent='Aborted';
                    break;
                case 10:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Holding';
                    break;
                case 11:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Held';
                    break;
                case 15:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Resetting';
                    break;
                case 16:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent='Completing';
                    break;
                case 17:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent='Complete';
                    break;
                case 18:
                    elementToColor.style.backgroundColor = 'yellow';
                    stateText.textContent='Deactivating';
                    break;
                case 19:
                    elementToColor.style.backgroundColor = 'green';
                    stateText.textContent='Activating';
                    break;
                default:
                    // Default color
                    elementToColor.style.backgroundColor = 'blue';
                    stateText.textContent='*Default*';
            }

        })
        .catch(error => {
            console.error('Error:', error);
            // Display the error on the HTML page
            document.getElementById('stateNumber').innerHTML = `Error: ${error.message}`;
        });


});

