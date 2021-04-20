window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a function with the logic to get the correct HTML for insertion

  function getRideHTML(serviceLevel, ride) {
    //Determine service level
    if (serviceLevel == 'Noober X'){
      //Insert into HTML
      return `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride.numberOfPassengers} Passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride.pickupLocation.address}</p>
            <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride.dropoffLocation.address}</p>
            <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>`
    } else if (serviceLevel == 'Noober XL'){
      //Insert into HTML
      return `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober XL</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride.numberOfPassengers} Passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride.pickupLocation.address}</p>
            <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride.dropoffLocation.address}</p>
            <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>`
    } else if (serviceLevel == 'Noober Purple'){
      //Insert into HTML
      return `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Purple</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride.numberOfPassengers} Passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride.pickupLocation.address}</p>
            <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride.dropoffLocation.address}</p>
            <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>`
    }
  }


  // Loop through the individual rides
  for (i=0; i<json.length; i++){
    
    // Determine ride's service level
    let serviceLevel = `Noober X`
    if (json[i].purpleRequested) {
      serviceLevel = `Noober Purple`
    } else if (json[i].numberOfPassengers > 3) {
      serviceLevel = `Noober XL`
    }

    // Create HTML element variable to add rides
    let ridesElement = document.querySelector(`.rides`)
      // Question for office hours: Does it matter whether this is inside or outside the for loop?

    //Take data from rides data variable and insert HTML into rides element using getRideHTML function
    ridesElement.insertAdjacentHTML(`beforeend`,getRideHTML(serviceLevel,json[i]))
  }
})