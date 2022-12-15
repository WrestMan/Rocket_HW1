const fs = require('node:fs').promises;
const path = require('node:path');

setTimeout(()=>{
    fs.readdir(__dirname, function (err, data) {
        for (let item of data) {

            fs.readdir(path.join(__dirname, item), function (err, data) {
                if (data) {
                    for (let name of data) {
                        let file = path.join(__dirname, item, name);

                        fs.readFile(file, (err, data) => {
                            let json = JSON.parse(data);

                            if (json.sex === 'female') {
                                fs.rename(file, path.join(__dirname, 'girls', name), (e) => {
                                })
                            } else {
                                fs.rename(file, path.join(__dirname, 'boys', name), (e) => {
                                })
                            }

                        })
                    }
                }
            })
        }
    })
}, 1)
