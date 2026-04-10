/* ═══════════════════════════════════════════════════
   Calc Labz — calculators-datetime.js
   LAZY FILE: calc() functions for category "datetime"
   Loaded on-demand when user opens a datetime calculator.
   ═══════════════════════════════════════════════════ */
(function(){
  if(typeof DB==='undefined'){console.warn('[calclabz] DB not ready');return;}

  if(DB['dateiff'] && DB['dateiff'].calc===null) DB['dateiff'].calc=function(v){
            if(!v.d1||!v.d2) return {main:{label:"Error",value:"Select both dates"}};
            const a=new Date(v.d1), b=new Date(v.d2);
            const diff=Math.abs(b-a), days=Math.floor(diff/86400000);
            let y=0,m=0,d=0;
            let lo=new Date(Math.min(a,b)), hi=new Date(Math.max(a,b));
            y=hi.getFullYear()-lo.getFullYear(); m=hi.getMonth()-lo.getMonth(); d=hi.getDate()-lo.getDate();
            if(d<0){m--;d+=new Date(hi.getFullYear(),hi.getMonth(),0).getDate();}
            if(m<0){y--;m+=12;}
            return {
                main:{label:"Total Days",value:days.toLocaleString()},
                secondary:[
                    {label:"Weeks",value:Math.floor(days/7)+" weeks, "+days%7+" days"},
                    {label:"Years/Months/Days",value:`${y}y ${m}m ${d}d`},
                    {label:"Business Days (approx)",value:Math.round(days*5/7).toLocaleString()},
                    {label:"Hours",value:(days*24).toLocaleString()}
                ]
            };
        };

  if(DB['timeconv'] && DB['timeconv'].calc===null) DB['timeconv'].calc=function(v){
            const toS={Seconds:1,Minutes:60,Hours:3600,Days:86400,Weeks:604800,Months:2629800,Years:31557600};
            const s=v.val*toS[v.from];
            return {
                main:{label:"Seconds",value:s.toLocaleString()},
                secondary:Object.entries(toS).filter(([k])=>k!==v.from&&k!=='Seconds').map(([k,f])=>({label:k,value:(s/f).toFixed(4)}))
            };
        };

  if(DB['countdown'] && DB['countdown'].calc===null) DB['countdown'].calc=function(v){
            if(!v.event) return {main:{label:"Error",value:"Select event date"}};
            const ev=new Date(v.event), now=new Date();
            const diff=ev-now;
            if(diff<0) return {main:{label:"Past Event",value:"Event already occurred"}};
            const d=Math.floor(diff/86400000), h=Math.floor((diff%86400000)/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
            return {
                main:{label:"Days Remaining",value:d.toLocaleString()},
                secondary:[
                    {label:"Hours Remaining",value:(d*24+h).toLocaleString()},
                    {label:"Minutes Remaining",value:((d*24+h)*60+m).toLocaleString()},
                    {label:"Exact",value:`${d}d ${h}h ${m}m ${s}s`}
                ]
            };
        };

  if(DB['timezone'] && DB['timezone'].calc===null) DB['timezone'].calc=function(v){
            const [h,m]=v.time.split(':').map(Number);
            const localOff=-(new Date().getTimezoneOffset())/60;
            const diff=v.offset-localOff;
            let th=(h+diff+24)%24, tm=m;
            const fmt=`${String(Math.floor(th)).padStart(2,'0')}:${String(tm).padStart(2,'0')}`;
            return {
                main:{label:"Target Time (UTC"+v.offset+")",value:fmt},
                secondary:[
                    {label:"Your UTC Offset",value:"UTC"+(localOff>=0?"+":"")+localOff},
                    {label:"Time Difference",value:(diff>=0?"+":"")+diff+" hours"},
                    {label:"UTC Time",value:`${String((h-localOff+24)%24).padStart(2,'0')}:${String(m).padStart(2,'0')}`}
                ]
            };
        };

  if(DB['workingdays'] && DB['workingdays'].calc===null) DB['workingdays'].calc=function(v){
            if(!v.d1||!v.d2) return {main:{label:"Error",value:"Select both dates"}};
            let a=new Date(v.d1), b=new Date(v.d2);
            if(a>b)[a,b]=[b,a];
            let workDays=0;
            const cur=new Date(a);
            while(cur<=b){
                const day=cur.getDay();
                if(day!==0&&day!==6) workDays++;
                cur.setDate(cur.getDate()+1);
            }
            const net=Math.max(0,workDays-v.holidays);
            const totalDays=Math.floor((b-a)/86400000)+1;
            return {
                main:{label:"Working Days",value:net.toLocaleString()},
                secondary:[
                    {label:"Total Calendar Days",value:totalDays},
                    {label:"Weekend Days",value:totalDays-workDays},
                    {label:"After Holidays",value:net},
                    {label:"Weeks",value:(net/5).toFixed(1)}
                ]
            };
        };

  if(DB['agenextbday'] && DB['agenextbday'].calc===null) DB['agenextbday'].calc=function(v){
            if(!v.dob) return {main:{label:"Error",value:"Select your birthday"}};
            const dob=new Date(v.dob), today=new Date();
            let nextBday=new Date(today.getFullYear(),dob.getMonth(),dob.getDate());
            if(nextBday<today) nextBday.setFullYear(today.getFullYear()+1);
            const days=Math.ceil((nextBday-today)/86400000);
            const ageNext=nextBday.getFullYear()-dob.getFullYear();
            const dayOfWeek=nextBday.toLocaleDateString('en-IN',{weekday:'long'});
            return {
                main:{label:"Days Until Birthday",value:days===0?"🎉 Today!":days+" days"},
                secondary:[
                    {label:"Birthday Date",value:nextBday.toLocaleDateString('en-IN',{day:'numeric',month:'long'})},
                    {label:"Day of Week",value:dayOfWeek},
                    {label:"Age You'll Turn",value:ageNext+" years"},
                    {label:"Born On",value:new Date(v.dob).toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}
                ]
            };
        };

  // Signal that this category is ready
  if(typeof window!=='undefined'&&window._calcCatLoaded) window._calcCatLoaded('datetime');
})();
