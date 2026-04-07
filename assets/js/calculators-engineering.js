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

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('engineering');
})();
