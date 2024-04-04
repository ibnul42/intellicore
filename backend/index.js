const path = require("path")
const express = require("express")
require("dotenv").config()
const color = require("colors")
const cors = require("cors")


const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// server frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))
  app.use(express.static('/'))

  app.use((req, res) =>
    res.sendFile(path.join(__dirname, "../", "frontend", "build", "index.html"))

  )
} else {
  app.get("/", (req, res) => res.send("please setup production server before"))
}


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})