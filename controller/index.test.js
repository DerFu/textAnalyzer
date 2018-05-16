const contentController = require("./contentController.js");
const beispielText = `Ich bin der erste Satz. Und ich der zweite Satz.
Und ich der zweite Absatz.`;

const scenarios = [
  // {
  //   name: "easy",
  //   data: [
  //     [
  //       ["Ich", "bin", "der", "erste", "Satz"],
  //       ["Und", "ich", "der", "zweite", "Satz"]
  //     ],
  //     [["Und", "ich", "der", "zweite", "Absatz"]]
  //   ]
  // },
  // {
  //   name: "medium",
  //   data: [
  //     [
  //       ["Ich", "bin", "der", "erste", "Satz", "."],
  //       ["Und", "ich", "der", "zweite", "Satz", "."]
  //     ],
  //     [["Und", "ich", "der", "zweite", "Absatz", "."]]
  //   ]
  // },
  {
    name: "high",
    data: [
      [
        [
          { value: "Ich" },
          { value: "bin" },
          { value: "der" },
          { value: "erste" },
          { value: "Satz" },
          { value: "." }
        ],
        [
          { value: "Und" },
          { value: "ich" },
          { value: "der" },
          { value: "zweite" },
          { value: "Satz" },
          { value: "." }
        ]
      ],
      [
        [
          { value: "Und" },
          { value: "ich" },
          { value: "der" },
          { value: "zweite" },
          { value: "Absatz" },
          { value: "." }
        ]
      ]
    ]
  }
];

scenarios.forEach(scenario => {
  test(`test scenario ${scenario.name}`, () => {
    expect(contentController.transformTextToObject(beispielText)).toEqual(
      scenario.data
    );
  });
});
