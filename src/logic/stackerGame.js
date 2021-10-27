// TODO Complete

class StackerGame {
  constructor(width, height) {
    if (this.width < 2 || this.height < 2) {
      throw new Error('Width and height should be at least 2')
    }

    this.width = width
    this.height = height
    this.blockPosition = this.successes = 0
    this.targetPosition = -1
    this.moveRight = true
  }

  dropBlock() {
    if (this.targetPosition === -1) {
      this.targetPosition = this.blockPosition
    }
  }

  moveBlock() {
    if (this.blockPosition === this.width - 1 || this.blockPosition === 0) {
      this.moveRight = !this.moveRight
    }

    this.blockPosition += this.moveRight ? 1 : -1
  }
}

export default StackerGame
