import express from 'express';
export const app = express(); 


//default root route
app.get("/", (req, res) => {
    res.send("Server is running perfectly");
});