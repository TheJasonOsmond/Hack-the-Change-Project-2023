function processImage() {
    // Here, you would implement JavaScript to handle the image processing and communicate with the back-end.
    // You'll need to replace this with your actual logic.

    // Example: Add a row to the table dynamically
    addToTable("Carrot", "2023-12-31");
    addToTable("Pumpkin", "2024-12-31");
    addToTable("Preserved Fried Eggs and Steak Sandwiches", "2024-12-30");
}


function addToTable(name, expiryDate) {
    // Create a new row
    var newRow = document.createElement("tr");

    // Create cells for name and expiry date
    var nameCell = document.createElement("td");
    var expiryCell = document.createElement("td");
    
    // Set the text content for cells
    nameCell.textContent = name;
    expiryCell.textContent = expiryDate;
    
    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(expiryCell);
    
    // Additional Code for Food Group
    // var groupCell = document.createElement("td");
    // groupCell.textContent = foodGroup;
    // newRow.appendChild(groupCell);

    // Append the row to the table body
    document.getElementById("foodTableBody").appendChild(newRow);

    // Sort the table after adding a new row
    sortTable(1);
}


function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("foodTable");
    switching = true;

    // Set the sort direction to descending initially
    var sortOrder = -1;

    // Get the column header
    var header = table.rows[0].cells[columnIndex];

    // Check if the column is already sorted, and change the sort order accordingly
    if (header.getAttribute("data-sorted") === "desc") {
        header.querySelector(".sort-icon").innerHTML = "&#x02190;";
        sortOrder = 1;
    } else {
        header.querySelector(".sort-icon").innerHTML = "&#x02191;";
    }

    // Mark the column as sorted
    header.setAttribute("data-sorted", sortOrder === 1 ? "asc" : "desc");

    // Continue sorting until no switching is needed
    while (switching) {
        switching = false;
        rows = table.rows;

        // Loop through all table rows (except the header row)
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;

            // Get the two elements to be compared, one from the current row and one from the next
            x = rows[i].cells[columnIndex].textContent.toLowerCase();
            y = rows[i + 1].cells[columnIndex].textContent.toLowerCase();

            // Check if the two rows should switch places
            if (sortOrder * (x.localeCompare(y)) > 0) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
