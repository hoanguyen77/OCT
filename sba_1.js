function editHTML() {
	const myCourseDiv = document.getElementById('myCourse');
	
	// Create a table element
	const table = document.createElement('table');
	
	// Create a table header (thead) with two columns (th)
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');
	const nameHeader = document.createElement('th');
	nameHeader.textContent = "Coure_Name";
	const locationHeader = document.createElement('th');
	locationHeader.textContent = "Available_in";
	headerRow.appendChild(nameHeader);
	headerRow.appendChild(locationHeader);
	thead.appendChild(headerRow);

	// Create a table body (tbody)
	const tbody = document.createElement('tbody');
	
	// Create rows and cells
	const data = [
	  { Coure_Name: "Full Stack Java Developer", Available_in : "National" },
	  { Coure_Name: "Software Engineer", Available_in: "Phoenix, Los Angeles, Seattle" },
	  { Coure_Name: "Cybersecurity", Available_in: "Phoenix, Los Angeles, Seattle" }
	];
	data.forEach(item => {
	  const row = document.createElement('tr');
	  const courseCell = document.createElement('td');
	  courseCell.textContent = item.Coure_Name;
	  const locationCell = document.createElement('td');
	  locationCell.textContent = item.Available_in;
	  row.appendChild(courseCell);
	  row.appendChild(locationCell);
	  tbody.appendChild(row);
	});

	// Append the header and body to the table
	table.appendChild(thead);
	table.appendChild(tbody);
	
	// Clear the content of the myCourseDiv and append the table
	myCourseDiv.innerHTML = "";
	myCourseDiv.appendChild(table);
  }