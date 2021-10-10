import {Sequelize} from "sequelize";

class Database {
    static sequelize: Sequelize;

    static async createConnection(): Promise<boolean> {
        try {
            const host = process.env.DBHOST || '';
            const user = process.env.DBUSER || '';
            const password = process.env.DBPASSWORD || '';
            const name = process.env.DBNAME || '';
            const port = parseInt(process.env.DBPORT || '') || undefined;

            this.sequelize = new Sequelize(name, user, password, {
                host,
                password,
                port,
                dialect: "mysql",
                logging: false
            });

            await this.sequelize.authenticate();

            return true;
        } catch (err) {
            return false;
        }
    }

    static async closeConnection(): Promise<void> {
        await this.sequelize.close();
    }

}

export default Database;
