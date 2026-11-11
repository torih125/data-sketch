let myData
let img1
let img2

async function setup() {
  createCanvas(1600, 1000);
  myData = await loadJSON('data.json');
  img1 = await loadImage('assets/datasketch1.png');
  img2 = await loadImage('assets/datasketch2.png');
  console.log(myData)
}

function draw() {
  background("#10004F");
  
    for (let i = 0; i < myData.length; i++) {
    let watched = myData[i]
    let x = (i+1) * 175
    let y = height * 0.2

    if (watched.mood === "happy") {
        fill("#fbf6b3")
    } else if (watched.mood === "anxious") {
        fill ("#F3A372")
    } else if (watched.mood === "sleepy") {
        fill("#b6d7ff")
    } else if (watched.mood === "silly") {
        fill("#d1ffb5")
    } else if (watched.mood === "nostalgic") {
        fill("#f5c6ff")
    }

    if (watched.sORm === "S") {
      drawStar(x, y, 35, 65, 5)
    } else if (watched.sORm === 'M') {
      drawStar(x, y, 30, 60, 4)
    }

    if (watched.company === "with-friends") {
      drawCircle()
      noStroke()
      fill("#10004F")
      circle(x, y, 25)
    } else if (watched.company === "alone") {
      drawCircle()
      stroke("#10004F")
      strokeWeight(5)
      noFill()
      circle(x, y, 25)
    }

    if (watched.genre === "drama") {
      drawLine()
      line(x + 45, y - 65, x + 40, y - 40)
      line(x + 48, y - 30, x + 75, y - 50)
      line(x + 57, y - 20, x + 85, y - 18)
    } else if (watched.genre === "reality") {
      drawLine()
      line(x + 48, y - 30, x + 75, y - 50)
    } else if (watched.genre === "sitcom") {
      drawLine()
      line(x + 35, y - 55, x + 40, y - 30)
      line(x + 40, y - 30, x + 63, y - 17)
      line(x + 47, y - 57, x + 50, y - 40)
      line(x + 50, y - 40, x + 65, y - 31)
    } else if (watched.genre === "fantasy") {
      drawCircle()
      circle(x + 45, y - 40, 15)
    } else if (watched.genre === "documentary") {
      drawSquare()
      square(x + 45, y - 47, 17)
    } else if (watched.genre === "cartoon") {
      drawTriangle()
      triangle(x + 35, y - 55, x + 40, y - 30, x + 60, y - 15)
    }
}
image(img1, 800, 435, 275, 400);
image(img2, 1100, 435, 275, 400);

  push()
  stroke("white")
  strokeWeight(3)
  rect(75, 390, 700, 480)
  pop()

  push()
  fill("white")
  noStroke()
  textSize(35)
  text('legend', 75, 380)
  pop()

  push()
  fill("white")
  noStroke()
  textSize(30)
  text('mood', 100, 455)
  text('show or movie', 280, 455)
  text('genre', 530, 455)

  noStroke()
  fill("#fbf6b3")
  square(100, 490, 40)

  fill("#F3A372")
  square(100, 550, 40)

  fill("#b6d7ff")
  square(100, 610, 40)

  fill("#d1ffb5")
  square(100, 670, 40)

  fill("#f5c6ff")
  square(100, 730, 40)

  fill("white")
  noStroke()
  textSize(20)
  text('happy', 152, 520)
  text('anxious', 152, 580)
  text('sleepy', 152, 640)
  text('silly', 152, 700)
  text('nostalgic', 152, 760)
  pop()

  push()
  fill("white")
  noStroke()
  drawStar(310, 530, 20, 40, 5)
  drawStar(310, 630, 20, 40, 4)

  textSize(20)
  text('show', 363, 530)
  text('movie', 363, 640)
  pop()

  push()
  fill("white")
  noStroke()
  drawLine()
      line(540, 490, 535, 510)
      line(542, 522, 568, 510)
      line(548, 532, 574, 535)

  drawLine()
      line(542, 582, 568, 570)

  drawLine()
      line(533, 620, 540, 645)
      line(540, 645, 565, 655)
      line(545, 620, 550, 635)
      line(550, 635, 567, 642)

  drawCircle()
      stroke("white")
      noFill()
      strokeWeight(5)
      circle(545, 705, 15)

  drawSquare()
      square(535, 755, 17)

  drawTriangle()
      triangle(530, 805, 535, 830, 560, 840)
  pop()

  push()
  fill("white")
  noStroke()
  textSize(20)
  text('drama', 600, 520)
  text('reality', 600, 580)
  text('sitcom', 600, 645)
  text('fantasy', 600, 713)
  text('documentary', 600, 770)
  text('cartoon', 600, 830)
  pop()
}


function drawStar(x, y, radius1, radius2, npoints) {
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawLine() {
  stroke("white")
  strokeWeight(5)
}

function drawCircle() {
  stroke("white")
  strokeWeight(5)
}

function drawSquare() {
  fill("white")
  noStroke()
}

function drawTriangle() {
  fill("white")
  noStroke()
}

