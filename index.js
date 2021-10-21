import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const app = express()
const port = 3000

// exercise 1
app.get('/', (req, res) => {
  res.send('Hello World')
})

// exercise 2
app.put('/', (req, res) => {
  //   res.send('htmlcode')

  res.sendFile('file.html', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Sent')
    }
  })
})

// exercise 3

app.delete('/', (req, res) => {
  //  res.send({ good: 'yep' })
  res.json({ good: 'yep' })
})

// exercise 4

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
