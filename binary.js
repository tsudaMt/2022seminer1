const unit = 100;

function setup(){
    createCanvas(8*unit, 8*unit);
    background("white");
    translate(4*unit,4*unit);
    generateSeq([], 15);
}

function generateSeq(seq, level){
    if (level <= 0){
	console.log(evaluate(seq,2));
	return;
    }
    for (let d=0; d<2; d++){
	seq.push(d);
	generateSeq(seq, level-1);
	seq.pop();
    }
}

function evaluate(seq, base){
    let sum = math.complex(0,0);
    const b = math.complex(-1, 1);
    for (let k in seq){
    sum = math.add(sum,math.multiply(seq[k],math.pow(b,k)));
    }
    if(seq[8]==1&& seq[9]==0){
        fill("skyblue");
        stroke("skyblue");
    }else if(seq[9]==1 && seq[10]==0){
        fill("black");
        stroke("black"); 
    }else if(seq[10]==1&&seq[11]==0){
        fill("pink");
        stroke("pink"); 
    }else{
        fill("cyan");
        stroke("cyan");
    }
    circle(2*sum.re,2*sum.im,1);
    return(sum);
}

