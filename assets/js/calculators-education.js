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

  // ══════════════════════════════════════════════════════
  // NEW EDUCATION CALCULATORS
  // ══════════════════════════════════════════════════════

  if(DB['pomodoro'] && DB['pomodoro'].calc===null) DB['pomodoro'].calc=function(v){
    var totalMins=v.studyHours*60;
    var cycleLen=v.focusLen+v.shortBreak;
    var longCycleLen=v.focusLen*4+v.shortBreak*3+v.longBreak;
    var longCycles=Math.floor(totalMins/longCycleLen);
    var remainMins=totalMins%longCycleLen;
    var extraPomos=Math.floor(remainMins/cycleLen);
    var totalPomodoros=longCycles*4+extraPomos;
    var totalFocus=totalPomodoros*v.focusLen;
    var totalBreak=totalMins-totalFocus;
    return {
      main:{label:"Total Pomodoros",value:totalPomodoros+" sessions"},
      secondary:[
        {label:"Focused Study Time",value:totalFocus+" min ("+Math.round(totalFocus/60*10)/10+" hrs)"},
        {label:"Total Break Time",value:totalBreak+" min"},
        {label:"Focus Ratio",value:Math.round(totalFocus/totalMins*100)+"%"},
        {label:"Long Breaks",value:longCycles},
        {label:"Optimal Schedule",value:v.focusLen+"m focus / "+v.shortBreak+"m break × 4, then "+v.longBreak+"m long break"},
        {label:"Tip",value:totalPomodoros>12?"🎯 Break into 2 sessions for best focus":"✅ Manageable in one session"}
      ]
    };
  };

  if(DB['gpaconverter'] && DB['gpaconverter'].calc===null) DB['gpaconverter'].calc=function(v){
    var fromScale=v.fromScale_gpa,val=v.gpaValue;
    var usgpa=0,pct=0,ind=0;
    if(fromScale==="US 4.0"){usgpa=val;pct=val*25;ind=val*2.5;}
    else if(fromScale==="India 10.0"){usgpa=val*0.4;pct=val*9.5;ind=val;}
    else if(fromScale==="UK %"){usgpa=val>70?4.0:val>60?3.5:val>50?3.0:val>40?2.5:2.0;pct=val;ind=val/9.5;}
    else if(fromScale==="Germany 1-5"){usgpa=(5-val);pct=(5-val)*25;ind=(5-val)*2.5;}
    else{usgpa=val/25;pct=val;ind=val/9.5;}
    return {
      main:{label:"US GPA (4.0 scale)",value:Math.min(4,usgpa).toFixed(2)},
      secondary:[
        {label:"India CGPA (10.0)",value:Math.min(10,ind).toFixed(2)},
        {label:"Percentage (approx.)",value:Math.min(100,pct).toFixed(1)+"%"},
        {label:"UK Class",value:pct>=70?"First":pct>=60?"Upper Second (2:1)":pct>=50?"Lower Second (2:2)":pct>=40?"Third":"Fail"},
        {label:"Germany Grade",value:(5-usgpa).toFixed(1)+" (1 = best)"},
        {label:"Source Scale",value:fromScale}
      ]
    };
  };

  if(DB['readingtime'] && DB['readingtime'].calc===null) DB['readingtime'].calc=function(v){
    var wpm={"Slow Reader (150 wpm)":150,"Average (200 wpm)":200,"Fast Reader (300 wpm)":300,"Speed Reader (450 wpm)":450};
    var speed=wpm[v.readingSpeed]||200;
    var pages=v.totalPages-v.pagesRead;
    var wordsLeft=pages*v.wordsPerPage;
    var totalMin=wordsLeft/speed;
    var hrs=Math.floor(totalMin/60);
    var mins=Math.round(totalMin%60);
    var dailyPages=v.pagesPerDay>0?v.pagesPerDay:20;
    var daysToFinish=Math.ceil(pages/dailyPages);
    return {
      main:{label:"Reading Time Left",value:(hrs>0?hrs+"h ":"")+mins+" min"},
      secondary:[
        {label:"Pages Remaining",value:pages+" pages"},
        {label:"Words Remaining",value:wordsLeft.toLocaleString()+" words"},
        {label:"At "+dailyPages+" pages/day",value:daysToFinish+" days to finish"},
        {label:"Finish Date",value:new Date(Date.now()+daysToFinish*86400000).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})},
        {label:"Reading Speed",value:speed+" wpm"},
        {label:"Progress",value:Math.round(v.pagesRead/v.totalPages*100)+"%"}
      ]
    };
  };

  if(DB['typingtest'] && DB['typingtest'].calc===null) DB['typingtest'].calc=function(v){
    var netWPM=Math.max(0,(v.grossWPM-(v.errors/v.testDuration)));
    var accuracy=v.grossWPM>0?(1-v.errors/(v.grossWPM*v.testDuration))*100:0;
    accuracy=Math.max(0,Math.min(100,accuracy));
    var level=netWPM<30?"Beginner":netWPM<50?"Intermediate":netWPM<70?"Proficient":netWPM<100?"Advanced":"Expert";
    var jobReady=netWPM>=40&&accuracy>=95;
    return {
      main:{label:"Net WPM",value:Math.round(netWPM)+" WPM"},
      secondary:[
        {label:"Gross WPM",value:v.grossWPM+" WPM"},
        {label:"Accuracy",value:accuracy.toFixed(1)+"%"},
        {label:"Skill Level",value:level},
        {label:"Errors",value:v.errors+" in "+v.testDuration+" min"},
        {label:"Job Ready (40 WPM, 95%)?",value:jobReady?"✅ Yes":"❌ Keep practicing"},
        {label:"Keystrokes per Min (est.)",value:Math.round(netWPM*5)+" KPM"}
      ]
    };
  };

  if(DB['spellingbee'] && DB['spellingbee'].calc===null) DB['spellingbee'].calc=function(v){
    var correct=v.correct_sb;
    var total=v.totalWords_sb;
    var accuracy=total>0?(correct/total*100):0;
    var timePerWord=total>0?v.totalTime_sb/total:0;
    var grade=accuracy>=95?"A+":accuracy>=85?"A":accuracy>=75?"B":accuracy>=60?"C":"D";
    var level=accuracy>=95?"Expert":accuracy>=85?"Advanced":accuracy>=70?"Intermediate":"Beginner";
    return {
      main:{label:"Spelling Score",value:correct+"/"+total+" ("+accuracy.toFixed(0)+"%)"},
      secondary:[
        {label:"Grade",value:grade},
        {label:"Level",value:level},
        {label:"Avg Time per Word",value:timePerWord.toFixed(1)+" seconds"},
        {label:"Words Incorrect",value:(total-correct)},
        {label:"Speed Rating",value:timePerWord<3?"⚡ Fast":timePerWord<6?"🏃 Normal":"🐢 Take your time"},
        {label:"Tip",value:accuracy<80?"Focus on commonly misspelled words":"Great accuracy! Try harder words"}
      ]
    };
  };

  if(DB['attendance'] && DB['attendance'].calc===null) DB['attendance'].calc=function(v){
    var currentPct=(v.attended/v.totalClasses)*100;
    var totalFuture=v.totalClasses+v.remainingClasses;
    var neededForTarget=Math.ceil(totalFuture*v.targetPct_att/100)-v.attended;
    var canSkip=v.remainingClasses-Math.max(0,neededForTarget);
    var ifAttendAll=((v.attended+v.remainingClasses)/totalFuture)*100;
    var ifSkipAll=(v.attended/totalFuture)*100;
    return {
      main:{label:"Current Attendance",value:currentPct.toFixed(1)+"%"},
      secondary:[
        {label:"Classes Attended",value:v.attended+" / "+v.totalClasses},
        {label:"Must Attend (for "+v.targetPct_att+"%)",value:Math.max(0,neededForTarget)+" of remaining "+v.remainingClasses},
        {label:"Can Skip",value:canSkip>0?canSkip+" classes":"❌ Cannot skip any!"},
        {label:"If You Attend All",value:ifAttendAll.toFixed(1)+"%"},
        {label:"If You Skip All",value:ifSkipAll.toFixed(1)+"%"},
        {label:"Status",value:currentPct>=v.targetPct_att?"✅ On track":"⚠ Below target"}
      ]
    };
  };

  if(DB['gpaplanner'] && DB['gpaplanner'].calc===null) DB['gpaplanner'].calc=function(v){
    var totalCredits=v.completedCredits+v.semCredits;
    var neededSGPA=(v.targetCGPA*totalCredits-v.currentCGPA*v.completedCredits)/v.semCredits;
    var is10=v.scale_gpa.includes("10");
    var maxGPA=is10?10:4;
    var feasible=neededSGPA<=maxGPA;
    var bestCase=((v.currentCGPA*v.completedCredits+maxGPA*v.semCredits)/totalCredits);
    var worstCase=((v.currentCGPA*v.completedCredits+0)/totalCredits);
    return {
      main:{label:"Required SGPA This Semester",value:feasible?neededSGPA.toFixed(2):"❌ Not achievable"},
      secondary:[
        {label:"Current CGPA",value:v.currentCGPA+" / "+maxGPA},
        {label:"Target CGPA",value:v.targetCGPA+" / "+maxGPA},
        {label:"Credits: Completed",value:v.completedCredits},
        {label:"Credits: This Semester",value:v.semCredits},
        {label:"Best Possible CGPA",value:bestCase.toFixed(2)},
        {label:"Worst Case (all fail)",value:worstCase.toFixed(2)},
        {label:"Status",value:feasible?"✅ Achievable — aim for "+neededSGPA.toFixed(2):"❌ Lower your target"}
      ]
    };
  };

  if(DB['percentile'] && DB['percentile'].calc===null) DB['percentile'].calc=function(v){
    var rank=v.yourRank>0?v.yourRank:Math.round(v.totalCandidates*(1-v.yourScore/v.maxScore_pctl));
    var percentile=((v.totalCandidates-rank)/v.totalCandidates)*100;
    var topPct=(rank/v.totalCandidates)*100;
    var scorePct=(v.yourScore/v.maxScore_pctl)*100;
    return {
      main:{label:"Percentile",value:percentile.toFixed(2)},
      secondary:[
        {label:"Your Rank (est.)",value:rank.toLocaleString()+" / "+v.totalCandidates.toLocaleString()},
        {label:"Top %",value:topPct.toFixed(2)+"%"},
        {label:"Score %",value:scorePct.toFixed(1)+"%"},
        {label:"Candidates Below You",value:(v.totalCandidates-rank).toLocaleString()},
        {label:"Better Than",value:percentile.toFixed(1)+"% of candidates"},
        {label:"Note",value:"Percentile ≠ Percentage. 99 percentile = top 1%."}
      ]
    };
  };

  if(DB['cutoffpredictor'] && DB['cutoffpredictor'].calc===null) DB['cutoffpredictor'].calc=function(v){
    var diffAdj={"Easier":1.10,"Same Level":1.0,"Harder":0.90,"Much Harder":0.80};
    var adj=diffAdj[v.difficulty]||1.0;
    var seatRatio=v.totalSeats/v.totalApplicants;
    var predictedCutoff=Math.round(v.lastYearCutoff*adj);
    var margin=v.yourScore_cp-predictedCutoff;
    var pctAbove=(v.yourScore_cp/v.maxScore_cp)*100;
    var safetyMargin=Math.round(predictedCutoff*1.05);
    return {
      main:{label:"Predicted Cutoff",value:predictedCutoff+" / "+v.maxScore_cp},
      secondary:[
        {label:"Your Score",value:v.yourScore_cp+" / "+v.maxScore_cp+" ("+pctAbove.toFixed(1)+"%)"},
        {label:"Margin Over Cutoff",value:margin>0?"+"+margin+" (Safe ✅)":margin+" (At risk ⚠)"},
        {label:"Safe Score (5% margin)",value:safetyMargin},
        {label:"Competition Ratio",value:"1 : "+Math.round(1/seatRatio)},
        {label:"Paper Difficulty",value:v.difficulty},
        {label:"Last Year Cutoff",value:v.lastYearCutoff},
        {label:"Disclaimer",value:"This is an estimate based on trends"}
      ]
    };
  };

  if(DB['revisionplanner'] && DB['revisionplanner'].calc===null) DB['revisionplanner'].calc=function(v){
    var totalHours=v.daysAvailable*v.hoursPerDay_rp;
    var isHardMix=v.difficultyMix.includes("Hard");
    var hardSubjects=v.difficultyMix.includes("2 Hard")?2:v.difficultyMix.includes("3 Hard")?3:0;
    var normalSubjects=v.subjects_rp-hardSubjects;
    var hardWeight=2,normalWeight=1;
    var totalWeight=hardSubjects*hardWeight+normalSubjects*normalWeight;
    var hoursPerRound=totalHours/v.revisionRounds;
    var hrPerNormal=hoursPerRound*normalWeight/totalWeight;
    var hrPerHard=hoursPerRound*hardWeight/totalWeight;
    var daysPerSubject=v.daysAvailable/v.subjects_rp/v.revisionRounds;
    return {
      main:{label:"Hours per Subject per Round",value:Math.round(hrPerNormal)+" hrs (normal) / "+Math.round(hrPerHard)+" hrs (hard)"},
      secondary:[
        {label:"Total Study Hours",value:totalHours+" hours"},
        {label:"Revision Rounds",value:v.revisionRounds},
        {label:"Days per Subject per Round",value:daysPerSubject.toFixed(1)+" days"},
        {label:"Hours per Round",value:Math.round(hoursPerRound)+" hrs"},
        {label:"Hard Subjects (2× time)",value:hardSubjects},
        {label:"Normal Subjects",value:normalSubjects},
        {label:"Schedule",value:daysPerSubject>=1.5?"✅ Comfortable schedule":"⚠ Tight — reduce revision rounds or increase hours"}
      ]
    };
  };

  // ══════════════════════════════════════════════════════
  // NEW EDUCATION CALCULATORS — April 2026 Batch
  // ══════════════════════════════════════════════════════

  if(DB['cgpaToPercentage'] && DB['cgpaToPercentage'].calc===null) DB['cgpaToPercentage'].calc=function(v){
    var cgpa=v.ctp_cgpa, scale=v.ctp_scale||"CBSE (×9.5)";
    var pct=0, formula="";
    if(scale.includes("CBSE")){pct=cgpa*9.5;formula="CGPA × 9.5";}
    else if(scale.includes("VTU")){pct=cgpa*10-7.5;formula="CGPA × 10 − 7.5";}
    else if(scale.includes("Mumbai")){pct=(cgpa-0.5)*10;formula="(CGPA − 0.5) × 10";}
    else if(scale.includes("Anna")){pct=(cgpa-0.5)*10;formula="(CGPA − 0.5) × 10";}
    else if(scale.includes("JNTU")){pct=cgpa*10;formula="CGPA × 10";}
    else if(scale.includes("Generic")){pct=cgpa*10;formula="CGPA × 10";}
    else if(scale.includes("US")){
      // US 4-point scale
      pct=cgpa*25;formula="GPA × 25";
    }
    pct=Math.min(100,Math.max(0,pct));
    var grade=pct>=90?"O (Outstanding)":pct>=80?"A+ (Excellent)":pct>=70?"A (Very Good)":pct>=60?"B+ (Good)":pct>=50?"B (Average)":pct>=40?"C (Below Average)":"F (Fail)";
    var division=pct>=60?"First Division":pct>=50?"Second Division":pct>=33?"Third Division":"Fail";
    // US GPA equivalent
    var usGpa=scale.includes("US")?cgpa:Math.min(4.0,pct/25);
    var letterGrade=usGpa>=3.7?"A":usGpa>=3.3?"A-":usGpa>=3.0?"B+":usGpa>=2.7?"B":usGpa>=2.3?"B-":usGpa>=2.0?"C+":usGpa>=1.7?"C":"Below C";
    return {
      main:{label:"Percentage",value:pct.toFixed(2)+"%"},
      secondary:[
        {label:"Grade",value:grade},
        {label:"Division",value:division},
        {label:"Formula Used",value:formula},
        {label:"US GPA Equivalent",value:usGpa.toFixed(2)+" / 4.0"},
        {label:"US Letter Grade",value:letterGrade},
        {label:"CGPA Entered",value:cgpa},
        {label:"Scale",value:scale.split("(")[0].trim()},
        {label:"Note",value:"Verify with your university's official formula"}
      ]
    };
  };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('education');
})();
