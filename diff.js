const fs = require('fs');
const rawToParsed1 = JSON.parse(fs.readFileSync('./users.json'));
const rawToParsed2 = JSON.parse(fs.readFileSync('./users_2.json'));

// const JSONData1 = JSON.stringify(rawToParsed1, null, 2);
// // const JSONData2 = JSON.stringify(rawToParsed2, null, 2);
// console.log(JSONData1);

// Example data for quick testing:
// const JSON1 = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//       }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618'
//       }
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     }
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653'
//       }
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications'
//     }
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: {
//         lat: '29.4572',
//         lng: '-164.2990'
//       }
//     },
//     phone: '493-170-9623 x156',
//     phone2: '718-223-2254',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       zipcode: '33263',
//       geo: {
//         lat: '-31.8129',
//         lng: '62.5342'
//       }
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: {
//         lat: '-72.4197',
//         lng: '71.7478'
//       }
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications'
//     }
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: {
//         lat: '24.8918',
//         lng: '21.8984'
//       }
//     },
//     phone: '210.067.6132',
//     website: 'elvis.io',
//     company: {
//       name: 'Johns Group',
//       catchPhrase: 'Configurable multimedia task-force',
//       bs: 'generate enterprise e-tailers'
//     }
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: {}
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers'
//     }
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: {
//         lat: '24.6463',
//         lng: '-168.8889'
//       }
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies'
//     }
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: {
//         lat: '-38.2386',
//         lng: '57.2232'
//       }
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.com',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models'
//     }
//   }
// ];

// const JSON2 = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//       }
//     },
//     phone: '1-770-736-8031 x542',
//     website: 'hildegard.com',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509'
//       }
//     },
//     phone: '010-692-6593 x125',
//     website: 'anastasia.net',
//     company: {
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     }
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Sam',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653'
//       }
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications'
//     }
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: {
//         lat: '29.4572',
//         lng: '-164.2990'
//       }
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz'
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: {
//         lat: '-31.8129',
//         lng: '62.5342'
//       }
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@aol.info',
//     address: {
//       street: 'Norberto Crossing',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: {
//         lat: '-71.4197',
//         lng: '71.7478'
//       }
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications'
//     }
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: {
//         lat: '24.8918',
//         lng: '21.8984'
//       }
//     },
//     website: 'elvis.io',
//     company: {
//       name: 'Johns Group',
//       catchPhrase: 'Configurable multimedia task-force',
//       bs: 'generate enterprise e-tailers'
//     }
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Mxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: {
//         lat: '-4.3990',
//         lng: '-120.7677'
//       }
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers'
//     }
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: {
//         lat: '24.6463',
//         lng: '-168.8889'
//       }
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies'
//     }
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: {
//         lat: '-38.2386',
//         lng: '57.2232'
//       }
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force'
//     }
//   }
// ];

/* function will run if params are JSON arrays 
   assumes array elements are objects
   this may not be a safe assumption, moving forward until 
   refactor is necessary */

function arrayDiff(arr1, arr2) {
  const arrDiffCollection = [];
  for (var i = 0; i < arr1.length || i < arr2.length; i++) {
    const diff = computeDiff(arr1[i], arr2[i]);
    arrDiffCollection.push(diff);
  }
  return arrDiffCollection;
}

/* function will run if params are JSON objects
   performance note: instead of iterating over the properties of each object,
   we produce a set of unique properties from the objects 
   doing this should be more performant than doing the computeDiff twice, 
   since computeDiff has a chance of needing to call objectDiff again, 
   even though the two objects have already been diff'd */

function objectDiff(object1, object2) {
  let diff = {};
  let differ = false;
  let keys = new Set(Object.keys(object1));

  for (let key in object2) {
    keys.add(key);
  }
  for (let key of keys) {
    let foundDiff = computeDiff(object1[key], object2[key]);
    if (foundDiff) {
      diff[key] = foundDiff;
      differ = true;
    }
  }
  if (differ) {
    return diff;
  }
}

/* function is essentially the 'brains' of the algorithm, it 
   compares two 'things'
    checks that the params are not primitives
     if true, confirm the params are arrays &
     return the output of params passed to arrayDiff 
    otherwise, return the output of params passed to objectDiff
   checks if params are not equal
     if true, return an array with both items 
   if 'things' are equal, don't return anything (there's no diff) */

function computeDiff(thing1, thing2) {
  if (typeof thing1 === 'object' && typeof thing2 === 'object') {
    if (Array.isArray(thing1) && Array.isArray(thing2)) {
      return arrayDiff(thing1, thing2);
    }
    return objectDiff(thing1, thing2);
  }
  if (thing1 !== thing2) {
    return [thing1, thing2];
  }
}

console.log(
  'These arrays represent the elements that are different in the test JSON files. null represents missing elements:',
  JSON.stringify(computeDiff(rawToParsed1, rawToParsed2), null, 2)
);
