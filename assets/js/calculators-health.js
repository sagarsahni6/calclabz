/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-health.js
   LAZY FILE: calc() functions for category "health"
   Loaded on-demand when user opens a health calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['bmi'] && DB['bmi'].calc===null) DB['bmi'].calc=function(v){
            const h=v.height/100, bmi=v.weight/(h*h);
            const cat=bmi<18.5?"Underweight":bmi<25?"Normal ✓":bmi<30?"Overweight":"Obese";
            const ideal=22*h*h;
            return {
                main:{label:"Your BMI",value:bmi.toFixed(1)},
                secondary:[
                    {label:"Category",value:cat},
                    {label:"Ideal Weight",value:ideal.toFixed(1)+" kg"},
                    {label:"Healthy Range",value:"18.5 – 24.9"},
                    {label:"Weight to Ideal",value:(v.weight-ideal>0?"+":"")+( v.weight-ideal).toFixed(1)+" kg"}
                ]
            };
        };

  if(DB['bmr'] && DB['bmr'].calc===null) DB['bmr'].calc=function(v){
            const bmr=v.gender==="Male"?10*v.weight+6.25*v.height-5*v.age+5:10*v.weight+6.25*v.height-5*v.age-161;
            return {
                main:{label:"BMR",value:Math.round(bmr)+" kcal/day"},
                secondary:[
                    {label:"Sedentary (×1.2)",value:Math.round(bmr*1.2)+" kcal"},
                    {label:"Light Activity (×1.375)",value:Math.round(bmr*1.375)+" kcal"},
                    {label:"Moderate (×1.55)",value:Math.round(bmr*1.55)+" kcal"},
                    {label:"Very Active (×1.725)",value:Math.round(bmr*1.725)+" kcal"}
                ]
            };
        };

  if(DB['tdee'] && DB['tdee'].calc===null) DB['tdee'].calc=function(v){
            let bmr=v.gender==="Male"?88.362+13.397*v.weight+4.799*v.height-5.677*v.age:447.593+9.247*v.weight+3.098*v.height-4.330*v.age;
            const mult=[1.2,1.375,1.55,1.725,1.9];
            const idx=["Sedentary","Light","Moderate","Active","Very Active"].indexOf(v.activity);
            const tdee=Math.round(bmr*mult[idx]);
            return {
                main:{label:"TDEE",value:tdee+" kcal/day"},
                secondary:[
                    {label:"Weight Loss (−500 kcal)",value:(tdee-500)+" kcal"},
                    {label:"Maintenance",value:tdee+" kcal"},
                    {label:"Weight Gain (+500 kcal)",value:(tdee+500)+" kcal"},
                    {label:"BMR",value:Math.round(bmr)+" kcal"}
                ]
            };
        };

  if(DB['water'] && DB['water'].calc===null) DB['water'].calc=function(v){
            const mult={Sedentary:30,Moderate:35,Active:40,"Very Active":45};
            const ml=Math.round(v.weight*mult[v.activity]);
            return {
                main:{label:"Daily Water",value:ml+" ml"},
                secondary:[
                    {label:"In Litres",value:(ml/1000).toFixed(1)+" L"},
                    {label:"Glasses (250ml)",value:Math.ceil(ml/250)+" glasses"},
                    {label:"Bottles (1L)",value:Math.ceil(ml/1000)+" bottles"}
                ]
            };
        };

  if(DB['heartrate'] && DB['heartrate'].calc===null) DB['heartrate'].calc=function(v){
            const max=220-v.age, res=max-v.resting;
            const z=(lo,hi)=>`${Math.round(v.resting+res*lo)}–${Math.round(v.resting+res*hi)} bpm`;
            return {
                main:{label:"Max Heart Rate",value:max+" bpm"},
                secondary:[
                    {label:"Zone 1 — Recovery (50–60%)",value:z(0.5,0.6)},
                    {label:"Zone 2 — Fat Burn (60–70%)",value:z(0.6,0.7)},
                    {label:"Zone 3 — Aerobic (70–80%)",value:z(0.7,0.8)},
                    {label:"Zone 4 — Threshold (80–90%)",value:z(0.8,0.9)},
                    {label:"Zone 5 — VO₂ Max (90–100%)",value:z(0.9,1.0)}
                ]
            };
        };

  if(DB['age'] && DB['age'].calc===null) DB['age'].calc=function(v){
            if(!v.dob) return {main:{label:"Error",value:"Select a date"}};
            const dob=new Date(v.dob), today=new Date();
            let y=today.getFullYear()-dob.getFullYear(), m=today.getMonth()-dob.getMonth(), d=today.getDate()-dob.getDate();
            if(d<0){m--;d+=new Date(today.getFullYear(),today.getMonth(),0).getDate();}
            if(m<0){y--;m+=12;}
            const days=Math.floor((today-dob)/86400000);
            const next=new Date(today.getFullYear(),dob.getMonth(),dob.getDate());
            if(next<today) next.setFullYear(today.getFullYear()+1);
            const daysToB=Math.ceil((next-today)/86400000);
            return {
                main:{label:"Your Age",value:`${y}y ${m}m ${d}d`},
                secondary:[
                    {label:"Total Days",value:days.toLocaleString()},
                    {label:"Total Weeks",value:Math.floor(days/7).toLocaleString()},
                    {label:"Total Months",value:(y*12+m)},
                    {label:"Birthday in",value:daysToB + " days"}
                ]
            };
        };

  if(DB['calories'] && DB['calories'].calc===null) DB['calories'].calc=function(v){
            const mets={Walking:3.5,Jogging:7,Running:10,Cycling:8,Swimming:7,HIIT:12,Yoga:3,"Weight Training":5};
            const met=mets[v.activity]||5;
            const burned=Math.round((met*3.5*v.weight/200)*v.duration);
            return {
                main:{label:"Calories Burned",value:burned+" kcal"},
                secondary:[
                    {label:"Per Minute",value:(burned/v.duration).toFixed(1)+" kcal/min"},
                    {label:"Fat Burned",value:(burned/7700*1000).toFixed(1)+" g"},
                    {label:"MET Value",value:met}
                ]
            };
        };

  if(DB['sleep'] && DB['sleep'].calc===null) DB['sleep'].calc=function(v){
            if(!v.wake) return {main:{label:"Error",value:"Enter wake time"}};
            const [h,m]=v.wake.split(':').map(Number);
            const wm=h*60+m;
            const cycles=[6,5,4];
            const times=cycles.map(n=>{let sm=wm-n*90-14;if(sm<0)sm+=1440;return `${String(Math.floor(sm/60)%24).padStart(2,'0')}:${String(sm%60).padStart(2,'0')}`;});
            return {
                main:{label:"Best Bedtime (6 cycles / 9h)",value:times[0]},
                secondary:[
                    {label:"7.5h (5 cycles)",value:times[1]},
                    {label:"6h (4 cycles)",value:times[2]},
                    {label:"Fall-asleep buffer",value:"~14 minutes"}
                ]
            };
        };

  if(DB['macros'] && DB['macros'].calc===null) DB['macros'].calc=function(v){
            const splits={"Weight Loss":[0.35,0.35,0.30],"Maintenance":[0.30,0.45,0.25],"Muscle Gain":[0.30,0.40,0.30]};
            const [p,c,f]=splits[v.goal];
            return {
                main:{label:"Protein",value:Math.round(v.calories*p/4)+"g"},
                secondary:[
                    {label:"Carbohydrates",value:Math.round(v.calories*c/4)+"g"},
                    {label:"Fat",value:Math.round(v.calories*f/9)+"g"},
                    {label:"Protein (kcal)",value:Math.round(v.calories*p)+" kcal"}
                ]
            };
        };

  if(DB['pregnancy'] && DB['pregnancy'].calc===null) DB['pregnancy'].calc=function(v){
            if(!v.lmp) return {main:{label:"Error",value:"Select date"}};
            const lmp=new Date(v.lmp), due=new Date(lmp.getTime()+280*86400000), today=new Date();
            const weeks=Math.min(40,Math.max(0,Math.floor((today-lmp)/(7*86400000))));
            const daysLeft=Math.max(0,Math.ceil((due-today)/86400000));
            const tri=weeks<13?"1st Trimester":weeks<27?"2nd Trimester":"3rd Trimester";
            return {
                main:{label:"Expected Due Date",value:due.toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})},
                secondary:[
                    {label:"Weeks Pregnant",value:weeks+" weeks"},
                    {label:"Trimester",value:tri},
                    {label:"Days Remaining",value:daysLeft+" days"},
                    {label:"Conception Date",value:new Date(lmp.getTime()+14*86400000).toLocaleDateString('en-IN')}
                ]
            };
        };

  /* bodyFat calc function removed — merged into bodyfat (line 321+) to resolve slug collision */

  if(DB['idealweight'] && DB['idealweight'].calc===null) DB['idealweight'].calc=function(v){
            const hIn=(v.height-152.4)/2.54;
            const miller=v.gender==="Male"?56.2+1.41*hIn:53.1+1.36*hIn;
            const hamwi=v.gender==="Male"?48+2.7*hIn:45.5+2.2*hIn;
            const robinson=v.gender==="Male"?52+1.9*hIn:49+1.7*hIn;
            const bmi22=(22*(v.height/100)**2);
            return {
                main:{label:"Devine Formula",value:hamwi.toFixed(1)+" kg"},
                secondary:[
                    {label:"Miller Formula",value:miller.toFixed(1)+" kg"},
                    {label:"Robinson Formula",value:robinson.toFixed(1)+" kg"},
                    {label:"BMI=22 Target",value:bmi22.toFixed(1)+" kg"}
                ]
            };
        };

  if(DB['ovulation'] && DB['ovulation'].calc===null) DB['ovulation'].calc=function(v){
            if(!v.lastPeriod) return {main:{label:"Error",value:"Enter last period date"}};
            const lp = new Date(v.lastPeriod);
            const ovDay = new Date(lp); ovDay.setDate(lp.getDate() + v.cycleLen - v.luteal);
            const fertStart = new Date(ovDay); fertStart.setDate(ovDay.getDate()-5);
            const fertEnd = new Date(ovDay); fertEnd.setDate(ovDay.getDate()+1);
            const nextPeriod = new Date(lp); nextPeriod.setDate(lp.getDate()+v.cycleLen);
            const fmt = d => d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
            return {
                main:{label:"Ovulation Day (est.)",value:fmt(ovDay)},
                secondary:[
                    {label:"Fertile Window",value:fmt(fertStart)+" to "+fmt(fertEnd)},
                    {label:"Next Period (est.)",value:fmt(nextPeriod)},
                    {label:"Cycle Day of Ovulation",value:(v.cycleLen-v.luteal)},
                    {label:"Days Until Ovulation",value:Math.ceil((ovDay-new Date())/86400000)+" days"}
                ]
            };
        };

  if(DB['bloodpressure'] && DB['bloodpressure'].calc===null) DB['bloodpressure'].calc=function(v){
            const s=v.systolic, d=v.diastolic;
            let cat, risk, advice;
            if(s<90||d<60){cat="Low (Hypotension)";risk="Low–Moderate";advice="Consult a doctor if dizzy or fatigued";}
            else if(s<120&&d<80){cat="Normal";risk="Low";advice="Maintain healthy lifestyle";}
            else if(s<130&&d<80){cat="Elevated";risk="Moderate";advice="Diet, exercise, reduce sodium";}
            else if(s<140||d<90){cat="Hypertension Stage 1";risk="Moderate–High";advice="Lifestyle change + possible medication";}
            else if(s<180||d<120){cat="Hypertension Stage 2";risk="High";advice="See a doctor promptly";}
            else{cat="Hypertensive Crisis";risk="Very High";advice="Seek emergency care immediately";}
            const pp = s - d;
            const map = Math.round(d + pp/3);
            return {
                main:{label:"BP Classification",value:cat},
                secondary:[
                    {label:"Risk Level",value:risk},
                    {label:"Advice",value:advice},
                    {label:"Pulse Pressure",value:pp+" mmHg"},
                    {label:"Mean Arterial Pressure (MAP)",value:map+" mmHg"},
                    {label:"Normal MAP range",value:"70–100 mmHg"}
                ]
            };
        };

  if(DB['alcohol'] && DB['alcohol'].calc===null) DB['alcohol'].calc=function(v){
            const r=v.gender==="Male"?0.68:0.55;
            const bac=(v.drinks*14*0.806)/(v.weight*1000*r)*100;
            const current=Math.max(0,bac-0.015*v.hours);
            const soberIn=current>0?current/0.015:0;
            const effect=current<0.02?"Sober":current<0.05?"Mild Impairment":current<0.08?"Moderate Impairment":"Significant Impairment — Do Not Drive";
            return {
                main:{label:"Est. BAC",value:current.toFixed(3)+"%"},
                secondary:[
                    {label:"Effect",value:effect},
                    {label:"Sober in",value:soberIn>0?soberIn.toFixed(1)+" hrs":"Already sober"},
                    {label:"Legal limit (India)",value:"0.03%"}
                ]
            };
        };

  if(DB['waisthip'] && DB['waisthip'].calc===null) DB['waisthip'].calc=function(v){
            const ratio=(v.waist/v.hip);
            const low=v.gender==="Male"?0.90:0.80;
            const mod=v.gender==="Male"?0.95:0.85;
            const risk=ratio<=low?"Low Risk":ratio<=mod?"Moderate Risk":"High Risk";
            return {
                main:{label:"Waist-to-Hip Ratio",value:ratio.toFixed(3)},
                secondary:[
                    {label:"Risk Category",value:risk},
                    {label:"Low Risk Threshold",value:"≤ "+low},
                    {label:"High Risk Threshold",value:"> "+mod}
                ]
            };
        };

  if(DB['ibw'] && DB['ibw'].calc===null) DB['ibw'].calc=function(v){
            const hIn=(v.height-152.4)/2.54;
            const frameAdj={Small:-10,Medium:0,Large:10};
            const adj=frameAdj[v.frame];
            const devine=v.gender==="Male"?50+2.3*hIn:45.5+2.2*hIn;
            const adjusted=devine+devine*adj/100;
            const rangeLow=(adjusted*0.9).toFixed(1), rangeHigh=(adjusted*1.1).toFixed(1);
            return {
                main:{label:"Ideal Weight (Devine)",value:adjusted.toFixed(1)+" kg"},
                secondary:[
                    {label:"Healthy Range",value:rangeLow+" – "+rangeHigh+" kg"},
                    {label:"BMI 22 Target",value:(22*(v.height/100)**2).toFixed(1)+" kg"},
                    {label:"Frame Adjustment",value:(adj>=0?"+":"")+adj+"%"}
                ]
            };
        };

  if(DB['vitamins'] && DB['vitamins'].calc===null) DB['vitamins'].calc=function(v){
            const sunBase={"None (<5 min)":0,"Low (5-15 min)":10,"Moderate (15-30 min)":25,"Good (30+ min)":40};
            const skinMult={"Very Fair":1.5,"Fair":1.2,"Medium":1.0,"Dark":0.7,"Very Dark":0.5};
            const ageMult=v.age>70?0.5:v.age>50?0.75:1.0;
            const score=sunBase[v.sunExposure]*skinMult[v.skinTone]*ageMult;
            const level=score<10?"Deficient (<20 ng/mL)":score<25?"Insufficient (20-30 ng/mL)":"Likely Sufficient (>30 ng/mL)";
            const supp=score<10?"4000 IU/day":score<25?"2000 IU/day":"Maintain 1000 IU/day";
            return {
                main:{label:"Estimated Status",value:level},
                secondary:[
                    {label:"Suggested Supplement",value:supp},
                    {label:"Optimal Range",value:"40-60 ng/mL"},
                    {label:"Note",value:"Get a blood test for accuracy"}
                ]
            };
        };

  if(DB['lungcapacity'] && DB['lungcapacity'].calc===null) DB['lungcapacity'].calc=function(v){
            const h=v.height/100;
            const fvc=v.gender==="Male"?(0.057*v.height-0.022*v.age-4.241):(0.041*v.height-0.018*v.age-2.690);
            const fev1=fvc*(v.age<40?0.85:0.78);
            return {
                main:{label:"Predicted FVC",value:fvc.toFixed(2)+" L"},
                secondary:[
                    {label:"Predicted FEV1",value:fev1.toFixed(2)+" L"},
                    {label:"FEV1/FVC Ratio",value:((fev1/fvc)*100).toFixed(1)+"%"},
                    {label:"Normal Range (FVC)",value:v.gender==="Male"?"4.0-6.0 L":"3.0-4.5 L"}
                ]
            };
        };

  if(DB['bodyfat'] && DB['bodyfat'].calc===null) DB['bodyfat'].calc=function(v){
            let bf;
            if(v.gender==="Male"){
                bf = 495/(1.0324 - 0.19077*Math.log10(v.waist_bf-v.neck_bf) + 0.15456*Math.log10(v.height_bf)) - 450;
            } else {
                bf = 495/(1.29579 - 0.35004*Math.log10(v.waist_bf+v.hip_bf-v.neck_bf) + 0.22100*Math.log10(v.height_bf)) - 450;
            }
            bf = Math.max(3, Math.min(60, bf));
            const cat = v.gender==="Male"
                ? (bf<6?"Essential Fat":bf<14?"Athletes":bf<18?"Fitness":bf<25?"Average":"Obese")
                : (bf<14?"Essential Fat":bf<21?"Athletes":bf<25?"Fitness":bf<32?"Average":"Obese");
            const leanMass = 70*(1-bf/100); // approx at 70kg
            return {
                main:{label:"Estimated Body Fat",value:bf.toFixed(1)+"%"},
                secondary:[
                    {label:"Category",value:cat},
                    {label:"Healthy Range (Male)",value:"10–20%"},
                    {label:"Healthy Range (Female)",value:"18–28%"},
                    {label:"Fat Mass (est. at 70kg)",value:(70*bf/100).toFixed(1)+" kg"},
                    {label:"Lean Mass (est. at 70kg)",value:leanMass.toFixed(1)+" kg"}
                ]
            };
        };

  if(DB['proteinintake'] && DB['proteinintake'].calc===null) DB['proteinintake'].calc=function(v){
            const actMult = {Sedentary:0.8,"Lightly Active":1.0,"Moderately Active":1.2,"Very Active":1.5,Athlete:1.8};
            const goalMult = {"Maintain Weight":1.0,"Lose Fat":1.2,"Build Muscle":1.6,"Maximum Muscle":2.0};
            const base = v.weight_p * (actMult[v.activity_p]||1.0) * (goalMult[v.goal_p]||1.0);
            const minP = v.weight_p * 0.8, maxP = v.weight_p * 2.2;
            return {
                main:{label:"Daily Protein Target",value:Math.round(base)+"g"},
                secondary:[
                    {label:"Per Meal (3 meals)",value:Math.round(base/3)+"g"},
                    {label:"Per Meal (4 meals)",value:Math.round(base/4)+"g"},
                    {label:"Minimum (sedentary RDA)",value:Math.round(minP)+"g"},
                    {label:"Maximum (advanced training)",value:Math.round(maxP)+"g"},
                    {label:"Calories from Protein",value:Math.round(base*4)+" kcal"}
                ]
            };
        };

  if(DB['smokingcost'] && DB['smokingcost'].calc===null) DB['smokingcost'].calc=function(v){
            const dailyCost = (v.cigsPerDay/20)*v.packPrice;
            const monthlyCost = dailyCost*30;
            const yearlyCost = dailyCost*365;
            const totalSpent = yearlyCost * v.yearsSmoked;
            const investedAt12 = totalSpent * Math.pow(1.12, v.yearsSmoked);
            return {
                main:{label:"Annual Smoking Cost",value:"₹"+Math.round(yearlyCost).toLocaleString()},
                secondary:[
                    {label:"Daily Cost",value:"₹"+Math.round(dailyCost).toFixed(0)},
                    {label:"Monthly Cost",value:"₹"+Math.round(monthlyCost).toLocaleString()},
                    {label:"Total Spent in "+v.yearsSmoked+" years",value:"₹"+Math.round(totalSpent).toLocaleString()},
                    {label:"If invested @12% instead",value:"₹"+Math.round(investedAt12).toLocaleString()},
                    {label:"Cigarettes in "+v.yearsSmoked+" years",value:Math.round(v.cigsPerDay*365*v.yearsSmoked).toLocaleString()}
                ]
            };
        };

  if(DB['childheight'] && DB['childheight'].calc===null) DB['childheight'].calc=function(v){
            const midParent = (v.fatherH + v.motherH)/2;
            const predicted = v.childGender==="Boy" ? midParent + 6.5 : midParent - 6.5;
            const low = predicted - 8.5, high = predicted + 8.5;
            return {
                main:{label:"Predicted Adult Height",value:predicted.toFixed(1)+" cm ("+Math.round(predicted/2.54*10/10)+"'"+Math.round(predicted/2.54%12)+'"'},
                secondary:[
                    {label:"Height Range (±8.5cm)",value:low.toFixed(1)+" – "+high.toFixed(1)+" cm"},
                    {label:"Mid-Parent Height",value:midParent.toFixed(1)+" cm"},
                    {label:"Father",value:v.fatherH+" cm"},
                    {label:"Mother",value:v.motherH+" cm"},
                    {label:"Note",value:"Genetics accounts for ~80% of adult height"}
                ]
            };
        };

  if(DB['diabetesrisk'] && DB['diabetesrisk'].calc===null) DB['diabetesrisk'].calc=function(v){
            let score = 0;
            if(v.age_d>=40&&v.age_d<50) score+=1; else if(v.age_d>=50&&v.age_d<60) score+=2; else if(v.age_d>=60) score+=3;
            if(v.bmi_d>=25&&v.bmi_d<30) score+=1; else if(v.bmi_d>=30&&v.bmi_d<35) score+=2; else if(v.bmi_d>=35) score+=3;
            if(v.waist_d>=94) score+=1; if(v.waist_d>=102) score+=1;
            if(v.familyHist==="Parent or Sibling") score+=2; else if(v.familyHist==="Both Parents") score+=4;
            if(v.physActive==="No") score+=2;
            const risk = score<=3?"Low":score<=8?"Moderate":score<=12?"High":"Very High";
            const prob = score<=3?"<1%":score<=8?"1–5%":score<=12?"5–15%":">15%";
            return {
                main:{label:"Diabetes Risk Level",value:risk},
                secondary:[
                    {label:"Risk Score",value:score+"/22"},
                    {label:"Estimated 10-year Risk",value:prob},
                    {label:"Recommended Action",value:risk==="Low"?"Annual check-up":risk==="Moderate"?"Lifestyle changes + HbA1c test":"See a doctor for full assessment"}
                ]
            };
        };

  if(DB['sleepdebt'] && DB['sleepdebt'].calc===null) DB['sleepdebt'].calc=function(v){
            const nightly = v.needed - v.actual;
            const total = nightly * v.days;
            const recoveryDays = Math.ceil(total / 2); // can recover ~2hrs/night max
            return {
                main:{label:"Sleep Debt",value:total.toFixed(1)+" hours"},
                secondary:[
                    {label:"Nightly Deficit",value:nightly.toFixed(1)+" hrs/night"},
                    {label:"Recovery Plan",value:recoveryDays+" nights of +2hr sleep"},
                    {label:"Ideal Bedtime (for 6AM wake)",value:"10:00 PM"},
                    {label:"Productivity Impact",value:total>14?"Severe":total>7?"Moderate":"Mild"},
                    {label:"Health Risk",value:total>20?"High":total>10?"Moderate":"Low"}
                ]
            };
        };

  if(DB['anemia'] && DB['anemia'].calc===null) DB['anemia'].calc=function(v){
            const thresholds = {Male:13,Female:12,"Pregnant Woman":11,"Child (6-12 yr)":11.5};
            const normal = thresholds[v.gender_a]||12;
            const diff = v.hb - normal;
            let severity, advice;
            if(v.hb >= normal){severity="Normal";advice="Hemoglobin is within healthy range";}
            else if(v.hb >= normal-1){severity="Mild Anemia";advice="Increase iron-rich foods (spinach, lentils, meat)";}
            else if(v.hb >= normal-3){severity="Moderate Anemia";advice="See a doctor. Iron supplements likely needed";}
            else{severity="Severe Anemia";advice="Urgent medical attention required";}
            return {
                main:{label:"Anemia Status",value:severity},
                secondary:[
                    {label:"Your Hemoglobin",value:v.hb+" g/dL"},
                    {label:"Normal for "+v.gender_a,value:normal+" g/dL"},
                    {label:"Gap",value:diff.toFixed(1)+" g/dL"},
                    {label:"Advice",value:advice}
                ]
            };
        };

  if(DB['bsa'] && DB['bsa'].calc===null) DB['bsa'].calc=function(v){
            const mosteller = Math.sqrt(v.weight_bsa * v.height_bsa / 3600);
            const dubois = 0.007184 * Math.pow(v.weight_bsa, 0.425) * Math.pow(v.height_bsa, 0.725);
            const haycock = 0.024265 * Math.pow(v.weight_bsa, 0.5378) * Math.pow(v.height_bsa, 0.3964);
            return {
                main:{label:"BSA (Mosteller)",value:mosteller.toFixed(3)+" m²"},
                secondary:[
                    {label:"BSA (DuBois & DuBois)",value:dubois.toFixed(3)+" m²"},
                    {label:"BSA (Haycock)",value:haycock.toFixed(3)+" m²"},
                    {label:"Average BSA",value:((mosteller+dubois+haycock)/3).toFixed(3)+" m²"},
                    {label:"Normal adult range",value:"1.6–2.0 m²"}
                ]
            };
        };

  if(DB['cholesterolratio'] && DB['cholesterolratio'].calc===null) DB['cholesterolratio'].calc=function(v){
            const totalHdl = v.total / v.hdl;
            const ldlHdl = v.ldl / v.hdl;
            const nonHdl = v.total - v.hdl;
            const vldl = v.triglycerides / 5;
            const riskTotal = totalHdl < 3.5 ? "Low Risk ✓" : totalHdl < 5 ? "Moderate Risk ⚠" : "High Risk ❌";
            const riskLdl = ldlHdl < 2.5 ? "Low Risk ✓" : ldlHdl < 3.5 ? "Moderate Risk ⚠" : "High Risk ❌";
            const trigStatus = v.triglycerides < 150 ? "Normal ✓" : v.triglycerides < 200 ? "Borderline ⚠" : "High ❌";
            return {
                main:{label:"Total/HDL Ratio",value:totalHdl.toFixed(2)+" — "+riskTotal},
                secondary:[
                    {label:"LDL/HDL Ratio",value:ldlHdl.toFixed(2)+" — "+riskLdl},
                    {label:"Non-HDL Cholesterol",value:nonHdl+" mg/dL"+(nonHdl<130?" ✓":" ⚠")},
                    {label:"VLDL (estimated)",value:vldl.toFixed(0)+" mg/dL"},
                    {label:"Triglycerides Status",value:trigStatus},
                    {label:"Healthy Total/HDL",value:"< 3.5 (ideal < 3.0)"},
                    {label:"Healthy LDL/HDL",value:"< 2.5"},
                    {label:"Target LDL",value:"< 100 mg/dL (optimal)"}
                ],
                chart:{labels:["HDL (Good)","LDL (Bad)","VLDL","Other"],
                    data:[v.hdl,v.ldl,vldl,Math.max(0,v.total-v.hdl-v.ldl-vldl)]}
            };
        };

  if(DB['caloriedeficit'] && DB['caloriedeficit'].calc===null) DB['caloriedeficit'].calc=function(v){
            // BMR using Mifflin-St Jeor
            const bmr = v.gender==="Male" ? 10*v.weight+6.25*v.height-5*v.age+5 : 10*v.weight+6.25*v.height-5*v.age-161;
            const actMult = {"Sedentary":1.2,"Lightly Active":1.375,"Moderately Active":1.55,"Very Active":1.725};
            const tdee = Math.round(bmr * (actMult[v.activity]||1.2));
            // Extract numeric prefix from select string (e.g., "0.5 kg/week (moderate)" → 0.5)
            const lossRate = parseFloat(v.rate) || 0.5;
            const deficitPerDay = Math.round(lossRate * 7700 / 7);
            const targetCalories = Math.max(1200, tdee - deficitPerDay);
            const actualDeficit = tdee - targetCalories;
            const weightToLose = v.weight - v.goal_weight;
            const weeksNeeded = Math.ceil(weightToLose / lossRate);
            const daysNeeded = weeksNeeded * 7;
            const goalDate = new Date(Date.now() + daysNeeded * 86400000);
            return {
                main:{label:"Daily Calorie Target",value:targetCalories+" kcal"},
                secondary:[
                    {label:"Your TDEE (maintenance)",value:tdee+" kcal/day"},
                    {label:"Daily Deficit",value:actualDeficit+" kcal"},
                    {label:"Weight to Lose",value:weightToLose.toFixed(1)+" kg"},
                    {label:"Time to Goal",value:weeksNeeded+" weeks ("+Math.round(weeksNeeded/4.3)+" months)"},
                    {label:"Goal Date (estimated)",value:goalDate.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})},
                    {label:"BMR",value:Math.round(bmr)+" kcal"},
                    {label:"Min Safe Calories",value:v.gender==="Male"?"1,500 kcal":"1,200 kcal"}
                ],
                chart:{labels:["Target Intake","Deficit"],data:[targetCalories,actualDeficit],
                    timeline:(function(){
                        var labels=[],wArr=[];
                        var w=v.weight;
                        for(var wk=0;wk<=Math.min(weeksNeeded,52);wk+=Math.max(1,Math.floor(weeksNeeded/12))){
                            labels.push('Wk '+wk);
                            wArr.push(Math.round((v.weight-lossRate*wk)*10)/10);
                        }
                        return {labels:labels,datasets:[
                            {label:'Weight (kg)',data:wArr,fill:true}
                        ]};
                    })()
                }
            };
        };

  // ══════════════════════════════════════════════════════
  // NEW HEALTH / FITNESS CALCULATORS
  // ══════════════════════════════════════════════════════

  if(DB['onerepmax'] && DB['onerepmax'].calc===null) DB['onerepmax'].calc=function(v){
    var w=v.weightLifted,r=v.repsPerformed;
    var epley=w*(1+r/30);
    var brzycki=w*(36/(37-r));
    var lombardi=w*Math.pow(r,0.1);
    var oconner=w*(1+r*0.025);
    var avg=Math.round((epley+brzycki+lombardi+oconner)/4);
    return {
      main:{label:"Estimated 1RM",value:avg+" kg"},
      secondary:[
        {label:"Epley Formula",value:Math.round(epley)+" kg"},
        {label:"Brzycki Formula",value:Math.round(brzycki)+" kg"},
        {label:"Lombardi Formula",value:Math.round(lombardi)+" kg"},
        {label:"O'Conner Formula",value:Math.round(oconner)+" kg"},
        {label:"90% 1RM (3 reps)",value:Math.round(avg*0.9)+" kg"},
        {label:"80% 1RM (8 reps)",value:Math.round(avg*0.8)+" kg"},
        {label:"70% 1RM (12 reps)",value:Math.round(avg*0.7)+" kg"},
        {label:"Exercise",value:v.exercise}
      ]
    };
  };

  if(DB['runningpace'] && DB['runningpace'].calc===null) DB['runningpace'].calc=function(v){
    var pace=v.timeMin/v.distanceKm;
    var speedKmh=v.distanceKm/(v.timeMin/60);
    var targetDistMap={"5K":5,"10K":10,"Half Marathon (21.1K)":21.1,"Marathon (42.2K)":42.195,"Custom":v.customDistKm};
    var td=targetDistMap[v.targetDist]||v.customDistKm;
    var predictedTime=v.timeMin*Math.pow(td/v.distanceKm,1.06);
    var predH=Math.floor(predictedTime/60);
    var predM=Math.floor(predictedTime%60);
    var predS=Math.round((predictedTime%1)*60);
    var paceM=Math.floor(pace);
    var paceS=Math.round((pace-paceM)*60);
    return {
      main:{label:"Pace",value:paceM+":"+String(paceS).padStart(2,'0')+" min/km"},
      secondary:[
        {label:"Speed",value:speedKmh.toFixed(1)+" km/h"},
        {label:"Predicted "+v.targetDist+" Time",value:(predH>0?predH+"h ":"")+predM+"m "+predS+"s"},
        {label:"Predicted 5K",value:Math.round(v.timeMin*Math.pow(5/v.distanceKm,1.06))+" min"},
        {label:"Predicted 10K",value:Math.round(v.timeMin*Math.pow(10/v.distanceKm,1.06))+" min"},
        {label:"Predicted Half Marathon",value:Math.round(v.timeMin*Math.pow(21.1/v.distanceKm,1.06))+" min"},
        {label:"Predicted Marathon",value:Math.round(v.timeMin*Math.pow(42.195/v.distanceKm,1.06))+" min"}
      ]
    };
  };

  if(DB['bodyrecomp'] && DB['bodyrecomp'].calc===null) DB['bodyrecomp'].calc=function(v){
    var lbm=v.weight_br*(1-v.bodyfat_br/100);
    var fatMass=v.weight_br*v.bodyfat_br/100;
    var targetFatMass=lbm*v.targetBf/(100-v.targetBf);
    var fatToLose=Math.max(0,fatMass-targetFatMass);
    var actMult={"Sedentary":1.2,"Light Exercise (1-3 days)":1.375,"Moderate (3-5 days)":1.55,"Heavy (6-7 days)":1.725,"Athlete (2× daily)":1.9};
    var bmr=10*v.weight_br+6.25*175-5*30+5;
    var tdee=Math.round(bmr*(actMult[v.activity_br]||1.55));
    var deficit=Math.round(tdee*0.15);
    var targetCals=tdee-deficit;
    var protein=Math.round(v.weight_br*2.2);
    return {
      main:{label:"Daily Calories for Recomp",value:targetCals+" kcal"},
      secondary:[
        {label:"Fat to Lose",value:fatToLose.toFixed(1)+" kg"},
        {label:"Current Lean Mass",value:lbm.toFixed(1)+" kg"},
        {label:"TDEE",value:tdee+" kcal"},
        {label:"Deficit (15%)",value:deficit+" kcal"},
        {label:"Daily Protein Target",value:protein+"g ("+Math.round(protein*4)+" kcal)"},
        {label:"Timeline (est.)",value:Math.ceil(fatToLose/0.35)+" weeks at 0.35 kg/week"},
        {label:"Target Weight",value:(lbm+targetFatMass).toFixed(1)+" kg"}
      ]
    };
  };

  if(DB['vo2max'] && DB['vo2max'].calc===null) DB['vo2max'].calc=function(v){
    var vo2=0,method=v.method_vo2;
    if(method==="Cooper 12-min Run") vo2=(v.distanceCovered-504.9)/44.73;
    else if(method==="1.5 Mile Run") vo2=483/v.runTime15+3.5;
    else vo2=15.3*(220-v.age_vo2)/v.restingHR;
    var rating=vo2<30?"Poor":vo2<40?"Below Average":vo2<50?"Good":vo2<60?"Excellent":"Elite";
    var category=vo2<35?"Low Fitness":vo2<45?"Moderate Fitness":vo2<55?"Good Fitness":"High Fitness";
    return {
      main:{label:"Estimated VO2 Max",value:vo2.toFixed(1)+" ml/kg/min"},
      secondary:[
        {label:"Fitness Level",value:rating},
        {label:"Category",value:category},
        {label:"Method Used",value:method},
        {label:"Age",value:v.age_vo2+" years"},
        {label:"Marathon Prediction (est.)",value:vo2>30?Math.round(42.195/(vo2*0.07))+" min":"Build base fitness first"}
      ]
    };
  };

  if(DB['leanbodymass'] && DB['leanbodymass'].calc===null) DB['leanbodymass'].calc=function(v){
    var w=v.weight_lbm,h=v.height_lbm;
    var lbm;
    if(v.bodyfat_lbm>0){
      lbm=w*(1-v.bodyfat_lbm/100);
    } else {
      if(v.gender_lbm==="Male") lbm=0.407*w+0.267*h-19.2;
      else lbm=0.252*w+0.473*h-48.3;
    }
    var fatMass=w-lbm;
    var bfPct=(fatMass/w)*100;
    var ffmi=lbm/Math.pow(h/100,2);
    return {
      main:{label:"Lean Body Mass",value:lbm.toFixed(1)+" kg"},
      secondary:[
        {label:"Fat Mass",value:fatMass.toFixed(1)+" kg"},
        {label:"Body Fat %",value:bfPct.toFixed(1)+"%"},
        {label:"FFMI",value:ffmi.toFixed(1)},
        {label:"FFMI Rating",value:ffmi<18?"Below Average":ffmi<20?"Average":ffmi<22?"Above Average":ffmi<25?"Excellent":"Near Natural Limit"},
        {label:"Method",value:v.bodyfat_lbm>0?"Direct (from body fat %)":"Boer Formula (estimated)"}
      ]
    };
  };

  if(DB['caloriegoal'] && DB['caloriegoal'].calc===null) DB['caloriegoal'].calc=function(v){
    var bmr=v.gender_cg==="Male"?10*v.currentWeight_cg+6.25*v.height_cg-5*v.age_cg+5:10*v.currentWeight_cg+6.25*v.height_cg-5*v.age_cg-161;
    var actMult={"Sedentary (desk job)":1.2,"Light (1-3×/week)":1.375,"Moderate (3-5×/week)":1.55,"Active (6-7×/week)":1.725,"Very Active (2×/day)":1.9};
    var tdee=Math.round(bmr*(actMult[v.activity_cg]||1.2));
    var weightDiff=v.currentWeight_cg-v.targetWeight_cg;
    var totalDeficit=weightDiff*7700;
    var dailyDeficit=Math.round(totalDeficit/(v.weeks_cg*7));
    var targetCals=Math.max(v.gender_cg==="Male"?1500:1200,tdee-dailyDeficit);
    var actualDeficit=tdee-targetCals;
    var weeklyLoss=(actualDeficit*7/7700);
    var safeFlag=weeklyLoss>1?"⚠ Aggressive":"✅ Safe";
    return {
      main:{label:"Daily Calorie Target",value:targetCals+" kcal"},
      secondary:[
        {label:"Your TDEE",value:tdee+" kcal"},
        {label:"Required Daily Deficit",value:dailyDeficit+" kcal"},
        {label:"Actual Deficit (adjusted)",value:actualDeficit+" kcal"},
        {label:"Weekly Weight Change",value:weeklyLoss.toFixed(2)+" kg/week"},
        {label:"Safety",value:safeFlag},
        {label:"Weight Change",value:weightDiff>0?weightDiff.toFixed(1)+" kg to lose":Math.abs(weightDiff).toFixed(1)+" kg to gain"},
        {label:"Est. Completion",value:v.weeks_cg+" weeks"}
      ]
    };
  };

  if(DB['electrolyte'] && DB['electrolyte'].calc===null) DB['electrolyte'].calc=function(v){
    var baseWater=v.weight_el*35;
    var exerciseWater=v.exerciseMin*12;
    var climateMult={"Temperate (20-25°C)":1.0,"Hot & Humid (30°C+)":1.3,"Cold (below 15°C)":0.9,"High Altitude":1.2};
    var caffeineMult={"None":1.0,"1-2 cups":1.05,"3-4 cups":1.10,"5+ cups":1.15};
    var totalWater=Math.round((baseWater+exerciseWater)*(climateMult[v.climate]||1)*(caffeineMult[v.caffeine]||1));
    var sweatMult={"Low (light sweater)":1.0,"Moderate":1.3,"Heavy":1.6};
    var sodium=Math.round(2300*(sweatMult[v.sweatRate]||1));
    var potassium=Math.round(3500*(sweatMult[v.sweatRate]||1)*0.8);
    var magnesium=Math.round(400*(sweatMult[v.sweatRate]||1)*0.9);
    return {
      main:{label:"Daily Water Intake",value:(totalWater/1000).toFixed(1)+" liters ("+totalWater+" ml)"},
      secondary:[
        {label:"Glasses (250ml)",value:Math.ceil(totalWater/250)+" glasses"},
        {label:"Sodium",value:sodium+" mg"},
        {label:"Potassium",value:potassium+" mg"},
        {label:"Magnesium",value:magnesium+" mg"},
        {label:"Exercise Hydration",value:exerciseWater+" ml extra"},
        {label:"Climate Factor",value:v.climate}
      ]
    };
  };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('health');
})();
