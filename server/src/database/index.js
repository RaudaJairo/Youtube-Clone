const {Sequelize} = require("sequelize");

const db = () => {
	const {
		DBHOST,
		DBNAME,
		DBUSER,
		DBPASSWORD,
		DBPORT
	} = process.env;

	let sequelize;
	let connection;

	const createConnection = async () => {
		try {
			sequelize = new Sequelize({
				host: DBHOST,
				database: DBNAME,
				username: DBUSER,
				password: DBPASSWORD,
				port: DBPORT,
				dialect: "mysql"
			});
			await sequelize.authenticate();
			return true;
		} catch (e) {
			return false
		}
	}

	const closeConnection = async () => {
		return await sequelize.close();
	}

	return {
		createConnection,
		closeConnection
	}

}

module.exports = db();
