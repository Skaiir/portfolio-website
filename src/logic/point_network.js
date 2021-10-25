const gravityMultiplier = 10
const kinematicsIterations = 3

export class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
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

class Point {
  constructor(isFixed, position) {
    this.isFixed = isFixed
    this.oldPos = new Vector2(position.x, position.y)
    this.currPos = new Vector2(position.x, position.y)
  }
}

class Connection {
  constructor(pointA, pointB, length) {
    this.pointA = pointA
    this.pointB = pointB
    this.length = length
  }
}

class PointNetworkFactory {
  static GetRope(start, end, subDivisions) {
    const network = new PointNetwork()
    network.initRope(start, end, subDivisions)
    return network
  }

  static GetCloth(topleft, botright, divx, divy, fixedfreq) {
    const network = new PointNetwork()
    network.initCloth(topleft, botright, divx, divy, fixedfreq)
    return network
  }
}

class PointNetwork {
  constructor() {
    this.points = []
    this.connections = []
  }

  initRope(start, end, subDivisions) {
    this.points.push(new Point(true, start))

    const offSet = Vector2.mul(Vector2.sub(end, start), 1 / (subDivisions + 1))

    for (let x = 1; x <= subDivisions; x++) {
      const point = new Point(false, Vector2.add(start, Vector2.mul(offSet, x)))
      this.points.push(point)
    }

    this.points.push(new Point(true, end))

    const dist = Vector2.dist(offSet)

    for (let y = 0; y < this.points.length - 1; y++) {
      this.connections.push(
        new Connection(this.points[y], this.points[y + 1], dist)
      )
    }
  }

  initCloth(topleft, botright, divx, divy, fixedfreq) {
    const diffx = (botright.x - topleft.x) / divx
    const diffy = (botright.y - topleft.y) / divy
    const points2D = []

    for (let y = 0; y <= divy; y++) {
      const points1D = []
      for (let x = 0; x <= divx; x++) {
        const newX = topleft.x + x * diffx
        const newY = topleft.y + y * diffy
        const isFixed = y === 0 && x % fixedfreq === 0
        const newPoint = new Point(isFixed, new Vector2(newX, newY))
        // We keep a 2D array so that we can link up the points easier next pass
        points1D.push(newPoint)
        this.points.push(newPoint)
      }
      points2D.push(points1D)
    }

    for (let y = 0; y <= divy; y++) {
      for (let x = 0; x <= divx; x++) {
        if (x >= 1) {
          this.connections.push(
            new Connection(points2D[y][x - 1], points2D[y][x], diffx)
          )
        }
        if (y >= 1) {
          this.connections.push(
            new Connection(points2D[y - 1][x], points2D[y][x], diffy)
          )
        }
      }
    }
  }

  tear(tearFreq) {
    console.log(tearFreq)

    this.connections = this.connections.filter((c) => Math.random() > tearFreq)
  }

  simulateStep() {
    this.simulateGravity()
    for (let j = 0; j < kinematicsIterations; j++) {
      this.simulateKinematics()
    }
  }

  simulateGravity() {
    for (let x = 0; x < this.points.length; x++) {
      if (this.points[x].isFixed) {
        continue
      }

      const point = this.points[x]
      const timeStep = 0.01
      const prev_pos = point.currPos

      let new_pos = Vector2.sub(Vector2.mul(point.currPos, 2), point.oldPos)
      let gravity = Vector2.mul(
        new Vector2(0, 1),
        gravityMultiplier * Math.pow(timeStep, 2)
      )

      new_pos = Vector2.add(new_pos, gravity)

      this.points[x].currPos = new_pos
      this.points[x].oldPos = prev_pos
    }
  }

  simulateKinematics() {
    this.connections.forEach((c) => {
      const a = c.pointA
      const b = c.pointB

      const center = Vector2.mul(Vector2.add(a.currPos, b.currPos), 0.5)
      const dir = Vector2.norm(b.currPos, a.currPos)

      if (!a.isFixed) {
        a.currPos = Vector2.add(center, Vector2.mul(dir, c.length / 2))
      }

      if (!b.isFixed) {
        b.currPos = Vector2.sub(center, Vector2.mul(dir, c.length / 2))
      }
    })
  }
}

export default PointNetworkFactory
