import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import { init, cleanup } from './src/Connection.js'
import cors from 'cors'
import response from './src/helpers/response.js'
import Api from './src/Api.js'

const app = express()
const port = parseInt(process.env.PORT ?? 5000)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use('/', routes)
app.use('/', Api)

app.get('/', async (req, res) => {
    return response(res, 200, true, 'Server sedang berjalan.')
})

app.listen(port, () => {
    // init()
    console.log(`Server is listening on *:${port}`)
})

nodeCleanup(cleanup)

export default app
