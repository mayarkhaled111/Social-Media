var hey = document.getElementById("hey")
var span = document.querySelector("#span")
var ph1 = document.getElementById("ph1")
var ph11 = document.getElementById("ph11")
var ph2 = document.getElementById("ph2")
var ph22 = document.getElementById("ph22")
var photo = document.getElementById("photo")
var photo1 = document.getElementById("photo1")

let like = document.querySelectorAll('.like')
let comment = document.querySelectorAll('.comment')

span.onclick = function(){
    hey.style.display="none"
    console.log('hello')
}

 function ad (){
    console.log(ph11)
    if(window.getComputedStyle(ph11).display==="none"){
        ph11.style.display="block"
    }else{
        ph11.style.display="none"
    }
}
ph2.onclick = function(){
    if(window.getComputedStyle(ph22).display==="none"){
        ph22.style.display="block"
    }else{
        ph22.style.display="none"
    }
}
photo1.onclick = function(){
    if(window.getComputedStyle(photo).display==="none"){
        photo.style.display="flex"
    }else{
        photo.style.display="none"
    }
}

like.forEach(function(ele){
    ele.onclick = function(){
        this.style.color="black"
        this.style.backgroundColor="#e4e1e1"
        this.value="Liked"
    }
})

comment.forEach(function(ele){
    ele.onclick = function(){
         // create Elements
        var div = document.createElement("div")
        var hid = document.createElement("h4")
        var inp = document.createElement("input")
        var btn = document.createElement("button")
        var span = document.createElement("span")

        //Add Class To Each Element
        div.className="popup"
        span.className="uniq"
        btn.className="btn"

        document.body.appendChild(div)
        document.body.appendChild(span)

        div.appendChild(hid)
        div.appendChild(inp)
        div.appendChild(btn)
        hid.innerText="Enter Your Comment"
        inp.type="text"
        btn.innerHTML="submit"
            //To Remove It
        btn.onclick = function(){
            div.style.display="none"
            span.style.display="none"
            
    }
        }

})



