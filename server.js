const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Azure'un port desteği için

// Statik dosyaları sunmak
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfayı sun
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
