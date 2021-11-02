import PointNetworkFactory from '../logic/rkPointNetwork'
import { Vector2 } from '../logic/util/vectors'
import { drawNetwork } from '../logic/canvasRKNetworkDrawer.js'
import React, { useRef, useState, useEffect } from 'react'

const RopeCanvas = (props) => {
  const { canvasHeight, ropeThickness } = props
  const canvasRef = useRef()
  const divRef = useRef()
  const ropeNetworkRef = useRef()
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    ropeNetworkRef.current = PointNetworkFactory.GetRope(
      new Vector2(0, 0.5),
      new Vector2(1, 0.5),
      10
    )

    const id = setInterval(() => {
      ropeNetworkRef.current.simulateStep()
      setFrame((x) => x + 1)
    }, 15)

    setTimeout(() => {
      clearInterval(id)
    }, 3000)
  }, [])

  useEffect(() => {
    drawNetwork(ropeNetworkRef.current, canvasRef.current, '2px')
  }, [frame, ropeThickness])

  return (
    <div ref={divRef} style={{ width: 'auto' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: canvasHeight }} />
    </div>
  )
}

export default RopeCanvas
