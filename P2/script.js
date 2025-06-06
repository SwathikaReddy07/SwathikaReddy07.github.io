const showlogin=()=>{
    let str=`
    <div class="App-container">
    <h1>Login Form</h1>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <p><button onclick='showwelcome()'>Log In</button></p>
    <p><button onclick='showregister()'>create Account </p>
    
    </div>
    
    `
    root.innerHTML=str
}
const showregister=()=>{
    let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="TxtName"></p>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <p><button onclick='showlogin()'> Register </button>
    <p><button onclick='showlogin()'> Already have an account </button>
    `
    root.innerHTML=str
}
const showwelcome=()=>{
    let str=`
    <div class="App-container">
    <h1>WELCOME</h1>
    <p> you are successfully logged in.</p>
    </div>
    `
    root.innerHTML=str
}