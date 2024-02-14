const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Continue to serve static files from the 'static' directory
app.use(express.static(__dirname +'/static/'));

// Update the route for '/' to serve index.html from the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// No changes needed for these routes, assuming invitation.html, acceptance.html,
// and denied.html are still in the 'static' directory
app.get('/invitation', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'invitation.html'));
});

app.get('/accepted', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'acceptance.html'));
});

app.get('/denied', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'denied.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
