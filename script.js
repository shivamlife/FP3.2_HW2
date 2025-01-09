console.log('Hello!');
// 1. Transform the given array of objects into an object using .reduce().

const productInfo = [
  { key: 'name', value: 'Laptop' },

  { key: 'price', value: 12000 },

  { key: 'brand', value: 'Dell' },
];
const intoObj = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(intoObj);
// Output: { name: 'Laptop', price: 12000, brand: 'Dell' }

// 2. Convert the given array of objects into an array of universities using .reduce().

const colleges = [
  { item: 'Book', university: 'Harvard' },

  { item: 'Book', university: 'MIT' },

  { item: 'Book', university: 'Stanford' },
];
const univ = colleges.reduce((acc, curr) => {
  acc.push(curr.university);
  return acc;
}, []);
console.log(univ);
// Output: [ 'Harvard', 'MIT', 'Stanford' ]

// 3. Transform the given array of objects into an object using .reduce().

const userPreferences = [
  { key: 'theme', value: 'Dark Mode' },

  { key: 'fontSize', value: 16 },

  { key: 'notifications', value: true },
];
const userObj = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(userObj);
// Output: { theme: 'Dark Mode', fontSize: 16, notifications: true }

// 4. Transform the given array of objects into an object using .reduce().

const continents = [
  { key: 'Asia', country: 'India' },

  { key: 'Europe', country: 'France' },

  { key: 'North America', country: 'USA' },
];
const conObj = continents.reduce((acc, curr) => {
  acc[curr.key] = curr.country;
  return acc;
}, {});
// Output: { Asia: 'India', Europe: 'France', 'North America': 'USA' }
console.log(conObj);
// 5.  Transform the given array of objects into an object using .reduce().

const information = [
  { key: 'city', value: 'New York' },

  { key: 'population', value: 8398748 },

  { key: 'area', value: 468.9 },
];
const infoObj = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(infoObj);
// Output: { city: 'New York', population: 8398748, area: 468.9 }
