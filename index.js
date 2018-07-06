'use strict'

const fs = require('fs')

/**
 * @param {String} filePath 
 * @returns file, as promise
 */
const getFile = (filePath) => 
    new Promise ((resolve, reject) => {
       fs.readFile(filePath, (err, file) => {
           if (err) throw err

           resolve(file)
       })
    })

/**
 * @param {Array} words 
 * @returns word at random index
 */
const pickRandom = words => words[
    Math.floor(
        Math.random() * words.length
    )
]

// runs program
;(async () => {
    const file = 
        await getFile('words.json')    
    const words = JSON.parse(file)

    const start = words.subjects
    const mid = words.verbs
    const end = words.objects
        .concat(start)

    setInterval(() => {
        console.log(
            `${pickRandom(start)} ` +
            `${pickRandom(mid)} ` +
            pickRandom(end)
        )
    }, 1000)
})()
