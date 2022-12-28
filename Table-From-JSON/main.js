const tableData = [
  {
    id: 402,
    name: "Cartoon Network",
    shows: [
      "Tom & Jerry",
      "Power Rangers",
      "Dexters Labaratory",
      "Bob The Builder",
      "Beyblade",
    ],
  },
  {
    id: 408,
    name: "Pogo",
    shows: ["Mr Bean", "MAD", "Lonely Tunes", "Takeshis Castle", "Road Runner"],
  },
  {
    id: 378,
    name: "ESPN",
    shows: ["WWE", "Golf", "UEFA", "Ashes", "MotoGP", "X Games"],
  },
  {
    id: 781,
    name: "MTV",
    shows: [
      "Roadies",
      "Trending",
      "Good Morning",
      "Ace Of Spades",
      "Beats Garage",
      "Pop Hits",
    ],
  },
  {
    id: 102,
    name: "National Geography",
    shows: [
      "Man vs Wild",
      "MegaStructures",
      "Deep Down South",
      "Ice Age",
      "Incredible India",
      "Into The Wild",
    ],
  },
];

const tableEl = document.querySelector(".table__container");

const noOfColumns = tableData.reduce((acc, curr, i) => {
  acc = curr.shows.length > acc ? curr.shows.length : acc;
  return acc;
}, 0);

const columnNodes =
  `<th class="table__header row__Freeze">Channels</th>` +
  Array(noOfColumns)
    .fill(" ")
    .map((_, i) => `<th class="table__header">Show ${i + 1}</th>`)
    .join("");

tableEl.innerHTML = columnNodes;

const nodes = tableData
  .map((table, i) => {
    const node = `<tr class="table__row">
                    <td class="row__Freeze">${table.name}</td>
                    ${table.shows.map((show) => `<td>${show}</td>`).join("")}

                </tr>`;
    return node;
  })
  .join("");

tableEl.innerHTML += nodes;
