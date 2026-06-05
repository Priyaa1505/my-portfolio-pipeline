const express = require('express');
const path = require('path');
const app = express();
const PORT = 8081;

// Tell Express to serve all files inside the public folder staticly
app.use(express.static(path.join(__dirname, 'public')));

// Fallback routing logic
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Portfolio application online on port ${PORT}`);
});
