document.getElementById("startButton").onclick =
    function () {
        let url = serverUrl + '/control';
        // let speed;
        // let size;
        // let beerId;
        // fetch("http://localhost:8080/queue/getFirstBatch")
        //     .then(response =>{
        //         response.body.id
        //         speed= response.speed;
        //         size = response.size;
        //         beerId = response.beerId.id;
        //     })
        //     .catch(error => console.error('Error', error));
        // console.log(speed);
        //
        // fetch(url + "/newBatchSize?newValue=" + size, {
        //     method: "POST"
        // })
        //     .then(resp => {
        //         if (resp.status === 200) {
        //             return resp.json
        //         } else {
        //             throw new Error(resp.toString())
        //         }
        //     })
        //     .then(data =>
        //         console.log(data))
        //     .catch(error => {
        //         console.error('Error:', error)
        //     });
        // fetch(url + "/newMachSpeed?newValue=" + speed, {
        //     method: "POST"
        // })
        //     .then(resp => {
        //         if (resp.status === 200) {
        //             return resp.json
        //         } else {
        //             throw new Error(resp.toString())
        //         }
        //     })
        //     .then(data =>
        //         console.log(data))
        //     .catch(error => {
        //         console.error('Error:', error)
        //     });
        // fetch(url + "/newProductID?newValue=" + beerId, {
        //     method: "POST"
        // })
        //     .then(resp => {
        //         if (resp.status === 200) {
        //             return resp.json
        //         } else {
        //             throw new Error(resp.toString())
        //         }
        //     })
        //     .then(data =>
        //         console.log(data))
        //     .catch(error => {
        //         console.error('Error:', error)
        //     });

        fetch(url + '/start', {
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
