import { Prop, Prop2 } from "./props/props"
import Render, { Find, Style } from "./render/rendaring"
// parent to child (Data)
function App(){
  return(
    <>
      <Prop name="ramu">
        <h1>parent</h1>
        <p>passing</p>
        <p>child</p>
      </Prop>
      <Prop2 name="sudheer" age="10" branch="ECE" Collage="SSN">
        <h1>Props 2</h1>
        <h1>Greeting</h1>
      </Prop2>
      <Render/>
      <Find/>
      <Style/>
    </>
  )
}
export default App