function showBatchPopup() {
    var popup = document.getElementById("batchPopup");
    popup.classList.toggle("show");
}

var slider = document.getElementById("speedSlider");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

document.getElementById("submitBatch").onclick =
    function () {
        var dropdownMenu = document.getElementById("typeOfBeer");
        var spinner = document.getElementById("batchSize");

        let beerType = dropdownMenu.value;
        let size = spinner.value;
        let speed = slider.value;
        let url = "http://localhost:8080/database";

        fetch(url + "/addBatch?userID=1&size="+size+"&beerType="+beerType+"&speed="+speed, {
            method: "POST"
        })
            .then(resp => {
                if(resp.status===200) {return resp.json}
                else {throw new Error(resp.toString())}
            })
            .then(data =>
                console.log(data))
            .catch(error => {
                console.error('Error:', error)}
            );
    }