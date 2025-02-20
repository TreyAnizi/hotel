const button = document.getElementById('btn')
button.addEventListener('click',() => {
   // alert('Hey')
   
   fetchData('https://jsonplaceholder.typicode.com/users')
})











async function fetchData(url) {
      // fetch the data
   const data = await fetch(url)
//    await the promise to get your response
   const response = await data.json()
   console.log(response)  
   
   console.log(response[0])

   response.map(
      (user) => {console.log(user)

            console.log(user.username)
            console.log(user.company.name)
            console.log(user.address.geo.lat)
            console.log(user.company.catchPhrase)
            console.log(user.address.city)

   }
)
}



// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

      