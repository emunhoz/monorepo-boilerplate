const express = require('express')
const router = express.Router()

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get(
  '/',
  async (
    req: any,
    res: {
      json: (arg0: { status: number; message: string }) => void
      status: (arg0: number) => { (): any; new (): any; send: { (arg0: string): any; new (): any } }
    }
  ) => {
    try {
      res.json({
        status: 200,
        message: 'Data loaded from API successfully!'
      })
    } catch (error) {
      console.error(error)
      return res.status(500).send('Server error')
    }
  }
)

export default router
