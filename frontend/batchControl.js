function showBatchPopup() {
    let popup = document.getElementById("batchPopup");
    popup.classList.toggle("show");
}

function testBachReportFunctionality(id) {
    fetch(serverUrl + "/reports/createBatchReport?batchId=" + id);
}

let url = "http://localhost:8080/queue"
let queueList;
let checkBox = document.getElementById("optimalSpeed");
let slider = document.getElementById("speedSlider");
let output = document.getElementById("sliderValue");

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
        let dropdownMenu = document.getElementById("typeOfBeer");
        let spinner = document.getElementById("batchSize");

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
            speed = 101;
            break;
        case 3:
            speed = 86;
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
    APIPost(url + "/addBatch?userID=1&size=" + size + "&beerType=" + beerType + "&speed=" + speed);
}

// fetch batch queue
function fetchBatchQueue() {
    APIFetcherNoneVariant(url + "/getBatchQueue").then((batchQueue) => {
        console.log("batchqueue " + batchQueue)
        queueList = batchQueue;
        updateBatchQueueTable();
    });
}

function updateBatchQueueTable() {
    const table = document.getElementById('batchQueueTable');
    // clear queue
    table.innerHTML = '<tr><th>Queue</th><th>Nr.</th></tr>';
    // loop through the queue and insert a div for each batch
    queueList.forEach((batch, index) => {
        const row = table.insertRow(index + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
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

async function removeBatchFromQueue(id) {
    await APIPost(url + "/removeBatch?batchId=" + id);
    fetchBatchQueue();
}

setInterval(function progressBarQueue() {
    const batchSizeId = document.getElementById('batchSize');
    const batchSize = batchSizeId.value;
    let totalProduced = getTotalProduced;
    let totalProgress = totalProduced/batchSize*100;
    document.getElementById(`beerProgress${0}`).value=totalProgress;
}, 1000);





