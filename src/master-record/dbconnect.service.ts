import { Client } from 'pg';
import { configService } from '../config/config.service'

const port = configService.getPort()
console.log(port)

// console.log(process.env);

const connectionString = 'postgressql://postgres:mysecretpassword@localhost:5432/my_database'
// const connectionString = `postgress${process.env.POSTGRES_HOSTNAME}:${process.env.POSTGRES_PASSWORD}@localhost:5432/my_database`
const client = new Client({
    connectionString: connectionString
})
client.connect()

export { client }
