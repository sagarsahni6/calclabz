/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-engineering.js
   LAZY FILE: calc() functions for category "engineering"
   Loaded on-demand when user opens a engineering calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['ohmslaw'] && DB['ohmslaw'].calc===null) DB['ohmslaw'].calc=function(v){
            let V=v.v, I=v.i, R=v.r;
            const zeros=[!V,!I,!R].filter(Boolean).length;
            if(zeros!==1) return {main:{label:"Tip",value:"Set exactly one value to 0 to solve for it"}};
            if(!V) V=I*R;
            else if(!I) I=V/R;
            else R=V/I;
            const P=V*I;
            return {
                main:{label:"Solved",value:`V=${V.toFixed(3)}V  I=${I.toFixed(3)}A  R=${R.toFixed(3)}Ω`},
                secondary:[
                    {label:"Power (P=VI)",value:P.toFixed(3)+" W"},
                    {label:"Energy (1hr)",value:(P/1000).toFixed(4)+" kWh"},
                    {label:"Resistance",value:R.toFixed(4)+" Ω"}
                ]
            };
        };

  if(DB['resistor'] && DB['resistor'].calc===null) DB['resistor'].calc=function(v){
            const vals={Black:0,Brown:1,Red:2,Orange:3,Yellow:4,Green:5,Blue:6,Violet:7,Grey:8,White:9};
            const mults={"×1":1,"×10":10,"×100":100,"×1K":1000,"×10K":10000,"×100K":100000,"×1M":1000000,"×0.1":0.1,"×0.01":0.01};
            const res=(vals[v.b1]*10+vals[v.b2])*mults[v.mult];
            const tolPct=parseFloat(v.tol.replace(/.*±(\d+\.?\d*)%.*/,"$1"));
            const fmt=res>=1000000?`${(res/1000000).toFixed(2)}MΩ`:res>=1000?`${(res/1000).toFixed(2)}kΩ`:`${res}Ω`;
            return {
                main:{label:"Resistance",value:fmt},
                secondary:[
                    {label:"Tolerance",value:"±"+tolPct+"%"},
                    {label:"Min Value",value:((res*(1-tolPct/100))).toFixed(2)+" Ω"},
                    {label:"Max Value",value:((res*(1+tolPct/100))).toFixed(2)+" Ω"}
                ]
            };
        };

  if(DB['power'] && DB['power'].calc===null) DB['power'].calc=function(v){
            const I=v.power/v.voltage, R=v.voltage/I;
            return {
                main:{label:"Current (A)",value:I.toFixed(4)+" A"},
                secondary:[
                    {label:"Resistance",value:R.toFixed(2)+" Ω"},
                    {label:"kWh per day (8hr)",value:(v.power*8/1000).toFixed(3)+" kWh"},
                    {label:"Monthly cost (₹8/unit)",value:"₹"+(v.power*8/1000*30*8).toFixed(2)},
                    {label:"Annual cost",value:"₹"+(v.power*8/1000*365*8).toFixed(2)}
                ]
            };
        };

  if(DB['pythagorean'] && DB['pythagorean'].calc===null) DB['pythagorean'].calc=function(v){
            let {a,b,c}=v;
            if(!c) c=Math.sqrt(a*a+b*b);
            else if(!b) b=Math.sqrt(c*c-a*a);
            else if(!a) a=Math.sqrt(c*c-b*b);
            const area=0.5*a*b, perimeter=a+b+c;
            return {
                main:{label:"Hypotenuse C",value:c.toFixed(6)},
                secondary:[
                    {label:"Side A",value:a.toFixed(6)},
                    {label:"Side B",value:b.toFixed(6)},
                    {label:"Triangle Area",value:area.toFixed(4)},
                    {label:"Perimeter",value:perimeter.toFixed(4)}
                ]
            };
        };

  if(DB['ledresistor'] && DB['ledresistor'].calc===null) DB['ledresistor'].calc=function(v){
            const vr = v.vsupply - v.vled;
            const r = vr / (v.iled/1000);
            const power = vr * (v.iled/1000);
            // Find nearest E12 resistor value (decade-scaled)
            const e12 = [10,12,15,18,22,27,33,39,47,56,68,82];
            let e12r = e12[0]; // default
            // Determine the decade multiplier
            const decade = Math.pow(10, Math.floor(Math.log10(r)));
            const normalised = r / decade;
            // Find closest E12 value in this decade
            let bestDiff = Infinity;
            for(const val of e12){
                const candidate = val * decade / 10;
                const diff = Math.abs(candidate - r);
                if(diff < bestDiff){ bestDiff = diff; e12r = candidate; }
            }
            return {
                main:{label:"Required Resistor",value:r.toFixed(1)+" Ω"},
                secondary:[
                    {label:"Nearest E12 Value",value:e12r+" Ω"},
                    {label:"Voltage Drop across R",value:vr.toFixed(2)+" V"},
                    {label:"Power Dissipated",value:(power*1000).toFixed(1)+" mW"},
                    {label:"Use resistor rated",value:power>0.125?"0.5W minimum":"0.25W or higher"}
                ]
            };
        };

  if(DB['voltdivider'] && DB['voltdivider'].calc===null) DB['voltdivider'].calc=function(v){
            const vout = v.vin_vd * v.r2_vd / (v.r1_vd + v.r2_vd);
            const current = v.vin_vd / (v.r1_vd + v.r2_vd) * 1000;
            const ratio = v.r2_vd/(v.r1_vd+v.r2_vd);
            return {
                main:{label:"Output Voltage (Vout)",value:vout.toFixed(4)+" V"},
                secondary:[
                    {label:"Division Ratio",value:(ratio*100).toFixed(2)+"%"},
                    {label:"Current through divider",value:current.toFixed(3)+" mA"},
                    {label:"Power dissipated (R1)",value:(v.vin_vd*v.vin_vd/v.r1_vd*1000).toFixed(2)+" mW"},
                    {label:"Power dissipated (R2)",value:(vout*vout/v.r2_vd*1000).toFixed(2)+" mW"}
                ]
            };
        };

  if(DB['batterylife'] && DB['batterylife'].calc===null) DB['batterylife'].calc=function(v){
            const hours = (v.capacity_mah * v.efficiency/100) / v.current_draw;
            const days  = hours/24;
            const energyJ = v.capacity_mah * 3.7 * 3.6; // assuming 3.7V LiPo
            return {
                main:{label:"Estimated Battery Life",value:hours.toFixed(1)+" hours"},
                secondary:[
                    {label:"In days",value:days.toFixed(2)+" days"},
                    {label:"Usable Capacity",value:Math.round(v.capacity_mah*v.efficiency/100)+" mAh"},
                    {label:"Energy Content (3.7V LiPo)",value:(energyJ/1000).toFixed(2)+" kJ / "+(v.capacity_mah*3.7/1000).toFixed(2)+" Wh"},
                    {label:"At 50% efficiency",value:(v.capacity_mah*0.5/v.current_draw).toFixed(1)+" hours"}
                ]
            };
        };

  if(DB['pcbtrace'] && DB['pcbtrace'].calc===null) DB['pcbtrace'].calc=function(v){
            const I = v.current_pcb, dT = v.temp_rise;
            const isExt = v.layer.startsWith("External");
            // IPC-2221 formula
            const k = isExt ? 0.048 : 0.024;
            const b = isExt ? 0.44 : 0.44;
            const c = isExt ? 0.725 : 0.725;
            const area = Math.pow(I/(k*Math.pow(dT,b)), 1/c); // mils²
            const thickness_mils = v.thickness_pcb * 1.378; // oz to mils
            const width_mils = area / thickness_mils;
            const width_mm = width_mils * 0.0254;
            return {
                main:{label:"Minimum Trace Width",value:width_mm.toFixed(3)+" mm"},
                secondary:[
                    {label:"Width in mils",value:width_mils.toFixed(1)+" mils"},
                    {label:"Cross-section area",value:area.toFixed(1)+" mils²"},
                    {label:"Layer type",value:v.layer},
                    {label:"Add 50% safety margin",value:(width_mm*1.5).toFixed(3)+" mm"}
                ]
            };
        };

  if(DB['decibel'] && DB['decibel'].calc===null) DB['decibel'].calc=function(v){
            const isPower = v.reference.startsWith("Power");
            const ratio = isPower ? Math.pow(10, v.db_val/10) : Math.pow(10, v.db_val/20);
            const reverse_p = 10*Math.log10(ratio);
            const reverse_v = 20*Math.log10(ratio);
            const spl_context = v.db_val + " dB SPL";
            const perception = v.db_val<20?"Very quiet (whisper)":v.db_val<50?"Quiet (library)":v.db_val<70?"Moderate (conversation)":v.db_val<90?"Loud (traffic)":v.db_val<110?"Very loud (concert)":"Dangerous level";
            return {
                main:{label:isPower?"Power Ratio":"Voltage Ratio",value:ratio.toFixed(4)+"×"},
                secondary:[
                    {label:"dB (power formula)",value:reverse_p.toFixed(4)+" dB"},
                    {label:"dB (voltage formula)",value:reverse_v.toFixed(4)+" dB"},
                    {label:"Inverse ratio (1/x)",value:(1/ratio).toFixed(6)},
                    {label:"SPL perception",value:perception}
                ]
            };
        };

  if(DB['antennalen'] && DB['antennalen'].calc===null) DB['antennalen'].calc=function(v){
            const c = 299792458;
            const lambda = (c / (v.freq_mhz * 1e6)) * v.vel_factor;
            const half  = lambda/2*100;
            const quarter = lambda/4*100;
            const fiveEighths = lambda*5/8*100;
            return {
                main:{label:"Half-wave Dipole",value:half.toFixed(1)+" cm"},
                secondary:[
                    {label:"Quarter-wave Monopole",value:quarter.toFixed(1)+" cm"},
                    {label:"5/8 Wave (gain antenna)",value:fiveEighths.toFixed(1)+" cm"},
                    {label:"Full wavelength (λ)",value:(lambda*100).toFixed(1)+" cm"},
                    {label:"Frequency",value:v.freq_mhz+" MHz"},
                    {label:"Common use",value:v.freq_mhz<30?"HF/Shortwave":v.freq_mhz<300?"VHF (FM/TV)":v.freq_mhz<3000?"UHF (WiFi/Cellular)":"Microwave"}
                ]
            };
        };

  if(DB['torque'] && DB['torque'].calc===null) DB['torque'].calc=function(v){
            const tau = v.force_t * v.arm_t * Math.sin(v.angle_t*Math.PI/180);
            return {
                main:{label:"Torque (τ)",value:tau.toFixed(4)+" N·m"},
                secondary:[
                    {label:"In kgf·cm",value:(tau*10.197).toFixed(2)+" kgf·cm"},
                    {label:"In lbf·ft",value:(tau*0.7376).toFixed(4)+" lbf·ft"},
                    {label:"In lbf·in",value:(tau*8.8507).toFixed(3)+" lbf·in"},
                    {label:"Power at 100 RPM",value:(tau*100*2*Math.PI/60).toFixed(2)+" W"},
                    {label:"Formula",value:"τ = F × r × sin(θ)"}
                ]
            };
        };

  // ══════════════════════════════════════════════════════
  // NEW ENGINEERING CALCULATORS
  // ══════════════════════════════════════════════════════

  if(DB['beamload'] && DB['beamload'].calc===null) DB['beamload'].calc=function(v){
    var L=v.span,w=v.loadPerMeter,P=v.pointLoad;
    var raUDL=w*L/2,rbUDL=w*L/2;
    var raPoint=P*(L-v.loadPosition)/L,rbPoint=P*v.loadPosition/L;
    var raTotal=raUDL+raPoint,rbTotal=rbUDL+rbPoint;
    var maxMomentUDL=w*L*L/8;
    var maxMomentPoint=P*v.loadPosition*(L-v.loadPosition)/L;
    var totalMaxMoment=maxMomentUDL+maxMomentPoint;
    var maxShear=Math.max(raTotal,rbTotal);
    var deflection=5*w*Math.pow(L,4)/(384*v.EI);
    return {
      main:{label:"Max Bending Moment",value:totalMaxMoment.toFixed(2)+" kN·m"},
      secondary:[
        {label:"Reaction at A (RA)",value:raTotal.toFixed(2)+" kN"},
        {label:"Reaction at B (RB)",value:rbTotal.toFixed(2)+" kN"},
        {label:"Max Shear Force",value:maxShear.toFixed(2)+" kN"},
        {label:"UDL Moment",value:maxMomentUDL.toFixed(2)+" kN·m"},
        {label:"Point Load Moment",value:maxMomentPoint.toFixed(2)+" kN·m"},
        {label:"Max Deflection (UDL only)",value:(deflection*1000).toFixed(3)+" mm"},
        {label:"Span/Deflection Ratio",value:"L/"+(L/(deflection>0?deflection:0.001)).toFixed(0)}
      ]
    };
  };

  if(DB['heatexchanger'] && DB['heatexchanger'].calc===null) DB['heatexchanger'].calc=function(v){
    var Q=v.massFlow*v.cpFluid*(v.hotInlet-v.coldInlet)*v.effectiveness/100;
    var lmtdP=((v.hotInlet-v.coldOutlet)-(v.hotOutlet-v.coldInlet));
    var lmtdD=Math.log((v.hotInlet-v.coldOutlet)/(v.hotOutlet-v.coldInlet));
    var lmtd=Math.abs(lmtdD)>0.001?lmtdP/lmtdD:0;
    var area=lmtd>0&&v.overallU>0?Q*1000/(v.overallU*lmtd):0;
    return {
      main:{label:"Heat Transfer Rate",value:Q.toFixed(2)+" kW"},
      secondary:[
        {label:"LMTD",value:lmtd.toFixed(2)+" °C"},
        {label:"Required Area",value:area.toFixed(3)+" m²"},
        {label:"Overall U",value:v.overallU+" W/m²·K"},
        {label:"Effectiveness",value:v.effectiveness+"%"},
        {label:"Mass Flow Rate",value:v.massFlow+" kg/s"}
      ]
    };
  };

  if(DB['fluidflow'] && DB['fluidflow'].calc===null) DB['fluidflow'].calc=function(v){
    var area=Math.PI*Math.pow(v.pipeDia/2000,2);
    var velocity=v.flowRate/(area*1000*60);
    var Re=v.density*velocity*v.pipeDia/1000/v.viscosity;
    var flowType=Re<2300?"Laminar":Re<4000?"Transitional":"Turbulent";
    var f=Re<2300?64/Re:0.316*Math.pow(Re,-0.25);
    var pressureDrop=f*v.pipeLength/(v.pipeDia/1000)*v.density*velocity*velocity/2;
    return {
      main:{label:"Flow Velocity",value:velocity.toFixed(3)+" m/s"},
      secondary:[
        {label:"Reynolds Number",value:Math.round(Re).toLocaleString()},
        {label:"Flow Type",value:flowType},
        {label:"Friction Factor (f)",value:f.toFixed(6)},
        {label:"Pressure Drop",value:(pressureDrop/1000).toFixed(2)+" kPa"},
        {label:"Pipe Cross-Section",value:(area*1e6).toFixed(1)+" mm²"},
        {label:"Volume Flow",value:v.flowRate+" L/min"}
      ]
    };
  };

  if(DB['springforce'] && DB['springforce'].calc===null) DB['springforce'].calc=function(v){
    var force=v.springConstant*v.displacement/1000;
    var pe=0.5*v.springConstant*Math.pow(v.displacement/1000,2);
    var naturalFreq=Math.sqrt(v.springConstant/v.mass_spring)/(2*Math.PI);
    var period=1/naturalFreq;
    var maxVelocity=v.displacement/1000*2*Math.PI*naturalFreq;
    return {
      main:{label:"Spring Force (F = kx)",value:force.toFixed(3)+" N"},
      secondary:[
        {label:"Potential Energy",value:pe.toFixed(4)+" J"},
        {label:"Natural Frequency",value:naturalFreq.toFixed(2)+" Hz"},
        {label:"Period",value:period.toFixed(4)+" s"},
        {label:"Max Velocity",value:maxVelocity.toFixed(3)+" m/s"},
        {label:"Spring Constant (k)",value:v.springConstant+" N/m"},
        {label:"Displacement",value:v.displacement+" mm"}
      ]
    };
  };

  if(DB['gearratio'] && DB['gearratio'].calc===null) DB['gearratio'].calc=function(v){
    var ratio=v.drivenTeeth/v.drivingTeeth;
    var outputRPM=v.inputRPM/ratio;
    var outputTorque=v.inputTorque*ratio*v.gearEfficiency/100;
    var inputPower=v.inputTorque*v.inputRPM*2*Math.PI/60;
    var outputPower=inputPower*v.gearEfficiency/100;
    var speedReduction=(1-1/ratio)*100;
    return {
      main:{label:"Gear Ratio",value:ratio.toFixed(3)+":1"},
      secondary:[
        {label:"Output RPM",value:outputRPM.toFixed(1)+" RPM"},
        {label:"Output Torque",value:outputTorque.toFixed(2)+" N·m"},
        {label:"Input Power",value:(inputPower).toFixed(1)+" W"},
        {label:"Output Power",value:(outputPower).toFixed(1)+" W"},
        {label:"Speed Reduction",value:speedReduction.toFixed(1)+"%"},
        {label:"Type",value:ratio>1?"Speed Reducer (torque ↑)":"Speed Multiplier (torque ↓)"}
      ]
    };
  };

  if(DB['inverterbattery'] && DB['inverterbattery'].calc===null) DB['inverterbattery'].calc=function(v){
    var voltMap={"12V (single battery)":12,"24V (2 batteries)":24,"48V (4 batteries)":48};
    var battV=voltMap[v.batteryVoltage]||12;
    var inverterVA=Math.ceil(v.loadWatts/0.8/100)*100;
    var totalEnergy=v.loadWatts*v.backupHours;
    var battCapacityNeeded=totalEnergy/(battV*(v.dod/100));
    var battCapacityAh=battCapacityNeeded/battV;
    var numBatteries=Math.ceil(battV/12);
    var actualBackup=(v.batteryAh*battV*(v.dod/100))/v.loadWatts;
    return {
      main:{label:"Inverter Size Required",value:inverterVA+" VA (minimum)"},
      secondary:[
        {label:"Battery Capacity Needed",value:Math.ceil(battCapacityAh)+" Ah"},
        {label:"Actual Backup (with "+v.batteryAh+"Ah)",value:actualBackup.toFixed(1)+" hours"},
        {label:"Number of Batteries",value:numBatteries+" × "+v.batteryAh+"Ah"},
        {label:"Total Energy Need",value:totalEnergy+" Wh"},
        {label:"Depth of Discharge",value:v.dod+"%"},
        {label:"Load",value:v.loadWatts+" W"}
      ]
    };
  };

  if(DB['acbtu'] && DB['acbtu'].calc===null) DB['acbtu'].calc=function(v){
    var areaSqFt=v.roomLength*v.roomWidth;
    var baseBTU=areaSqFt*25;
    var heightAdj=v.ceilingHeight>10?(v.ceilingHeight-10)*areaSqFt*2:0;
    var floorAdj={"Ground Floor":0,"Middle Floor":0,"Top Floor (direct sun)":baseBTU*0.15}[v.floorLevel]||0;
    var windowAdj={"North (least sun)":0,"East/West":baseBTU*0.05,"South (most sun)":baseBTU*0.10,"Multiple large windows":baseBTU*0.15}[v.windowArea]||0;
    var occupantAdj=(v.occupants-1)*600;
    var totalBTU=Math.round(baseBTU+heightAdj+floorAdj+windowAdj+occupantAdj);
    var tons=totalBTU/12000;
    var starRating=tons<=1.0?"1 Ton (3-Star)":tons<=1.5?"1.5 Ton (3-Star)":"2 Ton (3-Star)";
    return {
      main:{label:"AC Capacity Needed",value:tons.toFixed(2)+" Ton"},
      secondary:[
        {label:"BTU/hr Required",value:totalBTU.toLocaleString()+" BTU"},
        {label:"Recommended AC",value:starRating},
        {label:"Room Area",value:areaSqFt+" sq ft"},
        {label:"Floor Adjustment",value:(floorAdj>0?"+":"")+(floorAdj/baseBTU*100).toFixed(0)+"%"},
        {label:"Est. Monthly Cost (8hr/day)",value:"₹"+Math.round(tons*0.746*8*30*8).toLocaleString()+" (at ₹8/unit)"},
        {label:"Inverter AC Saving",value:"~30-40% vs non-inverter"}
      ]
    };
  };

  if(DB['pipeflow'] && DB['pipeflow'].calc===null) DB['pipeflow'].calc=function(v){
    var fluidProps={"Water (20°C)":{rho:998,mu:0.001},"Water (60°C)":{rho:983,mu:0.000467},"Oil (light)":{rho:850,mu:0.03},"Air":{rho:1.2,mu:0.000018}};
    var roughness={"PVC (smooth)":0.0015,"Copper":0.002,"Steel (new)":0.05,"GI Pipe (old)":0.15,"HDPE":0.007};
    var fp=fluidProps[v.fluid]||fluidProps["Water (20°C)"];
    var D=v.pipeD/1000;
    var A=Math.PI*Math.pow(D/2,2);
    var velocity=v.flowRate_pf/(A*1000*60);
    var Re=fp.rho*velocity*D/fp.mu;
    var flowType=Re<2300?"Laminar":Re<4000?"Transitional":"Turbulent";
    var f=Re<2300?64/Re:0.316*Math.pow(Re,-0.25);
    var dP=f*(v.pipeLength/D)*(fp.rho*velocity*velocity/2);
    return {
      main:{label:"Flow Velocity",value:velocity.toFixed(3)+" m/s"},
      secondary:[
        {label:"Reynolds Number",value:Math.round(Re).toLocaleString()},
        {label:"Flow Regime",value:flowType},
        {label:"Friction Factor",value:f.toFixed(6)},
        {label:"Pressure Drop",value:(dP/1000).toFixed(2)+" kPa ("+(dP/100000).toFixed(4)+" bar)"},
        {label:"Pipe Area",value:(A*1e6).toFixed(1)+" mm²"},
        {label:"Velocity Status",value:velocity>2.5?"⚠ May cause noise":"✅ Within limits"}
      ]
    };
  };

  if(DB['threephase'] && DB['threephase'].calc===null) DB['threephase'].calc=function(v){
    var sqrt3=Math.sqrt(3);
    var mode=v.calcMode_3p;
    var P=0,I=0,V=v.voltage3p,pf=v.powerFactor3p;
    if(mode==="Power from V & I"){
      P=sqrt3*V*v.current3p*pf/1000;
      I=v.current3p;
    } else if(mode==="Current from V & Power"){
      P=v.powerKw_3p;
      I=P*1000/(sqrt3*V*pf);
    } else {
      P=v.powerKw_3p;
      I=v.current3p;
      V=P*1000/(sqrt3*I*pf);
    }
    var phaseV=V/sqrt3;
    var phaseI=I;
    var apparentPower=sqrt3*V*I/1000;
    var reactivePower=apparentPower*Math.sin(Math.acos(pf));
    return {
      main:{label:"Active Power",value:P.toFixed(2)+" kW"},
      secondary:[
        {label:"Line Current",value:I.toFixed(2)+" A"},
        {label:"Line Voltage",value:V.toFixed(1)+" V"},
        {label:"Phase Voltage",value:phaseV.toFixed(1)+" V"},
        {label:"Apparent Power (S)",value:apparentPower.toFixed(2)+" kVA"},
        {label:"Reactive Power (Q)",value:reactivePower.toFixed(2)+" kVAR"},
        {label:"Power Factor",value:pf}
      ]
    };
  };

  if(DB['transformercalc'] && DB['transformercalc'].calc===null) DB['transformercalc'].calc=function(v){
    var turnsRatio=v.primaryV/v.secondaryV;
    var primaryI=v.powerRating_t/v.primaryV;
    var secondaryI=v.powerRating_t/v.secondaryV;
    var outputPower=v.powerRating_t*v.efficiency_t/100;
    var losses=v.powerRating_t-outputPower;
    var freq=v.frequency_t.includes("50")?50:60;
    var wireGauge_p=primaryI<0.5?"30 AWG":primaryI<1?"26 AWG":primaryI<2?"22 AWG":primaryI<5?"18 AWG":"14 AWG";
    var wireGauge_s=secondaryI<1?"26 AWG":secondaryI<3?"22 AWG":secondaryI<5?"18 AWG":secondaryI<10?"14 AWG":"12 AWG";
    return {
      main:{label:"Turns Ratio",value:turnsRatio.toFixed(2)+":1"},
      secondary:[
        {label:"Primary Current",value:primaryI.toFixed(3)+" A"},
        {label:"Secondary Current",value:secondaryI.toFixed(2)+" A"},
        {label:"Output Power (at "+v.efficiency_t+"%)",value:outputPower.toFixed(1)+" W"},
        {label:"Power Loss",value:losses.toFixed(1)+" W"},
        {label:"Primary Wire (approx.)",value:wireGauge_p},
        {label:"Secondary Wire (approx.)",value:wireGauge_s},
        {label:"Type",value:turnsRatio>1?"Step-Down":"Step-Up"}
      ]
    };
  };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('engineering');
})();
