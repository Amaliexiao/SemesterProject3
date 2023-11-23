
document.getElementById("startButton").onclick =
    function () {
        let url = "http://localhost:8080/control";

        fetch(url + "/start", {
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
        let url = "http://localhost:8080/control";

        fetch(url + "/stop", {
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
        let url = "http://localhost:8080/control";

        fetch(url + "/reset", {
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
        let url = "http://localhost:8080/control";

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
        let url = "http://localhost:8080/control";

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
