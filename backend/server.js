const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Hello Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
