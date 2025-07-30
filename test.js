function dataFetcher (URL) {
    const parchi = new Promise (function(resolve, reject) {
        fetch(URL)
        .then(raw => raw.json())
        .then(result => {
            resolve(result);
        })
    })
    return parchi;
}
dataFetcher("https://randomuser.me/api/")
.then(function(result){
    console.log(result);
})