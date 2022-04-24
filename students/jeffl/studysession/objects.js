
// // objects have a key: value pair
// let car = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: '2022',
//     color: 'black'
//   }
  
//   // get the value of a key 
//   // console.log(car.year)
//   // add key to object
//   // car.seats = 4
//   // console.log(car.seats)
//   // console.log(car)
  
  
  
//   // in look to get key value pair
//   // for(const key in car){
//   //   console.log(`${key}: ${car[key]}`)
//   // }
  
//   // // Object.keys returns all the keys
//   // let carKeys = Object.keys(car)
//   // console.log(`Object.keys: ${carKeys}`)
  
//   // // Object.values returns all the values 
//   // let carValues = Object.values(car)
//   // console.log(`Object.values: ${carValues}`)
  
//   // // Object.entries returns a 2D array with the inner array's being the key value pairs of the object
//   // let carEntries = Object.entries(car)
//   // console.log(`Object.entries: ${carEntries}`)
  
//   // // an interesting way to iterate through a 2D array
//   // for(const [info, detail] of carEntries){
//   //   console.log(`Jeff's car ${info} is ${detail}`)
//   // }

let supplyCards = {
    victoryCards: {
      'Province': {
        'amount': 12,
        'cost': 8,
        'value': 6,
        'type': 'vc'
      },
      'Duchy': {
        'amount': 12,
        'cost': 5,
        'value': 3,
        'type': 'vc'
      },
      'Estate': {
        'amount': 12,
        'cost': 2,
        'value': 1,
        'type': 'vc'
      },
      'Curse': {
        'amount': 10,
        'cost': 0,
        'value': -1,
        'type': 'vc'
      }
    },
    coinCards: {
      'Gold': {
        'amount': 30,
        'cost': 6,
        'value': 3,
        'type': 'coin'
      },
      'Silver': {
        'amount': 40,
        'cost': 3,
        'value': 2,
        'type': 'coin'
      },
      'Copper': {
        'amount': 46,
        'cost': 0,
        'value': 1,
        'type': 'coin'
      }
    },
    actionCards: {
      'Cellar': {
        'amount': 10,
        'cost': 2,
        'value': {
          'card': 0,
          'action': 1,
          'buy': 0,
          'treasure': 0
        },
        'type': 'action'
      },
      'Moat': {
        'amount': 10,
        'cost': 2,
        'value': {
          'card': 0,
          'action': 0,
          'buy': 0,
          'treasure': 2
        },
        'type': 'action'
      },
      'Smithy': {
        'amount': 10,
        'cost': 4,
        'value': {
          'card': 3,
          'action': 0,
          'buy': 0,
          'treasure': 0
        },
        'type': 'action'
      },
      'Militia': {
        'amount': 10,
        'cost': 4,
        'value': {
          'card': 0,
          'action': 0,
          'buy': 0,
          'treasure': 2
        },
        'type': 'action'
      },
  
      'Market': {
        'amount': 10,
        'cost': 5,
        'value': {
          'card': 1,
          'action': 1,
          'buy': 1,
          'treasure': 1
        },
        'type': 'action'
      },
      
    }
  }
  
  // console.log supplyCard keys
  let supplyKey = Object.keys(supplyCards);
  console.log(`Object.keys`: ${}
   // console.log(`Object.keys: ${carKeys}`)
  
  // console.log coinCard values
  // console.log total amount of all coinCards
  // create a function that takes in an actionCard name. then return the treasure of that card