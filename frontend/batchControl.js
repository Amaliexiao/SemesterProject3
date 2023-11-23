function showBatchPopup(){
    var popup = document.getElementById("batchPopup");
    popup.classList.toggle("show");
}
    var slider = document.getElementById("speedSlider");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }


document.getElementById("submitBatch").onclick =
    function () {
        let url = "http://localhost:8080/control";
        document.getElementById("speed")
        fetch(url + "/newMachSpeed?newValue=" + newSpeed, {
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