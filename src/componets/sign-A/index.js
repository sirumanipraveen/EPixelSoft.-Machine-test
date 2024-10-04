import './main.css'
const SignA=()=>(
    <div >

        <div className="firstContainer">
            <div>

            
            <h1 className="firstheadingBox">Ready to take a free trial?</h1>
            <p className="firstParagraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>

        </div>
        <div className="main-containerrr"> 

        <div className="signOfPage">
            <h1 className="signHeading">
            Sign up for a free account
            </h1>
            <div className="signNameBox"> 
                
                <input type="text" className="inputFirstName" placeholder="First name"/>
                
                
                <input type="text"  className="inputFirstName" placeholder="Last name"/>
            </div>
            <div className="signNameBox"> 
                <input type="text" className="inputFirstName" placeholder="Email adress"/>
                <input type="text"  className="inputFirstName" placeholder="Phone number"/>
            </div>
            <div className="signNameBox">
            <input type="password" className="styleOfPassword" placeholder="Create password"/>
            </div>
            <button className="registerStyle">
                Register
            </button>

       </div>
        </div>
        
    </div>
)
export default SignA