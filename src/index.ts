import express from 'express'

import { PORT, ORIGIN } from './constants'

const app = express()

app.set('trust proxy', 1)

app.disable('x-powered-by')
app.disable('via')
app.disable('server')

app.listen(PORT, () => {
	console.log(`Listening on ${ORIGIN}`)
})
