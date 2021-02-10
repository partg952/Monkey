
var bool = true


console.log('started')
function run(){
    if(bool==true){
        console.log('clicked')
        document.getElementById('image2').src = "see.png"
    bool = false
    }
else{
document.getElementById('image2').src = 'hear.png'
    bool = true
}


}

