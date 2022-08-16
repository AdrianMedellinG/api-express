const express = require("express")
const fs = require("fs")
const fsPromises = require("fs/promises")
const app = express()

app.listen(8080,()=>{
    app.get("/",(request,response)=>{
      response.write("Get api de express desde home")  
      response.end()
    })

/*
// Callback
    app.get("/files-callbacks", (request, response) => {
    fs.readFile("text1.txt", "utf8", (err, data) => {

            if(err){
                console.log("Error",err)
                response.end()
            }
        response.write(data)  
        response.end()
        })
      })

// Then y catch
app.get("/files-promises", (request, response) => {
    fsPromises.readFile("text1.txt", "utf8")
    .then((data) => {
      response.write(data)
      response.end()
    })
    .catch((error) => {
      response.write(error)
      response.end()
    })
  })
*/


// Async - Await
app.get("/files-AsyncAwait", async (request, response) => {
 try{
    const file = await fsPromises.readFile("text1.txt", "utf8")
    response.write(file)
    response.end()
    } catch(error) {
        response.write(error)
        response.end()
    }
  })










    console.log("Server is listening...")
})