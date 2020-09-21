import data from '../constants/skills'

function changeIds(obj) {
  let myId = 1
  const iterate = (obj) => {
    obj.id = myId
    myId++
    Object.keys(obj).forEach(key => {

      if (typeof obj[key] === 'object') {
        iterate(obj[key])
      }
    })
  }
  iterate(obj)
  const fs = require('fs');

  let data = JSON.stringify(obj);
  fs.writeFileSync('temp.json', data);
}

changeIds(data)