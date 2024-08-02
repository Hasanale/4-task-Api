// async function getData(country) {
//     const url = `https://goweather.herokuapp.com/weather/${country}`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//         console.log(json);
//         document.getElementById('temp').innerHTML = `Temperature: ${json.temperature}`
//         document.getElementById('wind').innerHTML = `Wind: ${json.wind}`
//         document.getElementById('description').innerHTML = `Description: ${json.description}`
//         document.getElementById('con').innerHTML = `Country: ${country}`

//     } catch (error) {
//       console.error('error', error.message);
//     }
// }
  


// getData('Pakistan')
  

// async function getAdv() {
//     const url = `https://api.adviceslip.com/advice`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//         console.log(json);
//         document.getElementById('advice').innerHTML = `${json.slip.advice}`

//     } catch (error) {
//       console.error(error.message);
//     }
// }
  


// setTimeout(() => {a
// getAdv();
// }, 5000)




//products display with css
async function getData() {
    const url = `https://freetestapi.com/api/v1/products`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        
        const container = document.querySelector('.container')
        container.innerHTML = '';   

        json.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'card';

            
            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = product.image;
            productDiv.appendChild(img);

           
            const nameDiv = document.createElement('div');
            nameDiv.className = 'card-title';
            nameDiv.textContent = `Name: ${product.name}`;
            productDiv.appendChild(nameDiv);

            
            const priceDiv = document.createElement('div');
            priceDiv.className = 'card-text';
            priceDiv.textContent = `Price: ${product.price}`;
            productDiv.appendChild(priceDiv);

            
            if (product.color !== undefined) {
                const colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.textContent = `Color: ${product.color}`;
            productDiv.appendChild(colorDiv);
            } 


            container.appendChild(productDiv)
        });

    } catch (error) {
      console.error('error', error.message);
    }
}
getData();
  