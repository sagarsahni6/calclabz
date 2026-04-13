/* ═══════════════════════════════════════════════════
   Calc Labz — blog-content-education.js
   Education blog post content bodies.
   Loaded AFTER blog-posts.js (which defines BLOG_CONTENT).
   ═══════════════════════════════════════════════════ */
'use strict';

// ── POST: Attendance Calculator ─────────────────────────────────────────────
BLOG_CONTENT['attendance-guide'] = {
  title: 'Attendance Calculator: Track & Meet Your 75% Requirement',
  meta: { date: 'Apr 2026', readTime: '4 min', author: 'Calc Labz Team' },
  body:
    '<h2>How Many Classes Can You Actually Skip?</h2>' +
    '<p>Most Indian universities and AICTE-affiliated colleges require 75% minimum attendance. But students rarely know exactly how many classes they can miss without falling below the threshold. The math is simple once you understand it.</p>' +
    '<h2>The Attendance Formula</h2>' +
    '<p><strong>Attendance % = (Classes Attended / Total Classes) \u00d7 100</strong></p>' +
    '<h3>Worked Example</h3>' +
    '<ul>' +
    '<li>Total classes so far: 80 | Attended: 65 | Current attendance: 81.25%</li>' +
    '<li>Classes you can still skip (to stay above 75%): need 0.75 \u00d7 (80 + x) \u2264 65, where x = remaining classes you skip</li>' +
    '<li>If 20 classes remain: you can skip up to <strong>6 more classes</strong> (attend at least 14 of 20)</li>' +
    '</ul>' +
    '<h2>Quick Reference: How Many Leaves Are Safe?</h2>' +
    '<table><thead><tr><th>Current Attendance</th><th>With 20 Classes Left</th><th>With 40 Classes Left</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>90%</td><td>Can skip 8</td><td>Can skip 18</td></tr>' +
    '<tr><td>80%</td><td>Can skip 3</td><td>Can skip 8</td></tr>' +
    '<tr><td>75%</td><td>Can skip 0</td><td>Can skip 0</td></tr>' +
    '<tr><td>70%</td><td>Must attend ALL 20 + won\u2019t recover</td><td>Must attend ALL 40 \u2014 still short</td></tr>' +
    '</tbody></table>' +
    '<p>If you\u2019re already below 75%, the calculator tells you how many consecutive classes you must attend to recover. Use the <a href="/attendance-calculator">attendance calculator</a> to track your exact numbers.</p>',
  cta: { text: 'Check your attendance', calc: 'attendance', cat: 'education' }
};

// ── POST: GPA Calculator ────────────────────────────────────────────────────
BLOG_CONTENT['gpa-guide'] = {
  title: 'GPA Calculator: CGPA to Percentage & 4.0 Scale Conversion',
  meta: { date: 'Apr 2026', readTime: '5 min', author: 'Calc Labz Team' },
  body:
    '<h2>CGPA \u00d7 9.5 = Percentage? Not Always</h2>' +
    '<p>The popular "multiply by 9.5" formula only works for CBSE 10th grading (loosely). For university CGPA on a 10-point scale, and for conversions to the 4.0 GPA scale used abroad, you need different formulas. Using the wrong one on grad school applications can misrepresent your academic record.</p>' +
    '<h2>Common Conversion Tables</h2>' +
    '<table><thead><tr><th>CGPA (10-point)</th><th>Percentage (approx)</th><th>4.0 GPA (US)</th><th>Grade</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>9.0\u201310.0</td><td>85\u2013100%</td><td>3.7\u20134.0</td><td>A+ / O</td></tr>' +
    '<tr><td>8.0\u20138.9</td><td>75\u201384%</td><td>3.3\u20133.7</td><td>A</td></tr>' +
    '<tr><td>7.0\u20137.9</td><td>65\u201374%</td><td>2.7\u20133.3</td><td>B+</td></tr>' +
    '<tr><td>6.0\u20136.9</td><td>55\u201364%</td><td>2.0\u20132.7</td><td>B</td></tr>' +
    '<tr><td>5.0\u20135.9</td><td>45\u201354%</td><td>1.0\u20132.0</td><td>C</td></tr>' +
    '<tr><td>Below 5.0</td><td>Below 45%</td><td>Below 1.0</td><td>F</td></tr>' +
    '</tbody></table>' +
    '<h2>How to Calculate CGPA</h2>' +
    '<p><strong>CGPA = \u03a3(Subject Grade Point \u00d7 Credits) / \u03a3(Credits)</strong></p>' +
    '<p>Each subject\u2019s grade point is weighted by its credit hours. A 4-credit subject counts twice as much as a 2-credit subject. This is why performing well in high-credit courses matters more for your CGPA.</p>' +
    '<p>Use the <a href="/cgpa-calculator">CGPA calculator</a> for precise conversions, or check the <a href="/blog/cgpa-to-percentage-converter-formula-2026">detailed CGPA to percentage guide</a> for university-specific formulas.</p>',
  cta: { text: 'Calculate your GPA', calc: 'gpa', cat: 'education' }
};

// ── POST: Grade Calculator ──────────────────────────────────────────────────
BLOG_CONTENT['grade-guide'] = {
  title: 'Grade Calculator: What Score Do You Need on Your Final Exam?',
  meta: { date: 'Apr 2026', readTime: '4 min', author: 'Calc Labz Team' },
  body:
    '<h2>The Reverse-Grade Formula</h2>' +
    '<p>You know your assignment scores and the final exam\u2019s weight. The question: what score do you need on the final to get an A? This reverse calculation prevents last-minute panic and helps you allocate study time across subjects strategically.</p>' +
    '<h2>Worked Example</h2>' +
    '<ul>' +
    '<li>Internal assessment (40% weight): scored 32/40 = 80%</li>' +
    '<li>Target final grade: 75% (A grade)</li>' +
    '<li>Final exam weight: 60%</li>' +
    '<li>Required final score: (75 \u2013 0.4 \u00d7 80) / 0.6 = (75 \u2013 32) / 0.6 = <strong>71.7%</strong></li>' +
    '</ul>' +
    '<p>You need just 72% on the final to secure an A. If your internal score were 70% instead of 80%, you\u2019d need 78.3% on the final \u2014 showing how strong internals lower the final exam pressure.</p>' +
    '<h2>Multi-Component Grading</h2>' +
    '<table><thead><tr><th>Component</th><th>Weight</th><th>Your Score</th><th>Weighted Score</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>Assignments</td><td>20%</td><td>85%</td><td>17.0</td></tr>' +
    '<tr><td>Mid-term</td><td>30%</td><td>72%</td><td>21.6</td></tr>' +
    '<tr><td>Final</td><td>50%</td><td>?</td><td>?</td></tr>' +
    '<tr><td><strong>Target</strong></td><td><strong>100%</strong></td><td></td><td><strong>75.0</strong></td></tr>' +
    '</tbody></table>' +
    '<p>Needed final score: (75 \u2013 17.0 \u2013 21.6) / 0.5 = <strong>72.8%</strong>. Use the <a href="/grade-calculator">grade calculator</a> to compute this for all your subjects instantly.</p>',
  cta: { text: 'Calculate your grade target', calc: 'grade', cat: 'education' }
};

// ── POST: Percentile Calculator ─────────────────────────────────────────────
BLOG_CONTENT['percentile-guide'] = {
  title: 'Percentile Calculator: Understand Your Exam Ranking',
  meta: { date: 'Apr 2026', readTime: '5 min', author: 'Calc Labz Team' },
  body:
    '<h2>Percentile \u2260 Percentage: The Critical Difference</h2>' +
    '<p>If you scored 95th percentile, it does NOT mean you got 95% marks. It means you scored higher than 95% of all candidates. In a competitive exam with 10 lakh candidates, 95th percentile means you ranked in the top 50,000. Your actual marks could be 60%, 80%, or any number \u2014 percentile tells you your relative standing, not your absolute score.</p>' +
    '<h2>How JEE/NEET Percentiles Work</h2>' +
    '<p><strong>Percentile = (Number of candidates scored less than you / Total candidates) \u00d7 100</strong></p>' +
    '<table><thead><tr><th>Percentile</th><th>JEE Main (10L candidates)</th><th>Approximate Rank</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>99.9</td><td>Better than 9,99,000</td><td>~1,000</td></tr>' +
    '<tr><td>99</td><td>Better than 9,90,000</td><td>~10,000</td></tr>' +
    '<tr><td>95</td><td>Better than 9,50,000</td><td>~50,000</td></tr>' +
    '<tr><td>90</td><td>Better than 9,00,000</td><td>~1,00,000</td></tr>' +
    '<tr><td>80</td><td>Better than 8,00,000</td><td>~2,00,000</td></tr>' +
    '</tbody></table>' +
    '<h2>Percentile to Rank Formula</h2>' +
    '<p><strong>Approximate Rank = Total Candidates \u00d7 (100 \u2013 Percentile) / 100</strong></p>' +
    '<p>For 99th percentile with 12 lakh JEE candidates: Rank \u2248 12,00,000 \u00d7 (100-99)/100 = <strong>12,000</strong>. Use the <a href="/percentile-calculator">percentile calculator</a> to convert between percentile, rank, and score.</p>',
  cta: { text: 'Calculate your percentile', calc: 'percentile', cat: 'education' }
};

// ── POST: Study Hours Calculator ────────────────────────────────────────────
BLOG_CONTENT['study-hours-guide'] = {
  title: 'Study Hours Calculator: How Much Time to Prepare for Exams',
  meta: { date: 'Apr 2026', readTime: '5 min', author: 'Calc Labz Team' },
  body:
    '<h2>It\u2019s Not About Total Hours \u2014 It\u2019s About Effective Hours</h2>' +
    '<p>Students who study "12 hours a day" but scroll their phone for 4 of those hours are really studying 8 hours. Effective study time is time spent actively engaging with material \u2014 solving problems, recalling information, or explaining concepts \u2014 not passively reading or highlighting.</p>' +
    '<h2>Recommended Study Hours by Exam</h2>' +
    '<table><thead><tr><th>Exam</th><th>Total Prep Needed</th><th>Daily Hours (6-month prep)</th><th>Daily Hours (3-month prep)</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>Board exams (CBSE/ICSE)</td><td>400\u2013600 hours</td><td>3\u20134 hours</td><td>5\u20137 hours</td></tr>' +
    '<tr><td>JEE Main</td><td>1,500\u20132,000 hours</td><td>4\u20135 hours (1-year)</td><td>8\u201310 hours</td></tr>' +
    '<tr><td>JEE Advanced</td><td>2,500\u20133,500 hours</td><td>6\u20138 hours (2-year)</td><td>Not recommended</td></tr>' +
    '<tr><td>NEET</td><td>2,000\u20132,500 hours</td><td>5\u20136 hours (1-year)</td><td>8\u201310 hours</td></tr>' +
    '<tr><td>CAT / MBA entrance</td><td>400\u2013800 hours</td><td>2\u20133 hours</td><td>4\u20136 hours</td></tr>' +
    '</tbody></table>' +
    '<h2>The Spacing Effect: Why 3 Hours/Day Beats 12 Hours/Weekend</h2>' +
    '<p>Research shows that spreading study over multiple shorter sessions with gaps (spaced repetition) produces 2\u20133x better retention than marathon sessions. Your brain consolidates memories during sleep and rest periods between sessions.</p>' +
    '<ul>' +
    '<li>Use the <a href="/blog/pomodoro-timer-technique-productivity">Pomodoro technique</a> (25 min focused + 5 min break) for each session</li>' +
    '<li>Review material at increasing intervals: 1 day, 3 days, 7 days, 14 days, 30 days</li>' +
    '<li>Active recall (self-testing) beats re-reading by a factor of 3 in retention studies</li>' +
    '</ul>',
  cta: { text: 'Plan your study schedule', calc: 'studyhours', cat: 'education' }
};

// ── POST: Pomodoro Technique ────────────────────────────────────────────────
BLOG_CONTENT['pomodoro-guide'] = {
  title: 'Pomodoro Technique: The 25-Minute Study Method That Works',
  meta: { date: 'Apr 2026', readTime: '4 min', author: 'Calc Labz Team' },
  body:
    '<h2>Why 25 Minutes Is the Sweet Spot</h2>' +
    '<p>The Pomodoro technique works because it aligns with your brain\u2019s natural attention span. Most people can sustain deep focus for 20\u201330 minutes before attention starts drifting. By committing to just 25 minutes, you lower the psychological barrier to starting (the hardest part) and build momentum.</p>' +
    '<h2>The Method</h2>' +
    '<ol>' +
    '<li>Choose one task to work on</li>' +
    '<li>Set a timer for <strong>25 minutes</strong></li>' +
    '<li>Work with full focus \u2014 no phone, no tabs, no interruptions</li>' +
    '<li>When the timer rings, take a <strong>5-minute break</strong> (stretch, walk, hydrate)</li>' +
    '<li>After 4 pomodoros, take a <strong>15\u201330 minute break</strong></li>' +
    '</ol>' +
    '<h2>Productivity Math</h2>' +
    '<table><thead><tr><th>Study Duration</th><th>Pomodoros</th><th>Effective Focus Time</th><th>Break Time</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>2 hours</td><td>4</td><td>100 minutes</td><td>20 minutes</td></tr>' +
    '<tr><td>4 hours</td><td>8</td><td>200 minutes</td><td>50 minutes</td></tr>' +
    '<tr><td>6 hours</td><td>12</td><td>300 minutes</td><td>75 minutes</td></tr>' +
    '</tbody></table>' +
    '<h2>When to Modify the Intervals</h2>' +
    '<ul>' +
    '<li><strong>Deep technical work (coding, math):</strong> Try 50/10 \u2014 longer focus, longer breaks</li>' +
    '<li><strong>Creative work:</strong> 25/5 is usually ideal \u2014 the breaks prevent tunnel vision</li>' +
    '<li><strong>Boring revision:</strong> Try 15/3 \u2014 smaller chunks feel less daunting</li>' +
    '<li><strong>Flow state:</strong> If you\u2019re in the zone when the timer rings, extend. The technique serves you, not the other way around.</li>' +
    '</ul>',
  cta: { text: 'Start your Pomodoro timer', calc: 'pomodoro', cat: 'education' }
};

// ── POST: Exam Score Calculator ─────────────────────────────────────────────
BLOG_CONTENT['exam-score-guide'] = {
  title: 'Exam Score Calculator: Marks to Percentage & Grade Conversion',
  meta: { date: 'Apr 2026', readTime: '4 min', author: 'Calc Labz Team' },
  body:
    '<h2>Quick Marks-to-Percentage Conversion</h2>' +
    '<p><strong>Percentage = (Marks Obtained / Total Marks) \u00d7 100</strong></p>' +
    '<h2>Grading Scales Used in India</h2>' +
    '<table><thead><tr><th>Percentage</th><th>CBSE Grade</th><th>University Grade</th><th>Grade Point (10-scale)</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>91\u2013100%</td><td>A1</td><td>O (Outstanding)</td><td>10</td></tr>' +
    '<tr><td>81\u201390%</td><td>A2</td><td>A+ (Excellent)</td><td>9</td></tr>' +
    '<tr><td>71\u201380%</td><td>B1</td><td>A (Very Good)</td><td>8</td></tr>' +
    '<tr><td>61\u201370%</td><td>B2</td><td>B+ (Good)</td><td>7</td></tr>' +
    '<tr><td>51\u201360%</td><td>C1</td><td>B (Above Average)</td><td>6</td></tr>' +
    '<tr><td>41\u201350%</td><td>C2</td><td>C (Average)</td><td>5</td></tr>' +
    '<tr><td>33\u201340%</td><td>D</td><td>P (Pass)</td><td>4</td></tr>' +
    '<tr><td>Below 33%</td><td>E (Needs Improvement)</td><td>F (Fail)</td><td>0</td></tr>' +
    '</tbody></table>' +
    '<h2>Multi-Subject Aggregate</h2>' +
    '<p>For aggregate percentage across subjects, add marks in all subjects and divide by total maximum marks (not average of individual percentages, unless all subjects carry equal marks). Use the <a href="/examscore-calculator">exam score calculator</a> for instant conversions, and the <a href="/blog/gpa-calculator-cgpa-conversion-formula">CGPA calculator</a> for grade point aggregation.</p>',
  cta: { text: 'Convert your scores', calc: 'examscore', cat: 'education' }
};

// ── POST: Education Loan vs Self-Fund ───────────────────────────────────────
BLOG_CONTENT['edu-loan-vs-self-guide'] = {
  title: 'Education Loan vs Self-Funding: Which Is Smarter?',
  meta: { date: 'Apr 2026', readTime: '5 min', author: 'Calc Labz Team' },
  body:
    '<h2>The Opportunity Cost Most Families Miss</h2>' +
    '<p>Parents often drain savings, break FDs, and sell gold to self-fund their child\u2019s education. While avoiding debt feels prudent, there\u2019s a hidden cost: the investment returns those savings would have generated. An education loan at 9% may cost less than liquidating equity investments earning 12\u201315%.</p>' +
    '<h2>Self-Funding vs Education Loan: A Comparison</h2>' +
    '<table><thead><tr><th></th><th>Self-Funding</th><th>Education Loan</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>Immediate cost</td><td>Depletes savings by the full amount</td><td>Zero upfront (moratorium during study)</td></tr>' +
    '<tr><td>Opportunity cost</td><td>Lost returns on \u20b910\u201330L over 15\u201320 years</td><td>Interest paid (deductible under 80E)</td></tr>' +
    '<tr><td>Tax benefit</td><td>None on education spending</td><td>Interest deductible under 80E (no limit)</td></tr>' +
    '<tr><td>Emotional</td><td>No debt burden on child</td><td>Child feels ownership; motivated to earn ROI</td></tr>' +
    '<tr><td>Risk</td><td>If career doesn\u2019t work out, parents\u2019 retirement is affected</td><td>If career doesn\u2019t work out, debt remains</td></tr>' +
    '</tbody></table>' +
    '<h2>When to Self-Fund</h2>' +
    '<ul>' +
    '<li>Education cost is under \u20b95\u20137 lakh AND you have adequate retirement savings</li>' +
    '<li>Your investments are in low-return instruments (savings account, idle FD) anyway</li>' +
    '<li>You have a <a href="/blog/emergency-fund-calculator-how-much-save">6-month emergency fund</a> remaining after paying</li>' +
    '</ul>' +
    '<h2>When a Loan Makes More Sense</h2>' +
    '<ul>' +
    '<li>Education cost is \u20b910L+ (MBA, study abroad)</li>' +
    '<li>Expected salary post-degree justifies the investment (ROI analysis)</li>' +
    '<li>Your existing investments are earning > loan interest rate</li>' +
    '<li>Section 80E tax benefit significantly reduces effective loan cost</li>' +
    '</ul>' +
    '<p>Model both scenarios using the <a href="/eduloan-calculator">education loan calculator</a> for the loan side, and the <a href="/sip-calculator">SIP calculator</a> to estimate what your savings would grow to if not withdrawn.</p>',
  cta: { text: 'Compare loan vs self-fund', calc: 'eduloan', cat: 'education' }
};

// ── POST: GPA Planner ───────────────────────────────────────────────────────
BLOG_CONTENT['gpa-planner-guide'] = {
  title: 'GPA Planner: Target GPA & Required Grades Calculator',
  meta: { date: 'Apr 2026', readTime: '4 min', author: 'Calc Labz Team' },
  body:
    '<h2>Reverse-Engineer Your Target CGPA</h2>' +
    '<p>If you need a 7.5 CGPA for your dream company\u2019s placement cutoff, how do you know what grades you need in remaining semesters? The GPA planner calculates exactly that.</p>' +
    '<h2>The Formula</h2>' +
    '<p><strong>Required GPA = (Target CGPA \u00d7 Total Credits \u2013 Earned Grade Points) / Remaining Credits</strong></p>' +
    '<h3>Worked Example</h3>' +
    '<table><thead><tr><th>Parameter</th><th>Value</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>Current CGPA</td><td>7.0</td></tr>' +
    '<tr><td>Credits completed</td><td>120</td></tr>' +
    '<tr><td>Target CGPA</td><td>7.5</td></tr>' +
    '<tr><td>Remaining credits</td><td>40</td></tr>' +
    '<tr><td>Grade points earned</td><td>840 (7.0 \u00d7 120)</td></tr>' +
    '<tr><td>Grade points needed</td><td>1200 (7.5 \u00d7 160)</td></tr>' +
    '<tr><td><strong>Required GPA in remaining</strong></td><td><strong>9.0 (360/40)</strong></td></tr>' +
    '</tbody></table>' +
    '<h2>CGPA Requirements by Goal</h2>' +
    '<table><thead><tr><th>Goal</th><th>Typical CGPA Required</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>top-tier placements (FAANG, consulting)</td><td>8.0+</td></tr>' +
    '<tr><td>MS abroad (top 50 universities)</td><td>8.5+ (3.5+ on 4.0 scale)</td></tr>' +
    '<tr><td>Average campus placements</td><td>6.5\u20137.0</td></tr>' +
    '<tr><td>MBA entrance (IIMs)</td><td>Minimum 6.0\u20136.5</td></tr>' +
    '</tbody></table>' +
    '<p>Plan your remaining semesters with the <a href="/gpaplanner-calculator">GPA planner</a>. Convert between scales using the <a href="/blog/gpa-calculator-cgpa-conversion-formula">CGPA conversion guide</a>.</p>',
  cta: { text: 'Plan your target GPA', calc: 'gpaplanner', cat: 'education' }
};

// ── POST: Cutoff Predictor ──────────────────────────────────────────────────
BLOG_CONTENT['cutoff-guide'] = {
  title: 'Cutoff Predictor: JEE, NEET & Engineering Exam Cutoffs',
  meta: { date: 'Apr 2026', readTime: '5 min', author: 'Calc Labz Team' },
  body:
    '<h2>How Cutoffs Are Determined</h2>' +
    '<p>Cutoffs depend on: number of applicants, difficulty level, total seats, and reservation quotas. They\u2019re not fixed \u2014 they change every year. Understanding trends helps you set realistic expectations.</p>' +
    '<h2>JEE Advanced 2025 Cutoff Trends</h2>' +
    '<table><thead><tr><th>Category</th><th>Minimum Marks (%)</th><th>Approx Rank Range</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>General</td><td>26\u201330%</td><td>1\u201310,000</td></tr>' +
    '<tr><td>OBC-NCL</td><td>23\u201327%</td><td>up to 15,000</td></tr>' +
    '<tr><td>SC</td><td>13\u201315%</td><td>up to 25,000</td></tr>' +
    '<tr><td>ST</td><td>13\u201315%</td><td>up to 10,000</td></tr>' +
    '</tbody></table>' +
    '<h2>NEET UG 2025 Cutoff Trends</h2>' +
    '<table><thead><tr><th>Category</th><th>Minimum Marks (out of 720)</th><th>Score Range</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>General</td><td>137\u2013145</td><td>Top 50 percentile</td></tr>' +
    '<tr><td>OBC/SC/ST</td><td>107\u2013115</td><td>Top 40 percentile</td></tr>' +
    '<tr><td>Top govt medical (General)</td><td>600+</td><td>Top 1%</td></tr>' +
    '</tbody></table>' +
    '<h2>Rank vs Marks: The Key Insight</h2>' +
    '<p>In JEE Main, the difference between rank 5,000 and 50,000 can be just 30\u201340 marks. This means every question matters. Focus on accuracy over attempts.</p>' +
    '<p>Estimate your cutoff chances with the <a href="/cutoffpredictor-calculator">cutoff predictor</a>. Track your preparation with the <a href="/blog/study-hours-calculator-exam-preparation">study hours planner</a>.</p>',
  cta: { text: 'Predict your cutoff', calc: 'cutoffpredictor', cat: 'education' }
};
