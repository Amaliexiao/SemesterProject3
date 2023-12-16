document.getElementById("startButton").onclick = function () {
  console.log("onclick virker");
  processQueue();
};

function APIPost(APIEndpoint) {
    fetch(APIEndpoint,{
        method: "POST",
    })
        .then((resp) => {
            if (resp.status === 200) {
                return resp.json;
            } else {
                throw new Error(resp.toString());
            }
        })
        .then((data) => console.log(data))
        .catch((error) => {
            console.error("Error:", error);
        });
}

function sendSizeParameter(size) {
  let url = serverUrl + "/control/newBatchSize?newValue=" + size;
  APIPost(url);
}

function sendSpeedParameter(speed) {
  let url = serverUrl + "/control/newMachSpeed?newValue=" + speed;
  APIPost(url);
}

function sendBeerIdParameter(beerId) {
    let beerType = beerId-1;
    let url = serverUrl + '/control/newProductID?newValue=' + beerType;
    APIPost(url);
}

async function processQueue() {
  let url = serverUrl + "/control";

  async function startProcessing() {
    try {
      // check if there are items in the queue
      if (queueList.length >= 1) {
        // check if the state is 4
        while (state === 4) {
          console.log("starting");
          sendSizeParameter(queueList[0].size);
          sendBeerIdParameter(queueList[0].beerId.id);
          sendSpeedParameter(queueList[0].speed);
          APIPost(serverUrl +
              "/queue" +
              "/addCompletedBatch?userID=1&size=" +
              queueList[0].size +
              "&beerType=" +
              queueList[0].beerId.id +
              "&speed=" +
              queueList[0].speed)
          // Perform the 'start' operation
          const resp = await APIPost(url+"/start");
          if (resp.status === 200) {
            const data = await resp.json();
            console.log("Processed Data:", data);
            await new Promise((resolve) => setTimeout(resolve, 2000));
          } else {
            throw new Error(resp.statusText);
          }
        }

        // if the state becomes 17, remove the batch and reset
        if (state === 17) {
          finishBatch(serverUrl);
          removeBatchFromQueue(queueList[0].id);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await fetchBatchQueue();
          reset();
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await startProcessing();
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Start processing with an initial delay
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Initial delay
  await startProcessing();

  if (state !== 17) {
    // give a delay before the next recursive call
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Add more delay if needed
    await processQueue();
  }
}

function finishBatch(apiEndpoint){
  fetch(
    serverUrl +
      "/queue" +
      "/finishBatch?id="+queueList[0].id +"&"+"successfulBeers=" + successfulBeers+"&failedBeers=" +
      failedBeers,
    {
      method: "GET",
    }
  )
}
document.getElementById("stopButton").onclick = function () {
  let url = serverUrl + "/control/stop";
  APIPost(url);
};

document.getElementById("resetButton").onclick = function () {
    reset();
};

function reset() {
    let url = serverUrl + "/control/reset";
    APIPost(url);
}

document.getElementById("clearButton").onclick = function () {
  let url = serverUrl + "/control/clear";
  APIPost(url);
};

document.getElementById("abortButton").onclick = function () {
  let url = serverUrl + "/control/abort";
    APIPost(url);
};
