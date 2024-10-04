import Frontage from "./componets/frontpage"
import Bodyc from "./componets/Body_C"
import Bodyj from "./componets/Body-J"
import Bodyl from "./componets/Body-L"
import SignA from "./componets/sign-A"
import Footer from "./componets/Footer"
import Header from "./componets/HeaderSection"
const App=()=>(
  <div className="bg-container">
    <Header/>
 < Frontage />
  <Bodyc/>
  <Bodyj/>
  <Bodyl/>
  <SignA/>
  <Footer/>
  
  </div>
)
export default App
