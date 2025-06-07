const users = [];
let user={}
const showlogin=()=>{
    let str=`
    <div class="App-container">
    <p><div id="dvMsg"></div></p>
    <h1>Login Form</h1>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <p><button onclick='validateuser()'>Log In</button></p>
    <p><button onclick='showregister()'>create Account </p>
    
    </div>
    
    `;
    root.innerHTML=str;
};
const showregister=()=>{
    let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="TxtName"></p>
    <p><input type="text" id="TxtEmail"></p>
    <p><input type="password" id="TxtPass"></p>
    <button onclick='adduser()'> Register </button>
    <hr>
    <button onclick='showlogin()'> Already have an account ? Login here...</button>
    `;
    root.innerHTML=str;
};
const showhome=()=>{
    let str=`
    <h1>WELCOME ${user.name}</h1>
    <p> you are successfully logged in.</p>
    <hr>
    <p><select>
     <option value=0>--select--</option>
      <option value=1>Deposit</option>
      <option value=2>Withdraw</option>
      <option value=3>Transfer Funds</option>
      </select></p>
      <p><input type='number' id='TxtAmount'></p>
      <p><button onclick='add()'>Submit</button>

    <button onclick='showlogin()'>Logout</button>
    <hr>
    <p>Current balance:${user.balance}

    `;
    root.innerHTML=str
};
const adduser=()=>{
    const obj= {
        name:document.getElementById("TxtName").value,
        email:document.getElementById("TxtEmail").value,
        password:document.getElementById("TxtPass").value,
        balance:0

   };
   users.push(obj);
   showlogin();

};

const validateuser=()=> {
    let email=document.getElementById("TxtEmail").value;
    let password=document.getElementById("TxtPass").value;
    user=users.find((e)=>e.email === email && e.password === password)
    
    if(user) {
        showhome();
    }
    else{
        dvMsg.innerHTML="Access denied";
    }
};

const add = () => {
  const type = document.querySelector("select").value;
  const amount = Number(document.getElementById("TxtAmount").value);

  if (type == 1) {
    user.balance += amount;
  }
 else if (type == 2) {
    if (amount <= user.balance) {
      user.balance -= amount;
    } 
    else {
      alert("Insufficient balance!");
      return;
    }
  } 
 
  else {
    alert("Please select a valid transaction type");
    return;
  }
  
  showhome();
};
