

// import {Pool, Client } from 'pg'
import { Client } from 'pg'

async function fun() {

    try {

        // pools will use environment variables
        // for connection information

        const connectionString = 'postgressql://postgres:mysecretpassword@localhost:5432/my_database'
        // const connectionString = `${this.env[POSTGRES_HOST]}://${POSTGRES_USER}:${this.env[POSTGRES_PASSWORD]}@localhost:${this.env[POSTGRES_PORT]}/${this.env[POSTGRES_DATABASE]}`
        console.log(process.env.POSTGRES_HOST)
        // const pool = new Pool()
        // pool.query('SELECT NOW()', (err, res) => {
        // console.log(err, res)
        // pool.end()
        // })
        // // you can also use async/await
        //  let res = await pool.query('SELECT NOW()')
        // console.log(res)
        // await pool.end()
        // // clients will also use environment variables
        // // for connection information
        const client = new Client({connectionString: connectionString})
        await client.connect()
        // let myquery = "INSERT INTO migration(id, timestamp, name) VALUES(5, 1588111167840, 'Andrew')"
        // res = await client.query(myquery)
        myquery = 'SELECT * FROM demo_table'
        res = await client.query(myquery)
        console.log(res)
        await client.end()

    //     const client = new Client()
    // await client.connect()
    // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    // console.log(res.rows[0].message) // Hello world!
    // await client.end()

    }catch(e) {
        console.log('connection failed',e)
    }
    console.log(res)
    
}
fun()
// async function fun() {
//     const { Client } = require('pg')
//     const client = new Client()
//     await client.connect()
//     const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//     console.log(res.rows[0].message) // Hello world!
//     await client.end()
    
// }
// fun();
