import { Vector2 } from './point_network'

const mapToCanvasSize = (unitVector, canvas) => {
  const nv = new Vector2(
    unitVector.x * canvas.width,
    unitVector.y * canvas.height
  )

  return nv
}

export const drawNetwork = (
  network,
  canvas,
  lineWidth = 1,
  strokeStyle = 'rgb(61, 57, 70)'
) => {
  if (network.connections.length === 0) return
  let ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()

  network.connections.forEach((c) => {
    const a = mapToCanvasSize(c.pointA.currPos, canvas)
    const b = mapToCanvasSize(c.pointB.currPos, canvas)
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
  })

  ctx.lineWidth = lineWidth
  ctx.strokeStyle = strokeStyle
  ctx.stroke()
}
