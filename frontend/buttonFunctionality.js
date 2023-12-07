document.getElementById("startButton").onclick =
    function () {
        console.log("onclick virker");
        processQueue();
    }

function sendSizeParameter(size) {
    let url = serverUrl + '/control';
    fetch(url + "/newBatchSize?newValue=" + size, {
        method: "POST"
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json
            } else {
                throw new Error(resp.toString())
            }
        })
        .then(data =>
            console.log(data))
        .catch(error => {
            console.error('Error:', error)
        });
}

function sendSpeedParameter(speed) {
    let url = serverUrl + '/control';
    fetch(url + "/newMachSpeed?newValue=" + speed, {
        method: "POST"
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json
            } else {
                throw new Error(resp.toString())
            }
        })
        .then(data =>
            console.log(data))
        .catch(error => {
            console.error('Error:', error)
        });
}

function sendBeerIdParameter(beerId) {
    let url = serverUrl + '/control';
    fetch(url + "/newProductID?newValue=" + beerId, {
        method: "POST"
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json
            } else {
                throw new Error(resp.toString())
            }
        })
        .then(data =>
            console.log(data))
        .catch(error => {
            console.error('Error:', error)
        });
}

async function processQueue() {
    let url = serverUrl + '/control';

    async function startProcessing() {
        try {
            // Check if there are items in the queue
            if (queueList.length >= 1) {
                // Check if the state is 4
                while (state === 4) {
                    console.log("starting");
                    sendSizeParameter(queueList[0].size);
                    sendBeerIdParameter(queueList[0].beerId.id);
                    sendSpeedParameter(queueList[0].speed);

                    // Perform the 'start' operation
                    const resp = await fetch(url + '/start', {
                        method: "POST"
                    });

                    if (resp.status === 200) {
                        const data = await resp.json();
                        console.log('Processed Data:', data);
                        await new Promise(resolve => setTimeout(resolve, 2000)); // Add delay if needed
                    } else {
                        throw new Error(resp.statusText);
                    }
                }

                // If the state becomes 17, remove the batch and reset
                if (state === 17) {
                    removeBatchFromQueue(queueList[0].id);
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    await fetchBatchQueue();
                    reset();
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Initial delay
                    await startProcessing();
                }

            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Start processing with an initial delay
    await new Promise(resolve => setTimeout(resolve, 2000)); // Initial delay
    await startProcessing();

    if (state !== 17) {
        // Introduce a delay before the next recursive call
        await new Promise(resolve => setTimeout(resolve, 3000)); // Add delay if needed
        await processQueue();
    }
}

document.getElementById("stopButton").onclick =
    function () {
        let url = serverUrl + '/control';

        fetch(url + '/stop', {
            method: "POST"
        })
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json
                } else {
                    throw new Error(resp.toString())
                }
            })
            .then(data =>
                console.log(data))
            .catch(error => {
                    console.error('Error:', error)
                }
            );

    }

document.getElementById("resetButton").onclick =
    function () {
        reset();
    }

function reset() {
    let url = serverUrl + '/control';

    fetch(url + '/reset', {
        method: "POST"
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json
            } else {
                throw new Error(resp.toString())
            }
        })
        .then(data =>
            console.log(data))
        .catch(error => {
                console.error('Error:', error)
            }
        );

}

document.getElementById("clearButton").onclick =
    function () {
        let url = serverUrl + "/control";

        fetch(url + "/clear", {
            method: "POST"
        })
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json
                } else {
                    throw new Error(resp.toString())
                }
            })
            .then(data =>
                console.log(data))
            .catch(error => {
                    console.error('Error:', error)
                }
            );
    }

document.getElementById("abortButton").onclick =
    function () {
        let url = serverUrl + "/control";

        fetch(url + "/abort", {
            method: "POST"
        })
            .then(resp => {
                if (resp.status === 200) {
                    return resp.json
                } else {
                    throw new Error(resp.toString())
                }
            })
            .then(data =>
                console.log(data))
            .catch(error => {
                    console.error('Error:', error)
                }
            );

    }    
