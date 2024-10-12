const http = require('http');
const app = require('./app');
const config = require('./config/config');
const { connectDB } = require('./config/database');

const PORT = config.port || 3000;
connectDB();
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
