const fs = require('node:fs').promises;
const path = require('node:path');

const boys = path.join(__dirname, 'boys');
const girls = path.join(__dirname, 'girls');

// function separate (dir) {
//   fs.readdir(dir, (err, files) => {
//         if (err){
//             console.log(err);
//         } else {
//             for (const file of files){
//                 fs.readFile(path.join(dir, file), 'utf8', (err, data) => {
//                     if (err){
//                         throw err;
//                     } else {
//                         if (JSON.parse(data).gender === "female"){
//                             fs.rename(path.join(dir, file), path.join(girls, file), () => {});
//                         } else fs.rename(path.join(dir, file), path.join(boys, file), () => {});
//                     }
//                 })
//             }
//         }
//     });
// }

async function separate(dir) {
    try {
        const files = await fs.readdir(dir);
        for (const file of files) {
            const person = await fs.readFile(path.join(dir, file));

            if (JSON.parse(person).gender === "male") {
                await fs.rename(path.join(dir, file), path.join(boys, file))
            } else {
                await fs.rename(path.join(dir, file), path.join(girls, file))
            }

        }

    } catch (err) {
        console.log(err);
    }
}

separate(girls);
separate(boys);