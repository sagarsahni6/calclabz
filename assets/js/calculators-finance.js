/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-finance.js
   LAZY FILE: calc() functions for category "finance"
   Loaded on-demand when user opens a finance calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['emi'] && DB['emi'].calc===null) DB['emi'].calc=function(v){
            const P=v.principal,r=v.rate/12/100,n=v.tenure;
            const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const total=emi*n, interest=total-P;
            return {
                main:{label:"Monthly EMI",value:"₹"+Math.round(emi).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Payment",value:"₹"+Math.round(total).toLocaleString()},
                    {label:"Interest %",value:((interest/P)*100).toFixed(1)+"%"}
                ],
                chart:{a:Math.round(P),b:Math.round(interest),lA:"Principal",lB:"Interest",
                    timeline:(function(){
                        var labels=[],invested=[],intPaid=[],bal=[];
                        var years=Math.ceil(n/12);
                        var balance=P,totPrin=0,totInt=0;
                        for(var yr=1;yr<=years;yr++){
                            var monthsThisYear=Math.min(12,n-(yr-1)*12);
                            for(var mo=0;mo<monthsThisYear;mo++){
                                var intMo=balance*r;
                                var prinMo=emi-intMo;
                                balance-=prinMo; totPrin+=prinMo; totInt+=intMo;
                            }
                            labels.push('Yr '+yr);
                            invested.push(Math.round(totPrin));
                            intPaid.push(Math.round(totInt));
                            bal.push(Math.max(0,Math.round(balance)));
                        }
                        return {labels:labels,datasets:[
                            {label:'Principal Paid',data:invested,fill:false},
                            {label:'Interest Paid',data:intPaid,fill:false},
                            {label:'Balance',data:bal,fill:true}
                        ]};
                    })()
                }
            };
        };

  if(DB['sip'] && DB['sip'].calc===null) DB['sip'].calc=function(v){
            const P=v.monthly,r=v.return/12/100,n=v.years*12;
            const FV=P*((Math.pow(1+r,n)-1)/r)*(1+r);
            const invested=P*n, returns=FV-invested;
            return {
                main:{label:"Future Value",value:"₹"+Math.round(FV).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+invested.toLocaleString()},
                    {label:"Expected Returns",value:"₹"+Math.round(returns).toLocaleString(),pos:true},
                    {label:"Return %",value:((returns/invested)*100).toFixed(1)+"%",pos:true}
                ],
                chart:{a:Math.round(invested),b:Math.round(returns),lA:"Invested",lB:"Returns",
                    timeline:(function(){
                        var labels=[],invArr=[],corpusArr=[];
                        for(var yr=1;yr<=v.years;yr++){
                            var months=yr*12;
                            var fv=P*((Math.pow(1+r,months)-1)/r)*(1+r);
                            labels.push('Yr '+yr);
                            invArr.push(Math.round(P*months));
                            corpusArr.push(Math.round(fv));
                        }
                        return {labels:labels,datasets:[
                            {label:'Amount Invested',data:invArr,fill:false},
                            {label:'Corpus Value',data:corpusArr,fill:true}
                        ]};
                    })()
                }
            };
        };

  if(DB['gst'] && DB['gst'].calc===null) DB['gst'].calc=function(v){
            const rate=parseFloat(v.rate), gst=v.net*rate/100, gross=v.net+gst;
            return {
                main:{label:"Gross Amount (with GST)",value:"₹"+gross.toFixed(2)},
                secondary:[
                    {label:"Net Amount (Pre-GST)",value:"₹"+v.net.toFixed(2)},
                    {label:"Total GST",value:"₹"+gst.toFixed(2)},
                    {label:"CGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"SGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"IGST ("+rate+"%)",value:"₹"+gst.toFixed(2)}
                ],
                chart:{labels:['Net Amount','CGST','SGST'],data:[v.net,gst/2,gst/2]}
            };
        };

  if(DB['pregst'] && DB['pregst'].calc===null) DB['pregst'].calc=function(v){
            const rate=parseFloat(v.rate);
            const net=v.gross*100/(100+rate);
            const gst=v.gross-net;
            return {
                main:{label:"Pre-GST / Net Price",value:"₹"+net.toFixed(2)},
                secondary:[
                    {label:"GST-Inclusive Price (given)",value:"₹"+v.gross.toFixed(2)},
                    {label:"GST Amount Included",value:"₹"+gst.toFixed(2)},
                    {label:"CGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"SGST ("+rate/2+"%)",value:"₹"+(gst/2).toFixed(2)},
                    {label:"IGST ("+rate+"%)",value:"₹"+gst.toFixed(2)}
                ]
            };
        };

  if(DB['compoundinterest'] && DB['compoundinterest'].calc===null) DB['compoundinterest'].calc=function(v){
            const nMap={Annually:1,"Semi-annually":2,Quarterly:4,Monthly:12,Daily:365};
            const n=nMap[v.compound]||1, P=v.principal, r=v.rate/100, t=v.time;
            const amount=P*Math.pow(1+r/n,n*t), ci=amount-P;
            return {
                main:{label:"Compound Interest",value:"₹"+ci.toFixed(2)},
                secondary:[
                    {label:"Total Amount",value:"₹"+amount.toFixed(2)},
                    {label:"Doubling Time",value:(Math.log(2)/Math.log(1+r/n)/n).toFixed(2)+" years"},
                    {label:"Growth",value:((amount/P-1)*100).toFixed(2)+"%",pos:true}
                ]
            };
        };

  if(DB['simpleinterest'] && DB['simpleinterest'].calc===null) DB['simpleinterest'].calc=function(v){
            const si=(v.principal*v.rate*v.time)/100, total=v.principal+si;
            return {
                main:{label:"Simple Interest",value:"₹"+si.toFixed(2)},
                secondary:[
                    {label:"Total Amount",value:"₹"+total.toFixed(2)},
                    {label:"Effective Rate",value:v.rate+"%"},
                    {label:"Monthly Interest",value:"₹"+(si/(v.time*12)).toFixed(2)}
                ]
            };
        };

  if(DB['incomeTax'] && DB['incomeTax'].calc===null) DB['incomeTax'].calc=function(v){
            const income=v.income;
            let tax=0;
            if(v.regime==="New Regime"){
                const slabs=[[400000,0],[400000,0.05],[400000,0.10],[400000,0.15],[400000,0.20],[400000,0.25],[Infinity,0.30]];
                let taxable=Math.max(0,income-75000); // standard deduction ₹75K
                let rem=taxable;
                for(const [lim,rate] of slabs){
                    if(rem<=0) break;
                    const chunk=Math.min(rem,lim);
                    tax+=chunk*rate; rem-=chunk;
                }
                if(taxable<=1200000) tax=0; // Section 87A rebate (Budget 2026)
            } else {
                const exempt=v.age==="Below 60"?250000:v.age==="60-80 years"?300000:500000;
                const taxable=Math.max(0,income-50000-exempt);
                let rem=taxable;
                const slabs=[[250000,0.05],[500000,0.20],[Infinity,0.30]];
                for(const [lim,rate] of slabs){
                    if(rem<=0) break;
                    const chunk=Math.min(rem,lim);
                    tax+=chunk*rate; rem-=chunk;
                }
            }
            const cess=Math.round(tax*0.04);
            const total=Math.round(tax)+cess;
            return {
                main:{label:"Total Tax Payable",value:"₹"+total.toLocaleString()},
                secondary:[
                    {label:"Base Tax",value:"₹"+Math.round(tax).toLocaleString()},
                    {label:"Health & Education Cess",value:"₹"+cess.toLocaleString()},
                    {label:"Effective Rate",value:(total/income*100).toFixed(2)+"%"},
                    {label:"Monthly Tax",value:"₹"+Math.round(total/12).toLocaleString()}
                ]
            };
        };

  if(DB['roi'] && DB['roi'].calc===null) DB['roi'].calc=function(v){
            const gain=v.final-v.initial;
            const roi=(gain/v.initial)*100;
            const cagr=(Math.pow(v.final/v.initial,1/v.years)-1)*100;
            return {
                main:{label:"Net Gain",value:"₹"+gain.toFixed(2)},
                secondary:[
                    {label:"ROI",value:roi.toFixed(2)+"%",pos:gain>0},
                    {label:"CAGR",value:cagr.toFixed(2)+"%",pos:gain>0},
                    {label:"Multiplier",value:(v.final/v.initial).toFixed(2)+"×"}
                ]
            };
        };

  if(DB['ppf'] && DB['ppf'].calc===null) DB['ppf'].calc=function(v){
            // PPF: annual contributions, annual compounding (EEE category)
            const annualContrib = v.contribution * 12;
            const r = v.rate / 100;
            const n = v.years;
            // Future value of annuity-due (PPF is beginning-of-year: invest on 1st April)
            const total = annualContrib * ((Math.pow(1+r, n) - 1) / r) * (1+r);
            const invested = annualContrib * n;
            const interest = total - invested;
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(total).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+Math.round(invested).toLocaleString()},
                    {label:"Interest Earned",value:"₹"+Math.round(interest).toLocaleString(),pos:true},
                    {label:"Effective Yield",value:(interest/invested*100).toFixed(2)+"%"},
                    {label:"Annual Contribution",value:"₹"+annualContrib.toLocaleString()}
                ]
            };
        };

  if(DB['fd'] && DB['fd'].calc===null) DB['fd'].calc=function(v){
            const P=v.principal,r=v.rate/100/4,n=v.years*4;
            const amount=P*Math.pow(1+r,n), interest=amount-P;
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(amount).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Principal",value:"₹"+P.toLocaleString()},
                    {label:"Monthly Income",value:"₹"+Math.round(interest/(v.years*12)).toLocaleString()}
                ]
            };
        };

  if(DB['mortgage'] && DB['mortgage'].calc===null) DB['mortgage'].calc=function(v){
            const P=v.amount,r=v.rate/12/100,n=v.term*12;
            const pmt=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const total=pmt*n, interest=total-P;
            return {
                main:{label:"Monthly Payment",value:"₹"+Math.round(pmt).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Payment",value:"₹"+Math.round(total).toLocaleString()},
                    {label:"Interest Ratio",value:((interest/total)*100).toFixed(1)+"%"}
                ]
            };
        };

  if(DB['carloan'] && DB['carloan'].calc===null) DB['carloan'].calc=function(v){
            const P=v.amount,r=v.rate/12/100,n=v.tenure*12;
            const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
            const total=emi*n, interest=total-P;
            return {
                main:{label:"Monthly EMI",value:"₹"+Math.round(emi).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString()},
                    {label:"Total Payment",value:"₹"+Math.round(total).toLocaleString()}
                ]
            };
        };

  if(DB['breakeven'] && DB['breakeven'].calc===null) DB['breakeven'].calc=function(v){
            const contrib=v.price-v.variable;
            if(contrib<=0) return {main:{label:"Error",value:"Price must exceed variable cost"}};
            const units=v.fixed/contrib;
            const revenue=units*v.price;
            return {
                main:{label:"Break-Even Units",value:Math.ceil(units).toLocaleString()},
                secondary:[
                    {label:"Break-Even Revenue",value:"₹"+Math.round(revenue).toLocaleString()},
                    {label:"Contribution Margin",value:"₹"+contrib.toFixed(2)},
                    {label:"Margin Ratio",value:((contrib/v.price)*100).toFixed(1)+"%"}
                ]
            };
        };

  if(DB['inflation'] && DB['inflation'].calc===null) DB['inflation'].calc=function(v){
            // Future cost: how much ₹X costs in 'years' years due to inflation
            const future = v.amount * Math.pow(1 + v.rate/100, v.years);
            // Real value lost: what ₹X today is worth in today's money after inflation erodes it
            const realValue = v.amount / Math.pow(1 + v.rate/100, v.years);
            const eroded = v.amount - realValue;
            return {
                main:{label:"Future Cost (same goods)",value:"₹"+Math.round(future).toLocaleString()},
                secondary:[
                    {label:"Real Purchasing Power (in today's ₹)",value:"₹"+Math.round(realValue).toLocaleString()},
                    {label:"Amount Required Extra",value:"₹"+Math.round(future - v.amount).toLocaleString()},
                    {label:"Purchasing Power Erosion",value:((1 - realValue/v.amount)*100).toFixed(1)+"%"},
                    {label:"Effective Annual Erosion",value:v.rate+"% p.a."}
                ]
            };
        };

  if(DB['swp'] && DB['swp'].calc===null) DB['swp'].calc=function(v){
            const r=v.return/12/100, P=v.corpus, W=v.withdrawal;
            const months=r>0?Math.log(W/(W-P*r))/Math.log(1+r):P/W;
            const years=Math.floor(months/12), remMonths=Math.floor(months%12);
            const totalWithdrawn=W*months;
            return {
                main:{label:"Corpus Lasts",value:`${years}y ${remMonths}m`},
                secondary:[
                    {label:"Total Withdrawn",value:"₹"+Math.round(totalWithdrawn).toLocaleString()},
                    {label:"Monthly Income",value:"₹"+W.toLocaleString()},
                    {label:"Months",value:Math.floor(months)+" months"}
                ]
            };
        };

  if(DB['lumpsum'] && DB['lumpsum'].calc===null) DB['lumpsum'].calc=function(v){
            const fv=v.amount*Math.pow(1+v.return/100,v.years);
            const gain=fv-v.amount;
            return {
                main:{label:"Future Value",value:"₹"+Math.round(fv).toLocaleString()},
                secondary:[
                    {label:"Total Gain",value:"₹"+Math.round(gain).toLocaleString(),pos:true},
                    {label:"Return %",value:((gain/v.amount)*100).toFixed(1)+"%",pos:true},
                    {label:"Doubling Time (72 rule)",value:(72/v.return).toFixed(1)+" years"}
                ],
                chart:{a:Math.round(v.amount),b:Math.round(gain),lA:"Principal",lB:"Returns"}
            };
        };

  if(DB['nps'] && DB['nps'].calc===null) DB['nps'].calc=function(v){
            const years=v.retireAge-v.currentAge;
            if(years<=0) return {main:{label:"Error",value:"Retirement age must exceed current age"}};
            const r=v.return/12/100, n=years*12;
            const corpus=v.monthly*((Math.pow(1+r,n)-1)/r)*(1+r);
            const annuityCorpus=corpus*0.4, monthlyPension=annuityCorpus*0.06/12;
            return {
                main:{label:"Estimated Corpus",value:"₹"+Math.round(corpus).toLocaleString()},
                secondary:[
                    {label:"Lumpsum (60%)",value:"₹"+Math.round(corpus*0.6).toLocaleString()},
                    {label:"Annuity (40%)",value:"₹"+Math.round(annuityCorpus).toLocaleString()},
                    {label:"Est. Monthly Pension",value:"₹"+Math.round(monthlyPension).toLocaleString()},
                    {label:"Total Invested",value:"₹"+(v.monthly*n).toLocaleString()}
                ]
            };
        };

  if(DB['gratuity'] && DB['gratuity'].calc===null) DB['gratuity'].calc=function(v){
            if(v.years<5) return {main:{label:"Not Eligible",value:"Minimum 5 years required"}};
            const gratuity=(v.salary*15*v.years)/26;
            const taxFree=Math.min(gratuity,2000000);
            return {
                main:{label:"Gratuity Amount",value:"₹"+Math.round(gratuity).toLocaleString()},
                secondary:[
                    {label:"Tax-Free Limit",value:"₹20,00,000"},
                    {label:"Taxable Amount",value:"₹"+Math.max(0,Math.round(gratuity-2000000)).toLocaleString()},
                    {label:"Formula",value:"(Salary×15×Years)/26"}
                ]
            };
        };

  if(DB['hra'] && DB['hra'].calc===null) DB['hra'].calc=function(v){
            const isMetro = v.metro.startsWith("Yes");
            const annBasic = v.basic*12, annHra = v.hra*12, annRent = v.rent*12;
            const rule1 = annHra;
            const rule2 = annRent - 0.1*annBasic;
            const rule3 = isMetro ? 0.5*annBasic : 0.4*annBasic;
            const exempt = Math.max(0, Math.min(rule1, rule2, rule3));
            const taxable = annHra - exempt;
            return {
                main:{label:"HRA Exemption (Annual)",value:"₹"+Math.round(exempt).toLocaleString()},
                secondary:[
                    {label:"Taxable HRA",value:"₹"+Math.round(taxable).toLocaleString()},
                    {label:"Rule 1 — Actual HRA",value:"₹"+Math.round(rule1).toLocaleString()},
                    {label:"Rule 2 — Rent minus 10% Basic",value:"₹"+Math.max(0,Math.round(rule2)).toLocaleString()},
                    {label:"Rule 3 — "+(isMetro?"50":"40")+"% of Basic",value:"₹"+Math.round(rule3).toLocaleString()},
                    {label:"Exemption = Minimum of 3 rules",value:"₹"+Math.round(exempt).toLocaleString()}
                ],
                tips:["Exemption is the MINIMUM of all 3 rules","Keep rent receipts for amounts above ₹1L/year","Metro cities: Mumbai, Delhi, Kolkata, Chennai"]
            };
        };

  if(DB['cagr'] && DB['cagr'].calc===null) DB['cagr'].calc=function(v){
            const cagr = (Math.pow(v.end/v.begin, 1/v.yrs)-1)*100;
            const absGain = v.end - v.begin;
            const totalRet = ((v.end/v.begin)-1)*100;
            return {
                main:{label:"CAGR",value:cagr.toFixed(2)+"%"},
                secondary:[
                    {label:"Absolute Gain",value:"₹"+absGain.toLocaleString(),pos:true},
                    {label:"Total Return",value:totalRet.toFixed(2)+"%",pos:true},
                    {label:"Initial Value",value:"₹"+v.begin.toLocaleString()},
                    {label:"Final Value",value:"₹"+v.end.toLocaleString()},
                    {label:"Growth Multiplier",value:(v.end/v.begin).toFixed(2)+"×"}
                ]
            };
        };

  if(DB['creditcard'] && DB['creditcard'].calc===null) DB['creditcard'].calc=function(v){
            const monthlyRate = v.apr/12/100;
            const minPayment = v.balance*v.minPct/100 + v.extra;
            let bal = v.balance, months = 0, totalInt = 0;
            while(bal > 0 && months < 600){
                const int = bal*monthlyRate;
                totalInt += int;
                const pay = Math.min(bal+int, minPayment);
                bal = bal + int - pay;
                months++;
                if(bal < 0) bal = 0;
            }
            return {
                main:{label:"Total Interest Paid",value:"₹"+Math.round(totalInt).toLocaleString()},
                secondary:[
                    {label:"Months to Pay Off",value:months+(months<600?" months":"+ (very long)")},
                    {label:"Total Amount Paid",value:"₹"+Math.round(v.balance+totalInt).toLocaleString()},
                    {label:"Monthly Payment",value:"₹"+Math.round(minPayment).toLocaleString()},
                    {label:"Interest Rate (monthly)",value:(v.apr/12).toFixed(2)+"%"}
                ]
            };
        };

  if(DB['networth'] && DB['networth'].calc===null) DB['networth'].calc=function(v){
            const assets=v.cash+v.investments+v.property+v.other;
            const netWorth=assets-v.loans;
            return {
                main:{label:"Net Worth",value:"₹"+netWorth.toLocaleString()},
                secondary:[
                    {label:"Total Assets",value:"₹"+assets.toLocaleString()},
                    {label:"Total Liabilities",value:"₹"+v.loans.toLocaleString()},
                    {label:"Debt-to-Asset Ratio",value:((v.loans/assets)*100).toFixed(1)+"%"},
                    {label:"Status",value:netWorth>=0?"✓ Positive":"⚠ Negative"}
                ]
            };
        };

  if(DB['tds'] && DB['tds'].calc===null) DB['tds'].calc=function(v){
            const rates={"Salary":10,"Interest (194A)":10,"Commission (194H)":5,"Rent (194I)":10,"Professional (194J)":10,"Contractor (194C)":1};
            const rate=rates[v.type]||10;
            const tds=v.amount*rate/100;
            const net=v.amount-tds;
            return {
                main:{label:"TDS Amount",value:"₹"+tds.toFixed(2)},
                secondary:[
                    {label:"Net Amount (after TDS)",value:"₹"+net.toFixed(2)},
                    {label:"TDS Rate",value:rate+"%"},
                    {label:"Gross Amount",value:"₹"+v.amount.toFixed(2)},
                    {label:"Section",value:v.type.includes("(")?v.type.match(/\(([^)]+)\)/)[1]:"192B"}
                ]
            };
        };

  if(DB['epf'] && DB['epf'].calc===null) DB['epf'].calc=function(v){
            const empContrib=v.basic*0.12, empRContrib=v.basic*0.0367;
            const monthlyTotal=empContrib+empRContrib;
            // EPF credits interest annually; use annual compounding for monthly contributions
            // Annual contribution = monthlyTotal × 12
            const annualContrib = monthlyTotal * 12;
            const r = v.rate / 100;      // annual rate
            const n = v.years;
            // Annuity-due (contributions at start of year)
            const corpus = annualContrib * ((Math.pow(1+r, n) - 1) / r) * (1+r);
            const invested = monthlyTotal * n * 12;
            return {
                main:{label:"EPF Corpus",value:"₹"+Math.round(corpus).toLocaleString()},
                secondary:[
                    {label:"Employee (12%)",value:"₹"+empContrib.toFixed(0)+"/mo"},
                    {label:"Employer (3.67%)",value:"₹"+empRContrib.toFixed(0)+"/mo"},
                    {label:"Total Monthly",value:"₹"+monthlyTotal.toFixed(0)},
                    {label:"Total Invested",value:"₹"+Math.round(invested).toLocaleString()},
                    {label:"Interest Earned",value:"₹"+Math.round(corpus-invested).toLocaleString()}
                ]
            };
        };

  if(DB['profitloss'] && DB['profitloss'].calc===null) DB['profitloss'].calc=function(v){
            const pl=v.sell-v.cost;
            const plPct=(pl/v.cost)*100;
            const margin=(pl/v.sell)*100;
            const markup=(pl/v.cost)*100;
            return {
                main:{label:pl>=0?"Profit":"Loss",value:"₹"+Math.abs(pl).toFixed(2)},
                secondary:[
                    {label:pl>=0?"Profit %":"Loss %",value:Math.abs(plPct).toFixed(2)+"%",pos:pl>=0,neg:pl<0},
                    {label:"Profit Margin",value:margin.toFixed(2)+"%"},
                    {label:"Markup %",value:markup.toFixed(2)+"%"},
                    {label:"To break even",value:"₹"+v.cost.toFixed(2)}
                ]
            };
        };

  if(DB['stockreturn'] && DB['stockreturn'].calc===null) DB['stockreturn'].calc=function(v){
            const invested=v.buyPrice*v.qty+v.brokerage;
            const proceeds=v.sellPrice*v.qty-v.brokerage;
            const pl=proceeds-invested;
            const stts=(v.buyPrice+v.sellPrice)*v.qty*0.001;
            const netPl=pl-stts;
            const roi=(netPl/invested)*100;
            return {
                main:{label:netPl>=0?"Net Profit":"Net Loss",value:"₹"+Math.abs(netPl).toFixed(2)},
                secondary:[
                    {label:"Invested",value:"₹"+invested.toFixed(2)},
                    {label:"Gross Profit",value:"₹"+pl.toFixed(2),pos:pl>=0,neg:pl<0},
                    {label:"STTS (0.1%)",value:"₹"+stts.toFixed(2)},
                    {label:"ROI",value:roi.toFixed(2)+"%",pos:roi>=0}
                ]
            };
        };

  if(DB['mutualfundreturns'] && DB['mutualfundreturns'].calc===null) DB['mutualfundreturns'].calc=function(v){
            const invested=v.buyNav*v.units;
            const current=v.sellNav*v.units;
            const gain=current-invested;
            const absReturn=(gain/invested)*100;
            const cagr=(Math.pow(v.sellNav/v.buyNav,1/v.years)-1)*100;
            return {
                main:{label:"Current Value",value:"₹"+Math.round(current).toLocaleString()},
                secondary:[
                    {label:"Invested Amount",value:"₹"+Math.round(invested).toLocaleString()},
                    {label:"Gain",value:"₹"+Math.round(gain).toLocaleString(),pos:gain>=0},
                    {label:"Absolute Return",value:absReturn.toFixed(2)+"%",pos:gain>=0},
                    {label:"CAGR",value:cagr.toFixed(2)+"%",pos:gain>=0}
                ]
            };
        };

  if(DB['taxregime'] && DB['taxregime'].calc===null) DB['taxregime'].calc=function(v){
            const std = 50000;
            // Old regime
            const oldDeductions = Math.min(v.sec80c,150000)+Math.min(v.nps,50000)+v.med+Math.min(v.hloan,200000)+v.hra_ex+std;
            const oldTaxable = Math.max(0, v.income - oldDeductions);
            function oldTax(ti){
                if(ti<=250000) return 0;
                if(ti<=500000) return (ti-250000)*0.05;
                if(ti<=1000000) return 12500+(ti-500000)*0.20;
                return 112500+(ti-1000000)*0.30;
            }
            const oldT = oldTax(oldTaxable)*1.04; // 4% cess
            // New regime FY25-26 (Budget 2026)
            const newTaxable = Math.max(0, v.income - 75000); // std deduction 75K
            function newTax(ti){
                if(ti<=400000) return 0;
                if(ti<=800000) return (ti-400000)*0.05;
                if(ti<=1200000) return 20000+(ti-800000)*0.10;
                if(ti<=1600000) return 60000+(ti-1200000)*0.15;
                if(ti<=2000000) return 120000+(ti-1600000)*0.20;
                if(ti<=2400000) return 200000+(ti-2000000)*0.25;
                return 300000+(ti-2400000)*0.30;
            }
            let newT = newTax(newTaxable); if(newTaxable<=1200000) newT=0; newT=newT*1.04;
            const saving = oldT - newT;
            return {
                main:{label:"Better Regime",value:saving>0?"New Regime saves ₹"+Math.round(saving).toLocaleString():saving<0?"Old Regime saves ₹"+Math.round(-saving).toLocaleString():"Both equal"},
                secondary:[
                    {label:"Old Regime Tax",value:"₹"+Math.round(oldT).toLocaleString()},
                    {label:"Old Taxable Income",value:"₹"+Math.round(oldTaxable).toLocaleString()},
                    {label:"Old Deductions",value:"₹"+Math.round(oldDeductions).toLocaleString()},
                    {label:"New Regime Tax",value:"₹"+Math.round(newT).toLocaleString()},
                    {label:"New Taxable Income",value:"₹"+Math.round(newTaxable).toLocaleString()},
                    {label:"Tax Saving",value:"₹"+Math.round(Math.abs(saving)).toLocaleString(),pos:saving>0}
                ]
            };
        };

  if(DB['capitalgains'] && DB['capitalgains'].calc===null) DB['capitalgains'].calc=function(v){
            const gain = v.sellPrice - v.buyPrice;
            const isEquity = v.assetType.startsWith("Equity");
            const isLT = isEquity ? v.holdMonths >= 12 : v.holdMonths >= 24;
            let taxRate, taxLabel, tax;
            if(isEquity){
                if(isLT){ taxRate=12.5; taxLabel="LTCG (Equity >12 mo)"; tax=Math.max(0,gain-125000)*0.125; }
                else { taxRate=20; taxLabel="STCG (Equity <12 mo)"; tax=Math.max(0,gain)*0.20; }
            } else {
                if(isLT){ taxRate=12.5; taxLabel="LTCG (no indexation)"; tax=Math.max(0,gain)*0.125; }
                else { taxLabel="STCG (added to income)"; taxRate=30; tax=Math.max(0,gain)*0.30; }
            }
            return {
                main:{label:taxLabel+" Tax",value:"₹"+Math.round(tax).toLocaleString()},
                secondary:[
                    {label:"Capital Gain",value:"₹"+gain.toLocaleString(),pos:gain>0,neg:gain<0},
                    {label:"Tax Rate",value:taxRate+"%"},
                    {label:"Post-Tax Profit",value:"₹"+Math.round(gain-tax).toLocaleString(),pos:true},
                    {label:"Effective Return",value:((v.sellPrice-v.buyPrice-tax)/v.buyPrice*100).toFixed(2)+"%"}
                ]
            };
        };

  if(DB['prepayment'] && DB['prepayment'].calc===null) DB['prepayment'].calc=function(v){
            const r=v.rate/12/100;
            function totalInterest(P,n){ const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1); return emi*n-P; }
            const intBefore = totalInterest(v.outstanding, v.rem);
            const newP = Math.max(0, v.outstanding - v.lump);
            const intAfter = totalInterest(newP, v.rem);
            const saved = intBefore - intAfter;
            // New tenure calculation
            const emi = v.outstanding*r*Math.pow(1+r,v.rem)/(Math.pow(1+r,v.rem)-1);
            const newN = Math.log(emi/(emi-newP*r))/Math.log(1+r);
            const monthsSaved = v.rem - Math.ceil(newN);
            return {
                main:{label:"Interest Saved",value:"₹"+Math.round(saved).toLocaleString(),pos:true},
                secondary:[
                    {label:"Months Saved",value:monthsSaved+" months ("+Math.floor(monthsSaved/12)+"y "+monthsSaved%12+"m)"},
                    {label:"New Outstanding",value:"₹"+Math.round(newP).toLocaleString()},
                    {label:"Interest Without Prepayment",value:"₹"+Math.round(intBefore).toLocaleString()},
                    {label:"Interest After Prepayment",value:"₹"+Math.round(intAfter).toLocaleString()}
                ]
            };
        };

  if(DB['stepupsip'] && DB['stepupsip'].calc===null) DB['stepupsip'].calc=function(v){
            let totalInvested=0, fv=0;
            const monthlyRate = v.ret/12/100;
            let monthlySIP = v.monthly;
            for(let y=0; y<v.years; y++){
                for(let m=0; m<12; m++){
                    fv = (fv + monthlySIP) * (1+monthlyRate);
                    totalInvested += monthlySIP;
                }
                monthlySIP *= (1 + v.stepup/100);
            }
            const gains = fv - totalInvested;
            return {
                main:{label:"Future Value",value:"₹"+Math.round(fv).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+Math.round(totalInvested).toLocaleString()},
                    {label:"Wealth Gained",value:"₹"+Math.round(gains).toLocaleString(),pos:true},
                    {label:"Final Monthly SIP",value:"₹"+Math.round(monthlySIP).toLocaleString()},
                    {label:"Return Multiple",value:(fv/totalInvested).toFixed(2)+"×"}
                ],
                chart:{a:Math.round(totalInvested),b:Math.round(gains),lA:"Invested",lB:"Gains"}
            };
        };

  if(DB['savingsgoal'] && DB['savingsgoal'].calc===null) DB['savingsgoal'].calc=function(v){
            const r = v.ret/12/100, n = v.years*12;
            const futureCurrentSavings = v.current * Math.pow(1+r, n);
            const remaining = Math.max(0, v.goal - futureCurrentSavings);
            const monthly = remaining > 0 ? remaining*r/((Math.pow(1+r,n)-1)*(1+r)) : 0;
            return {
                main:{label:"Monthly Savings Needed",value:"₹"+Math.round(monthly).toLocaleString()},
                secondary:[
                    {label:"Target Amount",value:"₹"+v.goal.toLocaleString()},
                    {label:"Future Value of Current Savings",value:"₹"+Math.round(futureCurrentSavings).toLocaleString()},
                    {label:"Gap to Fill via SIP",value:"₹"+Math.round(remaining).toLocaleString()},
                    {label:"Total New Investment",value:"₹"+Math.round(monthly*n).toLocaleString()},
                    {label:"Years to Goal",value:v.years+" years"}
                ]
            };
        };

  if(DB['dividendyield'] && DB['dividendyield'].calc===null) DB['dividendyield'].calc=function(v){
            const yield_ = (v.dividend/v.price)*100;
            const annualIncome = v.dividend * v.shares;
            const payout = (v.dividend/v.eps)*100;
            return {
                main:{label:"Dividend Yield",value:yield_.toFixed(2)+"%"},
                secondary:[
                    {label:"Annual Dividend Income",value:"₹"+annualIncome.toLocaleString()},
                    {label:"Monthly Income",value:"₹"+(annualIncome/12).toFixed(0)},
                    {label:"Payout Ratio",value:payout.toFixed(1)+"%"},
                    {label:"Shares Held",value:v.shares.toLocaleString()},
                    {label:"Investment Value",value:"₹"+(v.price*v.shares).toLocaleString()}
                ]
            };
        };

  if(DB['goldinvestment'] && DB['goldinvestment'].calc===null) DB['goldinvestment'].calc=function(v){
            const buyTotal = (v.buyRate/10)*v.grams*(1+v.making/100);
            const currentVal = (v.currentRate/10)*v.grams;
            const profit = currentVal - buyTotal;
            const returns = (profit/buyTotal)*100;
            return {
                main:{label:"Current Gold Value",value:"₹"+Math.round(currentVal).toLocaleString()},
                secondary:[
                    {label:"Total Buy Cost (incl. making)",value:"₹"+Math.round(buyTotal).toLocaleString()},
                    {label:"Profit / Loss",value:"₹"+Math.round(profit).toLocaleString(),pos:profit>0,neg:profit<0},
                    {label:"Return",value:returns.toFixed(2)+"%",pos:returns>0},
                    {label:"Gold Rate (per gram)",value:"₹"+(v.currentRate/10).toFixed(0)}
                ]
            };
        };

  if(DB['rd'] && DB['rd'].calc===null) DB['rd'].calc=function(v){
            // Indian RD: monthly deposits, quarterly compounding
            // Standard RD formula: M = P × [(1+i)^n - 1] / (1 - (1+i)^(-1/3))
            // where i = quarterly rate, n = total quarters
            const i = v.rate_rd / 4 / 100;
            const n = v.tenure_rd / 3;
            const M = v.monthly_rd * (Math.pow(1+i, n) - 1) / (1 - Math.pow(1+i, -1/3));
            const invested = v.monthly_rd * v.tenure_rd;
            const interest = M - invested;
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(M).toLocaleString('en-IN')},
                secondary:[
                    {label:"Total Deposited",value:"₹"+invested.toLocaleString('en-IN')},
                    {label:"Interest Earned",value:"₹"+Math.round(interest).toLocaleString('en-IN'),pos:true},
                    {label:"Effective Return",value:((interest/invested)*100).toFixed(2)+"%",pos:true}
                ],
                chart:{a:Math.round(invested),b:Math.round(interest),lA:"Deposited",lB:"Interest"}
            };
        };

  if(DB['xirr'] && DB['xirr'].calc===null) DB['xirr'].calc=function(v){
            const years = v.months_x/12;
            const xirr = (Math.pow(v.currentVal/v.invested, 1/years)-1)*100;
            const absgain = v.currentVal - v.invested;
            const doubleYrs = (72/xirr).toFixed(1);
            return {
                main:{label:"XIRR (Annualised Return)",value:xirr.toFixed(2)+"%"},
                secondary:[
                    {label:"Absolute Gain",value:"₹"+Math.round(absgain).toLocaleString('en-IN'),pos:absgain>0,neg:absgain<0},
                    {label:"Total Return",value:((absgain/v.invested)*100).toFixed(2)+"%",pos:absgain>0},
                    {label:"Rule of 72 — Doubles in",value:xirr>0?doubleYrs+" years":"N/A"},
                    {label:"Duration",value:v.months_x+" months ("+years.toFixed(1)+" years)"}
                ]
            };
        };

  if(DB['loaneligibility'] && DB['loaneligibility'].calc===null) DB['loaneligibility'].calc=function(v){
            const maxEMI = (v.income_le - v.existing_emi) * 0.5;
            const r = v.rate_le/12/100, n = v.tenure_le;
            const maxLoan = maxEMI * (Math.pow(1+r,n)-1) / (r*Math.pow(1+r,n));
            const foir = ((v.existing_emi+maxEMI)/v.income_le*100).toFixed(1);
            return {
                main:{label:"Maximum Loan Eligibility",value:"₹"+Math.round(maxLoan).toLocaleString('en-IN')},
                secondary:[
                    {label:"Max Affordable EMI",value:"₹"+Math.round(maxEMI).toLocaleString('en-IN')},
                    {label:"FOIR (Fixed Obligation Ratio)",value:foir+"%"},
                    {label:"Banks prefer FOIR below",value:"50%"},
                    {label:"Tenure",value:v.tenure_le+" months"}
                ]
            };
        };

  if(DB['balancetransfer'] && DB['balancetransfer'].calc===null) DB['balancetransfer'].calc=function(v){
            const P = v.outstanding_bt, n = v.remaining_bt;
            function totalInt(rate){ const r=rate/12/100; const emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1); return emi*n-P; }
            const intOld = totalInt(v.currentRate);
            const intNew = totalInt(v.newRate);
            const saved = intOld - intNew - v.processingFee;
            const breakEven = saved > 0 ? Math.ceil(v.processingFee / ((intOld-intNew)/n)) : 0;
            return {
                main:{label:"Net Interest Saved",value:"₹"+Math.round(saved).toLocaleString('en-IN'),pos:saved>0},
                secondary:[
                    {label:"Interest at Current Rate",value:"₹"+Math.round(intOld).toLocaleString('en-IN')},
                    {label:"Interest at New Rate",value:"₹"+Math.round(intNew).toLocaleString('en-IN')},
                    {label:"Processing Fee",value:"₹"+v.processingFee.toLocaleString('en-IN')},
                    {label:"Break-Even in",value:saved>0?breakEven+" months":"Not beneficial"},
                    {label:"Verdict",value:saved>0?"✅ Transfer beneficial":"❌ Not worth transferring"}
                ]
            };
        };

  if(DB['ssy'] && DB['ssy'].calc===null) DB['ssy'].calc=function(v){
            const depositYears = 15, maturityAge = 21;
            const totalYears = maturityAge - v.girlAge;
            const r = v.rate_ssy/100;
            let balance = 0;
            for(let y=1; y<=depositYears; y++) balance = (balance + v.annual_ssy) * (1+r);
            for(let y=depositYears+1; y<=totalYears; y++) balance = balance * (1+r);
            const invested = v.annual_ssy * depositYears;
            return {
                main:{label:"Maturity Amount (at age 21)",value:"₹"+Math.round(balance).toLocaleString('en-IN')},
                secondary:[
                    {label:"Total Invested (15 years)",value:"₹"+invested.toLocaleString('en-IN')},
                    {label:"Interest Earned",value:"₹"+Math.round(balance-invested).toLocaleString('en-IN'),pos:true},
                    {label:"Years to Maturity",value:totalYears+" years"},
                    {label:"Tax Benefit",value:"80C deduction + tax-free maturity (EEE)"}
                ]
            };
        };

  if(DB['scss'] && DB['scss'].calc===null) DB['scss'].calc=function(v){
            const P = Math.min(v.principal_scss, 3000000);
            const quarterly = P * v.rate_scss/4/100;
            const annual = P * v.rate_scss/100;
            const maturity5yr = P; // principal returned at maturity
            const totalInterest = annual * 5;
            return {
                main:{label:"Quarterly Interest",value:"₹"+Math.round(quarterly).toLocaleString('en-IN')},
                secondary:[
                    {label:"Annual Interest",value:"₹"+Math.round(annual).toLocaleString('en-IN')},
                    {label:"Total Interest (5 years)",value:"₹"+Math.round(totalInterest).toLocaleString('en-IN'),pos:true},
                    {label:"Principal at Maturity",value:"₹"+P.toLocaleString('en-IN')},
                    {label:"Effective Yield",value:v.rate_scss+"% p.a."},
                    {label:"TDS applicable above",value:"₹50,000 interest/year"}
                ]
            };
        };

  if(DB['advancetax'] && DB['advancetax'].calc===null) DB['advancetax'].calc=function(v){
            let taxable = v.income;
            let tax = 0;
            if(v.regime==="New Regime"){
                taxable = Math.max(0, v.income - 75000);
                const slabs=[[400000,0],[400000,0.05],[400000,0.10],[400000,0.15],[400000,0.20],[400000,0.25],[Infinity,0.30]];
                let rem=taxable;
                for(const [lim,rate] of slabs){ if(rem<=0)break; const ch=Math.min(rem,lim); tax+=ch*rate; rem-=ch; }
                if(taxable<=1200000) tax=0;
            } else {
                // Old regime: basic exemption ₹2.5L is built into slabs (first slab = 0%)
                // Do NOT subtract ₹2.5L again; the slabs below cover ₹0-2.5L@0%, ₹2.5L-5L@5%, etc.
                taxable = Math.max(0, v.income - 50000 - Math.min(v.sec80c,150000));
                const slabs=[[250000,0],[250000,0.05],[500000,0.20],[Infinity,0.30]];
                let rem=taxable;
                for(const [lim,rate] of slabs){ if(rem<=0)break; const ch=Math.min(rem,lim); tax+=ch*rate; rem-=ch; }
            }
            const cess = tax * 0.04;
            const totalTax = Math.round(tax + cess);
            const net = Math.max(0, totalTax - v.tds);
            const q1 = Math.round(net * 0.15);
            const q2 = Math.round(net * 0.45) - q1;
            const q3 = Math.round(net * 0.75) - q1 - q2;
            const q4 = net - q1 - q2 - q3;
            return {
                main:{label:"Net Advance Tax Payable",value:"₹"+net.toLocaleString()},
                secondary:[
                    {label:"Total Tax (incl. cess)",value:"₹"+totalTax.toLocaleString()},
                    {label:"Less: TDS",value:"₹"+v.tds.toLocaleString()},
                    {label:"Q1 (Jun 15) — 15%",value:"₹"+q1.toLocaleString()},
                    {label:"Q2 (Sep 15) — 45%",value:"₹"+(q1+q2).toLocaleString()+" (pay ₹"+q2.toLocaleString()+")"},
                    {label:"Q3 (Dec 15) — 75%",value:"₹"+(q1+q2+q3).toLocaleString()+" (pay ₹"+q3.toLocaleString()+")"},
                    {label:"Q4 (Mar 15) — 100%",value:"₹"+net.toLocaleString()+" (pay ₹"+q4.toLocaleString()+")"}
                ],
                chart:{labels:["Q1 (Jun)","Q2 (Sep)","Q3 (Dec)","Q4 (Mar)"],data:[q1,q2,q3,q4]}
            };
        };

  if(DB['inhandsalary'] && DB['inhandsalary'].calc===null) DB['inhandsalary'].calc=function(v){
            const basic = v.ctc * v.basic_pct / 100;
            const hra = basic * v.hra_pct / 100;
            const pf_emp = basic * v.pf_pct / 100;           // employee PF deduction from salary
            const pf_er = basic * Math.min(v.pf_pct, 12) / 100; // employer PF (additional cost, not deducted from gross)
            // Special allowance = CTC - basic - HRA - employer PF - other common components
            const special = Math.max(0, v.ctc - basic - hra - pf_er);
            // In-hand = gross (CTC) minus employee-side deductions only
            const inhand = v.ctc - pf_emp - v.ptax - v.other_ded;
            return {
                main:{label:"Monthly In-Hand Salary",value:"₹"+Math.round(inhand).toLocaleString()},
                secondary:[
                    {label:"Basic Salary",value:"₹"+Math.round(basic).toLocaleString()},
                    {label:"HRA",value:"₹"+Math.round(hra).toLocaleString()},
                    {label:"PF (Employee)",value:"₹"+Math.round(pf_emp).toLocaleString()},
                    {label:"PF (Employer)",value:"₹"+Math.round(pf_er).toLocaleString()},
                    {label:"Professional Tax",value:"₹"+v.ptax.toLocaleString()},
                    {label:"Special Allowance",value:"₹"+Math.round(Math.max(0,special)).toLocaleString()},
                    {label:"Annual In-Hand",value:"₹"+Math.round(inhand*12).toLocaleString(),pos:true}
                ],
                chart:{labels:["In-Hand","PF (Emp)","PF (Er)","PT","Other Ded"],data:[Math.round(inhand),Math.round(pf_emp),Math.round(pf_er),v.ptax,v.other_ded]}
            };
        };

  if(DB['ctcbreakup'] && DB['ctcbreakup'].calc===null) DB['ctcbreakup'].calc=function(v){
            const ctc = v.annual_ctc;
            const basic = ctc * v.basic_pct / 100;
            const hra = basic * v.hra_pct / 100;
            const bonus = ctc * v.bonus_pct / 100;
            const gratAmt = v.gratuity_inc==="Yes" ? Math.round(basic * 15 / 26 / 12) * 12 : 0;
            const pfEr = Math.min(basic, 15000*12) * 0.12;
            const pfEmp = pfEr;
            const ins = v.insurance;
            const grossMonthly = (ctc - bonus - gratAmt - pfEr - ins) / 12;
            const monthlyPF = pfEmp / 12;
            const ptax = 200;
            const inhand = grossMonthly - monthlyPF - ptax;
            return {
                main:{label:"Monthly In-Hand (est.)",value:"₹"+Math.round(inhand).toLocaleString()},
                secondary:[
                    {label:"Annual CTC",value:"₹"+Math.round(ctc).toLocaleString()},
                    {label:"Monthly Basic",value:"₹"+Math.round(basic/12).toLocaleString()},
                    {label:"Monthly HRA",value:"₹"+Math.round(hra/12).toLocaleString()},
                    {label:"Annual Bonus/Variable",value:"₹"+Math.round(bonus).toLocaleString()},
                    {label:"Employer PF (annual)",value:"₹"+Math.round(pfEr).toLocaleString()},
                    {label:"Gratuity (annual)",value:"₹"+Math.round(gratAmt).toLocaleString()},
                    {label:"Medical Insurance",value:"₹"+ins.toLocaleString()},
                    {label:"Annual In-Hand (approx.)",value:"₹"+Math.round(inhand*12).toLocaleString(),pos:true}
                ],
                chart:{labels:["In-Hand","PF (Emp+Er)","Bonus","Gratuity","Insurance","Tax/PT"],
                    data:[Math.round(inhand*12),Math.round(pfEr+pfEmp),Math.round(bonus),Math.round(gratAmt),ins,ptax*12]}
            };
        };

  if(DB['salarycomparison'] && DB['salarycomparison'].calc===null) DB['salarycomparison'].calc=function(v){
            const oldFixed = v.old_ctc * (1 - v.old_bonus/100) - v.old_pf;
            const newFixed = v.new_ctc * (1 - v.new_bonus/100) - v.new_pf;
            const oldMonthly = Math.round(oldFixed / 12);
            const newMonthly = Math.round(newFixed / 12);
            const hike = ((v.new_ctc - v.old_ctc) / v.old_ctc * 100);
            const fixedHike = ((newFixed - oldFixed) / oldFixed * 100);
            return {
                main:{label:"CTC Hike",value:hike.toFixed(1)+"%"},
                secondary:[
                    {label:"Old CTC",value:"₹"+v.old_ctc.toLocaleString()},
                    {label:"New CTC",value:"₹"+v.new_ctc.toLocaleString()},
                    {label:"Old Monthly (fixed)",value:"₹"+oldMonthly.toLocaleString()},
                    {label:"New Monthly (fixed)",value:"₹"+newMonthly.toLocaleString()},
                    {label:"Fixed Pay Hike",value:fixedHike.toFixed(1)+"%",pos:fixedHike>0},
                    {label:"Monthly Increase",value:"₹"+(newMonthly-oldMonthly).toLocaleString(),pos:newMonthly>oldMonthly},
                    {label:"Relocation/Joining Bonus",value:"₹"+v.relocation.toLocaleString()}
                ],
                chart:{labels:["Old Fixed","Old Bonus","Old PF","New Fixed","New Bonus","New PF"],
                    data:[Math.round(oldFixed),Math.round(v.old_ctc*v.old_bonus/100),v.old_pf,Math.round(newFixed),Math.round(v.new_ctc*v.new_bonus/100),v.new_pf]}
            };
        };

  if(DB['goalsip'] && DB['goalsip'].calc===null) DB['goalsip'].calc=function(v){
            const r = v.rate / 12 / 100;
            const n = v.years * 12;
            const existingFV = v.existing * Math.pow(1+r, n);
            const remaining = Math.max(0, v.goal - existingFV);
            const sip = remaining > 0 ? remaining * r / ((Math.pow(1+r,n)-1)*(1+r)) : 0;
            const totalInvested = Math.round(sip) * n + v.existing;
            const returns = v.goal - totalInvested;
            return {
                main:{label:"Monthly SIP Required",value:"₹"+Math.round(sip).toLocaleString()},
                secondary:[
                    {label:"Target Goal",value:"₹"+v.goal.toLocaleString()},
                    {label:"Existing Corpus FV",value:"₹"+Math.round(existingFV).toLocaleString()},
                    {label:"Remaining to Fund",value:"₹"+Math.round(remaining).toLocaleString()},
                    {label:"Total Investment",value:"₹"+Math.round(totalInvested).toLocaleString()},
                    {label:"Expected Returns",value:"₹"+Math.round(returns).toLocaleString(),pos:true},
                    {label:"Daily SIP Equivalent",value:"₹"+Math.round(sip/30).toLocaleString()+"/day"}
                ],
                chart:{a:Math.round(totalInvested),b:Math.round(Math.max(0,returns)),lA:"Invested",lB:"Returns",
                    timeline:(function(){
                        var labels=[],invArr=[],corpusArr=[];
                        for(var yr=1;yr<=v.years;yr++){
                            var months=yr*12;
                            var fv=Math.round(sip)*((Math.pow(1+r,months)-1)/r)*(1+r)+v.existing*Math.pow(1+r,months);
                            labels.push('Yr '+yr);
                            invArr.push(Math.round(Math.round(sip)*months+v.existing));
                            corpusArr.push(Math.round(fv));
                        }
                        return {labels:labels,datasets:[
                            {label:'Amount Invested',data:invArr,fill:false},
                            {label:'Corpus Value',data:corpusArr,fill:true}
                        ]};
                    })()
                }
            };
        };

  if(DB['elssreturns'] && DB['elssreturns'].calc===null) DB['elssreturns'].calc=function(v){
            const r = v.rate / 12 / 100;
            const n = v.years * 12;
            const fv = v.monthly * ((Math.pow(1+r,n)-1)/r) * (1+r);
            const invested = v.monthly * n;
            const returns = fv - invested;
            const annualInvest = Math.min(v.monthly * 12, 150000);
            const slabRate = parseFloat(v.taxslab) / 100;
            const annualTaxSaved = Math.round(annualInvest * slabRate);
            const totalTaxSaved = annualTaxSaved * v.years;
            const ltcg = Math.max(0, returns - 125000);
            const ltcgTax = Math.round(ltcg * 0.125);
            return {
                main:{label:"Maturity Value",value:"₹"+Math.round(fv).toLocaleString()},
                secondary:[
                    {label:"Total Invested",value:"₹"+invested.toLocaleString()},
                    {label:"Expected Returns",value:"₹"+Math.round(returns).toLocaleString(),pos:true},
                    {label:"Annual Tax Saved (80C)",value:"₹"+annualTaxSaved.toLocaleString(),pos:true},
                    {label:"Total Tax Saved",value:"₹"+totalTaxSaved.toLocaleString(),pos:true},
                    {label:"LTCG Tax (12.5% above ₹1.25L)",value:"₹"+ltcgTax.toLocaleString()},
                    {label:"Effective Return (with tax benefit)",value:((fv+totalTaxSaved-invested)/invested*100).toFixed(1)+"%",pos:true},
                    {label:"Lock-in Period",value:"3 years (shortest in 80C)"}
                ],
                chart:{labels:["Invested","Returns","Tax Saved"],data:[invested,Math.round(returns),totalTaxSaved]}
            };
        };

  if(DB['nsccalculator'] && DB['nsccalculator'].calc===null) DB['nsccalculator'].calc=function(v){
            const maturity = v.amount * Math.pow(1 + v.rate/100, v.tenure);
            const interest = maturity - v.amount;
            const taxBenefit80C = Math.min(v.amount, 150000) * parseFloat(v.taxslab)/100;
            // NSC interest is re-invested and qualifies for 80C (years 1 to n-1)
            let reinvestedInterest = 0;
            for(let i=1;i<v.tenure;i++){
                reinvestedInterest += v.amount * Math.pow(1+v.rate/100,i) - v.amount * Math.pow(1+v.rate/100,i-1);
            }
            const reinvestTaxBenefit = Math.round(reinvestedInterest * parseFloat(v.taxslab)/100);
            return {
                main:{label:"Maturity Amount",value:"₹"+Math.round(maturity).toLocaleString()},
                secondary:[
                    {label:"Total Interest",value:"₹"+Math.round(interest).toLocaleString(),pos:true},
                    {label:"Investment",value:"₹"+v.amount.toLocaleString()},
                    {label:"Tax Saved (80C on principal)",value:"₹"+Math.round(taxBenefit80C).toLocaleString(),pos:true},
                    {label:"Tax Saved (reinvested interest)",value:"₹"+reinvestTaxBenefit.toLocaleString(),pos:true},
                    {label:"Effective Return (post-tax benefit)",value:((interest+taxBenefit80C)/v.amount*100).toFixed(1)+"%",pos:true},
                    {label:"Tenure",value:v.tenure+" years (fixed)"}
                ],
                chart:{a:v.amount,b:Math.round(interest),lA:"Principal",lB:"Interest"}
            };
        };

  if(DB['apycalculator'] && DB['apycalculator'].calc===null) DB['apycalculator'].calc=function(v){
            const pensionAmt = parseInt(v.pension.replace(/[₹,]/g,''));
            const yearsToContribute = 60 - v.age;
            // Approximate APY contribution table
            const table = {
                1000:{18:42,20:50,25:76,30:116,35:181,40:291},
                2000:{18:84,20:100,25:151,30:231,35:362,40:582},
                3000:{18:126,20:150,25:226,30:347,35:543,40:873},
                4000:{18:168,20:198,25:301,30:462,35:722,40:1164},
                5000:{18:210,20:248,25:376,30:577,35:902,40:1454}
            };
            const ages = [18,20,25,30,35,40];
            let contribution = 0;
            const t = table[pensionAmt];
            if(t){
                // Find closest age bracket
                let closest = 18;
                for(const a of ages){ if(v.age >= a) closest = a; }
                contribution = t[closest] || t[40] || 0;
            }
            const totalContrib = contribution * 12 * yearsToContribute;
            const corpusMultiplier = {1000:1.7,2000:3.4,3000:5.1,4000:6.8,5000:8.5};
            const corpus = (corpusMultiplier[pensionAmt]||1.7) * 100000;
            return {
                main:{label:"Monthly Contribution",value:"₹"+contribution.toLocaleString()},
                secondary:[
                    {label:"Desired Pension",value:"₹"+pensionAmt.toLocaleString()+"/month"},
                    {label:"Years of Contribution",value:yearsToContribute+" years"},
                    {label:"Total Contribution",value:"₹"+totalContrib.toLocaleString()},
                    {label:"Corpus at 60",value:"₹"+corpus.toLocaleString()},
                    {label:"Pension Starts at",value:"Age 60"},
                    {label:"Spouse gets pension",value:"Yes, after subscriber"},
                    {label:"Nominee gets corpus",value:"₹"+corpus.toLocaleString()}
                ]
            };
        };

  if(DB['brokerage'] && DB['brokerage'].calc===null) DB['brokerage'].calc=function(v){
            const buyVal = v.buy_price * v.qty;
            const sellVal = v.sell_price * v.qty;
            const turnover = buyVal + sellVal;
            let brokerage = 0;
            if(v.broker_type==="Discount (₹20 flat)") brokerage = Math.min(20, buyVal*0.0003) + Math.min(20, sellVal*0.0003);
            else if(v.broker_type==="Traditional (0.5%)") brokerage = turnover * 0.005;
            else brokerage = v.trade_type==="Delivery (CNC)" ? 0 : Math.min(20, buyVal*0.0003)+Math.min(20, sellVal*0.0003);

            let stt = 0;
            if(v.trade_type==="Delivery (CNC)") stt = buyVal * 0.001 + sellVal * 0.001;
            else if(v.trade_type==="Intraday (MIS)") stt = sellVal * 0.00025;
            else if(v.trade_type==="F&O (Futures)") stt = sellVal * 0.0002;
            else stt = sellVal * 0.001;

            const exchangeTxn = turnover * 0.0000345;
            const gst = (brokerage + exchangeTxn) * 0.18;
            const sebi = turnover * 0.000001;
            const stamp = buyVal * 0.00015;
            const totalCharges = brokerage + stt + exchangeTxn + gst + sebi + stamp;
            const profit = sellVal - buyVal;
            const netProfit = profit - totalCharges;
            return {
                main:{label:"Net Profit/Loss",value:"₹"+netProfit.toFixed(2)},
                secondary:[
                    {label:"Gross Profit",value:"₹"+profit.toFixed(2),pos:profit>0},
                    {label:"Total Charges",value:"₹"+totalCharges.toFixed(2)},
                    {label:"Brokerage",value:"₹"+brokerage.toFixed(2)},
                    {label:"STT",value:"₹"+stt.toFixed(2)},
                    {label:"Exchange Txn Charges",value:"₹"+exchangeTxn.toFixed(2)},
                    {label:"GST (18%)",value:"₹"+gst.toFixed(2)},
                    {label:"SEBI Charges",value:"₹"+sebi.toFixed(2)},
                    {label:"Stamp Duty",value:"₹"+stamp.toFixed(2)},
                    {label:"Break-Even Sell Price",value:"₹"+((buyVal+totalCharges)/v.qty).toFixed(2)}
                ],
                chart:{labels:["Brokerage","STT","Exchange","GST","SEBI","Stamp"],data:[brokerage,stt,exchangeTxn,gst,sebi,stamp]}
            };
        };

  if(DB['taxsaving'] && DB['taxsaving'].calc===null) DB['taxsaving'].calc=function(v){
            const sec80c = Math.min(150000, v.epf + v.ppf + v.elss + v.lic);
            const sec80ccd = Math.min(50000, v.nps80ccd);
            const sec80d = Math.min(75000, v.med80d);
            const sec24b = Math.min(200000, v.hloan);
            const totalDeductions = sec80c + sec80ccd + sec80d + sec24b;
            const slabRate = parseFloat(v.taxslab) / 100;
            const taxSaved = Math.round(totalDeductions * slabRate);
            const remaining80c = Math.max(0, 150000 - v.epf - v.ppf - v.elss - v.lic);
            const remaining80ccd = Math.max(0, 50000 - v.nps80ccd);
            return {
                main:{label:"Total Tax Saved",value:"₹"+taxSaved.toLocaleString()},
                secondary:[
                    {label:"80C Used / Limit",value:"₹"+sec80c.toLocaleString()+" / ₹1,50,000"},
                    {label:"80CCD(1B) — NPS",value:"₹"+sec80ccd.toLocaleString()+" / ₹50,000"},
                    {label:"80D — Medical",value:"₹"+sec80d.toLocaleString()+" / ₹75,000"},
                    {label:"24B — Home Loan Interest",value:"₹"+sec24b.toLocaleString()+" / ₹2,00,000"},
                    {label:"Total Deductions",value:"₹"+totalDeductions.toLocaleString()},
                    {label:"Remaining 80C room",value:"₹"+remaining80c.toLocaleString()},
                    {label:"Remaining NPS room",value:"₹"+remaining80ccd.toLocaleString()},
                    {label:"Effective Tax Rate Reduction",value:(totalDeductions/v.income*100).toFixed(1)+"%"}
                ],
                chart:{labels:["80C","80CCD(1B)","80D","24B"],data:[sec80c,sec80ccd,sec80d,sec24b]}
            };
        };

  if(DB['retirementcorpus'] && DB['retirementcorpus'].calc===null) DB['retirementcorpus'].calc=function(v){
            const yearsToRetire = v.retire_age - v.age;
            const yearsInRetirement = v.life_exp - v.retire_age;
            const futureMonthly = v.monthly_exp * Math.pow(1 + v.inflation/100, yearsToRetire);
            const futureAnnual = futureMonthly * 12;
            // Corpus needed at retirement (present value of annuity)
            const realReturn = ((1 + v.return_post/100) / (1 + v.inflation/100)) - 1;
            let corpus;
            if(realReturn <= 0){
                corpus = futureAnnual * yearsInRetirement;
            } else {
                corpus = futureAnnual * (1 - Math.pow(1+realReturn, -yearsInRetirement)) / realReturn;
            }
            // Existing savings future value
            const existingFV = v.existing * Math.pow(1 + v.return_pre/100, yearsToRetire);
            const remaining = Math.max(0, corpus - existingFV);
            // Monthly SIP needed
            const r = v.return_pre / 12 / 100;
            const n = yearsToRetire * 12;
            const sip = remaining > 0 && r > 0 ? remaining * r / ((Math.pow(1+r,n)-1)*(1+r)) : 0;
            return {
                main:{label:"Retirement Corpus Needed",value:"₹"+Math.round(corpus).toLocaleString()},
                secondary:[
                    {label:"Monthly Expenses at Retirement",value:"₹"+Math.round(futureMonthly).toLocaleString()},
                    {label:"Years to Retirement",value:yearsToRetire+" years"},
                    {label:"Retirement Duration",value:yearsInRetirement+" years"},
                    {label:"Existing Savings FV",value:"₹"+Math.round(existingFV).toLocaleString()},
                    {label:"Gap to Fill",value:"₹"+Math.round(remaining).toLocaleString()},
                    {label:"Monthly SIP Required",value:"₹"+Math.round(sip).toLocaleString()},
                    {label:"Daily SIP Equivalent",value:"₹"+Math.round(sip/30).toLocaleString()+"/day"}
                ],
                chart:{labels:["Existing FV","SIP Corpus","Gap(if any)"],
                    data:[Math.round(existingFV),Math.round(Math.max(0,remaining)),0],
                    timeline:(function(){
                        var labels=[],savArr=[],targetArr=[];
                        for(var yr=1;yr<=yearsToRetire;yr++){
                            var months=yr*12;
                            var sipFV=Math.round(sip)*((Math.pow(1+r,months)-1)/r)*(1+r);
                            var existFV=v.existing*Math.pow(1+v.return_pre/100,yr);
                            labels.push('Age '+(v.age+yr));
                            savArr.push(Math.round(sipFV+existFV));
                            targetArr.push(Math.round(corpus));
                        }
                        return {labels:labels,datasets:[
                            {label:'Your Savings',data:savArr,fill:true},
                            {label:'Target Corpus',data:targetArr,fill:false}
                        ]};
                    })()
                }
            };
        };

  if(DB['salaryhike'] && DB['salaryhike'].calc===null) DB['salaryhike'].calc=function(v){
            const newMonthly = Math.round(v.currentSalary * (1 + v.hikePercent/100));
            const monthlyIncrease = newMonthly - v.currentSalary;
            const newAnnualCTC = Math.round(v.currentCTC * (1 + v.hikePercent/100));
            const annualIncrease = newAnnualCTC - v.currentCTC;
            const realHike = v.hikePercent - v.inflation;
            const purchasingPowerGain = realHike > 0
                ? "+" + realHike.toFixed(1) + "% real gain (beats inflation ✅)"
                : realHike.toFixed(1) + "% real loss (below inflation ⚠️)";
            const yearsToDouble = (72 / v.hikePercent).toFixed(1);
            return {
                main:{label:"New Monthly Salary",value:"₹"+newMonthly.toLocaleString('en-IN')},
                secondary:[
                    {label:"Monthly Increase",value:"₹"+monthlyIncrease.toLocaleString('en-IN'),pos:true},
                    {label:"New Annual CTC",value:"₹"+newAnnualCTC.toLocaleString('en-IN')},
                    {label:"Annual Increment",value:"₹"+annualIncrease.toLocaleString('en-IN'),pos:true},
                    {label:"Hike %",value:v.hikePercent.toFixed(1)+"%"},
                    {label:"Real Purchasing Power",value:purchasingPowerGain},
                    {label:"Salary Doubles in",value:yearsToDouble+" years (at "+v.hikePercent+"% annually)"}
                ],
                chart:{a:v.currentCTC,b:annualIncrease,lA:"Old CTC",lB:"Increment"}
            };
        };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('finance');
})();
