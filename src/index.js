// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var curr=currency;
    var exchange={};
    var h=0,q=0,d=0,n=0,p=0;
    const H=50,Q=25,D=10,N=5,P=1;
    if (curr>9999) { exchange.error="You are rich, my friend! We don't have so much coins for exchange";return exchange;}
    if (curr<=0) return {};
    if (curr>=50) {
        h=Math.floor(curr/H);
        curr=curr-h*H;
        exchange["H"]=h;
    }
    if (curr>=25) {
        q=Math.floor(curr/Q);
        curr=curr-q*Q;
        exchange["Q"]=q;
    }
    if (curr>=10) {
        d=Math.floor(curr/D);
        curr=curr-d*D;
        exchange["D"]=d;
    }
    if (curr>=5) {
        n=Math.floor(curr/N);
        curr=curr-n*N;
        exchange["N"]=n;
    }
    if (curr>0) {
        p=Math.floor(curr/P);
        curr=curr-p*P;
        exchange["P"]=p;
    }
    
    return exchange;  
}
