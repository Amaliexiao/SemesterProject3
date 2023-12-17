const serverUrl = "http://localhost:8080";
let state;
let successfulBeers;
let failedBeers;
let getTotalProduced;
setInterval(function () {
  const apiEndpointBarley = serverUrl + "/fetch/barley";
  const elementNameBarley = "barley";
  setIngredientAmount(apiEndpointBarley, elementNameBarley);
  checkIfEmpty(apiEndpointBarley, elementNameBarley);

  const apiEndpointHops = serverUrl + "/fetch/hops";
  const elementNameHops = "hops";
  setIngredientAmount(apiEndpointHops, elementNameHops);
  checkIfEmpty(apiEndpointHops, elementNameHops);

  const apiEndpointMalt = serverUrl + "/fetch/malt";
  const elementNameMalt = "malt";
  setIngredientAmount(apiEndpointMalt, elementNameMalt);
  checkIfEmpty(apiEndpointMalt, elementNameMalt);

  const apiEndpointWheat = serverUrl + "/fetch/wheat";
  const elementNameWheat = "wheat";
  setIngredientAmount(apiEndpointWheat, elementNameWheat);
  checkIfEmpty(apiEndpointWheat, elementNameWheat);

  const apiEndpointYeast = serverUrl + "/fetch/yeast";
  const elementNameYeast = "yeast";
  setIngredientAmount(apiEndpointYeast, elementNameYeast);
  checkIfEmpty(apiEndpointYeast, elementNameYeast);
}, 1000);

setInterval(function() {
  updateMaintenanceBar();
  updateMaintenanceState();
  updateTemperatureValue();
  updateHumidityValue();
  updateVibrationValue();
  updateProductsMin();
  updateBatchId();
  updateAcceptableProducts();
  updateDefectProducts();
  updateTotalProducts();
  updateRemainingProducts();
  updateCurrentState();
}, 1000);

function APIFetcher(apiEndpoint) {
  return fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const apiValue = data.value;
        return apiValue;
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
}

function APIFetcherNoneVariant(apiEndpoint) {
  return fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
}

function updateMaintenanceBar() {
  const apiEndpoint = serverUrl + "/fetch/maintenanceCounter";
  APIFetcher(apiEndpoint)
      .then((maintenanceCounter) => {
        let maintenanceBarValue = (maintenanceCounter / 30000) * 100;
        document.getElementById("maintenance").style.width =
            maintenanceBarValue + "%";
      });
}

function setIngredientAmount(apiEndpoint, elementID) {
  APIFetcher(apiEndpoint).then((ingredientValue) => {
    let ingredientPercentage = (ingredientValue / 35000) * 100;
    document
        .getElementById(elementID)
        .setAttribute("style", "height:" + ingredientPercentage + "%");
  });
}

// Empty Inventory Alert
function checkIfEmpty(apiEndpoint, elementName) {
  APIFetcher(apiEndpoint).then((inventoryValue) => {
    if (inventoryValue == 0) {
      alert("Please refill " + elementName);
    }
  });
}

// Maintance Alert
function updateMaintenanceState() {
  const apiEndpoint = serverUrl + "/fetch/maintenanceState";

  APIFetcher(apiEndpoint).then((maintenanceState) => {
    console.log("Maintenance state " + maintenanceState);
    if (maintenanceState == 20) {
      document.getElementById("customAlert").style.display = "block";
    } else {
      document.getElementById("customAlert").style.display = "none";
    }
  });
}

// Temperature Sensor
function updateTemperatureValue() {
  const apiEndpoint = serverUrl + "/fetch/temperatureValue";
  APIFetcher(apiEndpoint)
      .then((temperatureValue) => {
        document.getElementById("temperature").textContent = temperatureValue;
        if(state === 6 ){
          //Only measures temperature when it is running on the machine and not simulation
          if(temperatureValue === 0){}
          else {
            fetch(serverUrl + "/queue/saveTemperature?batchid=" + queueList[0].id + "&temperature=" + temperatureValue);
          }
        }
      });
}

function getCurrentBatchId() {
  return fetch(serverUrl + "/fetch/batchIDValue");
}

// Humidity Sensor
function updateHumidityValue() {
  const apiEndpoint = serverUrl + "/fetch/humidityValue";
  APIFetcher(apiEndpoint)
      .then((humidityValue) => {
        document.getElementById("humidity").textContent = humidityValue;
        if (state === 6) {
          if(humidityValue === 0){}
          //Only measures humidity when it is running on the machine and not simulation
          else {
            fetch(serverUrl + "/queue/saveHumidity?batchid=" + queueList[0].id + "&humidity=" + humidityValue);
          }
        }
      });
}

// Vibration Sensor
  function updateVibrationValue() {
    const apiEndpoint = serverUrl + "/fetch/vibrationValue";
    APIFetcher(apiEndpoint).then((vibrationValue) => {
      document.getElementById("vibration").textContent = vibrationValue;
      if (state === 6) {
        //Only measures vibration when it is running on the machine and not simulation
        if(vibrationValue === 0){}
        else {
          fetch(serverUrl + "/queue/saveVibration?batchid=" + queueList[0].id + "&vibration=" + vibrationValue);
        }
      }
    });
}

// Batch ID
function updateBatchId() {
  document.getElementById("batchID").textContent = queueList[0].id;
}

// Products/min
function updateProductsMin() {
  const apiEndpoint = serverUrl + "/fetch/MachSpeedValue";
  APIFetcher(apiEndpoint)
      .then((productsMinValue) => {
        document.getElementById("prod/min").textContent = productsMinValue;
      });
}

// Acceptable Products
  function updateAcceptableProducts() {
    const apiEndpoint = serverUrl + "/fetch/acceptableProductsValue";
    APIFetcher(apiEndpoint).then((successfulBeers) => {
      document.getElementById("acceptableProducts").textContent = successfulBeers;
    });
}

// Defect Products
function updateDefectProducts() {
  const apiEndpoint = serverUrl + "/fetch/defectProductsValue";
  APIFetcher(apiEndpoint)
      .then((defectProductsValue) => {
        document.getElementById("defectProducts").textContent = defectProductsValue;
      });

};

// Total Produced

function updateTotalProducts() {
  const apiEndpoint = serverUrl + "/fetch/totalProducts";
  APIFetcher(apiEndpoint).then((totalProduced) => {
    getTotalProduced = totalProduced;
    document.getElementById("totalProducts").textContent = totalProduced;
  });
}

//Remaining products

function updateRemainingProducts() {
  let getQueueBeerID = queueList[0].id;
  const apiEndpoint = serverUrl + "/fetch/getRemainingProducts?batchId=" + getQueueBeerID;
  APIFetcherNoneVariant(apiEndpoint).then((remainingProductsValue) => {
  document.getElementById("remainingProducts").textContent = remainingProductsValue;
  });
}

// Current State

function updateCurrentState() {
  const apiEndpoint = serverUrl + "/fetch/currentStateValue";
  APIFetcher(apiEndpoint)
      .then((currentStateValue) => {
        const elementToColor = document.getElementById("stateColor");
        const stateText = document.getElementById("stateText");
        state = currentStateValue;
        document.getElementById("stateNumber").textContent = currentStateValue;

        switch (currentStateValue) {
          case 0:
            elementToColor.style.backgroundColor = "red";
            stateText.textContent = "Deactivated";
            break;
          case 1:
            elementToColor.style.backgroundColor = "blue";
            stateText.textContent = "Clearing";
            break;
          case 2:
            elementToColor.style.backgroundColor = "red";
            stateText.textContent = "Stopped";
            break;
          case 3:
            elementToColor.style.backgroundColor = "green";
            stateText.textContent = "Starting";
            break;
          case 4:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Idle";
            break;
          case 5:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Suspended";
            break;
          case 6:
            elementToColor.style.backgroundColor = "green";
            stateText.textContent = "Execute";
            break;
          case 7:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Stopping";
            break;
          case 8:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Aborting";
            break;
          case 9:
            elementToColor.style.backgroundColor = "red";
            stateText.textContent = "Aborted";
            break;
          case 10:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Holding";
            break;
          case 11:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Held";
            break;
          case 15:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Resetting";
            break;
          case 16:
            elementToColor.style.backgroundColor = "green";
            stateText.textContent = "Completing";
            break;
          case 17:
            elementToColor.style.backgroundColor = "green";
            stateText.textContent = "Complete";
            break;
          case 18:
            elementToColor.style.backgroundColor = "yellow";
            stateText.textContent = "Deactivating";
            break;
          case 19:
            elementToColor.style.backgroundColor = "green";
            stateText.textContent = "Activating";
            break;
          default:
            // Default color
            elementToColor.style.backgroundColor = "blue";
            stateText.textContent = "*Default*";
        }
      });
}
