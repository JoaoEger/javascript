fetch("http://cafepradev.com.br:21020/animals/delete",{
    method : "DELETE",
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        id : 292
    })
})
    .then(result => result.json())
    .then((data) => {
        //usando try cath para controlar erros
        try{
            if(data.status == 'success'){
                console.log(data)
            }else{
                throw new Error(data.message)
            }
        }catch(e){
            console.log(e.message);
        }
    })