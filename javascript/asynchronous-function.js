function downloadfile(url,download){    
    console.log("downloading file: " + url)
    setTimeout(function(){
      let  path = "c:\\users\\sambhav"
        console.log("download was done")
        download(path)

    },3000)
   
}

downloadfile("htttps:\\www.google.com\\logo.png",function(path){
    console.log("downloaded to : "+path)
})
