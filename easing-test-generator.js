// Test data generator for Easing library for MiniScript
// Based on https://easings.net/
// Licensed under GNU General Public License v3.0, see easing-test-generator-LICENSE.txt for details

const easings = [
  {
    name: "linear",
    maths: "return x;",
  },
  {
    name: "easeInSine",
    maths: "return 1 - Math.cos((x * Math.PI) / 2);",
  },
  {
    name: "easeOutSine",
    maths: "return Math.sin((x * Math.PI) / 2);",
  },
  {
    name: "easeInOutSine",
    maths: "return -(Math.cos(Math.PI * x) - 1) / 2;",
  },
  {
    name: "easeInQuad",
    maths: "return x * x;",
  },
  {
    name: "easeOutQuad",
    maths: "return 1 - (1 - x) * (1 - x);",
  },
  {
    name: "easeInOutQuad",
    maths: "return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;",
  },
  {
    name: "easeInCubic",
    maths: "return x * x * x;",
  },
  {
    name: "easeOutCubic",
    maths: "return 1 - Math.pow(1 - x, 3);",
  },
  {
    name: "easeInOutCubic",
    maths: "return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;",
  },
  {
    name: "easeInQuart",
    maths: "return x * x * x * x;",
  },
  {
    name: "easeOutQuart",
    maths: "return 1 - Math.pow(1 - x, 4);",
  },
  {
    name: "easeInOutQuart",
    maths:
      "return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;",
  },
  {
    name: "easeInQuint",
    maths: "return x * x * x * x * x;",
  },
  {
    name: "easeOutQuint",
    maths: "return 1 - Math.pow(1 - x, 5);",
  },
  {
    name: "easeInOutQuint",
    maths:
      "return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;",
  },
  {
    name: "easeInExpo",
    maths: "return x === 0 ? 0 : Math.pow(2, 10 * x - 10);",
  },
  {
    name: "easeOutExpo",
    maths: "return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);",
  },
  {
    name: "easeInOutExpo",
    maths:
      "return x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2\n  : (2 - Math.pow(2, -20 * x + 10)) / 2;",
  },
  {
    name: "easeInCirc",
    maths: "return 1 - Math.sqrt(1 - Math.pow(x, 2));",
  },
  {
    name: "easeOutCirc",
    maths: "return Math.sqrt(1 - Math.pow(x - 1, 2));",
  },
  {
    name: "easeInOutCirc",
    maths:
      "return x < 0.5\n  ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2\n  : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;",
  },
  {
    name: "easeInBack",
    maths:
      "const c1 = 1.70158;\nconst c3 = c1 + 1;\n\nreturn c3 * x * x * x - c1 * x * x;",
  },
  {
    name: "easeOutBack",
    maths:
      "const c1 = 1.70158;\nconst c3 = c1 + 1;\n\nreturn 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);",
  },
  {
    name: "easeInOutBack",
    maths:
      "const c1 = 1.70158;\nconst c2 = c1 * 1.525;\n\nreturn x < 0.5\n  ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2\n  : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;",
  },
  {
    name: "easeInElastic",
    offset: "bottom",
    maths:
      "const c4 = (2 * Math.PI) / 3;\n\nreturn x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);",
  },
  {
    name: "easeOutElastic",
    offset: "top",
    maths:
      "const c4 = (2 * Math.PI) / 3;\n\nreturn x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;",
  },
  {
    name: "easeInOutElastic",
    maths:
      "const c5 = (2 * Math.PI) / 4.5;\n\nreturn x === 0\n  ? 0\n  : x === 1\n  ? 1\n  : x < 0.5\n  ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2\n  : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;",
  },
  {
    name: "easeInBounce",
    maths: "return 1 - easeOutBounce(1 - x);",
  },
  {
    name: "easeOutBounce",
    maths: "return easeOutBounce(x);",
  },
  {
    name: "easeInOutBounce",
    maths:
      "return x < 0.5\n  ? (1 - easeOutBounce(1 - 2 * x)) / 2\n  : (1 + easeOutBounce(2 * x - 1)) / 2;",
  },
];

// Decalred as a global (no var/let/const) so it is visible from evals
easeOutBounce = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

let points = {};
const samplePoints = 64;

for (const easing of easings) {
  let samples = [];
  let easingFunc = Function("x", easing.maths);
  for (let i = 0; i <= samplePoints; i++) {
    let x = i / samplePoints;
    samples.push({
      x: x,
      y: easingFunc(x),
    });
  }
  points[easing.name] = samples;
}

require("fs").writeFileSync("./easing-test-data.json", JSON.stringify(points));
