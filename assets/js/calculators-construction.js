/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-construction.js
   LAZY FILE: calc() functions for category "construction"
   Loaded on-demand when user opens a construction calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['concrete'] && DB['concrete'].calc===null) DB['concrete'].calc=function(v){
            const vol=v.length*v.width*v.depth;
            const dryVol=vol*1.54;
            const ratios={"M15 (1:2:4)":[1,2,4],"M20 (1:1.5:3)":[1,1.5,3],"M25 (1:1:2)":[1,1,2]};
            const [c,s,a]=ratios[v.mix];
            const total=c+s+a;
            const cement=Math.ceil((dryVol*c/total)*1440/50);
            const sand=(dryVol*s/total).toFixed(3);
            const aggregate=(dryVol*a/total).toFixed(3);
            return {
                main:{label:"Total Volume",value:vol.toFixed(3)+" m³"},
                secondary:[
                    {label:"Cement Bags (50kg)",value:cement+" bags"},
                    {label:"Sand",value:sand+" m³"},
                    {label:"Aggregate",value:aggregate+" m³"},
                    {label:"Dry Mix Volume",value:dryVol.toFixed(3)+" m³"}
                ]
            };
        };

  if(DB['bricks'] && DB['bricks'].calc===null) DB['bricks'].calc=function(v){
            const tMap={"Half Brick (115mm)":0.115,"One Brick (230mm)":0.230,"1.5 Brick (345mm)":0.345};
            const t=tMap[v.thickness];
            const wallVol=v.length*v.height*t;
            // Brick volume: L × H × W (thickness of wall = brick width)
            const brickVol=(v.brickL/1000)*(v.brickH/1000)*t;
            const netBricks=Math.ceil(wallVol/brickVol); // bricks without wastage
            const bricks=Math.ceil(netBricks*1.05); // with 5% wastage
            // Mortar = wall volume minus net brick volume (using net count, not wastage-inflated count)
            const mortarVol=Math.max(0, wallVol - netBricks*brickVol);
            const area=v.length*v.height;
            return {
                main:{label:"Bricks Required (incl. 5% extra)",value:bricks.toLocaleString()},
                secondary:[
                    {label:"Wall Area",value:area.toFixed(2)+" m²"},
                    {label:"Wall Volume",value:wallVol.toFixed(3)+" m³"},
                    {label:"Mortar Volume (est.)",value:mortarVol.toFixed(4)+" m³"},
                    {label:"Net Bricks (without wastage)",value:netBricks.toLocaleString()}
                ]
            };
        };

  if(DB['paint'] && DB['paint'].calc===null) DB['paint'].calc=function(v){
            const wallArea=2*(v.length+v.width)*v.height;
            const deductions=v.doors*1.89+v.windows*1.2;
            const paintArea=(wallArea-deductions)*v.coats;
            const coverage=12; // sq m per litre
            const litres=paintArea/coverage;
            const primerLitres=((wallArea-deductions)/coverage).toFixed(2);
            return {
                main:{label:"Paint Required",value:litres.toFixed(2)+" L"},
                secondary:[
                    {label:"Paintable Area",value:(wallArea-deductions).toFixed(2)+" m²"},
                    {label:"Primer Required",value:primerLitres+" L"},
                    {label:"4L Tins Needed",value:Math.ceil(litres/4)+" tins"},
                    {label:"Ceiling Area",value:(v.length*v.width).toFixed(2)+" m²"}
                ]
            };
        };

  if(DB['flooring'] && DB['flooring'].calc===null) DB['flooring'].calc=function(v){
            const roomArea=v.roomL*v.roomW;
            const tileArea=(v.tileL/1000)*(v.tileW/1000);
            const tilesNeeded=Math.ceil(roomArea/tileArea*1.1);
            const boxes=Math.ceil(tilesNeeded/v.boxQty);
            const wasteTiles=Math.ceil(tilesNeeded-roomArea/tileArea);
            return {
                main:{label:"Tiles Required",value:tilesNeeded.toLocaleString()},
                secondary:[
                    {label:"Room Area",value:roomArea.toFixed(2)+" m²"},
                    {label:"Boxes Needed",value:boxes},
                    {label:"Wastage Tiles (10%)",value:wasteTiles},
                    {label:"Tile Area",value:(tileArea*10000).toFixed(0)+" cm²"}
                ]
            };
        };

  if(DB['steel'] && DB['steel'].calc===null) DB['steel'].calc=function(v){
            const weightPerM=(v.dia**2)/162;
            const totalWeight=weightPerM*v.length*v.count;
            return {
                main:{label:"Total Steel Weight",value:totalWeight.toFixed(2)+" kg"},
                secondary:[
                    {label:"Weight per Meter",value:weightPerM.toFixed(3)+" kg/m"},
                    {label:"Per Bar Weight",value:(weightPerM*v.length).toFixed(3)+" kg"},
                    {label:"Total Length",value:(v.length*v.count).toLocaleString()+" m"},
                    {label:"Formula",value:"D²/162 kg/m"}
                ]
            };
        };

  if(DB['roofing'] && DB['roofing'].calc===null) DB['roofing'].calc=function(v){
            const slope=1/Math.cos(v.pitch*Math.PI/180);
            const actualArea=v.length*v.width*2*slope;
            const sheets=Math.ceil(actualArea/v.sheetArea*1.1);
            const ridgeCaps=Math.ceil(v.length/1.8);
            return {
                main:{label:"Roof Area",value:actualArea.toFixed(2)+" m²"},
                secondary:[
                    {label:"Sheets Required",value:sheets},
                    {label:"Ridge Caps",value:ridgeCaps},
                    {label:"Slope Factor",value:slope.toFixed(3)},
                    {label:"Flat Area",value:(v.length*v.width*2).toFixed(2)+" m²"}
                ]
            };
        };

  if(DB['earthwork'] && DB['earthwork'].calc===null) DB['earthwork'].calc=function(v){
            const bankVol=v.length*v.width*v.depth;
            const loosVol=bankVol*(1+v.swell/100);
            const weight=bankVol*1800;
            return {
                main:{label:"Excavation Volume",value:bankVol.toFixed(3)+" m³"},
                secondary:[
                    {label:"Loose (Truck) Volume",value:loosVol.toFixed(3)+" m³"},
                    {label:"Est. Soil Weight",value:(weight/1000).toFixed(2)+" tonnes"},
                    {label:"Truck Loads (6m³)",value:Math.ceil(loosVol/6)+" trucks"}
                ]
            };
        };

  if(DB['plasterwork'] && DB['plasterwork'].calc===null) DB['plasterwork'].calc=function(v){
            const area=v.length*v.height;
            const vol=area*v.thickness/1000*1.35;
            const ratioMap={"1:3 (rich)":[1,3],"1:4 (standard)":[1,4],"1:6 (lean)":[1,6]};
            const [c,s]=ratioMap[v.ratio];
            const cVol=vol*c/(c+s), sVol=vol*s/(c+s);
            const bags=Math.ceil(cVol*1440/50);
            return {
                main:{label:"Plastering Area",value:area.toFixed(2)+" m²"},
                secondary:[
                    {label:"Cement Bags (50kg)",value:bags},
                    {label:"Sand Required",value:sVol.toFixed(3)+" m³"},
                    {label:"Dry Mortar Volume",value:vol.toFixed(3)+" m³"},
                    {label:"Water (approx)",value:Math.round(bags*25)+" litres"}
                ]
            };
        };

  if(DB['waterTank'] && DB['waterTank'].calc===null) DB['waterTank'].calc=function(v){
            const total=v.people*v.days*v.perHead;
            const cu_m=total/1000;
            const l=Math.cbrt(cu_m).toFixed(2);
            return {
                main:{label:"Tank Capacity Needed",value:total.toLocaleString()+" L"},
                secondary:[
                    {label:"In Cubic Meters",value:cu_m.toFixed(3)+" m³"},
                    {label:"Cube Side (if cubic)",value:l+" m"},
                    {label:"Daily Requirement",value:(v.people*v.perHead).toLocaleString()+" L/day"},
                    {label:"Standard Tank Size",value:total<=500?"500L":total<=1000?"1000L":total<=2000?"2000L":"Custom"}
                ]
            };
        };

  if(DB['landarea'] && DB['landarea'].calc===null) DB['landarea'].calc=function(v){
            const toSqM={
                "Square Meter":1,"Square Feet":0.0929,"Square Yard":0.836,"Acre":4046.86,
                "Hectare":10000,"Bigha (UP/Bihar)":2529.3,"Bigha (Rajasthan)":1618.74,
                "Cent":40.47,"Gunta":101.17,"Marla":25.29,"Kanal":505.86
            };
            const sqm = v.areaVal * (toSqM[v.fromUnit]||1);
            return {
                main:{label:"Square Meters",value:sqm.toFixed(4)+" m²"},
                secondary:[
                    {label:"Square Feet",value:(sqm/0.0929).toFixed(2)+" sq ft"},
                    {label:"Square Yards",value:(sqm/0.836).toFixed(2)+" sq yd"},
                    {label:"Acre",value:(sqm/4046.86).toFixed(6)+" acres"},
                    {label:"Hectare",value:(sqm/10000).toFixed(6)+" ha"},
                    {label:"Bigha (UP/Bihar)",value:(sqm/2529.3).toFixed(4)},
                    {label:"Cent",value:(sqm/40.47).toFixed(4)},
                    {label:"Gunta",value:(sqm/101.17).toFixed(4)}
                ]
            };
        };

  if(DB['stampdutycalc'] && DB['stampdutycalc'].calc===null) DB['stampdutycalc'].calc=function(v){
            const rates={
                Maharashtra:{Male:6,Female:5,Joint:5.5},
                Karnataka:{Male:5,Female:5,Joint:5},
                Delhi:{Male:6,Female:4,Joint:5},
                "Tamil Nadu":{Male:7,Female:7,Joint:7},
                "UP/Bihar":{Male:7,Female:6,Joint:6.5},
                Gujarat:{Male:4.9,Female:4.9,Joint:4.9},
                Rajasthan:{Male:6,Female:5,Joint:5.5}
            };
            const gKey = v.gender.startsWith("Joint") ? "Joint" : v.gender;
            const r = (rates[v.state]||{Male:5,Female:5,Joint:5})[gKey] || 5;
            const stamp = v.propVal * r/100;
            const reg = Math.min(v.propVal*0.01, 30000); // usually 1% capped at 30K
            const total = stamp + reg;
            return {
                main:{label:"Total Registration Cost",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Stamp Duty ("+r+"%)",value:"₹"+Math.round(stamp).toLocaleString()},
                    {label:"Registration Fee (1%)",value:"₹"+Math.round(reg).toLocaleString()},
                    {label:"Property Value",value:"₹"+v.propVal.toLocaleString()},
                    {label:"State",value:v.state},
                    {label:"Total as % of Property",value:((total/v.propVal)*100).toFixed(2)+"%"}
                ]
            };
        };

  if(DB['constructioncost'] && DB['constructioncost'].calc===null) DB['constructioncost'].calc=function(v){
            const baseCost=v.tier.includes("2500")?2500:v.tier.includes("1800")?1800:v.tier.includes("1400")?1400:v.tier.includes("1100")?1100:800;
            const finishMult={Basic:0.85,Standard:1.0,Premium:1.25,Luxury:1.6}[v.finishLevel]||1.0;
            const costPerSqft=baseCost*finishMult;
            const base=costPerSqft*v.area_c*v.floors;
            const misc=base*0.10; // approx 10% misc
            const total=base+misc;
            return {
                main:{label:"Estimated Construction Cost",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Cost per Sq Ft",value:"₹"+Math.round(costPerSqft).toLocaleString()},
                    {label:"Base Construction",value:"₹"+Math.round(base).toLocaleString()},
                    {label:"Miscellaneous (10%)",value:"₹"+Math.round(misc).toLocaleString()},
                    {label:"Total Area",value:(v.area_c*v.floors).toLocaleString()+" sq ft"},
                    {label:"Per Floor Cost",value:"₹"+Math.round(base/v.floors).toLocaleString()}
                ]
            };
        };

  if(DB['solarpanel'] && DB['solarpanel'].calc===null) DB['solarpanel'].calc=function(v){
            const dailyGen = v.systemKw * 4.5; // avg 4.5 sun hours in India
            const monthlyGen = dailyGen * 30;
            const monthlySaving = Math.min(monthlyGen * v.tariff, v.monthlyBill);
            const annualSaving = monthlySaving * 12;
            const payback = v.systemCost / annualSaving;
            const lifetime25 = annualSaving * 25 - v.systemCost;
            const co2Saved = monthlyGen * 12 * 0.82 / 1000; // tonnes/year
            return {
                main:{label:"Annual Savings",value:"₹"+Math.round(annualSaving).toLocaleString()},
                secondary:[
                    {label:"Monthly Generation",value:Math.round(monthlyGen)+" units"},
                    {label:"Monthly Bill Savings",value:"₹"+Math.round(monthlySaving).toLocaleString()},
                    {label:"Payback Period",value:payback.toFixed(1)+" years"},
                    {label:"25-Year Net Savings",value:"₹"+Math.round(lifetime25).toLocaleString()},
                    {label:"CO₂ Saved per Year",value:co2Saved.toFixed(2)+" tonnes"}
                ]
            };
        };

  if(DB['homerenovation'] && DB['homerenovation'].calc===null) DB['homerenovation'].calc=function(v){
            const qualityMult = {"Economy":0.6,"Standard":1.0,"Premium":1.6,"Luxury":2.5};
            const cityMult = {"Metro (Delhi/Mumbai)":1.2,"Tier-1 (Pune/Hyd)":1.0,"Tier-2":0.8,"Tier-3":0.65};
            const qm = qualityMult[v.quality]||1;
            const cm = cityMult[v.city]||1;
            let base = {};
            if(v.scope==="Full Renovation"){
                base = {painting:45,flooring:120,electrical:80,plumbing:60,kitchen:350,bathroom:250,carpentry:200,false_ceiling:100,misc:50};
            } else if(v.scope==="Kitchen Only"){
                base = {kitchen_cabinets:400,countertop:150,tiles:80,plumbing:60,electrical:40,chimney_sink:80,misc:30};
            } else if(v.scope==="Bathroom Only"){
                base = {tiles:120,fixtures:150,plumbing:80,waterproofing:50,vanity:60,misc:25};
            } else if(v.scope==="Painting Only"){
                base = {painting:40,primer:10,putty:15,labour:20,misc:5};
            } else {
                base = {flooring_material:100,labour:40,leveling:20,skirting:15,misc:10};
            }
            const items = Object.entries(base).map(([k,rate])=>{
                const cost = Math.round(v.area * rate * qm * cm);
                return {label:k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),value:"₹"+cost.toLocaleString()};
            });
            const totalCost = Object.values(base).reduce((s,r)=>s+r,0)*v.area*qm*cm;
            return {
                main:{label:"Estimated Total Cost",value:"₹"+Math.round(totalCost).toLocaleString()},
                secondary:[
                    ...items,
                    {label:"Cost per sq ft",value:"₹"+Math.round(totalCost/v.area).toLocaleString()},
                    {label:"Timeline (est.)",value:v.scope==="Full Renovation"?"45-60 days":v.scope==="Painting Only"?"7-10 days":"15-25 days"}
                ],
                chart:{labels:Object.keys(base).map(k=>k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())),
                    data:Object.values(base).map(r=>Math.round(v.area*r*qm*cm))}
            };
        };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('construction');
})();
