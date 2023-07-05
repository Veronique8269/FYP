
const fs = require('fs');
const res = [];
fs.readFile('./hk.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const arr = data.split('\n');
    arr.forEach((item, index) => {
        let con = item.split(',')
        res.push(...con)
    })
    console.log(arr);
    console.log(res);
    //how to write the result to a file
    fs.appendFileSync(
        './resArr.txt',
        String(res),
        "utf-8"
      );
});