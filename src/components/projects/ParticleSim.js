import { useRef, useEffect } from 'react'
import { BouncyParticleSet } from '../../logic/bouncyParticleSet'
import { Vector2 } from '../../logic/util/vectors'

const ParticleSim = ({ maxDist = 0.3, count = 50 }) => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 300
    canvas.height = 300
    const ctx = canvas.getContext('2d')
    const particleSet = new BouncyParticleSet(count, 0.2, 0.2)

    let iRef = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particleSet.particles
      const particleCount = particles.length

      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(50, 100, 200, 0.5)'

      for (let a = 0; a < particleCount; a++) {
        const pa = particles[a]
        for (let b = a + 1; b < particleCount; b++) {
          const pb = particles[b]
          const dist = Vector2.dist(pa.pos, pb.pos)
          if (dist > maxDist) continue
          const proximityFactor = (maxDist - dist) / maxDist
          const red = 256 * proximityFactor
          const green = 0
          const blue = 256 * (1 - proximityFactor)
          ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${
            0.5 * proximityFactor
          })`
          ctx.beginPath()
          ctx.moveTo(pa.pos.x * canvas.width, pa.pos.y * canvas.height)
          ctx.lineTo(pb.pos.x * canvas.width, pb.pos.y * canvas.height)
          ctx.stroke()
        }
      }

      // ctx.fillStyle = 'rgba(200, 200, 256, 0.8)'
      // for (let a = 0; a < particleCount; a++) {
      //   const pa = particles[a]
      //   ctx.fillRect(map_x(pa.pos.x) - 1, map_y(pa.pos.y) - 1, 2, 2)
      // }

      particleSet.step()
    }, 60)

    return () => {
      clearInterval(iRef)
    }
  }, [maxDist, count])

  return (
    <div className='particles'>
      <canvas
        ref={canvasRef}
        style={{ padding: 30, width: 300, height: 300 }}
      />
      <div>
        <h4>O(n^2), but pretty</h4>
        <h5>Built with JS using the canvas API</h5>
      </div>
    </div>
  )
}

export default ParticleSim
