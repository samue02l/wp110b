class Point {
    constructor(x, y) {
      this.x = this.x;
      this.y = y;
    }
  
    length() {
      let [x, y] = [this.x, this.y]
      return Math.sqrt(x * x + y * y)
    }
  
    neg() {
      return new Point(-this.x, -this.y)
    }
  
    add(p2) {
      return new Point(this.x + p2.x, this.y + p2.y)
    }
  
    sub(p2) {
      return this.add(p2.neg())
    }
  
    dot(p2) {
      return this.x * p2.x + this.y * p2.y;
    }
  
    distance(p2) {
      return this.sub(p2).length()
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }
  
  let p = new Point(2,3), p2 = new Point(1,2)
  console.log(p)
  console.log(p.toString())
  console.log(p+'')
  console.log('p.length()=', p.length())
  console.log('p2.length()=', p2.length())
  console.log('p.sub(p2)=', p.sub(p2))
  console.log('p2.sub(p)=', p2.sub(p2))
  console.log('p.dot(p2)=', p.dot(p2))
  console.log('p.sub(p2).length()=', p.sub(p2).length())
  console.log('p.distance(p2)=', p.distance(p2))
  
  