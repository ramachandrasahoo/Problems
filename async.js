// settimeout 
// setTimeout(function(){
//     console.count("Hello");
// }, 1000)

// setInterval(()=>{
//     console.log("hello");
// }, 1000)



// fetch

// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(result => {console.log(result.results[0].name.first)});

// axios
// axios.get(`https://randomuser.me/api/`)
// .then(result => {console.log(result.data.results[0].gender)})

// promise

// bring a user if it male then green button else if female then red button
//  there is three conditions either it will be a male or female or there will be an error 
let promise1 = new Promise(function(resolve, reject){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        if(result.results[0].gender === "male") resolve() ;
        else reject();
    })
})

promise1
.then(function(){
    console.log("green button pressed")
})
.catch(function(){
    console.log("red button pressed")
})

// another promise

let promise = new Promise(function(resolve, reject) {
    fetch(`https://randomuser.me/api/`)
        .then(raw => raw.json())
        .then(result => {
            const gender = result.results[0].gender;
            const name = result.results[0].name.first;
            if (gender === "male") {
                resolve(name);
            } else {
                reject(name);
            }
        });
});

promise
    .then(function(name) {
        console.log("Green button pressed for:", name);
    })
    .catch(function(name) {
        console.log("Red button pressed for:", name);
    });


// promise 3


let promise3 = new Promise(function(resolve, reject){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        if (result && result.results && result.results.length > 0) {
            if (result.results[0].gender === "male") {
                resolve("male");
            } else {
                reject("female");
            }
        } else {
            reject("No data");
        }
    })
});

promise3
.then(function(name) {
    console.log("Green button pressed for:", name);
})
.catch(function(name) {
    console.log("Red button pressed for:", name);
});


// callback 

function getdata(url, callback){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => callback(result))
}

getdata(`https://randomuser.me/api/`, function(result) {
    console.log(result.results[0].gender, 
        result.results[0].email,
        result.results[0].name.first
    )
})