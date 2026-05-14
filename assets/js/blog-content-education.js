/* ═══════════════════════════════════════════════════
   Calc Labz — blog-content-education.js
   Education blog post content bodies.
   Loaded AFTER blog-posts.js (which defines BLOG_CONTENT).
   ═══════════════════════════════════════════════════ */
'use strict';

// ── POST: Attendance Calculator ─────────────────────────────────────────────
BLOG_CONTENT['attendance-guide'] = {
  title: 'Attendance Calculator: Track & Meet Your 75% Requirement',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<h2>Attendance Rules by University System</h2>' +
    '<table><thead><tr><th>University / Board</th><th>Minimum Required</th><th>Consequence of Shortage</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>AICTE (engineering)</td><td>75%</td><td>Detained; cannot sit for exams</td></tr>' +
    '<tr><td>Delhi University</td><td>67%</td><td>Not eligible for exam</td></tr>' +
    '<tr><td>Mumbai University</td><td>75%</td><td>Detained; must repeat semester</td></tr>' +
    '<tr><td>Anna University</td><td>75%</td><td>Not permitted to write exams</td></tr>' +
    '<tr><td>VTU (Karnataka)</td><td>85%</td><td>Condonation possible for 75\u201385%</td></tr>' +
    '<tr><td>CBSE/ICSE (schools)</td><td>75%</td><td>May not receive admit card</td></tr>' +
    '</tbody></table>' +
    '<h2>Recovery Strategies When You\u2019re Below 75%</h2>' +
    '<ol>' +
    '<li><strong>Calculate exact classes needed:</strong> Use the formula: Classes to attend = (0.75 \u00d7 Total \u2013 Attended) / 0.25</li>' +
    '<li><strong>Attend labs and practicals:</strong> These often count as 2\u20133 attendance entries per session</li>' +
    '<li><strong>Medical certificate:</strong> Most universities accept genuine medical certificates to condone up to 10\u201315% shortage</li>' +
    '<li><strong>Extra classes:</strong> Some colleges offer weekend or extra sessions that count toward attendance</li>' +
    '<li><strong>Talk to the HOD early:</strong> If you have genuine reasons, approaching the department head before the deadline is more effective than after</li>' +
    '</ol>' +
    '<h2>Attendance Condonation: How It Works</h2>' +
    '<p>Most universities allow condonation for students with 65\u201375% attendance if they have valid medical reasons or participation in university-approved events (NCC, NSS, sports). Typical process:</p>' +
    '<ul>' +
    '<li>Submit condonation application with supporting documents</li>' +
    '<li>Pay condonation fee (\u20b9500\u20132,000 depending on university)</li>' +
    '<li>Maximum condonation: usually 10\u201315% (so below 60\u201365% is rarely condonable)</li>' +
    '<li>Some universities allow condonation only once during the entire programme</li>' +
    '</ul>' +
    '<p>If you\u2019re already below 75%, the calculator tells you how many consecutive classes you must attend to recover. Use the <a href="/attendance-calculator">attendance calculator</a> to track your exact numbers.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Does attendance really affect grades?</div><div class="calc-faq-a">Directly \u2014 many universities deduct 5\u201310% of internal assessment marks for attendance below threshold. Some colleges include attendance as a separate component worth 5\u201315% of total marks. Indirectly, research shows students with 90%+ attendance score 15\u201320% higher on average than those with 75\u201380% attendance, simply because regular exposure to lectures improves retention.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I get a medical certificate to cover attendance shortage?</div><div class="calc-faq-a">Yes, but only for genuine medical conditions. You need a certificate from a registered medical practitioner (MBBS or above) on letterhead with registration number. The certificate must specify dates of illness. Most universities accept certificates for hospitalisation, surgery, dengue/typhoid, or chronic conditions. Fake medical certificates, if discovered, can lead to disciplinary action including suspension.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Do online classes count toward attendance?</div><div class="calc-faq-a">Post-COVID, many universities now count online/hybrid classes toward attendance. However, policies vary: some track login duration (you must be logged in for 80%+ of class time), while others require camera-on verification. Always confirm your college\u2019s specific online attendance policy with the exam cell.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How is attendance calculated for semester vs annual exams?</div><div class="calc-faq-a">In semester systems, attendance is calculated separately for each semester. A shortage in Semester 3 does not affect Semester 4. In annual systems, attendance is cumulative across the year. Most engineering colleges using the CBCS (Choice Based Credit System) calculate attendance per subject, meaning you could be detained in one subject but allowed in others.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What if I\u2019m working part-time and can\u2019t attend classes?</div><div class="calc-faq-a">Regular programmes have strict attendance requirements regardless of employment. Options include: switching to distance/correspondence mode (IGNOU, SOL), evening programmes offered by some universities, or online degree programmes (now UGC-approved from select institutions). If you must stay in regular mode, negotiate with your employer for morning/afternoon flexibility and prioritise attending labs and tutorials which carry higher attendance weightage.</div></div>',
  cta: { text: 'Check your attendance', calc: 'attendance', cat: 'education' }
};

// ── POST: GPA Calculator ────────────────────────────────────────────────────
BLOG_CONTENT['gpa-guide'] = {
  title: 'GPA Calculator: CGPA to Percentage & 4.0 Scale Conversion',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<h2>University-Specific CGPA Formulas</h2>' +
    '<table><thead><tr><th>University</th><th>CGPA to Percentage</th><th>Notes</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>CBSE (Class 10)</td><td>CGPA \u00d7 9.5</td><td>Only for CBSE 10th result</td></tr>' +
    '<tr><td>Mumbai University</td><td>(CGPA \u2013 0.75) \u00d7 10</td><td>For 10-point grading</td></tr>' +
    '<tr><td>Anna University</td><td>CGPA \u00d7 10</td><td>Direct conversion</td></tr>' +
    '<tr><td>VTU</td><td>CGPA \u00d7 10</td><td>10-point absolute grading</td></tr>' +
    '<tr><td>JNTU</td><td>(CGPA \u2013 0.75) \u00d7 10</td><td>Similar to Mumbai</td></tr>' +
    '</tbody></table>' +
    '<h2>WES Evaluation for Studying Abroad</h2>' +
    '<p>If you\u2019re applying to US or Canadian universities, many require WES (World Education Services) credential evaluation. WES converts Indian grades to the US 4.0 scale:</p>' +
    '<ul>' +
    '<li><strong>First Class with Distinction (75%+):</strong> Usually maps to 3.7\u20134.0</li>' +
    '<li><strong>First Class (60\u201374%):</strong> Maps to 3.0\u20133.7</li>' +
    '<li><strong>Second Class (50\u201359%):</strong> Maps to 2.0\u20133.0</li>' +
    '<li><strong>WES fee:</strong> ~\u20b915,000\u201320,000 (CAD $220 + courier)</li>' +
    '<li><strong>Processing time:</strong> 15\u201335 business days</li>' +
    '</ul>' +
    '<h2>How to Improve Your CGPA</h2>' +
    '<ol>' +
    '<li><strong>Prioritise high-credit courses:</strong> A 4-credit subject with grade A adds more than a 2-credit A+</li>' +
    '<li><strong>Target weak subjects:</strong> Moving from C to B has more CGPA impact than moving A to A+</li>' +
    '<li><strong>Use grade improvement:</strong> Many universities allow re-examination to improve grades in specific subjects</li>' +
    '<li><strong>MOOC credits:</strong> Some universities accept NPTEL/SWAYAM credits which can boost your CGPA</li>' +
    '</ol>' +
    '<p>Use the <a href="/cgpa-calculator">CGPA calculator</a> for precise conversions, or check the <a href="/blog/cgpa-to-percentage-converter-formula-2026">detailed CGPA to percentage guide</a> for university-specific formulas.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Is CGPA \u00d7 9.5 accurate for all universities?</div><div class="calc-faq-a">No. This formula is specifically designed for CBSE Class 10 results and is only an approximation. Different universities have their own official conversion formulas. Mumbai University uses (CGPA \u2013 0.75) \u00d7 10, while Anna University uses CGPA \u00d7 10. Always use your university\u2019s official formula on transcripts and applications. Using the wrong formula can lead to credential rejection by foreign universities.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How do I convert Indian percentage to US 4.0 GPA?</div><div class="calc-faq-a">There\u2019s no universal formula. A rough mapping: 90\u2013100% = 4.0, 80\u201389% = 3.7, 70\u201379% = 3.3, 60\u201369% = 3.0, 50\u201359% = 2.7. However, US universities understand the Indian grading system \u2014 a 75% in a top IIT is viewed differently from 75% in a tier-3 college. For official conversion, use WES or ECE evaluation services.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I improve my CGPA in final semester?</div><div class="calc-faq-a">Yes, but the impact depends on how many credits remain. If you\u2019ve completed 120 of 160 credits with a 7.0 CGPA, you need a 9.0 GPA in remaining 40 credits to reach 7.5 overall. The later you start trying to improve, the harder it becomes \u2014 each semester carries decreasing CGPA leverage. Use the <a href="/blog/gpa-planner-target-grades-calculator">GPA planner</a> to calculate exact targets.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Does CGPA matter after getting a job?</div><div class="calc-faq-a">For campus placements, CGPA is a hard filter (typically 6.0\u20137.0 minimum). After your first job, it matters progressively less. However, CGPA becomes important again if you apply for MS/MBA programmes, competitive exams with academic cutoffs, or government jobs with educational qualification criteria. Maintain a decent CGPA as a hedge for future options.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What\u2019s the difference between SGPA and CGPA?</div><div class="calc-faq-a">SGPA (Semester Grade Point Average) is your GPA for a single semester. CGPA (Cumulative Grade Point Average) is the weighted average across all semesters. CGPA is calculated as: \u03a3(SGPA \u00d7 Semester Credits) / \u03a3(Total Credits). A single bad semester can be recovered in subsequent semesters, but its impact on CGPA is permanent and proportional to its credit weight.</div></div>',
  cta: { text: 'Calculate your GPA', calc: 'gpa', cat: 'education' }
};

// ── POST: Grade Calculator ──────────────────────────────────────────────────
BLOG_CONTENT['grade-guide'] = {
  title: 'Grade Calculator: What Score Do You Need on Your Final Exam?',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<p>Needed final score: (75 \u2013 17.0 \u2013 21.6) / 0.5 = <strong>72.8%</strong>.</p>' +
    '<h2>Strategic Study Allocation</h2>' +
    '<p>Once you know the required final scores for each subject, allocate study time proportionally:</p>' +
    '<table><thead><tr><th>Subject</th><th>Required Final Score</th><th>Difficulty</th><th>Suggested Study Time</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>Mathematics</td><td>85%</td><td>High</td><td>35% of study time</td></tr>' +
    '<tr><td>Physics</td><td>72%</td><td>Medium</td><td>25%</td></tr>' +
    '<tr><td>English</td><td>60%</td><td>Low</td><td>10%</td></tr>' +
    '<tr><td>Chemistry</td><td>78%</td><td>Medium</td><td>30%</td></tr>' +
    '</tbody></table>' +
    '<h2>Pass Mark Strategies</h2>' +
    '<ul>' +
    '<li><strong>If you need less than 50% on the final:</strong> Focus on other subjects. A safe pass is guaranteed.</li>' +
    '<li><strong>If you need 50\u201370%:</strong> Comfortable range. Study the high-weightage topics and practise previous year papers.</li>' +
    '<li><strong>If you need above 80%:</strong> High risk. Consider whether this subject\u2019s grade is critical, or if effort is better spent elsewhere.</li>' +
    '<li><strong>If it\u2019s mathematically impossible:</strong> Some subjects may already be a lost cause. Redirect energy to salvageable grades.</li>' +
    '</ul>' +
    '<p>Use the <a href="/grade-calculator">grade calculator</a> to compute this for all your subjects instantly.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What if my required final score is over 100%?</div><div class="calc-faq-a">If the calculator shows you need more than 100% on the final to achieve your target grade, it means that target is mathematically impossible given your current scores. You have two options: lower your target grade, or check if your university offers supplementary/improvement exams. Some universities also allow bonus marks through extra assignments or attendance credit.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How do internal marks work in Indian universities?</div><div class="calc-faq-a">Most Indian universities use a 60:40 or 70:30 split between external (final exam) and internal assessment. Internal marks typically include: attendance (5\u201310%), assignments (10\u201315%), mid-semester exam (15\u201320%), and participation/viva (5%). Maximising internal marks is the easiest way to reduce final exam pressure \u2014 they\u2019re often more lenient and within your control.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Should I focus on all subjects equally?</div><div class="calc-faq-a">No. Use the reverse-grade calculation for every subject, then allocate time based on the gap between your current standing and target. A subject where you need 85% on the final deserves 3\u00d7 more study time than one where you need 50%. Also consider credit weight \u2014 a 4-credit subject affects your CGPA twice as much as a 2-credit subject.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Does grace marking apply to final grades?</div><div class="calc-faq-a">Many Indian universities have a grace/condonation policy where students who fail by a narrow margin (typically 1\u20135 marks in 1\u20132 subjects) receive pass marks. However, this varies by university and is not guaranteed. CBSE has moderation policies too, though they\u2019ve been revised post-2017. Never rely on grace marks \u2014 aim for a comfortable margin above the pass mark.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How do I calculate weighted average for percentage grades?</div><div class="calc-faq-a">Multiply each component\u2019s percentage score by its weight (as a decimal), then add them up. For example: Assignments (20%) scored 85% = 0.20 \u00d7 85 = 17.0. Midterm (30%) scored 72% = 0.30 \u00d7 72 = 21.6. Add all weighted scores = your current earned percentage. Subtract from target and divide by remaining weight to find the required final score.</div></div>',
  cta: { text: 'Calculate your grade target', calc: 'grade', cat: 'education' }
};

// ── POST: Percentile Calculator ─────────────────────────────────────────────
BLOG_CONTENT['percentile-guide'] = {
  title: 'Percentile Calculator: Understand Your Exam Ranking',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<p>For 99th percentile with 12 lakh JEE candidates: Rank \u2248 12,00,000 \u00d7 (100-99)/100 = <strong>12,000</strong>.</p>' +
    '<h2>NTA Normalisation: Why Shift Scores Matter</h2>' +
    '<p>Since JEE Main is conducted in multiple shifts, NTA normalises scores using percentile-based methodology. Your raw marks are converted to a percentile score using the distribution within your shift. This means a student scoring 150 marks in an easy shift may get a lower percentile than one scoring 140 in a difficult shift.</p>' +
    '<h2>What Percentile Gets You Which College?</h2>' +
    '<table><thead><tr><th>Percentile Range</th><th>College Tier</th><th>Examples</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>99.5+</td><td>Top IITs</td><td>IIT Bombay, Delhi, Madras (CS)</td></tr>' +
    '<tr><td>99\u201399.5</td><td>Mid IITs + top NITs</td><td>IIT Roorkee, NIT Trichy</td></tr>' +
    '<tr><td>95\u201399</td><td>NITs, IIITs</td><td>NIT Warangal, IIIT Hyderabad</td></tr>' +
    '<tr><td>90\u201395</td><td>Good state colleges</td><td>DTU, NSIT, top state engineering</td></tr>' +
    '<tr><td>80\u201390</td><td>Average engineering</td><td>State university colleges</td></tr>' +
    '</tbody></table>' +
    '<p>Use the <a href="/percentile-calculator">percentile calculator</a> to convert between percentile, rank, and score.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Why is my percentile different across JEE sessions?</div><div class="calc-faq-a">NTA normalises scores within each session independently. Your percentile in Session 1 may differ from Session 2 even with the same raw marks, because it depends on the performance distribution of your session. The final percentile is the best of all sessions you attempted.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can two students have the same percentile?</div><div class="calc-faq-a">Yes. Percentile is rounded to 7 decimal places in JEE/NEET. Multiple students can share the same percentile, which means tie-breaking rules apply. JEE uses subject-wise marks (Maths > Physics > Chemistry) and then age as tie-breakers.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What is a good NEET percentile for government medical college?</div><div class="calc-faq-a">For General category, you typically need 99+ percentile (650+ marks out of 720) for top government medical colleges like AIIMS Delhi. For any government medical seat, 85\u201390 percentile (500\u2013550 marks) is usually the minimum. OBC/SC/ST categories have lower cutoffs by 50\u2013100 marks approximately.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How are CAT percentiles different?</div><div class="calc-faq-a">CAT reports overall percentile and sectional percentiles (VARC, DILR, QA). Top IIMs require 99+ overall AND 90+ in each section. A candidate with 99 overall but 80 in DILR may not get IIM Ahmedabad calls. Sectional cutoffs are the hidden filter most aspirants miss.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Is 90 percentile good enough for engineering?</div><div class="calc-faq-a">90th percentile in JEE Main means a rank of approximately 1,00,000. This gets you admission to decent state engineering colleges and lower NITs. For top branches (CS, IT) at NITs, you\u2019ll need 97+ percentile. For IITs, 99+ is the minimum. Context matters: 90th percentile is top 10% of all applicants, which is objectively strong.</div></div>',
  cta: { text: 'Calculate your percentile', calc: 'percentile', cat: 'education' }
};

// ── POST: Study Hours Calculator ────────────────────────────────────────────
BLOG_CONTENT['study-hours-guide'] = {
  title: 'Study Hours Calculator: How Much Time to Prepare for Exams',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '</ul>' +
    '<h2>Evidence-Based Study Techniques</h2>' +
    '<table><thead><tr><th>Technique</th><th>Effectiveness</th><th>Best For</th></tr></thead>' +
    '<tbody>' +
    '<tr><td>Active recall (self-testing)</td><td>Highest</td><td>All subjects</td></tr>' +
    '<tr><td>Spaced repetition</td><td>Highest</td><td>Memorisation-heavy (Biology, History)</td></tr>' +
    '<tr><td>Practice problems</td><td>High</td><td>Maths, Physics, Chemistry</td></tr>' +
    '<tr><td>Teaching others</td><td>High</td><td>Concept understanding</td></tr>' +
    '<tr><td>Mind mapping</td><td>Medium</td><td>Connecting concepts</td></tr>' +
    '<tr><td>Re-reading notes</td><td>Low</td><td>Quick revision only</td></tr>' +
    '<tr><td>Highlighting</td><td>Very low</td><td>Creates false sense of learning</td></tr>' +
    '</tbody></table>' +
    '<h2>Sample Daily Schedule (JEE/NEET Aspirant)</h2>' +
    '<ul>' +
    '<li><strong>6:00\u20137:00 AM:</strong> Revision of previous day (active recall)</li>' +
    '<li><strong>7:00\u20138:00 AM:</strong> Morning routine, exercise, breakfast</li>' +
    '<li><strong>8:00\u201310:30 AM:</strong> Subject 1 (new concepts + problems)</li>' +
    '<li><strong>11:00\u20131:30 PM:</strong> Subject 2 (new concepts + problems)</li>' +
    '<li><strong>2:30\u20135:00 PM:</strong> Subject 3 (new concepts + problems)</li>' +
    '<li><strong>5:30\u20136:30 PM:</strong> Physical activity / break</li>' +
    '<li><strong>7:00\u20139:00 PM:</strong> Mock tests / previous year papers</li>' +
    '<li><strong>9:30\u201310:30 PM:</strong> Revision + next day planning</li>' +
    '</ul>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How many hours should a JEE aspirant study daily?</div><div class="calc-faq-a">For a 1-year preparation: 6\u20138 effective hours daily (not counting school/coaching). For 2-year preparation: 4\u20136 hours alongside school. Quality matters more than quantity \u2014 6 focused hours with active recall beat 10 hours of passive reading. Track your effective study time (actual problem-solving and concept work) separately from total time spent at your desk.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Is studying at night effective?</div><div class="calc-faq-a">Your brain consolidates memories during sleep, so studying before bed can improve retention for memorisation tasks. However, problem-solving and analytical work are better done when you\u2019re alert (usually morning). The worst strategy: late-night study followed by insufficient sleep. If you must study late, ensure you still get 7\u20138 hours of sleep \u2014 sleep-deprived students perform 20\u201340% worse.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I crack JEE/NEET with self-study only?</div><div class="calc-faq-a">Yes, but it requires exceptional discipline. Many toppers have cracked JEE/NEET through self-study using NCERT + standard reference books + free online resources (YouTube, NPTEL). The key advantages of coaching: structured schedule, competitive environment, and doubt-clearing. If you\u2019re self-disciplined, use the saved coaching fee (\u20b91\u20133 lakh) for online test series and selective doubt sessions.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How to study when you don\u2019t feel motivated?</div><div class="calc-faq-a">Motivation is unreliable; build discipline instead. Start with the 2-minute rule: commit to studying for just 2 minutes. Once started, you\u2019ll usually continue. Other strategies: study with an accountability partner, use app blockers during study hours, change your environment (library vs home), and break large tasks into small, specific actions (not \u201cstudy physics\u201d but \u201csolve 10 SHM problems\u201d).</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How important are mock tests?</div><div class="calc-faq-a">Critically important. Mock tests improve scores by 15\u201330% through: time management practice, exam-day simulation, identifying weak areas, and building stamina for 3-hour exams. Start taking full-length mocks 3\u20134 months before the exam. Analyse each mock in detail \u2014 the analysis is more valuable than the test itself. Aim for 1\u20132 mocks/week in the final 3 months.</div></div>',
  cta: { text: 'Plan your study schedule', calc: 'studyhours', cat: 'education' }
};

// ── POST: Pomodoro Technique ────────────────────────────────────────────────
BLOG_CONTENT['pomodoro-guide'] = {
  title: 'Pomodoro Technique: The 25-Minute Study Method That Works',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '</ul>' +
    '<h2>Distraction Management</h2>' +
    '<ul>' +
    '<li><strong>Phone:</strong> Put in another room or use Focus/DND mode. Apps like Forest penalise you for touching your phone.</li>' +
    '<li><strong>Browser:</strong> Use extensions like LeechBlock to block social media during pomodoros</li>' +
    '<li><strong>Environment:</strong> Study in a dedicated space. Your brain associates locations with activities.</li>' +
    '<li><strong>Music:</strong> Lo-fi beats or brown noise can help. Avoid music with lyrics — it competes for your language processing.</li>' +
    '</ul>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What if 25 minutes feels too short?</div><div class="calc-faq-a">Many experienced practitioners extend to 45–50 minute sessions with 10 minute breaks. The original 25/5 is best for beginners and boring tasks. For deep work like coding or writing, 50/10 is often more productive because it takes 5–10 minutes just to get into flow state. Experiment and find your optimal interval.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Should I use a physical timer or an app?</div><div class="calc-faq-a">A physical timer (kitchen timer, hourglass) is better because it doesn\u2019t tempt you to check your phone. The physical act of winding a timer also creates a psychological commitment. If using an app, choose one that blocks notifications during the session (Forest, Focus Keeper, Be Focused).</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What should I do during breaks?</div><div class="calc-faq-a">The 5-minute break should be truly restful: stretch, walk, look out the window (20-20-20 rule for eye health), drink water, or do breathing exercises. Do NOT check social media or start a conversation \u2014 these extend your break unpredictably and break your study momentum. The 15\u201330 minute long break can include a snack, light exercise, or a short walk.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I use Pomodoro for group study?</div><div class="calc-faq-a">Yes \u2014 it\u2019s actually more effective in groups. Everyone focuses silently during the 25 minutes, then discusses doubts during the 5-minute break. This prevents the common group study problem of socialising instead of studying. Use a shared timer visible to all members.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How many pomodoros can I realistically do per day?</div><div class="calc-faq-a">Most people can sustain 8\u201312 quality pomodoros per day (3.5\u20135 hours of deep focus). Elite performers might hit 14\u201316. Attempting more usually leads to diminishing returns \u2014 the quality of your focus drops sharply after 5\u20136 hours. Track your daily pomodoro count to find your sustainable maximum.</div></div>',
  cta: { text: 'Start your Pomodoro timer', calc: 'pomodoro', cat: 'education' }
};

// ── POST: Exam Score Calculator ─────────────────────────────────────────────
BLOG_CONTENT['exam-score-guide'] = {
  title: 'Exam Score Calculator: Marks to Percentage & Grade Conversion',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<p>For aggregate percentage across subjects, add marks in all subjects and divide by total maximum marks (not average of individual percentages, unless all subjects carry equal marks).</p>' +
    '<h2>Absolute vs Relative Grading</h2>' +
    '<ul>' +
    '<li><strong>Absolute grading:</strong> Fixed cutoffs (90% = A, 80% = B). Used by most Indian boards and older universities.</li>' +
    '<li><strong>Relative grading:</strong> Grades based on class performance (top 10% = A, next 20% = B). Used by IITs, IIMs, and some top colleges.</li>' +
    '<li><strong>Key difference:</strong> In absolute grading, a tough paper can result in mass failures. In relative grading, the topper always gets an A regardless of absolute marks.</li>' +
    '</ul>' +
    '<p>Use the <a href="/examscore-calculator">exam score calculator</a> for instant conversions, and the <a href="/blog/gpa-calculator-cgpa-conversion-formula">CGPA calculator</a> for grade point aggregation.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What is the pass mark in Indian universities?</div><div class="calc-faq-a">Most Indian universities require 33\u201340% as the minimum passing percentage for undergraduate exams. Some professional courses (engineering, medicine) require 45\u201350%. CBSE and ICSE boards have a 33% pass mark per subject. Note that some universities also have minimum marks per section (e.g., must pass both theory and practical separately).</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How do I calculate aggregate percentage for job applications?</div><div class="calc-faq-a">Add total marks obtained across ALL subjects/semesters and divide by total maximum marks possible. Do NOT average individual subject percentages \u2014 this gives incorrect results when subjects have different total marks. For CGPA-based transcripts, use your university\u2019s official CGPA-to-percentage formula.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Does the percentage shown on my marksheet include internal marks?</div><div class="calc-faq-a">It depends on the university. Some show only external exam marks, others combine internal + external. Check your marksheet carefully \u2014 it usually mentions \u201cInternal\u201d and \u201cExternal\u201d columns separately. For job/higher education applications, the overall percentage (including internals) on the final transcript is what\u2019s considered.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What is the difference between marks and grade point?</div><div class="calc-faq-a">Marks are raw scores (e.g., 72/100). Grade points are a standardised scale (e.g., 7.2 on a 10-point scale or 3.0 on a 4.0 scale). Grade points allow fair comparison across subjects with different total marks and difficulty levels. Most modern Indian universities have shifted from marks-based to grade-point-based systems.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I get a revaluation if I\u2019m unhappy with my score?</div><div class="calc-faq-a">Yes. Most universities allow revaluation/re-checking within 15\u201330 days of results. Revaluation fees range from \u20b9200\u20131,000 per subject. Success rates vary: 10\u201320% of revaluation requests result in mark changes, usually by 2\u201310 marks. It\u2019s worth applying if you\u2019re close to a grade boundary or pass mark.</div></div>',
  cta: { text: 'Convert your scores', calc: 'examscore', cat: 'education' }
};

// ── POST: Education Loan vs Self-Fund ───────────────────────────────────────
BLOG_CONTENT['edu-loan-vs-self-guide'] = {
  title: 'Education Loan vs Self-Funding: Which Is Smarter?',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<p>Model both scenarios using the <a href="/eduloan-calculator">education loan calculator</a> for the loan side, and the <a href="/sip-calculator">SIP calculator</a> to estimate what your savings would grow to if not withdrawn.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What is the interest rate on education loans in India?</div><div class="calc-faq-a">SBI education loans start at 8.15% for domestic studies and 9.15% for abroad. Private banks charge 9\u201312%. NBFCs like Credila charge 10\u201314%. Interest rates are usually linked to MCLR/repo rate. Collateral-based loans (above \u20b97.5 lakh) get lower rates. Always compare EMI amounts, not just interest rates, as tenure affects total cost significantly.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How does Section 80E tax benefit work?</div><div class="calc-faq-a">Under Section 80E, the interest paid on education loan (not the principal) is fully deductible from taxable income. There is no upper limit on the deduction. It is available for 8 years from the year you start repaying. At a 30% tax bracket, a \u20b92 lakh annual interest payment saves \u20b960,000 in tax. The effective interest rate drops from 9% to about 6.3%.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Should I take an education loan for studying abroad?</div><div class="calc-faq-a">For abroad studies costing \u20b920\u201360 lakh+, a loan often makes more sense. The expected salary increase (especially in the US/Europe) usually justifies the investment. Many students repay \u20b930\u201340 lakh loans within 3\u20135 years post-graduation with US salaries. However, critically evaluate: target salary, visa/job market conditions, and whether you can get scholarships/assistantships to reduce the loan amount.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What collateral is needed for large education loans?</div><div class="calc-faq-a">Loans up to \u20b94 lakh: no collateral needed. \u20b94\u20137.5 lakh: third-party guarantee required. Above \u20b97.5 lakh: collateral (property, FD, insurance policy) usually required. Collateral value should be 1.5\u20132\u00d7 the loan amount. Some banks accept agricultural land; others don\u2019t. NBFC lenders like Prodigy Finance offer collateral-free loans for top-ranked foreign universities.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I prepay my education loan early?</div><div class="calc-faq-a">Yes. Most education loans have zero prepayment penalties (unlike home/personal loans). Prepaying after the moratorium period saves significant interest. A \u20b920 lakh loan at 9% for 10 years costs \u20b911 lakh in total interest. Paying it off in 5 years saves \u20b95\u20136 lakh in interest. Start prepaying with your first salary if possible.</div></div>',
  cta: { text: 'Compare loan vs self-fund', calc: 'eduloan', cat: 'education' }
};

// ── POST: GPA Planner ───────────────────────────────────────────────────────
BLOG_CONTENT['gpa-planner-guide'] = {
  title: 'GPA Planner: Target GPA & Required Grades Calculator',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<p>Plan your remaining semesters with the <a href="/gpaplanner-calculator">GPA planner</a>. Convert between scales using the <a href="/blog/gpa-calculator-cgpa-conversion-formula">CGPA conversion guide</a>.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Is it possible to get a 9+ CGPA in final year if I have 7.0 now?</div><div class="calc-faq-a">It depends on remaining credits. If you\u2019ve completed 120 credits with 7.0 CGPA and have 40 credits left: you need (Target \u00d7 160 \u2013 840) / 40 in remaining semesters. For 9.0 target: (1440 \u2013 840)/40 = 15.0 \u2014 impossible (max is 10). For 8.0: (1280 \u2013 840)/40 = 11.0 \u2014 still impossible. For 7.5: (1200 \u2013 840)/40 = 9.0 \u2014 achievable but very challenging. Start early.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Do placement companies care about CGPA?</div><div class="calc-faq-a">Yes, most companies use CGPA as a hard filter. Common cutoffs: product companies (Google, Microsoft) = 7.0\u20138.0, consulting (McKinsey) = 8.0+, core engineering = 7.5+, IT services (TCS, Infosys) = 6.0\u20136.5, startups = often no CGPA filter. After clearing the cutoff, CGPA rarely matters \u2014 coding tests, interviews, and projects become the selection criteria.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Should I drop a course to protect my CGPA?</div><div class="calc-faq-a">If your university allows course withdrawal without academic penalty (W grade), it can be strategic for CGPA management. However, consider: delayed graduation, additional semester fees, and course availability next semester. Most academic advisors recommend pushing through unless you\u2019re certain of failing. A C grade is better than a missing course on your transcript.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How do electives affect CGPA strategy?</div><div class="calc-faq-a">Choose electives strategically: pick courses where you\u2019re likely to score well (either because they\u2019re easier or because they align with your strengths). Check professor rating and historical grade distributions before registering. A 4-credit easy elective where you score A has more CGPA impact than a 2-credit hard elective where you score B.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What\u2019s more important: CGPA or skills?</div><div class="calc-faq-a">Both, at different stages. CGPA opens doors (gets you past resume screening), skills close deals (gets you the offer). The ideal approach: maintain 7.5+ CGPA to clear most filters, then invest remaining time in skills (projects, internships, competitive programming). A 9.5 CGPA without skills is less employable than a 7.5 CGPA with strong projects and internship experience.</div></div>',
  cta: { text: 'Plan your target GPA', calc: 'gpaplanner', cat: 'education' }
};

// ── POST: Cutoff Predictor ──────────────────────────────────────────────────
BLOG_CONTENT['cutoff-guide'] = {
  title: 'Cutoff Predictor: JEE, NEET & Engineering Exam Cutoffs',
  meta: { date: 'Apr 2026', readTime: '10 min', author: 'Calc Labz Team' },
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
    '<p>Estimate your cutoff chances with the <a href="/cutoffpredictor-calculator">cutoff predictor</a>. Track your preparation with the <a href="/blog/study-hours-calculator-exam-preparation">study hours planner</a>.</p>' +
    '<h2>Frequently Asked Questions</h2>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Do cutoffs increase every year?</div><div class="calc-faq-a">Not necessarily. Cutoffs depend on paper difficulty, number of applicants, and number of seats. A tougher paper with fewer high-scorers leads to lower cutoffs. For example, JEE Advanced cutoffs dropped from 35% to 25% in years with difficult papers. Track 3\u20135 year trends rather than comparing with just the previous year.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">How do reservation quotas affect cutoffs?</div><div class="calc-faq-a">India\u2019s reservation policy reserves seats for OBC (27%), SC (15%), ST (7.5%), EWS (10%), and PwD (5%) categories. Each category has a separate, lower cutoff. General category cutoffs are highest. For example, IIT Bombay CS might close at rank 100 (General) but rank 2,000 (OBC). Reservation only affects the cutoff rank, not the quality of education received.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Can I predict my NEET cutoff for a specific college?</div><div class="calc-faq-a">Roughly, yes. College-specific cutoffs from previous years\u2019 counselling rounds are published on state counselling websites. Use your expected rank (from percentile) and compare with last year\u2019s closing ranks. Account for a 5\u201310% variation. For accuracy, check 3 years\u2019 data and consider the trend direction.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">What is spot round and how does it affect cutoffs?</div><div class="calc-faq-a">Spot rounds are additional counselling rounds for vacant seats after regular rounds. Cutoffs in spot rounds can be significantly lower \u2014 sometimes 10\u201320 marks below regular rounds. Students who didn\u2019t get their preferred college in regular rounds should always participate in spot rounds. Some top colleges release 5\u201310% of seats in spot rounds due to student no-shows.</div></div>' +
    '<div class="calc-faq-item"><div class="calc-faq-q">Should I choose a better college or a better branch?</div><div class="calc-faq-a">Generally: for engineering, branch matters more at top colleges and college brand matters more at mid-tier. CS at a top NIT is better than Mechanical at a lower IIT for most career outcomes. Exception: if you\u2019re passionate about a specific field, choose that branch. For MBA admissions later, the college brand (IIT tag) carries significant weight regardless of branch.</div></div>',
  cta: { text: 'Predict your cutoff', calc: 'cutoffpredictor', cat: 'education' }
};
