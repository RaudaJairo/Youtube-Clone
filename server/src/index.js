require('dotenv').config();
const app = require('./app');
const db = require('./database');

app.listen(app.get('port'), async () => {
	console.log("Server on port:", app.get('port'));
	const isConnected = await db.createConnection();
	if(!isConnected){
		console.error("Database is NOT connected");
		process.exit(1);
	}
	console.log("Database is connected")
})
