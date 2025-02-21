fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.table(data);
    console.log(data);
    for (const item of data){
      // create ite card div
      const div = document.createElement('div');
      div.classList.add('flex', 'flex-col', 'items-center');
      // create h1 and append to card div
      const h1 = document.createElement('h1');
      h1.innerText = item.title;
      h1.classList.add('text-3xl', 'font-bold');
      div.appendChild(h1);
      // create img and append to card div
      const img = document.createElement('img');
      img.setAttribute('src', item.image);
      img.setAttribute('alt', item.title);
      img.classList.add('h-[250px]');
      div.appendChild(img);
    //  Append card div to products div
      const parent = document.getElementById('products');
      parent.appendChild(div);
    }
  });





// const button = document.getElementById('btn');
// const apiDataContainer = document.getElementById('apiData');
// button.addEventListener('click',() => {
  
// })

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res) => res.json())
// .then((data) => {
//    console.table(data);
//    for (const item of data){
//       const div = document.getElementById('apiData');
      
//    }
// });

























// function to fetch posts from Api











// async function fetchData(url) {
//       // fetch the data
//    const data = await fetch(url)
// //    await the promise to get your response
//    const response = await data.json()
//    console.log(response)  
   
//    console.log(response[0])

//    response.map(
//       (user) => {console.log(user)

//             console.log(user.username)
//             console.log(user.company.name)
//             console.log(user.address.geo.lat)
//             console.log(user.company.catchPhrase)
//             console.log(user.address.city)

//    }
// )
// }



// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

      