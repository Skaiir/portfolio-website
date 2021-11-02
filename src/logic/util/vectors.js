export class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static randomUnitVector() {
    const angle = Math.random() * Math.PI * 2
    return new Vector2(Math.cos(angle), Math.sin(angle))
  }

  static add(v1, v2) {
    return new Vector2(v1.x + v2.x, v1.y + v2.y)
  }

  static sub(v1, v2) {
    return new Vector2(v1.x - v2.x, v1.y - v2.y)
  }

  static mul(v, a) {
    return new Vector2(v.x * a, v.y * a)
  }

  static dist(v1, v2 = new Vector2(0, 0)) {
    return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2))
  }

  static norm(v1 = new Vector2(0, 0), v2) {
    const len = this.dist(v1, v2)

    return Vector2.mul(Vector2.sub(v2, v1), 1 / len)
  }
}
