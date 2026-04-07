/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-science.js
   LAZY FILE: calc() functions for category "science"
   Loaded on-demand when user opens a science calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['speed_dist'] && DB['speed_dist'].calc===null) DB['speed_dist'].calc=function(v){
            let {speed,distance,time}=v;
            const zeros=[!speed,!distance,!time].filter(Boolean).length;
            if(zeros!==1) return {main:{label:"Tip",value:"Set exactly one value to 0 to solve"}};
            if(!speed) speed=distance/time;
            else if(!distance) distance=speed*time;
            else time=distance/speed;
            const h=Math.floor(time), m=Math.round((time-h)*60);
            return {
                main:{label:"Result",value:`Speed=${speed.toFixed(2)} km/h  Dist=${distance.toFixed(2)} km  Time=${h}h ${m}m`},
                secondary:[
                    {label:"Speed",value:speed.toFixed(3)+" km/h"},
                    {label:"Distance",value:distance.toFixed(3)+" km"},
                    {label:"Time",value:`${h}h ${m}m`},
                    {label:"Speed in m/s",value:(speed/3.6).toFixed(3)+" m/s"}
                ]
            };
        };

  if(DB['newtons'] && DB['newtons'].calc===null) DB['newtons'].calc=function(v){
            const F=v.mass*v.acceleration;
            const ke=0.5*v.mass*v.velocity**2;
            const momentum=v.mass*v.velocity;
            const weight=v.mass*9.81;
            return {
                main:{label:"Force (F=ma)",value:F.toFixed(4)+" N"},
                secondary:[
                    {label:"Kinetic Energy",value:ke.toFixed(4)+" J"},
                    {label:"Momentum (p=mv)",value:momentum.toFixed(4)+" kg·m/s"},
                    {label:"Weight on Earth",value:weight.toFixed(2)+" N"},
                    {label:"Weight on Moon",value:(v.mass*1.62).toFixed(2)+" N"}
                ]
            };
        };

  if(DB['ohm_advanced'] && DB['ohm_advanced'].calc===null) DB['ohm_advanced'].calc=function(v){
            const rs=v.r1+v.r2+v.r3;
            const rp=1/(1/v.r1+1/v.r2+1/v.r3);
            const Is=v.voltage/rs, Ip=v.voltage/rp;
            return {
                main:{label:"Series Resistance",value:rs.toFixed(3)+" Ω"},
                secondary:[
                    {label:"Parallel Resistance",value:rp.toFixed(3)+" Ω"},
                    {label:"Series Current",value:Is.toFixed(4)+" A"},
                    {label:"Parallel Current",value:Ip.toFixed(4)+" A"},
                    {label:"Power (Series)",value:(v.voltage*Is).toFixed(3)+" W"},
                    {label:"Power (Parallel)",value:(v.voltage*Ip).toFixed(3)+" W"}
                ]
            };
        };

  if(DB['density'] && DB['density'].calc===null) DB['density'].calc=function(v){
            let {mass,volume,density}=v;
            if(!density) density=mass/volume;
            else if(!volume) volume=mass/density;
            else mass=density*volume;
            return {
                main:{label:"Density",value:density.toFixed(4)+" g/cm³"},
                secondary:[
                    {label:"Mass",value:mass.toFixed(4)+" g"},
                    {label:"Volume",value:volume.toFixed(4)+" cm³"},
                    {label:"kg/m³",value:(density*1000).toFixed(2)},
                    {label:"Floats in water?",value:density<1?"Yes (ρ<1)":"No (ρ≥1)"}
                ]
            };
        };

  if(DB['chemMolar'] && DB['chemMolar'].calc===null) DB['chemMolar'].calc=function(v){
            const mass=v.moles*v.molarMass;
            const molarity=v.moles/(v.volume/1000);
            return {
                main:{label:"Mass of Solute",value:mass.toFixed(4)+" g"},
                secondary:[
                    {label:"Molarity (M)",value:molarity.toFixed(4)+" mol/L"},
                    {label:"Millimoles",value:(v.moles*1000).toFixed(2)+" mmol"},
                    {label:"Molecules",value:(v.moles*6.022e23).toExponential(3)}
                ]
            };
        };

  if(DB['wavelength'] && DB['wavelength'].calc===null) DB['wavelength'].calc=function(v){
            const lambda=v.speed/v.frequency;
            const period=1/v.frequency;
            const angFreq=2*Math.PI*v.frequency;
            return {
                main:{label:"Wavelength (λ)",value:lambda.toFixed(6)+" m"},
                secondary:[
                    {label:"Period (T)",value:period.toFixed(6)+" s"},
                    {label:"Angular Frequency (ω)",value:angFreq.toFixed(4)+" rad/s"},
                    {label:"Energy (E=hf)",value:(6.626e-34*v.frequency).toExponential(3)+" J"}
                ]
            };
        };

  if(DB['gravitational'] && DB['gravitational'].calc===null) DB['gravitational'].calc=function(v){
            const G=6.674e-11;
            const F=G*v.m1*v.m2/(v.r**2);
            const g1=G*v.m1/(v.r**2);
            return {
                main:{label:"Gravitational Force",value:F.toExponential(4)+" N"},
                secondary:[
                    {label:"G constant",value:"6.674×10⁻¹¹ N·m²/kg²"},
                    {label:"Field strength at r",value:g1.toExponential(4)+" m/s²"},
                    {label:"Escape velocity",value:Math.sqrt(2*G*v.m1/v.r).toFixed(2)+" m/s"}
                ]
            };
        };

  if(DB['halflife'] && DB['halflife'].calc===null) DB['halflife'].calc=function(v){
            const remaining=v.initial*Math.pow(0.5,v.time/v.halflife);
            const decayed=v.initial-remaining;
            const halfLives=v.time/v.halflife;
            const activityRatio=Math.pow(0.5,halfLives);
            return {
                main:{label:"Remaining Quantity",value:remaining.toFixed(4)+" g"},
                secondary:[
                    {label:"Decayed",value:decayed.toFixed(4)+" g"},
                    {label:"Half-Lives Elapsed",value:halfLives.toFixed(2)},
                    {label:"Fraction Remaining",value:(activityRatio*100).toFixed(4)+"%"}
                ]
            };
        };

  if(DB['ph'] && DB['ph'].calc===null) DB['ph'].calc=function(v){
            const ph=-Math.log10(v.conc);
            const poh=14-ph;
            const type=ph<7?"Acid":ph===7?"Neutral":"Base";
            const tempCorr=v.temp!==25?` (at ${v.temp}°C)`:""
            return {
                main:{label:"pH"+tempCorr,value:ph.toFixed(4)},
                secondary:[
                    {label:"pOH",value:poh.toFixed(4)},
                    {label:"OH⁻ Concentration",value:Math.pow(10,-poh).toExponential(4)+" mol/L"},
                    {label:"Type",value:type},
                    {label:"pH Scale",value:"0 (acid) ← 7 (neutral) → 14 (base)"}
                ]
            };
        };

  if(DB['kinematicCalc'] && DB['kinematicCalc'].calc===null) DB['kinematicCalc'].calc=function(v){
            const v_=v.u+v.a*v.t;
            const s=v.u*v.t+0.5*v.a*v.t**2;
            const v2=v.u**2+2*v.a*s;
            return {
                main:{label:"Final Velocity (v)",value:v_.toFixed(4)+" m/s"},
                secondary:[
                    {label:"Distance (s)",value:s.toFixed(4)+" m"},
                    {label:"v² = u² + 2as",value:v2.toFixed(4)},
                    {label:"KE at v (1kg)",value:(0.5*v_**2).toFixed(4)+" J"},
                    {label:"Avg Velocity",value:((v.u+v_)/2).toFixed(4)+" m/s"}
                ]
            };
        };

  if(DB['thermodynamics'] && DB['thermodynamics'].calc===null) DB['thermodynamics'].calc=function(v){
            const p2Boyle=v.p1*v.v1/v.v2;
            const v2Charles=v.v1*v.t2/v.t1;
            const p2Gay=v.p1*v.t2/v.t1;
            const n=(v.p1*v.v1)/(0.0821*v.t1);
            const combinedP2=v.p1*v.v1*v.t2/(v.v2*v.t1);
            return {
                main:{label:"Moles of Gas (n)",value:n.toFixed(4)+" mol"},
                secondary:[
                    {label:"Boyle's P₂ (V₂="+v.v2+"L, const T)",value:p2Boyle.toFixed(4)+" atm"},
                    {label:"Charles V₂ (T₂="+v.t2+"K, const P)",value:v2Charles.toFixed(4)+" L"},
                    {label:"Gay-Lussac P₂ (const V)",value:p2Gay.toFixed(4)+" atm"},
                    {label:"Combined Law P₂",value:combinedP2.toFixed(4)+" atm"},
                    {label:"PV = nRT check",value:(n*0.0821*v.t1).toFixed(4)+" L·atm"}
                ]
            };
        };

  if(DB['acceleration'] && DB['acceleration'].calc===null) DB['acceleration'].calc=function(v){
            const a = (v.v2_acc - v.v1_acc) / v.time_acc;
            const s = v.v1_acc*v.time_acc + 0.5*a*v.time_acc*v.time_acc;
            const kph_u = v.v1_acc*3.6, kph_v = v.v2_acc*3.6;
            const gForce = a / 9.81;
            return {
                main:{label:"Acceleration (a)",value:a.toFixed(4)+" m/s²"},
                secondary:[
                    {label:"Distance covered",value:s.toFixed(2)+" m"},
                    {label:"G-force",value:Math.abs(gForce).toFixed(3)+" g "+(a<0?"(deceleration)":"")},
                    {label:"Initial speed",value:kph_u.toFixed(1)+" km/h"},
                    {label:"Final speed",value:kph_v.toFixed(1)+" km/h"},
                    {label:"Formula",value:"a = (v − u) / t"}
                ]
            };
        };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('science');
})();
