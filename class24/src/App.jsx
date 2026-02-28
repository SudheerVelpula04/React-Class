import Counter from "./useMemo/usereduser"
import Counter1 from "./useMemo/useReduser1"
import WithOutMemo from "./useMemo/withoutmemo"
import Api from "./useMemo/withusingApi"

function App(){
  return(
    <>
      <h1>App</h1>
      {/* <WithOutMemo/> */}
      {/* <Api/> */}
      {/* <Counter/> */}
      <Counter1/>
    </>
  )
}
export default App