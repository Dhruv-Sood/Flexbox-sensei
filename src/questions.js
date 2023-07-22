const data = [
  {
    task: "Arrange the three boxes at center!",
    choices: [
      "justify-content: center;",
      "justify-content: start;",
      "justify-content: space-between;",
      "display: grid;",
    ],
    correct: "justify-content: center;",
    cssProperties: "items-center justify-center",
  },
  {
    task: "Make the three boxes in a row!",
    choices: [
      "flex-direction: column;",
      "flex-direction: row;",
      "flex-wrap: wrap;",
      "align-items: flex-start;",
    ],
    correct: "flex-direction: row;",
    cssProperties: "flex flex-row",
  },
  {
    task: "Space the boxes evenly!",
    choices: [
      "justify-content: space-around;",
      "justify-content: space-evenly;",
      "justify-content: space-between;",
      "justify-content: flex-start;",
    ],
    correct: "justify-content: space-evenly;",
    cssProperties: "flex justify-evenly",
  },
  {
    task: "Align the boxes to the end!",
    choices: [
      "align-items: center;",
      "align-items: flex-end;",
      "align-items: stretch;",
      "align-items: baseline;",
    ],
    correct: "align-items: flex-end;",
    cssProperties: "flex items-end",
  },
  {
    task: "Reverse the order of boxes!",
    choices: [
      "flex-grow: 1;",
      "flex-direction: row-reverse;justify-content: flex-end;",
      "flex-shrink: 1;",
      "flex-direction: row-reverse;justify-content: flex-center;",
    ],
    correct: "flex-direction: row-reverse;justify-content: flex-end;",
    cssProperties: "flex-row-reverse justify-end",
  },
];

export default data;
