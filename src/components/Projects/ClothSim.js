import PointNetworkFactory, { Vector2 } from '../../logic/point_network.js'
import { drawNetwork } from '../../logic/canvasNetworkDrawer.js'
import React, { useRef, useState, useEffect } from 'react'

const ClothSim = () => {
  const canvasRef = useRef()
  const [frame, setFrame] = useState(0)
  const clothRef = useRef()
  const [xres, setXres] = useState(15)
  const [yres, setYres] = useState(15)
  const [anchorPeriod, setAnchorPeriod] = useState(5)

  useEffect(() => {
    clothRef.current = PointNetworkFactory.GetCloth(
      new Vector2(0.15, 0.1),
      new Vector2(0.85, 0.8),
      xres,
      yres,
      anchorPeriod
    )
  }, [xres, yres, anchorPeriod])

  useEffect(() => {
    canvasRef.current.width = 300
    canvasRef.current.height = 300

    const id = setInterval(() => {
      clothRef.current.simulateStep()
      setFrame((x) => x + 1)
    }, 15)

    return () => clearInterval(id)
  })

  useEffect(() => {
    drawNetwork(clothRef.current, canvasRef.current, 1)
  }, [frame])

  return (
    <div className='cloth-project'>
      <div className='cloth-controls'>
        <h4 style={{ fontSize: 'small' }}>
          For the nicest results, keep the resolution between 10-20
        </h4>
        <h5>x resolution</h5>
        <input
          type='number'
          value={xres}
          onChange={(e) => setXres(e.target.value)}
        />
        <h5>y resolution</h5>
        <input
          type='number'
          value={yres}
          onChange={(e) => setYres(e.target.value)}
        />
        <h5>anchor distance</h5>
        <input
          type='number'
          value={anchorPeriod}
          onChange={(e) => setAnchorPeriod(e.target.value)}
        />
        <br />
        <button
          className='btn btn--bouncy'
          onClick={() => clothRef.current.tear(0.1)}
        >
          CHAOS++
        </button>
      </div>
      <canvas ref={canvasRef} style={{ width: 300, height: 300 }} />
    </div>
  )
}

export const clothInfo = {
  name: 'Javacript canvas API cloth simulation',
  tech: ['Javascript', 'React', 'HTML', 'SCSS'],
  features: [
    'simulate some simple cloth-like structures',
    'destroy some of the connections to see how the structure is affected',
    'variable simulation resolution',
  ],
  discussion:
    "Now here is something I'm really passionate about: simulations. It's fascinating how a few simple equations can build such interesting 'lifelike' behaviors. There's definitely a lot to improve here, the simulation gets quite wobbly when too many segments are added, in the y-axis in particular. The visuals are built via the canvas API. The simulation itself was built in pure javascript, although the algorithms were researched.",
  improvements: [],
}

export default ClothSim
