const fs = require('fs');

const PASS = '\x1b[32m✓\x1b[0m';
const FAIL = '\x1b[31m✗\x1b[0m';
let passed = 0, failed = 0;

// Read app.js and extract formatINR function to truly test the source code version
const appJsSource = fs.readFileSync('assets/js/app.js', 'utf8');

// A reliable way to extract function formatINR(n) { ... }
const startIndex = appJsSource.indexOf('function formatINR(n) {');
if (startIndex === -1) {
    console.error("Could not find formatINR in app.js");
    process.exit(1);
}

// Find the end of the function. We know it ends with `return i ? i + ',' + r : r;\n}`
const endString = 'return i ? i + \',\' + r : r;\n}';
const endIndex = appJsSource.indexOf(endString, startIndex);
if (endIndex === -1) {
    console.error("Could not find end of formatINR in app.js");
    process.exit(1);
}

const fnCode = appJsSource.substring(startIndex, endIndex + endString.length);

// eval it into this context
eval(fnCode);

function assert(testName, actual, expected) {
    if (actual === expected) {
        console.log(`  ${PASS} ${testName}: ${actual} === ${expected}`);
        passed++;
    } else {
        console.log(`  ${FAIL} ${testName}: expected "${expected}", got "${actual}"`);
        failed++;
    }
}

console.log('\n🔢 formatINR Function');
assert('Small number', formatINR(100), '100');
assert('Thousand', formatINR(1000), '1,000');
assert('Ten Thousand', formatINR(10000), '10,000');
assert('Lakh', formatINR(100000), '1,00,000');
assert('Ten Lakh', formatINR(1000000), '10,00,000');
assert('Crore', formatINR(10000000), '1,00,00,000');

assert('Negative Small', formatINR(-500), '-500');
assert('Negative Thousand', formatINR(-1500), '-1,500');
assert('Negative Lakh', formatINR(-250000), '-2,50,000');

assert('Round Down', formatINR(1000.4), '1,000');
assert('Round Up', formatINR(1000.5), '1,001');
assert('Round Negative', formatINR(-1000.5), '-1,000');

assert('Zero', formatINR(0), '0');

console.log('\n' + '═'.repeat(50));
console.log(`Results: ${passed} passed, ${failed} failed, ${passed+failed} total`);
console.log('═'.repeat(50));
process.exit(failed > 0 ? 1 : 0);
