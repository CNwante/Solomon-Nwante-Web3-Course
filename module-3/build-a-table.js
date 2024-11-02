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

  // Your code here
  const mountainsDiv = document.getElementById('mountains');
  console.log(mountainsDiv);

  const tableElement = document.createElement('table');
  console.log(tableElement);


  mountainsDiv.append(tableElement);

  const firstData = MOUNTAINS[0]
  console.log(firstData);

  function createHeadings() {
    let tr = document.createElement('tr');
    for (let x in firstData) {
      let th = document.createElement('th');
      th.textContent = x;
      tr.append(th);
    }
    return tr;
  }

  tableElement.append(createHeadings());

  function createTableData() {
    let result = [];
    for (let x of MOUNTAINS) {
      let tr = document.createElement('tr');
      for (let y in x) {
        let td = document.createElement('td');
        td.textContent = x[y];
        tr.append(td);

        if (y === 'height') {
          console.log('Yeeeee')
          td.setAttribute('class', 'number')
          td.style.textAlign = 'right';
        }
      }
      result.push(tr);
    }

    for (let z of result) {
      tableElement.append(z);
    }
  }

  createTableData();
});
