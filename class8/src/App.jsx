import DefaultExport,{DefEx as Named} from "./components/exports/def.jsx"
import {First,Second} from "./components/exports/named.jsx"
import One,{Two,Three} from "./components/exports/combined.jsx"

import { File } from "./file.jsx"
function App(){
  // list render 
  // deployment
  // imports and exports
  // exports component ,variables , files media's, exports
  // importing means bringing the exported code into another file
  // its helps the organize  your project into smaller ,and reusable pieces

  //exports
    /**
     * ES6 
     * there are 2 types of exports
     * 1. named export
     * 
     * 2. Default export
     * 3. Combined
     * 4. importing the media files ,images,videos,audios,files,json,css
     * import "./fileName.css"
     * 
     */
  return(
    <>
      <h1>App Component</h1>
      {/* <First/>
      <Second/>
      <DefaultExport/>
      <Named/>
      <Two/>
      <One/>
      <Three/> */}
      <File/>
    </>
  )
}
export default App