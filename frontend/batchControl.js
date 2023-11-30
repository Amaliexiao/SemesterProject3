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

        let beerType = parseInt(dropdownMenu.value)+1;
        let size = spinner.value;
        let speedPercentage = slider.value;
        let speed;
        let url = "http://localhost:8080/database";
        //
        // if(beerType==1){
        //     speed = 300*speedPercentage/100;
        // }
        // else {
        //     console.log("wack");
        // }

        switch (beerType-1){
            case 0:
                speed = 600*speedPercentage/100;
                break;
            case 1:
                speed = 300*speedPercentage/100;
                break;
            case 2:
                speed = 150*speedPercentage/100;
                break;
            case 3:
                speed = 200*speedPercentage/100;
                break;
            case 4:
                speed = 100*speedPercentage/100;
                break;
            case 5:
                speed = 125*speedPercentage/100;
                break;
        }

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