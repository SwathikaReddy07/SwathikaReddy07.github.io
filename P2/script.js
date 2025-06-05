const showlogin=()=>{
    let str=`
    <div class="App-container">
    <h1>Login Form</h1>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <p><button>Log In</button></p>
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
    <button> Register </button>
    `
    root.innerHTML=str
}