/**Build a table exercise
 ==========================*/

document.addEventListener('DOMContentLoaded', () => {
  const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
  ];

  const mountainsDiv = document.getElementById('mountains');
  const tableElement = document.createElement('table');
  mountainsDiv.append(tableElement);

  /**Function to create and append table headings
   ===============================================*/
  function createTableHeadings() {
    const headerRow = document.createElement('tr');
    Object.keys(MOUNTAINS[0]).map(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.append(th);
    });
    tableElement.append(headerRow);
  }

  /**Function to create and append table data rows
   ================================================*/
  function createTableRows() {
    MOUNTAINS.map(mountain => {
      const row = document.createElement('tr');
      Object.keys(mountain).map(key => {
        const cell = document.createElement('td');
        cell.textContent = mountain[key];
        if (key === 'height') {
          cell.classList.add('number');
          cell.style.textAlign = 'right';
        }
        row.append(cell);
      });
      tableElement.append(row);
    });
  }

  /**Build the table
   ==================*/
  createTableHeadings();
  createTableRows();
});
