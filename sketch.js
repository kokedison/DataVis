let prevM
function setup() {
  createCanvas(550, 600);
  prevM = minute()
}


function draw() {
  background(50);
  let h = hour()
  let m = minute()
  let s = second()
  
  if(m !== prevM)
  {
    console.log(m)
    prevM = m
  }
  
  cons = 130 + s * 2
  rH = height/12
  
  translate(rH/2, rH/2, 0)
  for(let i = 0; i < h; i++)
  {
    fill(int(255/24) * i, cons, cons)
    circle(int((i / 12)) * rH, (i % 12) * rH , rH)
  }
  
  rM = height/20
  translate(rH + rH/2 + rM/2, -rH/2 + rM/2, 0)
  for(let i = 0; i < m; i++)
  {
    fill(cons, int(255/60) * i, cons)    
    circle((int(i / 20)) * rM, (i % 20) * rM , rM)
  }

  rS = height/10
  translate(rM * 2 + rM/2 + rS/2, -rM/2 + rS/2, 0)
  for(let i = 0; i < s; i++)
  {
    fill(cons, cons, int(255/60) * i)    
    circle(int(i / 10) * rS, (i % 10) * rS, rS)
  }
  
}

