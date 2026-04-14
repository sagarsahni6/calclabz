// Loads and merges all basic calculator SEO content files
'use strict';
const finance = require('./seo-content-basic-finance');
const healthEdu = require('./seo-content-basic-health-edu');
const engSci = require('./seo-content-basic-eng-sci');
const everydayMath = require('./seo-content-basic-everyday-math');
const unitOther = require('./seo-content-basic-unit-other');
const construction = require('./seo-content-basic-construction');

const all = Object.assign({}, finance, healthEdu, engSci, everydayMath, unitOther, construction);
module.exports = all;
