/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-education.js
   LAZY FILE: calc() functions for category "education"
   Loaded on-demand when user opens a education calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['cgpa'] && DB['cgpa'].calc===null) DB['cgpa'].calc=function(v){
            let pct;
            if(v.scale.includes("×9.5")) pct=v.cgpa*9.5;
            else if(v.scale.includes("×10")) pct=v.cgpa*10;
            else if(v.scale.includes("×9.25")) pct=v.cgpa*9.25;
            else pct=(v.cgpa/4)*100; // US scale approx
            const grade=pct>=90?"O (Outstanding)":pct>=75?"A+ (Excellent)":pct>=60?"A (Good)":pct>=50?"B (Average)":pct>=40?"C (Pass)":"F (Fail)";
            const relative=(v.cgpa/v.maxCgpa*100).toFixed(1);
            return {
                main:{label:"Percentage",value:pct.toFixed(2)+"%"},
                secondary:[
                    {label:"Grade",value:grade},
                    {label:"Percentile (relative to topper)",value:relative+"%"},
                    {label:"Division",value:pct>=60?"First Division":pct>=50?"Second Division":"Third Division"},
                    {label:"Your CGPA",value:v.cgpa+"/10"},
                    {label:"Scale Used",value:v.scale.split(" ")[0]}
                ]
            };
        };

  if(DB['examneeded'] && DB['examneeded'].calc===null) DB['examneeded'].calc=function(v){
            const totalMax = v.totalSoFar + v.finalMax;
            const neededTotal = totalMax * v.targetPct/100;
            const neededFinal = neededTotal - v.currentMarks;
            const currentPct = (v.currentMarks/v.totalSoFar*100);
            const feasible = neededFinal <= v.finalMax;
            return {
                main:{label:"Score Needed in Finals",value:feasible?Math.ceil(neededFinal)+"/"+v.finalMax:"Not Feasible ❌"},
                secondary:[
                    {label:"Current Percentage",value:currentPct.toFixed(2)+"%"},
                    {label:"Marks Needed",value:Math.ceil(neededFinal)+" out of "+v.finalMax},
                    {label:"Min % in Finals",value:((neededFinal/v.finalMax)*100).toFixed(1)+"%"},
                    {label:"Target Overall",value:v.targetPct+"%"},
                    {label:"Status",value:feasible?"✅ Achievable":"❌ Impossible — lower your target"}
                ]
            };
        };

  if(DB['eduloan'] && DB['eduloan'].calc===null) DB['eduloan'].calc=function(v){
            const r=v.eduRate/12/100;
            // Interest accrues during moratorium (simple interest)
            const accruedInterest = v.loanAmt*r*v.moratorium;
            const principalAtRepay = v.loanAmt + accruedInterest;
            const emi=principalAtRepay*r*Math.pow(1+r,v.repayTenure)/(Math.pow(1+r,v.repayTenure)-1);
            const totalPaid=emi*v.repayTenure;
            const totalInterest=totalPaid-v.loanAmt;
            return {
                main:{label:"Monthly EMI After Course",value:"₹"+Math.round(emi).toLocaleString()},
                secondary:[
                    {label:"Interest During Moratorium",value:"₹"+Math.round(accruedInterest).toLocaleString()},
                    {label:"Principal at Repayment Start",value:"₹"+Math.round(principalAtRepay).toLocaleString()},
                    {label:"Total Interest Paid",value:"₹"+Math.round(totalInterest).toLocaleString()},
                    {label:"Total Amount Paid",value:"₹"+Math.round(totalPaid).toLocaleString()},
                    {label:"Total Duration",value:(v.moratorium+v.repayTenure)+" months"}
                ]
            };
        };

  if(DB['studyhours'] && DB['studyhours'].calc===null) DB['studyhours'].calc=function(v){
            const totalHours = v.daysLeft * v.hoursPerDay;
            const effectiveHours = totalHours / (1+v.revisions*0.3);
            const perSubject = effectiveHours / v.subjects;
            const revisionHours = totalHours - effectiveHours;
            return {
                main:{label:"Hours per Subject",value:perSubject.toFixed(1)+" hrs"},
                secondary:[
                    {label:"Total Study Hours",value:totalHours.toFixed(0)+" hrs"},
                    {label:"Study Hours (new content)",value:effectiveHours.toFixed(0)+" hrs"},
                    {label:"Revision Hours",value:revisionHours.toFixed(0)+" hrs"},
                    {label:"Hours per Day",value:v.hoursPerDay+" hrs"},
                    {label:"Days Remaining",value:v.daysLeft+" days"},
                    {label:"Tip",value:v.hoursPerDay>8?"⚠️ Consider reducing to avoid burnout":"✅ Manageable schedule"}
                ]
            };
        };

  if(DB['scholarship'] && DB['scholarship'].calc===null) DB['scholarship'].calc=function(v){
            const r=v.loanRate_s/12/100,n=v.tenure_s;
            function emiCalc(P){return P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);}
            const loanWithout = v.totalFee;
            const loanWith = Math.max(0, v.totalFee - v.scholarAmt);
            const emiWithout=emiCalc(loanWithout), emiWith=emiCalc(loanWith);
            const totalWithout=emiWithout*n, totalWith=emiWith*n;
            const interestSaved=totalWithout-totalWith-(v.scholarAmt); // net saving beyond face value
            return {
                main:{label:"Monthly EMI Saved",value:"₹"+Math.round(emiWithout-emiWith).toLocaleString()},
                secondary:[
                    {label:"EMI Without Scholarship",value:"₹"+Math.round(emiWithout).toLocaleString()},
                    {label:"EMI With Scholarship",value:"₹"+Math.round(emiWith).toLocaleString()},
                    {label:"Total Interest Saved",value:"₹"+Math.round(totalWithout-totalWith).toLocaleString()},
                    {label:"Scholarship Value (face)",value:"₹"+v.scholarAmt.toLocaleString()},
                    {label:"True Scholarship Value",value:"₹"+Math.round(totalWithout-totalWith).toLocaleString()+" (incl. interest)"}
                ]
            };
        };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('education');
})();
