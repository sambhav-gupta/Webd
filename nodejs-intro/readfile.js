const fs = require('fs')

fs.readFile(__dirname + "/myfile.txt",function(err,data){
        if(err) throw err
 let content = data.toString()
 let size = 0
 let name = ""
 let k = 0;
 let arr = [0]
 for(let i = 0;i<content.length;i++){  
    if(content[i]=="\n"){size++}
}
for(let j=0;j<content.length;j++){
    if(content[j]=="\n"){
        for(let x=k;x<j;x++){
            name = name + content[x]
      
        }
        arr.push(name)
        k = j+1;
        name = ""

    }

}
arr.shift()
let occured=""
for(let i=0;i<size;i++){
    if(occured.indexOf(arr[i])!=-1){continue}else{
    let count = 1
    for(let j=i+1;j<size;j++){
       
        if(arr[i]==arr[j]){
            count++
        }else{continue}
    }
    console.log(arr[i]+":"+count)
    occured+=arr[i]
   
}
}
}
)


