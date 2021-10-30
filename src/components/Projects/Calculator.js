import { useState } from 'react'
import { evaluate } from 'mathjs'
import { readablePrecision } from '../../logic/helper'

const buttonChars = Array.from('()<C789/456*123-0.=+')
const highlightChars = Array.from('()<C/*-+=.')

const Calculator = () => {
  const [operationHistory, setOperationHistory] = useState([])
  const [operation, setOperation] = useState('try it')
  const [isTempDisplay, setIsTempDisplay] = useState(true)
  const getLastX = (arr, x) => arr.slice(Math.max(arr.length - x, 0))
  const setOperationTemp = (c, isTemp) => {
    setOperation(c)
    setIsTempDisplay(isTemp)
  }

  const evaluateAndStore = (operation) => {
    try {
      const result = readablePrecision(evaluate(operation), 9)
      setOperationHistory([
        ...getLastX(operationHistory, 6),
        { operation: operation, result: result },
      ])
      setOperation(result)
    } catch {
      setOperation('error')
    }
  }

  const calculatorButtonFunctionality = (c) => {
    if (c === 'C')
      return () => {
        setOperationTemp('', false)
      }
    if (c === '=')
      return () => {
        if (isTempDisplay) return
        evaluateAndStore(operation)
        setIsTempDisplay(true)
      }

    if (c === '<') {
      return () => {
        if (operation.length > 0) setOperationTemp((s) => s.slice(0, -1), false)
      }
    }
    return () => {
      setOperationTemp((s) => (!isTempDisplay ? s + c : c), false)
    }
  }

  return (
    <div className='calculator-root'>
      <div className='calculator-history'>
        <h5> Recent</h5>
        {operationHistory.map((o) => (
          <>
            <div>
              <span
                onClick={() => setOperationTemp(o.operation, false)}
                className='operation'
              >
                {o.operation}
              </span>
              <span
                onClick={() => setOperationTemp(o.result, false)}
                className='result'
              >
                {o.result}
              </span>
            </div>
          </>
        ))}
      </div>
      <div className='calculator'>
        <div className='calculator-display'>{operation}</div>
        {buttonChars.map((c) => (
          <button
            onClick={calculatorButtonFunctionality(c)}
            className={
              highlightChars.includes(c)
                ? 'calculator-button highlight'
                : 'calculator-button'
            }
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}

export const calculatorInfo = {
  name: 'Simple calculator using React',
  tech: ['Javascript', 'React', 'HTML', 'SCSS'],
  features: [
    'history with selectable values',
    'key to revert a wrong input',
    'does maths as you would expect',
  ],
  discussion:
    'I built this as a way to familiarize myself with basic React functionality. The buttons are rendered from a char array which is then fed into a function returning functions based upon the char for their onClick. In most cases, this just means appending the char to the expression state, but "=", "C" and "<" behave differently. There are certainly plenty of improvements I could make with this, but building calculators in different frameworks is something I am well familiar with already, so I decided to leave it at the current functionality.',
  improvements: [
    'variable store',
    'keyboard capture',
    'scrolling input window',
    'store history in a larger scope so that it persists between component re-renders',
  ],
}

export default Calculator
