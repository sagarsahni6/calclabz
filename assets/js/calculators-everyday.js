/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-everyday.js
   LAZY FILE: calc() functions for category "everyday"
   Loaded on-demand when user opens a everyday calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['tip'] && DB['tip'].calc===null) DB['tip'].calc=function(v){
            const tipAmt=v.bill*v.tip/100, total=v.bill+tipAmt;
            const perPerson=total/v.people;
            return {
                main:{label:"Per Person",value:"₹"+perPerson.toFixed(2)},
                secondary:[
                    {label:"Tip Amount",value:"₹"+tipAmt.toFixed(2)},
                    {label:"Total Bill + Tip",value:"₹"+total.toFixed(2)},
                    {label:"Bill per Person (no tip)",value:"₹"+(v.bill/v.people).toFixed(2)}
                ]
            };
        };

  if(DB['discount'] && DB['discount'].calc===null) DB['discount'].calc=function(v){
            const saved=v.original*v.discount/100, final=v.original-saved;
            return {
                main:{label:"Final Price",value:"₹"+final.toFixed(2)},
                secondary:[
                    {label:"You Save",value:"₹"+saved.toFixed(2)},
                    {label:"Discount %",value:v.discount+"%"},
                    {label:"Price after extra 10%",value:"₹"+(final*0.9).toFixed(2)}
                ]
            };
        };

  if(DB['fuel'] && DB['fuel'].calc===null) DB['fuel'].calc=function(v){
            const litres=v.distance/v.efficiency, cost=litres*v.price;
            return {
                main:{label:"Trip Cost",value:"₹"+cost.toFixed(2)},
                secondary:[
                    {label:"Fuel Required",value:litres.toFixed(2)+" L"},
                    {label:"Cost per km",value:"₹"+(cost/v.distance).toFixed(2)},
                    {label:"Monthly (2000km)",value:"₹"+((2000/v.efficiency)*v.price).toFixed(2)}
                ]
            };
        };

  if(DB['salary'] && DB['salary'].calc===null) DB['salary'].calc=function(v){
            const net=v.ctc-v.pf-v.tax;
            return {
                main:{label:"Monthly In-Hand",value:"₹"+Math.round(net/12).toLocaleString()},
                secondary:[
                    {label:"Annual In-Hand",value:"₹"+net.toLocaleString()},
                    {label:"Weekly",value:"₹"+Math.round(net/52).toLocaleString()},
                    {label:"Daily (22 working days)",value:"₹"+Math.round(net/12/22).toLocaleString()},
                    {label:"Hourly",value:"₹"+Math.round(net/12/22/8).toLocaleString()}
                ]
            };
        };

  if(DB['emi2'] && DB['emi2'].calc===null) DB['emi2'].calc=function(v){
            const eligible=(v.income*0.5)-v.obligations;
            const r=v.rate/12/100, n=v.tenure;
            const loan=eligible*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
            return {
                main:{label:"Max Eligible EMI",value:"₹"+eligible.toLocaleString()},
                secondary:[
                    {label:"Max Loan Amount",value:"₹"+Math.round(loan).toLocaleString()},
                    {label:"FOIR Used",value:"50%"},
                    {label:"Available after EMI",value:"₹"+(v.income-eligible).toLocaleString()}
                ]
            };
        };

  if(DB['grade'] && DB['grade'].calc===null) DB['grade'].calc=function(v){
            const p=v.pct;
            const grade=p>=90?"A+":p>=80?"A":p>=70?"B+":p>=60?"B":p>=50?"C":p>=40?"D":"F";
            const gpa=p>=90?10:p>=80?9:p>=70?8:p>=60?7:p>=50?6:p>=40?5:0;
            const us=p>=93?4.0:p>=90?3.7:p>=87?3.3:p>=83?3.0:p>=80?2.7:p>=77?2.3:p>=73?2.0:p>=70?1.7:p>=67?1.3:p>=63?1.0:p>=60?0.7:0.0;
            return {
                main:{label:"Grade",value:grade},
                secondary:[
                    {label:"GPA (10 scale)",value:gpa.toFixed(1)},
                    {label:"GPA (4.0 US scale)",value:us.toFixed(1)},
                    {label:"Class",value:p>=60?"Passing":"Failing"}
                ]
            };
        };

  if(DB['electricbill'] && DB['electricbill'].calc===null) DB['electricbill'].calc=function(v){
            const daily=v.watts*v.hours/1000, monthly=daily*30, cost=monthly*v.rate;
            return {
                main:{label:"Monthly Cost",value:"₹"+cost.toFixed(2)},
                secondary:[
                    {label:"Daily Consumption",value:daily.toFixed(3)+" kWh"},
                    {label:"Monthly Consumption",value:monthly.toFixed(2)+" kWh"},
                    {label:"Annual Cost",value:"₹"+(cost*12).toFixed(2)},
                    {label:"Annual Units",value:(daily*365).toFixed(1)+" kWh"}
                ]
            };
        };

  if(DB['loanaffordability'] && DB['loanaffordability'].calc===null) DB['loanaffordability'].calc=function(v){
            const maxEMI=v.income*0.40;
            const r=v.rate/12/100, n=v.term*12;
            const maxLoan=maxEMI*(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n));
            const maxPrice=maxLoan+v.down;
            return {
                main:{label:"Max Home Price",value:"₹"+Math.round(maxPrice).toLocaleString()},
                secondary:[
                    {label:"Max Loan",value:"₹"+Math.round(maxLoan).toLocaleString()},
                    {label:"Max EMI (40% income)",value:"₹"+Math.round(maxEMI).toLocaleString()},
                    {label:"Down Payment",value:"₹"+v.down.toLocaleString()},
                    {label:"Down %",value:((v.down/maxPrice)*100).toFixed(1)+"%"}
                ]
            };
        };

  if(DB['caloriesfood'] && DB['caloriesfood'].calc===null) DB['caloriesfood'].calc=function(v){
            const pCal=v.protein*4, cCal=v.carbs*4, fCal=v.fat*9, total=pCal+cCal+fCal;
            return {
                main:{label:"Total Calories",value:Math.round(total)+" kcal"},
                secondary:[
                    {label:"From Protein",value:pCal+" kcal ("+((pCal/total)*100).toFixed(0)+"%)"},
                    {label:"From Carbs",value:cCal+" kcal ("+((cCal/total)*100).toFixed(0)+"%)"},
                    {label:"From Fat",value:fCal+" kcal ("+((fCal/total)*100).toFixed(0)+"%)"},
                    {label:"Net Carbs",value:(v.carbs-v.fiber).toFixed(1)+"g"}
                ]
            };
        };

  if(DB['wiresize'] && DB['wiresize'].calc===null) DB['wiresize'].calc=function(v){
            const maxDrop=v.voltage*v.drop/100;
            const resistivity=0.0175; // copper Ω·mm²/m
            const area=(2*resistivity*v.length*v.current)/maxDrop;
            const stdSizes=[1,1.5,2.5,4,6,10,16,25,35,50];
            const recommended=stdSizes.find(s=>s>=area)||stdSizes[stdSizes.length-1];
            const actualDrop=(2*resistivity*v.length*v.current/recommended).toFixed(2);
            return {
                main:{label:"Recommended Wire",value:recommended+" mm²"},
                secondary:[
                    {label:"Minimum Area Needed",value:area.toFixed(3)+" mm²"},
                    {label:"Actual Voltage Drop",value:actualDrop+" V"},
                    {label:"Drop %",value:((actualDrop/v.voltage)*100).toFixed(2)+"%"},
                    {label:"Max Temp Rating",value:"70°C (PVC)"}
                ]
            };
        };

  if(DB['pixelresolution'] && DB['pixelresolution'].calc===null) DB['pixelresolution'].calc=function(v){
            const mp=(v.width*v.height/1e6).toFixed(2);
            const bppMap={"8-bit":8,"16-bit":16,"24-bit":24,"32-bit":32};
            const bits=bppMap[v.bpp];
            const fileMB=(v.width*v.height*bits/8/1024/1024).toFixed(2);
            const printW=(v.width/v.dpi*2.54).toFixed(2);
            const printH=(v.height/v.dpi*2.54).toFixed(2);
            const ar=v.width/v.height;
            const arStr=Math.abs(ar-16/9)<0.01?"16:9":Math.abs(ar-4/3)<0.01?"4:3":Math.abs(ar-1)<0.01?"1:1":`${v.width}:${v.height}`;
            return {
                main:{label:"Megapixels",value:mp+" MP"},
                secondary:[
                    {label:"Raw File Size",value:fileMB+" MB"},
                    {label:"Print Size",value:`${printW}×${printH} cm at ${v.dpi} DPI`},
                    {label:"Aspect Ratio",value:arStr},
                    {label:"Total Pixels",value:(v.width*v.height).toLocaleString()}
                ]
            };
        };

  if(DB['typing_speed'] && DB['typing_speed'].calc===null) DB['typing_speed'].calc=function(v){
            const readSec=v.words/v.wpm*60;
            const typeSec=v.words/v.typingWpm*60;
            const fmt=s=>{const m=Math.floor(s/60);const sec=Math.round(s%60);return m>0?`${m}m ${sec}s`:`${sec}s`;};
            return {
                main:{label:"Reading Time",value:fmt(readSec)},
                secondary:[
                    {label:"Typing Time",value:fmt(typeSec)},
                    {label:"Pages (250 words/page)",value:(v.words/250).toFixed(1)+" pages"},
                    {label:"Speak Aloud (130 wpm)",value:fmt(v.words/130*60)},
                    {label:"Tweet Threads (280 ch)",value:Math.ceil(v.words*5.5/280)+" tweets"}
                ]
            };
        };

  if(DB['emi_extra'] && DB['emi_extra'].calc===null) DB['emi_extra'].calc=function(v){
            const r=v.rate/12/100;
            const emi=v.outstanding*r*Math.pow(1+r,v.remaining)/(Math.pow(1+r,v.remaining)-1);
            const normalInterest=emi*v.remaining-v.outstanding;
            // New tenure with extra payment
            const newEmi=emi+v.extra;
            const newMonths=Math.log(newEmi/(newEmi-v.outstanding*r))/Math.log(1+r);
            const newInterest=newEmi*newMonths-v.outstanding;
            const saved=normalInterest-newInterest;
            const monthsSaved=v.remaining-newMonths;
            return {
                main:{label:"Interest Saved",value:"₹"+Math.round(saved).toLocaleString()},
                secondary:[
                    {label:"Months Saved",value:Math.round(monthsSaved)+" months"},
                    {label:"New Tenure",value:Math.round(newMonths)+" months"},
                    {label:"Current EMI",value:"₹"+Math.round(emi).toLocaleString()},
                    {label:"New EMI (with extra)",value:"₹"+Math.round(newEmi).toLocaleString()}
                ]
            };
        };

  if(DB['investVsRent'] && DB['investVsRent'].calc===null) DB['investVsRent'].calc=function(v){
            const futureValue=v.propValue*Math.pow(1+v.appreciation/100,v.years);
            const capitalGain=futureValue-v.propValue;
            const totalEmi=v.emi*v.years*12;
            const totalRent=v.rent*v.years*12;
            const netCostBuy=totalEmi-capitalGain;
            const diff=totalRent-netCostBuy;
            return {
                main:{label:"Better Option",value:diff>0?"Buying":"Renting"},
                secondary:[
                    {label:"Future Property Value",value:"₹"+Math.round(futureValue).toLocaleString()},
                    {label:"Capital Gain",value:"₹"+Math.round(capitalGain).toLocaleString()},
                    {label:"Total EMI Paid",value:"₹"+totalEmi.toLocaleString()},
                    {label:"Total Rent Paid",value:"₹"+totalRent.toLocaleString()},
                    {label:"Net Cost of Buying",value:"₹"+Math.round(netCostBuy).toLocaleString()}
                ]
            };
        };

  if(DB['unitPrice'] && DB['unitPrice'].calc===null) DB['unitPrice'].calc=function(v){
            const unitA=v.price1/v.qty1, unitB=v.price2/v.qty2;
            const better=unitA<unitB?"Item A":"Item B";
            const saving=Math.abs(unitA-unitB);
            return {
                main:{label:"Better Value",value:better},
                secondary:[
                    {label:"Item A — per unit",value:"₹"+(unitA).toFixed(4)},
                    {label:"Item B — per unit",value:"₹"+(unitB).toFixed(4)},
                    {label:"Saving per unit",value:"₹"+saving.toFixed(4)},
                    {label:"Item A cheaper by",value:unitA<unitB?((1-unitA/unitB)*100).toFixed(1)+"%":"—"},
                    {label:"Item B cheaper by",value:unitB<unitA?((1-unitB/unitA)*100).toFixed(1)+"%":"—"}
                ]
            };
        };

  if(DB['petrolParity'] && DB['petrolParity'].calc===null) DB['petrolParity'].calc=function(v){
            const petrolAnnual=(v.kmPerYear/v.petrolMileage)*v.petrolPrice;
            const chargesPerYear=v.kmPerYear/v.evRange;
            const evAnnual=chargesPerYear*v.chargeCost;
            const saving=petrolAnnual-evAnnual;
            const breakEvenDiff=300000; // avg EV premium
            const paybackYears=breakEvenDiff/Math.max(1,saving);
            return {
                main:{label:"Annual Saving (EV)",value:"₹"+Math.round(saving).toLocaleString()},
                secondary:[
                    {label:"Petrol Annual Cost",value:"₹"+Math.round(petrolAnnual).toLocaleString()},
                    {label:"EV Annual Cost",value:"₹"+Math.round(evAnnual).toLocaleString()},
                    {label:"Payback Period (est ₹3L premium)",value:paybackYears.toFixed(1)+" years"},
                    {label:"CO₂ Saved (approx)",value:Math.round((v.kmPerYear/v.petrolMileage)*2.31)+" kg/yr"}
                ]
            };
        };

  if(DB['laundry'] && DB['laundry'].calc===null) DB['laundry'].calc=function(v){
            const c=v.chest, w=v.waist;
            const us=c<=86?"XS":c<=91?"S":c<=96?"M":c<=101?"L":c<=106?"XL":"XXL";
            const eu=c<=86?"44":c<=91?"46":c<=96?"48":c<=101?"50":c<=106?"52":"54";
            const uk=c<=86?"34":c<=91?"36":c<=96?"38":c<=101?"40":c<=106?"42":"44";
            const shoeEu=Math.round(v.height*0.16+1);
            return {
                main:{label:"Size (US/International)",value:us},
                secondary:[
                    {label:"EU Size",value:eu},
                    {label:"UK Size",value:uk},
                    {label:"Estimated Shoe (EU)",value:shoeEu},
                    {label:"Chest",value:c+" cm / "+(c/2.54).toFixed(1)+'"'}
                ]
            };
        };

  if(DB['networth'] && DB['networth'].calc===null) DB['networth'].calc=function(v){
            const assets = v.cash+v.stocks+v.property+v.gold_nw+v.pf;
            const liabilities = v.homeloan+v.carloan+v.cc;
            const netWorth = assets - liabilities;
            const ratio = assets>0?(liabilities/assets*100):0;
            return {
                main:{label:"Net Worth",value:"₹"+netWorth.toLocaleString(),pos:netWorth>0,neg:netWorth<0},
                secondary:[
                    {label:"Total Assets",value:"₹"+assets.toLocaleString()},
                    {label:"Total Liabilities",value:"₹"+liabilities.toLocaleString()},
                    {label:"Debt-to-Asset Ratio",value:ratio.toFixed(1)+"%"},
                    {label:"Financial Health",value:ratio<30?"Strong":ratio<50?"Moderate":ratio<80?"Weak":"Over-leveraged"},
                    {label:"Liquid Assets",value:"₹"+(v.cash+v.stocks).toLocaleString()}
                ]
            };
        };

  if(DB['weddingbudget'] && DB['weddingbudget'].calc===null) DB['weddingbudget'].calc=function(v){
            const multiplier = v.city_tier.includes("1")?1.5:v.city_tier.includes("2")?1.0:0.7;
            const catering = v.catering_pp*v.guests*v.func;
            const venue = 100000*multiplier*v.func;
            const decor = 150000*multiplier;
            const photography = 80000*multiplier;
            const clothes = 100000*multiplier;
            const misc = (catering+venue+decor+photography+clothes)*0.15;
            const total = catering+venue+decor+photography+clothes+misc;
            return {
                main:{label:"Estimated Total Budget",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Catering ("+v.guests+" guests × "+v.func+" functions)",value:"₹"+Math.round(catering).toLocaleString()},
                    {label:"Venue & Decoration",value:"₹"+Math.round(venue+decor).toLocaleString()},
                    {label:"Photography & Video",value:"₹"+Math.round(photography).toLocaleString()},
                    {label:"Clothes & Jewelry (est.)",value:"₹"+Math.round(clothes).toLocaleString()},
                    {label:"Miscellaneous (15%)",value:"₹"+Math.round(misc).toLocaleString()}
                ]
            };
        };

  if(DB['rentafford'] && DB['rentafford'].calc===null) DB['rentafford'].calc=function(v){
            const available = v.salary_r - v.expenses_r - v.emi_r - v.savings_r;
            const maxRent = Math.round(available*0.9); // 90% of available for rent
            const rentPct = (maxRent/v.salary_r*100);
            return {
                main:{label:"Max Affordable Rent",value:"₹"+Math.max(0,maxRent).toLocaleString()},
                secondary:[
                    {label:"Rent as % of Income",value:rentPct.toFixed(1)+"%"},
                    {label:"Recommended Limit (30%)",value:"₹"+(v.salary_r*0.3).toLocaleString()},
                    {label:"Surplus After Rent",value:"₹"+Math.max(0,available-maxRent).toLocaleString()},
                    {label:"Status",value:rentPct<=30?"✅ Comfortable":rentPct<=40?"⚠️ Manageable":"❌ Stretched"}
                ]
            };
        };

  if(DB['freelancerate'] && DB['freelancerate'].calc===null) DB['freelancerate'].calc=function(v){
            const grossNeeded = (v.annualIncome + v.expenses_fl) / (1-v.tax_fl/100);
            const dailyRate = grossNeeded/v.workDays;
            const hourlyRate = dailyRate/v.hoursPerDay;
            const monthly = grossNeeded/12;
            return {
                main:{label:"Hourly Rate",value:"₹"+Math.round(hourlyRate).toLocaleString()},
                secondary:[
                    {label:"Daily Rate",value:"₹"+Math.round(dailyRate).toLocaleString()},
                    {label:"Monthly Billing Target",value:"₹"+Math.round(monthly).toLocaleString()},
                    {label:"Annual Gross Needed",value:"₹"+Math.round(grossNeeded).toLocaleString()},
                    {label:"Tax Provision",value:"₹"+Math.round(grossNeeded*v.tax_fl/100).toLocaleString()},
                    {label:"Break-even Day Rate",value:"₹"+Math.round(v.expenses_fl/v.workDays).toLocaleString()}
                ]
            };
        };

  if(DB['carbonfootprint'] && DB['carbonfootprint'].calc===null) DB['carbonfootprint'].calc=function(v){
            const carCO2 = (v.carKm/v.carFuel)*2.31; // kg CO2 per litre petrol
            const flightCO2 = v.flights*255; // avg 255kg per short flight
            const elecCO2 = v.elecUnits*12*0.82; // India grid: 0.82 kg/kWh
            const dietCO2 = v.meatMeals*52*3.3; // 3.3kg CO2 per meat meal
            const total = carCO2+flightCO2+elecCO2+dietCO2;
            const globalAvg = 4000, indiaAvg = 1900;
            return {
                main:{label:"Annual Carbon Footprint",value:(total/1000).toFixed(2)+" tonnes CO₂"},
                secondary:[
                    {label:"Car Emissions",value:(carCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"Flights",value:(flightCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"Electricity",value:(elecCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"Diet",value:(dietCO2/1000).toFixed(2)+" t CO₂"},
                    {label:"vs India Average (1.9t)",value:total>indiaAvg?"+"+(((total-indiaAvg)/indiaAvg)*100).toFixed(0)+"%":"Below average ✅"}
                ]
            };
        };

  if(DB['cartco'] && DB['cartco'].calc===null) DB['cartco'].calc=function(v){
            const P=v.carPrice-v.downpay, r=v.carRate/12/100, n=v.carTenure;
            const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const annEmi=emi*12;
            const annFuel=(v.kmYear/v.mileage)*v.fuelPrice;
            const depreciation=v.carPrice*0.15; // ~15% first year
            const totalAnnual=annEmi+annFuel+v.insurance+v.maintenance+depreciation;
            const perKm=totalAnnual/v.kmYear;
            return {
                main:{label:"Annual Ownership Cost",value:"₹"+Math.round(totalAnnual).toLocaleString()},
                secondary:[
                    {label:"Monthly EMI",value:"₹"+Math.round(emi).toLocaleString()},
                    {label:"Annual Fuel Cost",value:"₹"+Math.round(annFuel).toLocaleString()},
                    {label:"Insurance + Maintenance",value:"₹"+(v.insurance+v.maintenance).toLocaleString()},
                    {label:"Depreciation (Year 1 ~15%)",value:"₹"+Math.round(depreciation).toLocaleString()},
                    {label:"Cost per km",value:"₹"+perKm.toFixed(1)}
                ]
            };
        };

  if(DB['tipsplit'] && DB['tipsplit'].calc===null) DB['tipsplit'].calc=function(v){
            const tip=v.billAmt*v.tipPct/100;
            const total=v.billAmt+tip+v.extra;
            const perPerson=total/v.people;
            return {
                main:{label:"Per Person",value:"₹"+perPerson.toFixed(2)},
                secondary:[
                    {label:"Bill Amount",value:"₹"+v.billAmt.toFixed(2)},
                    {label:"Tip Amount ("+v.tipPct+"%)",value:"₹"+tip.toFixed(2)},
                    {label:"Extra Charges",value:"₹"+v.extra.toFixed(2)},
                    {label:"Grand Total",value:"₹"+total.toFixed(2)},
                    {label:"Tip per Person",value:"₹"+(tip/v.people).toFixed(2)}
                ]
            };
        };

  if(DB['petage'] && DB['petage'].calc===null) DB['petage'].calc=function(v){
            let humanAge;
            if(v.petType.startsWith("Cat")){
                if(v.petAge<=1) humanAge=15;
                else if(v.petAge<=2) humanAge=24;
                else humanAge=24+(v.petAge-2)*4;
            } else if(v.petType.includes("Small")){
                humanAge=v.petAge*15-v.petAge*(v.petAge-1)*0.5;
            } else if(v.petType.includes("Large")){
                humanAge=v.petAge*13;
            } else {
                humanAge=v.petAge*14;
            }
            humanAge=Math.round(humanAge);
            const lifeExpect=v.petType.includes("Small")?16:v.petType.includes("Large")?10:v.petType.includes("Cat")?15:13;
            const pctLife=Math.round(v.petAge/lifeExpect*100);
            return {
                main:{label:"Human Age Equivalent",value:humanAge+" human years"},
                secondary:[
                    {label:"Pet Age",value:v.petAge+" years"},
                    {label:"Life Stage",value:pctLife<20?"Puppy/Kitten":pctLife<50?"Young Adult":pctLife<75?"Mature Adult":"Senior"},
                    {label:"% of Life Lived",value:pctLife+"%"},
                    {label:"Expected Lifespan",value:"~"+lifeExpect+" years"}
                ]
            };
        };

  if(DB['travelbudget'] && DB['travelbudget'].calc===null) DB['travelbudget'].calc=function(v){
            const ppd=v.dest.includes("Budget")?2000:v.dest.includes("Mid")?5000:v.dest.includes("Luxury")?12000:15000;
            const dailyCost=ppd*v.people_t;
            const stay=dailyCost*v.days;
            const buffer=stay*0.15;
            const total=stay+v.flights_t+buffer;
            return {
                main:{label:"Estimated Total Budget",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Daily Cost ("+v.people_t+" people)",value:"₹"+dailyCost.toLocaleString()},
                    {label:"Accommodation + Food ("+v.days+"d)",value:"₹"+stay.toLocaleString()},
                    {label:"Flights",value:"₹"+v.flights_t.toLocaleString()},
                    {label:"Buffer (15%)",value:"₹"+Math.round(buffer).toLocaleString()},
                    {label:"Per Person Total",value:"₹"+Math.round(total/v.people_t).toLocaleString()}
                ]
            };
        };

  if(DB['mileage'] && DB['mileage'].calc===null) DB['mileage'].calc=function(v){
            const kmpl = v.distance_mi / v.fuel_used;
            const l100km = 100 / kmpl;
            const mpg_uk = kmpl * 2.8248;
            const mpg_us = kmpl * 2.3521;
            return {
                main:{label:"Mileage",value:kmpl.toFixed(2)+" km/L"},
                secondary:[
                    {label:"Litres per 100 km",value:l100km.toFixed(2)+" L/100km"},
                    {label:"MPG (UK Imperial)",value:mpg_uk.toFixed(2)+" mpg"},
                    {label:"MPG (US)",value:mpg_us.toFixed(2)+" mpg"},
                    {label:"Cost per km (at ₹103/L)",value:"₹"+(103/kmpl).toFixed(2)},
                    {label:"Rating",value:kmpl>20?"🟢 Excellent":kmpl>15?"🟡 Good":kmpl>10?"🟠 Average":"🔴 Poor"}
                ]
            };
        };

  if(DB['cooking'] && DB['cooking'].calc===null) DB['cooking'].calc=function(v){
            const toMl = {"Cup":240,"Tablespoon (tbsp)":14.787,"Teaspoon (tsp)":4.929,"Milliliter (ml)":1,"Fluid Ounce (fl oz)":29.574,"Liter":1000,"Pint":473.176};
            const densities = {"Water":1.0,"All-Purpose Flour":0.53,"Sugar (white)":0.845,"Butter":0.911,"Rice":0.75,"Salt":1.217,"Honey":1.42,"Milk":1.03};
            const ml = v.cook_val * (toMl[v.cook_from]||1);
            const grams = ml * (densities[v.cook_ingr]||1);
            return {
                main:{label:"Milliliters",value:ml.toFixed(1)+" ml"},
                secondary:[
                    {label:"Grams ("+v.cook_ingr+")",value:grams.toFixed(1)+" g"},
                    {label:"Cups",value:(ml/240).toFixed(3)+" cups"},
                    {label:"Tablespoons",value:(ml/14.787).toFixed(2)+" tbsp"},
                    {label:"Teaspoons",value:(ml/4.929).toFixed(1)+" tsp"},
                    {label:"Fluid Ounces",value:(ml/29.574).toFixed(2)+" fl oz"}
                ]
            };
        };

  if(DB['shoesize'] && DB['shoesize'].calc===null) DB['shoesize'].calc=function(v){
            // Convert everything to US Men as base
            let usMen = v.shoe_val;
            if(v.shoe_from==="US Women")      usMen = v.shoe_val - 1.5;
            else if(v.shoe_from==="UK")        usMen = v.shoe_val + 0.5;
            else if(v.shoe_from==="EU")        usMen = (v.shoe_val - 33) / 1.5;
            else if(v.shoe_from==="India (IN)")usMen = v.shoe_val - 0.5;
            else if(v.shoe_from==="CM (foot length)") usMen = (v.shoe_val - 22.5) / 0.838;
            return {
                main:{label:"US Men's",value:usMen.toFixed(1)},
                secondary:[
                    {label:"US Women's",value:(usMen+1.5).toFixed(1)},
                    {label:"UK",value:(usMen-0.5).toFixed(1)},
                    {label:"EU",value:(usMen*1.5+33).toFixed(0)},
                    {label:"India (IN)",value:(usMen+0.5).toFixed(1)},
                    {label:"Foot Length (cm)",value:(usMen*0.838+22.5).toFixed(1)+" cm"},
                    {label:"Foot Length (inches)",value:((usMen*0.838+22.5)/2.54).toFixed(1)+'"'}
                ]
            };
        };

  if(DB['stopwatch'] && DB['stopwatch'].calc===null) DB['stopwatch'].calc=function(v){
            const totalSecs = v.countdown_min * 60;
            const hrs = Math.floor(totalSecs/3600), mins = Math.floor((totalSecs%3600)/60), secs = totalSecs%60;
            return {
                main:{label:v.countdown_min>0?"Countdown Duration":"Stopwatch Mode",value:v.countdown_min>0?(hrs?""+hrs+"h "+mins+"m "+secs+"s":mins+"m "+secs+"s"):"Use the live stopwatch widget"},
                secondary:[
                    {label:"Total seconds",value:totalSecs+" s"},
                    {label:"Tip",value:"Open AI chat and type 'start stopwatch' for a live timer"},
                    {label:"Lap interval",value:v.lap_interval>0?v.lap_interval+"s intervals":"Manual laps"}
                ]
            };
        };

  if(DB['randomnum'] && DB['randomnum'].calc===null) DB['randomnum'].calc=function(v){
            const count = Math.min(20, Math.max(1, Math.floor(v.rng_count)));
            let results = [];
            if(v.rng_type==="Coin Flip"){
                for(let i=0;i<count;i++) results.push(Math.random()<0.5?"Heads":"Tails");
            } else if(v.rng_type==="Dice (d6)"){
                for(let i=0;i<count;i++) results.push(Math.floor(Math.random()*6)+1);
            } else if(v.rng_type==="Shuffle 1–N"){
                const arr=[]; for(let i=1;i<=Math.min(count,20);i++) arr.push(i);
                for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
                results = arr;
            } else if(v.rng_type==="Decimals (2dp)"){
                for(let i=0;i<count;i++) results.push((v.rng_min+Math.random()*(v.rng_max-v.rng_min)).toFixed(2));
            } else {
                for(let i=0;i<count;i++) results.push(Math.floor(v.rng_min+Math.random()*(v.rng_max-v.rng_min+1)));
            }
            return {
                main:{label:"Random Numbers",value:results.join(", ")},
                secondary:[
                    {label:"Count",value:count},
                    {label:"Range",value:v.rng_min+" – "+v.rng_max},
                    {label:"Type",value:v.rng_type},
                    {label:"Min result",value:results.reduce((a,b)=>+a<+b?a:b,results[0])},
                    {label:"Max result",value:results.reduce((a,b)=>+a>+b?a:b,results[0])}
                ]
            };
        };

  if(DB['evpetrolsavings'] && DB['evpetrolsavings'].calc===null) DB['evpetrolsavings'].calc=function(v){
            const totalKm = v.daily_km * 365 * v.years;
            const petrolCost = totalKm / v.mileage * v.petrol_rate;
            const evEnergyCost = totalKm / v.ev_efficiency * v.elec_rate;
            const fuelSaving = petrolCost - evEnergyCost;
            const petrolMaintenance = 8000 * v.years;
            const evMaintenance = 3000 * v.years;
            const maintSaving = petrolMaintenance - evMaintenance;
            const totalPetrolCost = v.petrol_price + petrolCost + petrolMaintenance;
            const totalEVCost = v.ev_price + evEnergyCost + evMaintenance;
            const netSaving = totalPetrolCost - totalEVCost;
            const breakEvenKm = (v.ev_price - v.petrol_price) / ((v.petrol_rate/v.mileage) - (v.elec_rate/v.ev_efficiency));
            const breakEvenYears = breakEvenKm / (v.daily_km * 365);
            return {
                main:{label:"8-Year Net Savings (EV)",value:"₹"+Math.round(netSaving).toLocaleString()+(netSaving>0?" ✓":" ❌")},
                secondary:[
                    {label:"Total Petrol/Diesel Cost",value:"₹"+Math.round(petrolCost).toLocaleString()},
                    {label:"Total EV Charging Cost",value:"₹"+Math.round(evEnergyCost).toLocaleString()},
                    {label:"Fuel Savings",value:"₹"+Math.round(fuelSaving).toLocaleString(),pos:true},
                    {label:"Maintenance Savings",value:"₹"+Math.round(maintSaving).toLocaleString(),pos:true},
                    {label:"Total Petrol Ownership",value:"₹"+Math.round(totalPetrolCost).toLocaleString()},
                    {label:"Total EV Ownership",value:"₹"+Math.round(totalEVCost).toLocaleString()},
                    {label:"Break-Even Distance",value:Math.round(breakEvenKm).toLocaleString()+" km"},
                    {label:"Break-Even Time",value:breakEvenYears.toFixed(1)+" years"}
                ],
                chart:{labels:["EV Purchase","EV Running","EV Maint","Petrol Purchase","Petrol Fuel","Petrol Maint"],
                    data:[v.ev_price,Math.round(evEnergyCost),evMaintenance,v.petrol_price,Math.round(petrolCost),petrolMaintenance],
                    timeline:(function(){
                        var labels=[],evArr=[],petrolArr=[];
                        for(var yr=1;yr<=v.years;yr++){
                            var km=v.daily_km*365*yr;
                            labels.push('Yr '+yr);
                            evArr.push(Math.round(v.ev_price+km/v.ev_efficiency*v.elec_rate+3000*yr));
                            petrolArr.push(Math.round(v.petrol_price+km/v.mileage*v.petrol_rate+8000*yr));
                        }
                        return {labels:labels,datasets:[
                            {label:'EV Total Cost',data:evArr,fill:false},
                            {label:'Petrol Total Cost',data:petrolArr,fill:false}
                        ]};
                    })()
                }
            };
        };

  // ══════════════════════════════════════════════════════
  // NEW EVERYDAY / BUSINESS CALCULATORS
  // ══════════════════════════════════════════════════════

  if(DB['ecomprofit'] && DB['ecomprofit'].calc===null) DB['ecomprofit'].calc=function(v){
    var gstRate=parseFloat(v.gstRate_ec)||18;
    var gstAmt=v.sellingPrice_ec*gstRate/(100+gstRate);
    var platformFeeAmt=v.sellingPrice_ec*v.platformFee/100;
    var totalCost=v.productCost_ec+v.shippingCost+platformFeeAmt+v.adSpend+v.packagingCost;
    var grossProfit=v.sellingPrice_ec-gstAmt-totalCost;
    var returnCost=(v.productCost_ec+v.shippingCost*2)*v.returnRate_ec/100;
    var netProfit=grossProfit-returnCost;
    var margin=(netProfit/v.sellingPrice_ec)*100;
    var breakEvenUnits=v.adSpend>0?Math.ceil(v.adSpend/(grossProfit-returnCost+v.adSpend)):0;
    return {
      main:{label:"Net Profit per Order",value:"₹"+netProfit.toFixed(2),pos:netProfit>0},
      secondary:[
        {label:"Selling Price",value:"₹"+v.sellingPrice_ec},
        {label:"GST ("+gstRate+"%)",value:"₹"+gstAmt.toFixed(2)},
        {label:"Platform Fee ("+v.platformFee+"%)",value:"₹"+platformFeeAmt.toFixed(2)},
        {label:"Product + Packaging + Shipping",value:"₹"+(v.productCost_ec+v.packagingCost+v.shippingCost)},
        {label:"Ad Spend per Order",value:"₹"+v.adSpend},
        {label:"Return/RTO Cost ("+v.returnRate_ec+"%)",value:"₹"+returnCost.toFixed(2)},
        {label:"Net Margin",value:margin.toFixed(1)+"%",pos:margin>10},
        {label:"Monthly Profit (100 orders)",value:"₹"+Math.round(netProfit*100).toLocaleString('en-IN')}
      ],
      chart:{a:Math.round(totalCost+gstAmt+returnCost),b:Math.round(Math.max(0,netProfit)),lA:"Total Costs",lB:"Net Profit"}
    };
  };

  if(DB['restaurantcost'] && DB['restaurantcost'].calc===null) DB['restaurantcost'].calc=function(v){
    var rawCost=v.ingredientCost*(1+v.wastageFood/100)*v.portionSize;
    var menuPrice=rawCost/(v.targetFoodCost/100);
    var gstRateMap={"5% (non-AC restaurant)":5,"18% (AC / fine dining)":18,"0% (cloud kitchen < ₹7.5L)":0};
    var gst=gstRateMap[v.gstFood]||5;
    var priceWithGST=menuPrice*(1+gst/100);
    var grossProfit=menuPrice-rawCost;
    var margin=((grossProfit/menuPrice)*100);
    var rounded=Math.ceil(priceWithGST/10)*10-1;
    return {
      main:{label:"Recommended Menu Price",value:"₹"+Math.round(menuPrice)+" (₹"+rounded+" with GST)"},
      secondary:[
        {label:"Raw Ingredient Cost",value:"₹"+rawCost.toFixed(2)},
        {label:"Food Cost %",value:v.targetFoodCost+"%"},
        {label:"Gross Profit per Plate",value:"₹"+grossProfit.toFixed(2)},
        {label:"Gross Margin",value:margin.toFixed(1)+"%"},
        {label:"Price incl. GST ("+gst+"%)",value:"₹"+priceWithGST.toFixed(2)},
        {label:"Psycho-Pricing",value:"₹"+rounded},
        {label:"For 50 plates/day",value:"₹"+Math.round(grossProfit*50).toLocaleString('en-IN')+" gross profit"}
      ]
    };
  };

  if(DB['subscriptionpricing'] && DB['subscriptionpricing'].calc===null) DB['subscriptionpricing'].calc=function(v){
    var mrr=v.monthlyPrice*v.subscribers;
    var arr=mrr*12;
    var churnedSubs=Math.round(v.subscribers*v.monthlyChurn/100);
    var netNewSubs=v.monthlyNewSub-churnedSubs;
    var avgLifetime=1/(v.monthlyChurn/100);
    var ltv=v.monthlyPrice*avgLifetime;
    var ltvCacRatio=ltv/v.acquisitionCost;
    var paybackMonths=v.acquisitionCost/v.monthlyPrice;
    var annualPrice=v.monthlyPrice*12*(1-v.annualDiscountPct/100);
    var annualSaving=v.monthlyPrice*12-annualPrice;
    var subs6mo=v.subscribers;
    for(var m=0;m<6;m++) subs6mo=Math.round(subs6mo*(1-v.monthlyChurn/100)+v.monthlyNewSub);
    return {
      main:{label:"MRR",value:"₹"+mrr.toLocaleString('en-IN')},
      secondary:[
        {label:"ARR",value:"₹"+arr.toLocaleString('en-IN')},
        {label:"Monthly Churn",value:churnedSubs+" subscribers ("+v.monthlyChurn+"%)"},
        {label:"Net Growth/Month",value:(netNewSubs>0?"+":"")+netNewSubs+" subscribers"},
        {label:"Avg Customer Lifetime",value:avgLifetime.toFixed(1)+" months"},
        {label:"LTV",value:"₹"+Math.round(ltv).toLocaleString('en-IN')},
        {label:"LTV:CAC Ratio",value:ltvCacRatio.toFixed(1)+"× "+(ltvCacRatio>=3?"✅":"⚠ aim for 3×+")},
        {label:"CAC Payback",value:paybackMonths.toFixed(1)+" months"},
        {label:"Annual Plan Price",value:"₹"+Math.round(annualPrice)+" (save ₹"+Math.round(annualSaving)+")"},
        {label:"Subscribers in 6 months",value:subs6mo.toLocaleString()}
      ]
    };
  };

  if(DB['uniteconomics'] && DB['uniteconomics'].calc===null) DB['uniteconomics'].calc=function(v){
    var contribution=v.revenuePerUnit-v.cogsPerUnit-v.opexPerUnit;
    var contributionMargin=(contribution/v.revenuePerUnit)*100;
    var ltv=v.revenuePerUnit*v.avgOrders;
    var ltvNet=contribution*v.avgOrders;
    var ltvCac=ltvNet/v.cac_ue;
    var paybackOrders=Math.ceil(v.cac_ue/contribution);
    var paybackMonths=paybackOrders*(v.avgLifetimeMonths/v.avgOrders);
    var totalCostPerCustomer=v.cac_ue+(v.cogsPerUnit+v.opexPerUnit)*v.avgOrders;
    var netProfitPerCustomer=ltv-totalCostPerCustomer;
    return {
      main:{label:"Contribution per Unit",value:"₹"+contribution.toFixed(2),pos:contribution>0},
      secondary:[
        {label:"Contribution Margin",value:contributionMargin.toFixed(1)+"%"},
        {label:"LTV (Revenue)",value:"₹"+ltv.toLocaleString('en-IN')},
        {label:"LTV (Net of costs)",value:"₹"+Math.round(ltvNet).toLocaleString('en-IN')},
        {label:"LTV:CAC Ratio",value:ltvCac.toFixed(1)+"× "+(ltvCac>=3?"✅":"⚠")},
        {label:"CAC Payback",value:paybackOrders+" orders ("+paybackMonths.toFixed(1)+" months)"},
        {label:"Net Profit per Customer",value:"₹"+Math.round(netProfitPerCustomer).toLocaleString('en-IN'),pos:netProfitPerCustomer>0},
        {label:"Verdict",value:ltvCac>=3?"✅ Healthy unit economics":ltvCac>=1?"⚠ Marginal — reduce CAC or increase LTV":"❌ Unprofitable — rethink pricing"}
      ]
    };
  };

  if(DB['eventbudget'] && DB['eventbudget'].calc===null) DB['eventbudget'].calc=function(v){
    var catering=v.cateringPerHead*v.guests;
    var subtotal=v.venueCost+catering+v.decorCost+v.entertainment+v.photography_ev;
    var misc=subtotal*v.miscPct_ev/100;
    var total=subtotal+misc;
    var perHead=total/v.guests;
    return {
      main:{label:"Total Event Budget",value:"₹"+Math.round(total).toLocaleString('en-IN')},
      secondary:[
        {label:"Venue",value:"₹"+v.venueCost.toLocaleString('en-IN')+" ("+(v.venueCost/total*100).toFixed(0)+"%)"},
        {label:"Catering ("+v.guests+" guests)",value:"₹"+catering.toLocaleString('en-IN')+" ("+(catering/total*100).toFixed(0)+"%)"},
        {label:"Decoration",value:"₹"+v.decorCost.toLocaleString('en-IN')},
        {label:"Entertainment / DJ",value:"₹"+v.entertainment.toLocaleString('en-IN')},
        {label:"Photography / Video",value:"₹"+v.photography_ev.toLocaleString('en-IN')},
        {label:"Buffer ("+v.miscPct_ev+"%)",value:"₹"+Math.round(misc).toLocaleString('en-IN')},
        {label:"Cost per Guest",value:"₹"+Math.round(perHead).toLocaleString('en-IN')}
      ],
      chart:{labels:["Venue","Catering","Decor","Entertainment","Photo/Video","Buffer"],
        data:[v.venueCost,catering,v.decorCost,v.entertainment,v.photography_ev,Math.round(misc)]}
    };
  };

  if(DB['householdbudget'] && DB['householdbudget'].calc===null) DB['householdbudget'].calc=function(v){
    var needs=v.rentEmi+v.groceries+v.utilities_hb+v.transport_hb+v.insurance_hb;
    var wants=v.lifestyle_hb;
    var targetSavings=v.monthlyIncome_hb*v.savingsTarget_hb/100;
    var actualSavings=v.monthlyIncome_hb-needs-wants;
    var needsPct=(needs/v.monthlyIncome_hb*100);
    var wantsPct=(wants/v.monthlyIncome_hb*100);
    var savingsPct=(actualSavings/v.monthlyIncome_hb*100);
    var idealNeeds=v.monthlyIncome_hb*0.5;
    var idealWants=v.monthlyIncome_hb*0.3;
    var idealSavings=v.monthlyIncome_hb*0.2;
    return {
      main:{label:"Monthly Savings",value:"₹"+Math.round(actualSavings).toLocaleString('en-IN'),pos:actualSavings>=targetSavings},
      secondary:[
        {label:"Needs (rent+grocery+utilities)",value:"₹"+needs.toLocaleString('en-IN')+" ("+needsPct.toFixed(0)+"%) "+(needsPct<=50?"✅":"⚠ over 50%")},
        {label:"Wants (lifestyle)",value:"₹"+wants.toLocaleString('en-IN')+" ("+wantsPct.toFixed(0)+"%) "+(wantsPct<=30?"✅":"⚠ over 30%")},
        {label:"Savings",value:savingsPct.toFixed(0)+"% "+(savingsPct>=20?"✅":"⚠ below 20%")},
        {label:"50/30/20 Target — Needs",value:"₹"+Math.round(idealNeeds).toLocaleString('en-IN')},
        {label:"50/30/20 Target — Wants",value:"₹"+Math.round(idealWants).toLocaleString('en-IN')},
        {label:"50/30/20 Target — Savings",value:"₹"+Math.round(idealSavings).toLocaleString('en-IN')},
        {label:"Annual Savings (projected)",value:"₹"+Math.round(actualSavings*12).toLocaleString('en-IN')},
        {label:"Verdict",value:savingsPct>=20?"✅ Healthy budget":savingsPct>=10?"⚠ Reduce wants":"❌ Cut non-essentials"}
      ],
      chart:{labels:["Needs","Wants","Savings"],data:[Math.round(needs),Math.round(wants),Math.round(Math.max(0,actualSavings))]}
    };
  };

  // ══════════════════════════════════════════════════════
  // NEW EVERYDAY CALCULATORS — April 2026 Batch
  // ══════════════════════════════════════════════════════

  if(DB['dataUsage'] && DB['dataUsage'].calc===null) DB['dataUsage'].calc=function(v){
    // Data consumption rates (MB per unit)
    var ytRates={"SD (360p)":300,"HD (720p)":900,"HD (1080p)":1800,"4K":7000}; // MB/hour
    var ytRate=ytRates[v.du_ytQuality]||900;
    var ytDaily=v.du_youtube*ytRate; // MB
    var instaDaily=v.du_instagram*2.5; // ~150 MB/hour = 2.5 MB/min
    var videoCallDaily=v.du_videoCalls*5; // ~300MB/hour = 5 MB/min
    var musicDaily=v.du_music*72; // ~72 MB/hour (Spotify normal quality)
    var browsingDaily=v.du_browsing*60; // ~60 MB/hour
    var totalDailyMB=ytDaily+instaDaily+videoCallDaily+musicDaily+browsingDaily;
    var totalDailyGB=totalDailyMB/1024;
    var totalMonthlyGB=totalDailyGB*30;
    // Plan recommendation (Indian market)
    var recommendedPlan;
    if(totalDailyGB<=1.5) recommendedPlan="Jio ₹209 (1.5 GB/day, 28 days)";
    else if(totalDailyGB<=2) recommendedPlan="Jio ₹249 (2 GB/day, 28 days)";
    else if(totalDailyGB<=2.5) recommendedPlan="Airtel ₹299 (2.5 GB/day, 28 days)";
    else if(totalDailyGB<=3) recommendedPlan="Jio ₹349 (3 GB/day, 28 days)";
    else recommendedPlan="Airtel ₹449 unlimited or WiFi recommended";
    return {
      main:{label:"Daily Data Usage",value:totalDailyGB.toFixed(2)+" GB"},
      secondary:[
        {label:"Monthly Usage (30 days)",value:totalMonthlyGB.toFixed(1)+" GB"},
        {label:"YouTube ("+v.du_ytQuality+")",value:(ytDaily/1024).toFixed(2)+" GB/day"},
        {label:"Instagram/Reels",value:(instaDaily/1024).toFixed(2)+" GB/day"},
        {label:"Video Calls",value:(videoCallDaily/1024).toFixed(2)+" GB/day"},
        {label:"Music Streaming",value:(musicDaily/1024).toFixed(2)+" GB/day"},
        {label:"Web Browsing",value:(browsingDaily/1024).toFixed(2)+" GB/day"},
        {label:"Recommended Plan",value:recommendedPlan},
        {label:"Tip",value:totalDailyGB>3?"Switch to WiFi for YouTube & downloads":"Your usage is manageable on a standard plan"}
      ],
      chart:{labels:["YouTube","Instagram","Video Calls","Music","Browsing"],
        data:[Math.round(ytDaily),Math.round(instaDaily),Math.round(videoCallDaily),Math.round(musicDaily),Math.round(browsingDaily)]}
    };
  };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('everyday');
})();
