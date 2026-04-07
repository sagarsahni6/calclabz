/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-math.js
   LAZY FILE: calc() functions for category "math"
   Loaded on-demand when user opens a math calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['percentage'] && DB['percentage'].calc===null) DB['percentage'].calc=function(v){
            const res = v.val * v.pct / 100;
            const pctOf = (v.pct / v.val) * 100;
            return {
                main:{label:"Result (X% of Y)",value:res.toFixed(2)},
                secondary:[
                    {label:"% of total",value:pctOf.toFixed(3)+"%"},
                    {label:"Remaining",value:(v.val - res).toFixed(2)},
                    {label:"Increase by "+v.pct+"%",value:(v.val*(1+v.pct/100)).toFixed(2)}
                ]
            };
        };

  if(DB['ratio'] && DB['ratio'].calc===null) DB['ratio'].calc=function(v){
            const gcd = (x,y) => y===0?x:gcd(y,x%y);
            const g = gcd(Math.abs(v.a),Math.abs(v.b));
            return {
                main:{label:"Simplified Ratio",value:`${v.a/g} : ${v.b/g}`},
                secondary:[
                    {label:"A / B",value:(v.a/v.b).toFixed(4)},
                    {label:"B / A",value:(v.b/v.a).toFixed(4)},
                    {label:"A as % of total",value:((v.a/(v.a+v.b))*100).toFixed(2)+"%"}
                ]
            };
        };

  if(DB['squareroot'] && DB['squareroot'].calc===null) DB['squareroot'].calc=function(v){
            const res = Math.pow(v.n, 1/v.root);
            return {
                main:{label:`${v.root}th Root of ${v.n}`,value:res.toFixed(6)},
                secondary:[
                    {label:"Square Root (√)",value:Math.sqrt(v.n).toFixed(6)},
                    {label:"Cube Root (∛)",value:Math.cbrt(v.n).toFixed(6)},
                    {label:"n² (squared)",value:(v.n*v.n).toLocaleString()}
                ]
            };
        };

  if(DB['logarithm'] && DB['logarithm'].calc===null) DB['logarithm'].calc=function(v){
            return {
                main:{label:`log₍${v.base}₎(${v.n})`,value:(Math.log(v.n)/Math.log(v.base)).toFixed(8)},
                secondary:[
                    {label:"Natural Log ln(n)",value:Math.log(v.n).toFixed(8)},
                    {label:"Log₁₀(n)",value:Math.log10(v.n).toFixed(8)},
                    {label:"Log₂(n)",value:Math.log2(v.n).toFixed(8)}
                ]
            };
        };

  if(DB['factorial'] && DB['factorial'].calc===null) DB['factorial'].calc=function(v){
            const fact = n => n<=1?1:n*fact(n-1);
            const n=Math.min(20,Math.floor(v.n)), r=Math.min(n,Math.floor(v.r));
            const nf=fact(n), rf=fact(r), nmrf=fact(n-r);
            return {
                main:{label:`${n}! Factorial`,value:nf.toLocaleString()},
                secondary:[
                    {label:`P(${n},${r}) Permutations`,value:(nf/nmrf).toLocaleString()},
                    {label:`C(${n},${r}) Combinations`,value:(nf/(rf*nmrf)).toLocaleString()}
                ]
            };
        };

  if(DB['quadratic'] && DB['quadratic'].calc===null) DB['quadratic'].calc=function(v){
            const d = v.b*v.b - 4*v.a*v.c;
            if(d<0) return {main:{label:"Discriminant",value:"No real roots (D<0)"},secondary:[{label:"D",value:d.toFixed(4)}]};
            const x1 = (-v.b+Math.sqrt(d))/(2*v.a);
            const x2 = (-v.b-Math.sqrt(d))/(2*v.a);
            return {
                main:{label:"Root x₁",value:x1.toFixed(6)},
                secondary:[
                    {label:"Root x₂",value:x2.toFixed(6)},
                    {label:"Discriminant D",value:d.toFixed(4)},
                    {label:"Vertex x",value:(-v.b/(2*v.a)).toFixed(4)}
                ]
            };
        };

  if(DB['prime'] && DB['prime'].calc===null) DB['prime'].calc=function(v){
            const n=Math.floor(v.n);
            const isPrime = n => {if(n<2)return false;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0)return false;return true;};
            const factors = [];
            for(let i=1;i<=n;i++) if(n%i===0) factors.push(i);
            return {
                main:{label:"Is Prime?",value:isPrime(n)?"✓ YES — Prime":"✗ NO — Not Prime"},
                secondary:[
                    {label:"Factors",value:factors.join(', ')},
                    {label:"Factor Count",value:factors.length},
                    {label:"Next Prime",value:(()=>{let x=n+1;while(!isPrime(x))x++;return x;})()}
                ]
            };
        };

  if(DB['numbersystem'] && DB['numbersystem'].calc===null) DB['numbersystem'].calc=function(v){
            const d=Math.floor(Math.abs(v.dec)), base=Math.min(36,Math.max(2,Math.floor(v.customBase)));
            return {
                main:{label:"Binary (Base 2)",value:d.toString(2)},
                secondary:[
                    {label:"Octal (Base 8)",value:d.toString(8)},
                    {label:"Hexadecimal (Base 16)",value:d.toString(16).toUpperCase()},
                    {label:`Base ${base}`,value:d.toString(base).toUpperCase()}
                ]
            };
        };

  if(DB['average'] && DB['average'].calc===null) DB['average'].calc=function(v){
            const arr = String(v.nums).split(',').map(Number).filter(n=>!isNaN(n));
            if(!arr.length) return {main:{label:"Error",value:"Enter numbers"}};
            arr.sort((a,b)=>a-b);
            const mean = arr.reduce((s,x)=>s+x,0)/arr.length;
            const med = arr.length%2===0?(arr[arr.length/2-1]+arr[arr.length/2])/2:arr[Math.floor(arr.length/2)];
            const variance = arr.reduce((s,x)=>s+(x-mean)**2,0)/arr.length;
            return {
                main:{label:"Mean (Average)",value:mean.toFixed(4)},
                secondary:[
                    {label:"Median",value:med},
                    {label:"Range",value:arr[arr.length-1]-arr[0]},
                    {label:"Std Deviation",value:Math.sqrt(variance).toFixed(4)},
                    {label:"Count",value:arr.length}
                ]
            };
        };

  if(DB['statistics'] && DB['statistics'].calc===null) DB['statistics'].calc=function(v){
            const arr=String(v.data).split(',').map(Number).filter(n=>!isNaN(n));
            if(arr.length<2) return {main:{label:"Error",value:"Enter at least 2 numbers"}};
            const n=arr.length;
            const mean=arr.reduce((s,x)=>s+x,0)/n;
            const popVar=arr.reduce((s,x)=>s+(x-mean)**2,0)/n;
            const sampleVar=arr.reduce((s,x)=>s+(x-mean)**2,0)/(n-1);
            const popSD=Math.sqrt(popVar);
            const sampleSD=Math.sqrt(sampleVar);
            const sorted=[...arr].sort((a,b)=>a-b);
            const median=n%2===0?(sorted[n/2-1]+sorted[n/2])/2:sorted[Math.floor(n/2)];
            const skew=popSD>0?arr.reduce((s,x)=>s+((x-mean)/popSD)**3,0)/n:0;
            const cv=mean!==0?(popSD/Math.abs(mean))*100:0;
            const q1=sorted[Math.floor(n*0.25)], q3=sorted[Math.floor(n*0.75)];
            return {
                main:{label:"Mean",value:mean.toFixed(4)},
                secondary:[
                    {label:"Median",value:median.toFixed(4)},
                    {label:"Population Std Dev (σ)",value:popSD.toFixed(4)},
                    {label:"Sample Std Dev (s)",value:sampleSD.toFixed(4)},
                    {label:"Variance (σ²)",value:popVar.toFixed(4)},
                    {label:"Min / Max",value:`${sorted[0]} / ${sorted[n-1]}`},
                    {label:"Skewness",value:skew.toFixed(4)},
                    {label:"CV (Coeff. of Variation)",value:cv.toFixed(2)+"%"},
                    {label:"Q1 / Q3 (IQR)",value:`${q1} / ${q3}`},
                    {label:"Sum",value:arr.reduce((s,x)=>s+x,0).toFixed(2)},
                    {label:"Count",value:n}
                ]
            };
        };

  if(DB['matrix2x2'] && DB['matrix2x2'].calc===null) DB['matrix2x2'].calc=function(v){
            const det=v.a*v.d-v.b*v.c;
            const trace=v.a+v.d;
            const inv=det!==0?`[${(v.d/det).toFixed(3)}, ${(-v.b/det).toFixed(3)}; ${(-v.c/det).toFixed(3)}, ${(v.a/det).toFixed(3)}]`:"No inverse (det=0)";
            return {
                main:{label:"Determinant",value:det.toFixed(4)},
                secondary:[
                    {label:"Trace",value:trace.toFixed(4)},
                    {label:"Rank",value:det!==0?"2":"1 or 0"},
                    {label:"Inverse",value:inv}
                ]
            };
        };

  if(DB['combinations'] && DB['combinations'].calc===null) DB['combinations'].calc=function(v){
            const n=Math.floor(v.n),r=Math.min(Math.floor(v.r),n);
            const calcNCr=(n,r)=>{if(r>n-r)r=n-r;let res=1;for(let i=0;i<r;i++)res=res*(n-i)/(i+1);return Math.round(res);};
            const calcNPr=(n,r)=>{let res=1;for(let i=n;i>n-r;i--)res*=i;return res;};
            const nCr=calcNCr(n,r);
            const nPr=calcNPr(n,r);
            const prob=v.favorable/nCr;
            return {
                main:{label:`C(${n},${r}) Combinations`,value:nCr.toLocaleString()},
                secondary:[
                    {label:`P(${n},${r}) Permutations`,value:nPr.toLocaleString()},
                    {label:"Probability",value:(prob*100).toFixed(4)+"%"},
                    {label:"Odds",value:`1 in ${Math.round(1/prob).toLocaleString()}`}
                ]
            };
        };

  if(DB['lcmgcd'] && DB['lcmgcd'].calc===null) DB['lcmgcd'].calc=function(v){
            const gcd=(x,y)=>y===0?Math.abs(x):gcd(y,x%y);
            const lcm=(x,y)=>Math.abs(x*y)/gcd(x,y);
            const a=Math.floor(v.a), b=Math.floor(v.b), c=Math.floor(v.c);
            let g=gcd(a,b), l=lcm(a,b);
            if(c>0){g=gcd(g,c);l=lcm(l,c);}
            return {
                main:{label:"LCM",value:l.toLocaleString()},
                secondary:[
                    {label:"GCD / HCF",value:g.toLocaleString()},
                    {label:"LCM × GCD",value:(l*g).toLocaleString()},
                    {label:"Verification (a×b)",value:(a*b).toLocaleString()}
                ]
            };
        };

  if(DB['romanNumeral'] && DB['romanNumeral'].calc===null) DB['romanNumeral'].calc=function(v){
            const n=Math.min(3999,Math.max(1,Math.floor(v.num)));
            const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
            const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
            let rem=n, roman="";
            for(let i=0;i<vals.length;i++){while(rem>=vals[i]){roman+=syms[i];rem-=vals[i];}}
            return {
                main:{label:"Roman Numeral",value:roman},
                secondary:[
                    {label:"Arabic",value:n.toLocaleString()},
                    {label:"Binary",value:n.toString(2)},
                    {label:"Hex",value:n.toString(16).toUpperCase()}
                ]
            };
        };

  if(DB['triangleArea'] && DB['triangleArea'].calc===null) DB['triangleArea'].calc=function(v){
            const {a,b,c}=v;
            if(a+b<=c||b+c<=a||a+c<=b) return {main:{label:"Error",value:"Not a valid triangle"}};
            const s=(a+b+c)/2;
            const area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
            const A=Math.acos((b**2+c**2-a**2)/(2*b*c))*180/Math.PI;
            const B=Math.acos((a**2+c**2-b**2)/(2*a*c))*180/Math.PI;
            const C=180-A-B;
            const type=a===b&&b===c?"Equilateral":(a===b||b===c||a===c)?"Isosceles":"Scalene";
            return {
                main:{label:"Area",value:area.toFixed(4)+" sq units"},
                secondary:[
                    {label:"Perimeter",value:(a+b+c).toFixed(4)},
                    {label:"Angle A",value:A.toFixed(2)+"°"},
                    {label:"Angle B",value:B.toFixed(2)+"°"},
                    {label:"Angle C",value:C.toFixed(2)+"°"},
                    {label:"Type",value:type}
                ]
            };
        };

  if(DB['scientific'] && DB['scientific'].calc===null) DB['scientific'].calc=function(v){
            const x = parseFloat(v.expr)||0;
            const rad = v.unit==="Degrees" ? x*Math.PI/180 : x;
            return {
                main:{label:"sin("+x+(v.unit==="Degrees"?"°":"rad")+")",value:Math.sin(rad).toFixed(8)},
                secondary:[
                    {label:"cos",value:Math.cos(rad).toFixed(8)},
                    {label:"tan",value:Math.abs(Math.cos(rad))<1e-10?"undefined":Math.tan(rad).toFixed(8)},
                    {label:"√x",value:x>=0?Math.sqrt(x).toFixed(8):"undefined"},
                    {label:"x²",value:(x*x).toFixed(4)},
                    {label:"x³",value:(x*x*x).toFixed(4)},
                    {label:"ln(x)",value:x>0?Math.log(x).toFixed(8):"undefined"},
                    {label:"log₁₀(x)",value:x>0?Math.log10(x).toFixed(8):"undefined"},
                    {label:"eˣ",value:Math.exp(x).toExponential(6)}
                ]
            };
        };

  if(DB['fraction'] && DB['fraction'].calc===null) DB['fraction'].calc=function(v){
            if(!v.d1||!v.d2) return {main:{label:"Error",value:"Denominator cannot be 0"}};
            const gcd = (a,b) => b===0?a:gcd(b,a%b);
            let rn, rd;
            if(v.op.startsWith("Add")){rn=v.n1*v.d2+v.n2*v.d1;rd=v.d1*v.d2;}
            else if(v.op.startsWith("Sub")){rn=v.n1*v.d2-v.n2*v.d1;rd=v.d1*v.d2;}
            else if(v.op.startsWith("Mul")){rn=v.n1*v.n2;rd=v.d1*v.d2;}
            else{rn=v.n1*v.d2;rd=v.d1*v.n2;}
            const g=gcd(Math.abs(rn),Math.abs(rd));
            const sn=rn/g, sd=rd/g;
            return {
                main:{label:"Result",value:(sd===1?sn:sn+"/"+sd)+" = "+(rn/rd).toFixed(6)},
                secondary:[
                    {label:"Simplified",value:sn+"/"+sd},
                    {label:"Decimal",value:(rn/rd).toFixed(8)},
                    {label:"Mixed Number",value:Math.abs(sn)>Math.abs(sd)?Math.floor(sn/sd)+" "+Math.abs(sn%sd)+"/"+sd:sn+"/"+sd},
                    {label:"Expression",value:v.n1+"/"+v.d1+" "+v.op.split(" ")[1]+" "+v.n2+"/"+v.d2}
                ]
            };
        };

  if(DB['stddev'] && DB['stddev'].calc===null) DB['stddev'].calc=function(v){
            const arr=String(v.data).split(',').map(Number).filter(n=>!isNaN(n)&&String(n).trim()!=='');
            if(arr.length<2) return {main:{label:"Error",value:"Enter at least 2 numbers"}};
            const n=arr.length, mean=arr.reduce((s,x)=>s+x,0)/n;
            const variance=arr.reduce((s,x)=>s+(x-mean)**2,0)/n;
            const popSD=Math.sqrt(variance);
            const sampleVar=arr.reduce((s,x)=>s+(x-mean)**2,0)/(n-1);
            const sampleSD=Math.sqrt(sampleVar);
            arr.sort((a,b)=>a-b);
            return {
                main:{label:"Population Std Dev (σ)",value:popSD.toFixed(6)},
                secondary:[
                    {label:"Sample Std Dev (s)",value:sampleSD.toFixed(6)},
                    {label:"Mean (μ)",value:mean.toFixed(6)},
                    {label:"Variance (σ²)",value:variance.toFixed(6)},
                    {label:"Min",value:arr[0]},
                    {label:"Max",value:arr[arr.length-1]},
                    {label:"Range",value:arr[arr.length-1]-arr[0]},
                    {label:"Count (n)",value:n}
                ]
            };
        };

  if(DB['lineareq'] && DB['lineareq'].calc===null) DB['lineareq'].calc=function(v){
            // ax + b = c → x = (c-b)/a
            if(v.a_eq===0) return {main:{label:"Error",value:v.b_eq===v.c_eq?"Infinite solutions":"No solution"}};
            const x=(v.c_eq-v.b_eq)/v.a_eq;
            return {
                main:{label:"x",value:x.toFixed(8)},
                secondary:[
                    {label:"Equation",value:v.a_eq+"x + "+v.b_eq+" = "+v.c_eq},
                    {label:"Step 1: Subtract b",value:v.a_eq+"x = "+(v.c_eq-v.b_eq)},
                    {label:"Step 2: Divide by a",value:"x = "+(v.c_eq-v.b_eq)+"/"+v.a_eq},
                    {label:"Verification",value:v.a_eq+"×"+x.toFixed(4)+" + "+v.b_eq+" = "+(v.a_eq*x+v.b_eq).toFixed(4)}
                ]
            };
        };

  if(DB['circleCalc'] && DB['circleCalc'].calc===null) DB['circleCalc'].calc=function(v){
            const r=v.radius, a=v.angle;
            return {
                main:{label:"Circle Area",value:(Math.PI*r*r).toFixed(4)+" sq units"},
                secondary:[
                    {label:"Circumference (2πr)",value:(2*Math.PI*r).toFixed(4)+" units"},
                    {label:"Diameter",value:(2*r)+" units"},
                    {label:"Arc Length ("+a+"°)",value:(2*Math.PI*r*a/360).toFixed(4)+" units"},
                    {label:"Sector Area ("+a+"°)",value:(Math.PI*r*r*a/360).toFixed(4)+" sq units"},
                    {label:"Sphere Volume (4/3πr³)",value:((4/3)*Math.PI*r*r*r).toFixed(4)+" cu units"},
                    {label:"Sphere Surface Area (4πr²)",value:(4*Math.PI*r*r).toFixed(4)+" sq units"}
                ]
            };
        };

  if(DB['determinant'] && DB['determinant'].calc===null) DB['determinant'].calc=function(v){
            const det = v.a11*(v.a22*v.a33-v.a23*v.a32)
                       -v.a12*(v.a21*v.a33-v.a23*v.a31)
                       +v.a13*(v.a21*v.a32-v.a22*v.a31);
            const trace = v.a11+v.a22+v.a33;
            return {
                main:{label:"Determinant",value:det.toFixed(6)},
                secondary:[
                    {label:"Trace (sum of diagonal)",value:trace},
                    {label:"Is Invertible?",value:det!==0?"Yes (det ≠ 0)":"No (det = 0, singular)"},
                    {label:"Minor M₁₁",value:(v.a22*v.a33-v.a23*v.a32).toFixed(4)},
                    {label:"Minor M₁₂",value:(v.a21*v.a33-v.a23*v.a31).toFixed(4)},
                    {label:"Matrix",value:"["+v.a11+","+v.a12+","+v.a13+"] ["+v.a21+","+v.a22+","+v.a23+"] ["+v.a31+","+v.a32+","+v.a33+"]"}
                ]
            };
        };

  if(DB['complexnum'] && DB['complexnum'].calc===null) DB['complexnum'].calc=function(v){
            const {a1,b1,a2,b2} = v;
            let ra, rb;
            if(v.op_c.startsWith("Add"))      { ra=a1+a2; rb=b1+b2; }
            else if(v.op_c.startsWith("Sub")) { ra=a1-a2; rb=b1-b2; }
            else if(v.op_c.startsWith("Mul")) { ra=a1*a2-b1*b2; rb=a1*b2+b1*a2; }
            else { const d=a2*a2+b2*b2; if(!d) return {main:{label:"Error",value:"Division by zero"}}; ra=(a1*a2+b1*b2)/d; rb=(b1*a2-a1*b2)/d; }
            const mag1 = Math.sqrt(a1*a1+b1*b1), mag2 = Math.sqrt(a2*a2+b2*b2);
            const magR = Math.sqrt(ra*ra+rb*rb);
            const fmt = (a,b) => a.toFixed(4)+(b>=0?"+":"")+b.toFixed(4)+"i";
            return {
                main:{label:"Result",value:fmt(ra,rb)},
                secondary:[
                    {label:"Real Part",value:ra.toFixed(6)},
                    {label:"Imaginary Part",value:rb.toFixed(6)+"i"},
                    {label:"Magnitude |z|",value:magR.toFixed(6)},
                    {label:"Argument (θ)",value:(Math.atan2(rb,ra)*180/Math.PI).toFixed(4)+"°"},
                    {label:"|z₁|",value:mag1.toFixed(4)},
                    {label:"|z₂|",value:mag2.toFixed(4)}
                ]
            };
        };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('math');
})();
