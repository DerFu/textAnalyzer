const contentController = require('./contentController.js');
const beispielText = `Ich bin der erste Satz. Und ich, der zweite Satz.
Und ich: der zweite Absatz.`;

const scenarios = [{
  name: 'medium',
  data: [
    [
      ["Ich", "bin", "der", "erste", "Satz", "."],
      ["Und", "ich", ",", "der", "zweite", "Satz", "."]
    ],
    [
      ["Und", "ich", ":", "der", "zweite", "Absatz", "."]
    ]
  ],
}];

scenarios.forEach(scenario => {
  test(`test scenario ${scenario.name}`, () => {
    expect(contentController.transformTextToObject(beispielText)).toEqual(
      scenario.data
    );
  });
});
