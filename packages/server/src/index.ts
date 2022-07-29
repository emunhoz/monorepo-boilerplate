import express from 'express'
import product from './api/product'
const app = express()
const port = 3003

export interface QueryPayload {
  payload: string
}

app.use((_req: any, res: { setHeader: (arg0: string, arg1: string) => void }, next: () => void) => {
  // Allow any website to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Continue to next middleware
  next()
})

app.use('/api/product', product)

app.get('/api/', (_req: any, res: { json: (arg0: QueryPayload) => void }) => {
  const responseData: QueryPayload = { payload: 'Hi there, yo!' }

  res.json(responseData)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
