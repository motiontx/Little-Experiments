class Vector {

  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  };

  static add(vec1, vec2) {
    let vec = new Vector();
    vec.add(vec1);
    vec.add(vec2);
    return vec;
  };

  static sub(vec1, vec2) {
    let vec = new Vector();
    vec.add(vec1);
    vec.sub(vec2);
    return vec;
  };

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
  };

  sub(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
  };

  mult(n) {
    this.x *= n;
    this.y *= n;
  };

  rotate(angle) {
    let x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    let y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    this.x = x;
    this.y = y;
  }

};
