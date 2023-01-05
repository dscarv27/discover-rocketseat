fetch('https://api.github.com/users/dscarv27')
    .then( response => response.json())
    .then( data => fetch(data.repos_url))
    .then( res => res.json())
    .then( d => console.log(d)) //encadeamento de promessas
    .catch( err => console.log(err))