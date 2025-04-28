// quest38.js

const rawMetrics = [10, 20, 30];

function normalize(number) {
  return number / 10;
}

const normalizedMetrics = rawMetrics.map(normalize);

const totalNormalized = normalizedMetrics.reduce((sum, value) => sum + value, 0);

console.log(`Total normalized: ${totalNormalized}`);
