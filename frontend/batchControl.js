function showBatchPopup() {
    var popup = document.getElementById("batchPopup");
    popup.classList.toggle("show");
}
let url = "http://localhost:8080/queue"

var slider = document.getElementById("speedSlider");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}
document.addEventListener( "DOMContentLoaded", fetchBatchQueue, false );

document.getElementById("submitBatch").onclick =
    function () {
        var dropdownMenu = document.getElementById("typeOfBeer");
        var spinner = document.getElementById("batchSize");

        let beerType = parseInt(dropdownMenu.value) + 1;
        let size = spinner.value;
        let speedPercentage = slider.value;
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
    fetch(url+"/getBatchQueue")
        .then(response => response.json())
        .then(data => {
            // Call a function to update the HTML with the fetched data
            updateBatchQueueTable(data);
        })
        .catch(error => console.error('Error fetching batch queue:', error));
}

// Function to update the HTML table with batch queue data
function updateBatchQueueTable(batchQueueData) {
    const table = document.getElementById('batchQueueTable');
    console.log(batchQueueData);

    // Clear existing rows
    table.innerHTML = '<tr><th>Queue</th><th>Nr.</th></tr>';

    // Loop through the batch queue data and append rows to the table
    batchQueueData.forEach((batch, index) => {
        const row = table.insertRow(index + 1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        // Set cell content based on batch data
        cell1.innerHTML = `
 <div id="queue${index + 1}"> ${batch.beerId.name}:${batch.id} 
        <progress id="beerProgress${index + 1}" value="32" max="100">32</progress>
        <ion-icon class="arrow" name="arrow-round-up"></ion-icon>
        <ion-icon class="arrow" name="arrow-round-down"></ion-icon>
        <button type="button" class="close" onclick="removeBatchFromQueue(${batch.id})">X</button>
</div>  
            `;
        cell2.innerHTML = index + 1;
    });
}
function removeBatchFromQueue(id){
    let beerId = id;
    fetch(url+"/removeBatch?batchId="+beerId,{
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
    location.reload();
}

