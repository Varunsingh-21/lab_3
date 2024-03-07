document.getElementById("getXhr").addEventListener
    ('click', e => {
        getAjax("./products.json");
    });

    function getXhr(resource_url) {
        let request = new XMLHttpRequest();
    
        request.onreadystatechange = function (event) {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    handleSuccess(this);
                } else {
                    handleError(this);
                }
            }   
        };
    
        request.open('GET', resource_url);
        request.send(); 
    }
function handleSuccess(res) {
    const reference = res
    const tableref = document.getElementById('xhr-table');

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table');

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
   
    const headerPrice = document.createElement('th');
  
    headerRow.appendChild(tableHName);
    headerRow.appendChild(headerPrice);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    for (const product of reference) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    tableref.innerHTML = '';  
    tableref.appendChild(table);
}

function handleError(response){
  
   
}
function getAjax(resource_url){
    const opts = {
        url: resource_url,
        header: {
            "Content-Type": "application/json"
        }
        
    }
    $.ajax(opts)
          .done(handleSuccess)
          .fail(handleError)

}   
