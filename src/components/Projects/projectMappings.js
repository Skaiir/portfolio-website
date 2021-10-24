import Calculator, { calculatorInfo } from './Calculator'
import ClothSim, { clothInfo } from './ClothSim'
import ProjectDescription from './ProjectDescription'

const calculatorName = 'calculator'
const clothSimName = 'cloth-sim'
// const thisName = 'this'

export const projects = [calculatorName, clothSimName] // , thisName

export const mapProject = (project) => {
  var proj = null
  var info = null

  if (project === calculatorName) {
    proj = <Calculator />
    info = calculatorInfo
  } else if (project === clothSimName) {
    proj = <ClothSim />
    info = clothInfo
  }

  // } else if (project === thisName) {
  //   proj = <img src=''/>
  // }

  return (
    <>
      {proj != null && proj}
      {info != null && <ProjectDescription info={info} />}
    </>
  )
}

// const thisInfo =
