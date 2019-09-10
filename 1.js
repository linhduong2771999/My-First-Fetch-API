// get variable
const getText = document.getElementById('getText');
const getJson = document.getElementById('getJson');
const getData = document.getElementById('getData');
const output = document.getElementById('output');
const submit = document.getElementById('submit');



// fetch text
getText.addEventListener('click', getTextFunc);


function getTextFunc(){
    fetch('text.txt')
        .then(res => { return res.text() })
        .then(data => {
            
            let text = `<h1 class="display-2 text-danger" >${data}</h1>`;
    
            output.innerHTML = text;
        })
    
}

// fetch json

getJson.addEventListener('click', getJsonFunc);


function getJsonFunc(){
    fetch('json.json')
        .then(res => { return res.json() })
        .then(data => {
            let User = '<h2>Users</h2>';
            data.forEach( (user) => {
                User += `
                    <ul class="list-group mt-4">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                        <li class="list-group-item">Id: ${user.id}</li>
                    </ul>
                `;
            })
            output.innerHTML = User;
        })    
}
// fetch data


getData.addEventListener('click', getDataFunc);

function getDataFunc(){
    fetch('data.json')
        .then(res => { return res.json() })
        .then(data => {
            let Post = '<h1>See a hundred Posts: </h1>';
            data.forEach( (post) => {
                Post += `
                    <h2 class="display-4 mt-3">${post.title}</h2>
                    <p class="text-primary"><i>${post.body} </i> </p>
                `;
            })
            output.innerHTML = Post;
        })   
        console.log('asd');
         
}

// post data 
submit.addEventListener('submit', postData)

function postData(e){
    e.preventDefault();
    //get input variable
    const text = document.getElementById('text').value;
    const email = document.getElementById('email').value; 
    
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify( { text: text, email:email } )
    })
    .then(res => { return res.json() })
    .then(data => {
        let User = `
            <ul class="list-group mt-4">
                <li class="list-group-item">Name: ${data.text}</li>
                <li class="list-group-item">Email: ${data.email}</li>
            </ul>
        `;
        output.innerHTML = User;
    })
}