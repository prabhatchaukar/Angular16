const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

let users = []; // Tempporary DB

app.get('/', (req, res) => {
  res.send('API is running... ✅ Use /api/register or /api/login');
});

// Get current user (mock version, later can use JWT)
app.get('/api/user', (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ message: "No user found" });
  }
  res.json(users[users.length - 1]); // return last registered user
});



// --- Register ---

app.post('/api/register', (req,res)=>{
    const {name, email,password} = req.body;
    const exists = users.find(u=>u.email === email);

    if(exists) return res.status(400).json({message:'User already exists'})
    
    const newUser = {id : Date.now(), name, email, password}
    users.push(newUser)
    res.json(newUser)
});

// --register
app.post('/api/login',(req,res)=>{
    const {email, password} = req.body;
    const user = users.find(u => u.email === email && u.password === password)
    if (!user){
        return res.status(404).json({message:'User not found'});
    }
    res.json(user);
});

// -- Get All Users

app.get('/api/users',(req,res)=>{
    res.json(users)
});

// -- Update User ---

app.put('/api/users/:id', (req,res)=>{
    const {id} = req.params;
    const {name,email,password} = req.body;
    const userIndex = users.findIndex(u=>u.id == id);

    if(userIndex === -1){
        return res.status(404).json({message:'User not found'})
    }

    users[userIndex] = {...users[userIndex], name,email,password}
    res.json(users[userIndex])
});

// ---- Delete User ----
app.delete('api/users/:id',(req,res)=>{
    const {id} = req.params;
    users = users.filter(u => u.id != id);
    res.json({message: 'User deleted'});
});

// --- Start Server ---

const PORT =  3000
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))