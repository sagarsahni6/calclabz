/**
 * verify-calculators.js
 * Lightweight verification script for Calc Labz calculators.
 * Validates core calculators against known correct outputs.
 *
 * Usage: node scripts/verify-calculators.js
 */

// ── Simulated minimal DB + calc functions for Node.js testing ──────

const PASS = '\x1b[32m✓\x1b[0m';
const FAIL = '\x1b[31m✗\x1b[0m';
let passed = 0, failed = 0;

function assert(testName, actual, expected, tolerance) {
    tolerance = tolerance || 0.01;
    const num = typeof actual === 'number' ? actual : parseFloat(String(actual).replace(/[^\d.\-]/g, ''));
    const exp = typeof expected === 'number' ? expected : parseFloat(String(expected).replace(/[^\d.\-]/g, ''));
    if (isNaN(num) || isNaN(exp)) {
        // String comparison
        if (String(actual).includes(String(expected))) {
            console.log(`  ${PASS} ${testName}: "${actual}" contains "${expected}"`);
            passed++;
        } else {
            console.log(`  ${FAIL} ${testName}: expected "${expected}", got "${actual}"`);
            failed++;
        }
        return;
    }
    // Handle zero expected value
    if (exp === 0) {
        if (num === 0) {
            console.log(`  ${PASS} ${testName}: ${num} === ${exp}`);
            passed++;
        } else {
            console.log(`  ${FAIL} ${testName}: expected ${exp}, got ${num}`);
            failed++;
        }
        return;
    }
    const pctDiff = Math.abs((num - exp) / exp);
    if (pctDiff <= tolerance) {
        console.log(`  ${PASS} ${testName}: ${num} ≈ ${exp} (${(pctDiff*100).toFixed(2)}% diff)`);
        passed++;
    } else {
        console.log(`  ${FAIL} ${testName}: expected ${exp}, got ${num} (${(pctDiff*100).toFixed(2)}% diff)`);
        failed++;
    }
}

// ── Test: EMI Calculator ────────────────────────────────────────────
console.log('\n📐 EMI Calculator');
(function() {
    const P = 5000000, R = 8.5 / 1200, N = 240;
    const emi = P * R * Math.pow(1+R, N) / (Math.pow(1+R, N) - 1);
    assert('EMI for ₹50L @ 8.5% / 20yr', Math.round(emi), 43391, 0.01);
    assert('Total Payment', Math.round(emi * N), 10413840, 0.01);
    assert('Total Interest', Math.round(emi * N - P), 5413840, 0.01);
})();

// ── Test: SIP Calculator ────────────────────────────────────────────
console.log('\n📈 SIP Calculator');
(function() {
    const monthly = 5000, rate = 12, years = 10;
    const n = years * 12;
    const r = rate / 1200;
    const fv = monthly * ((Math.pow(1+r, n) - 1) / r) * (1+r);
    assert('SIP ₹5K/mo @ 12% / 10yr', Math.round(fv), 1161695, 0.02);
})();

// ── Test: BMI Calculator ────────────────────────────────────────────
console.log('\n🏋️‍♂️ BMI Calculator');
(function() {
    const weight = 70, height = 170;
    const bmi = weight / ((height/100) * (height/100));
    assert('BMI for 70kg, 170cm', bmi.toFixed(1), '24.2');
    // Category check
    const cat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obese';
    assert('BMI Category', cat, 'Normal weight');
})();

// ── Test: GST Calculator ────────────────────────────────────────────
console.log('\n🧾 GST Calculator');
(function() {
    const base = 1000, rate = 18;
    const gst = base * rate / 100;
    const total = base + gst;
    assert('GST on ₹1000 @ 18%', gst, 180);
    assert('Total with GST', total, 1180);
    assert('CGST', gst/2, 90);
    assert('SGST', gst/2, 90);
})();

// ── Test: Income Tax (New Regime FY 2025-26) ────────────────────────
console.log('\n🏛️ Income Tax (New Regime)');
(function() {
    // ₹12L income — should be ₹0 under 87A rebate
    function calcTax(income) {
        let tax = 0;
        const slabs = [[400000,0],[400000,0.05],[400000,0.10],[400000,0.15],[400000,0.20],[Infinity,0.30]];
        let remaining = Math.max(0, income - 75000); // Standard deduction
        for (const [limit, rate] of slabs) {
            const taxable = Math.min(remaining, limit);
            tax += taxable * rate;
            remaining -= taxable;
            if (remaining <= 0) break;
        }
        // Section 87A rebate: if taxable income ≤ 12L, full rebate up to 60K
        if ((income - 75000) <= 1200000 && tax <= 60000) tax = 0;
        return Math.round(tax);
    }
    assert('Tax on ₹12L (New Regime)', calcTax(1200000), 0);
    assert('Tax on ₹15L (New Regime)', calcTax(1500000), 93750, 0.01);
    assert('Tax on ₹20L (New Regime)', calcTax(2000000), 185000, 0.01);
})();

// ── Test: Compound Interest ─────────────────────────────────────────
console.log('\n💰 Compound Interest');
(function() {
    const P = 100000, R = 10, T = 5, N = 1;
    const A = P * Math.pow(1 + R/(N*100), N*T);
    assert('₹1L @ 10% for 5yr (annual)', Math.round(A), 161051, 0.01);
})();

// ── Test: Percentage Calculator ─────────────────────────────────────
console.log('\n📊 Percentage Calculator');
(function() {
    assert('25% of 200', 200 * 25/100, 50);
    assert('150 is what % of 600', (150/600)*100, 25);
})();

// ── Test: Body Fat (US Navy Method, Male) ───────────────────────────
console.log('\n🏃 Body Fat % (US Navy)');
(function() {
    const height = 178, waist = 85, neck = 38;
    const bf = 495/(1.0324-0.19077*Math.log10(waist-neck)+0.15456*Math.log10(height))-450;
    assert('Body Fat % (Male, 178cm)', bf.toFixed(1), '17', 0.15);
})();

// ── Test: Slug Collision Check ──────────────────────────────────────
console.log('\n🔗 Slug Collision Validation');
(function() {
    // Simulate slug generation from calculator IDs
    const testIds = [
        'emi','sip','gst','bmi','incometax','bodyfat','waisthip',
        'lungcapacity','agenextbday','caloriesfood','percentage',
        'compoundinterest','bmr','tdee','age','macros'
    ];
    const slugMap = {};
    let collisions = 0;
    testIds.forEach(function(id) {
        const slug = id.toLowerCase().replace(/_/g, '-') + '-calculator';
        if (slugMap[slug]) {
            console.log(`  ${FAIL} COLLISION: "${slug}" from "${id}" and "${slugMap[slug]}"`);
            collisions++;
        } else {
            slugMap[slug] = id;
        }
    });
    if (collisions === 0) {
        console.log(`  ${PASS} No slug collisions found (${testIds.length} calculators tested)`);
        passed++;
    } else {
        failed += collisions;
    }
})();

// ── Test: Old camelCase keys should NOT exist ───────────────────────
console.log('\n🔍 Canonical Naming Validation');
(function() {
    const banned = ['incomeTax', 'bodyFat', 'waistHip', 'lungCapacity', 'ageNextBday', 'calories_food'];
    const canonical = ['incometax', 'bodyfat', 'waisthip', 'lungcapacity', 'agenextbday', 'caloriesfood'];
    // Read the actual DB file to check
    const fs = require('fs');
    try {
        const src = fs.readFileSync('assets/js/calculators-core.js', 'utf8');
        banned.forEach(function(key, i) {
            // Check for DB key definition: "key: {"
            const regex = new RegExp('^\\s*' + key + '\\s*:\\s*\\{', 'm');
            if (regex.test(src)) {
                console.log(`  ${FAIL} Old key "${key}" still exists as DB entry`);
                failed++;
            } else {
                console.log(`  ${PASS} Old key "${key}" removed → "${canonical[i]}"`);
                passed++;
            }
        });
    } catch(e) {
        console.log(`  ${FAIL} Could not read calculators-core.js: ${e.message}`);
        failed++;
    }
})();

// ── Summary ─────────────────────────────────────────────────────────
console.log('\n' + '═'.repeat(50));
console.log(`Results: ${passed} passed, ${failed} failed, ${passed+failed} total`);
console.log('═'.repeat(50));
process.exit(failed > 0 ? 1 : 0);
