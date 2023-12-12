function showBatchPopup() {
    var popup = document.getElementById("batchPopup");
    popup.classList.toggle("show");
}

function testBachReportFunctionality(id) {
    fetch(serverUrl + "/reports/createBatchReport?batchId=" + id);
}

let url = "http://localhost:8080/queue"
let queueList;
var checkBox = document.getElementById("optimalSpeed");
var slider = document.getElementById("speedSlider");
var output = document.getElementById("sliderValue");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
document.addEventListener("DOMContentLoaded", fetchBatchQueue, false);
window.onload=function (){
    document.getElementById("optimalSpeed").addEventListener("click",checkSpeed);
}

function checkSpeed() {
    if (checkBox.checked === true){
        slider.disabled = true;
    } else {
        slider.disabled = false;
    }
}

document.getElementById("submitBatch").onclick =
    function () {
        var dropdownMenu = document.getElementById("typeOfBeer");
        var spinner = document.getElementById("batchSize");

        let beerType = parseInt(dropdownMenu.value) + 1;
        let size = spinner.value;
        let speedPercentage = slider.value;
        let speed;
        if(checkBox.checked === true){
            speed = optimalSpeed(beerType);
                    }
        else{
            speed = calculateManualSpeed(beerType, speedPercentage);
        }
        addBatch(speed,size,beerType);
    }

function calculateManualSpeed(beerType, speedPercentage) {
    let speed;
    switch (beerType - 1) {
        case 0:
            speed = 600 * speedPercentage / 100;
            break;
        case 1:
            speed = 300 * speedPercentage / 100;
            break;
        case 2:
            speed = 150 * speedPercentage / 100;
            break;
        case 3:
            speed = 200 * speedPercentage / 100;
            break;
        case 4:
            speed = 100 * speedPercentage / 100;
            break;
        case 5:
            speed = 125 * speedPercentage / 100;
            break;
    }
    return speed;
}

function optimalSpeed(beerType){
    let speed;
    switch (beerType - 1) {
        case 0:
            speed = 475;
            break;
        case 1:
            speed = 171;
            break;
        case 2:
            speed = 86;
            break;
        case 3:
            speed = 10;
            break;
        case 4:
            speed = 10;
            break;
        case 5:
            speed = 10;
            break;
    }
    return speed;
}

function addBatch(speed, size, beerType) {
    fetch(url + "/addBatch?userID=1&size=" + size + "&beerType=" + beerType + "&speed=" + speed, {
        method: "POST"
    })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json();
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

// Function to fetch batch queue data
function fetchBatchQueue() {
    fetch(url + "/getBatchQueue")
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Call a function to update the HTML with the fetched data
            queueList = data;
            updateBatchQueueTable();
        })
        .catch(error => console.error('Error fetching batch queue:', error));
}

// Function to update the HTML table with batch queue data
function updateBatchQueueTable() {
    const table = document.getElementById('batchQueueTable');
    // Clear existing rows
    table.innerHTML = '<tr><th>Queue</th><th>Nr.</th></tr>';

    // Loop through the batch queue data and append rows to the table
    queueList.forEach((batch, index) => {
        const row = table.insertRow(index + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        // Set cell content based on batch data
        cell1.innerHTML = `
 <div id="queue${index + 1}"> ${batch.beerId.name}:${batch.id} 
        <progress id="beerProgress${0}" value="0" max="100">32</progress>
        <ion-icon class="arrow" name="arrow-round-up"></ion-icon>
        <ion-icon class="arrow" name="arrow-round-down"></ion-icon>
        <button type="button" class="close" onclick="removeBatchFromQueue(${batch.id})">X</button>
</div>  
            `;
        cell2.innerHTML = index + 1;
    });
}

function removeBatchFromQueue(id) {
    let beerId = id;
    fetch(url + "/removeBatch?batchId=" + beerId, {
        method: "POST"
    })
        .then(resp => {
            if (resp.status === 200) {
                fetchBatchQueue();
                return resp.json();
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

setInterval(function progressBarQueue() {
    const batchSizeId = document.getElementById('batchSize');
    const batchSize = batchSizeId.value;

    let totalProduced = getTotalProduced;

    let totalProgress = totalProduced/batchSize*100;

    document.getElementById(`beerProgress${0}`).value=totalProgress;


}, 1000);





