const path = require('path');
const fs = require('fs');

const sortGender = (read, genders, write) => {

    fs.readdir(path.join(__dirname, read), (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        files.forEach(file => {

            let newPath = path.join(__dirname, write, file);
            let oldPath = path.join(__dirname, read, file);

            fs.readFile(oldPath, (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                let genderFile = JSON.parse(data);

                if (genderFile.gender === genders) {

                    fs.rename(oldPath, newPath, (err) => {
                        if (err) throw err
                        console.log('Successfully renamed - AKA moved!')
                    })
                }
            })
        })
    })
}
sortGender('boys', 'female', 'girls');
sortGender('girls', 'male', 'boys');