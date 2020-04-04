const fs = require('fs')
fs.writeFile(__dirname + '/myfile.txt',"cat\ncat\nrat\nmouse\ncat\ndog\nmonkey\nrat\nturtle\n",function(err){
    if(err) throw err

    console.log("file was written")
})