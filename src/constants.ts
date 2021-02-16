import { join } from 'path'

export const DEV = process.env.NODE_ENV === 'development'

export const ROOT = join(__dirname, '..')
export const PORT = process.env.PORT ?? '5000'

export const ORIGIN = DEV
	? `http://localhost:${PORT}`
	: 'https://prix.herokuapp.com'
