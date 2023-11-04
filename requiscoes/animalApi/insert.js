fetch("http://cafepradev.com.br:21020/animals/insert", {
    method : "POST",
    headers : {
        "Content-type" : "application/json; charset=UTF-8",
    },

body : JSON.stringify({
    "name": "rafu",
    "species": "indo ali",
    "color": "blue",
    "size": "microscopico"
})

})
.then(response => response.json())
.then((res) => {
    if(res.error){
        console.log(res.error.message);
    }else{
        console.log(res.message);
    }
    })
    .catch((err) => {
        console.log(err);
    })

