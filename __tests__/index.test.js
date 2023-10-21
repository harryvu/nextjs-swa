import '@testing-library/jest-dom'
 
/*
{ "id": "00-all", "value": "All" },
    { "id": "01-fve", "value": "Frozen Vegetables" },
    { "id": "02-fsf", "value": "Frozen Seafoods" },
    { "id": "03-fsp", "value": "Frozen Special Foods" },
    { "id": "04-fds", "value": "Dried Seafoods" },
    { "id": "05-fdv", "value": "Dried Vegetables" },
    { "id": "06-ddf", "value": "Dry Foods" },
    { "id": "07-ddr", "value": "Drinks" },
    { "id": "08-dsn", "value": "Snacks" },
    { "id": "09-dsp", "value": "Spices" },
    { "id": "10-dsa", "value": "Sauces" },
    { "id": "11-fre", "value": "Fresh Products" },
    { "id": "101-oth", "value": "Others" }
*/

describe('LFS Unit Tests', () => {
  it('sort by product names', () => {
    const products = [
      { name: '06-DDF02' },
      { name: '06-DDF03' },
      { name: '01-FVE09' },
      { name: '02-FSF01' },
      { name: '01-FVE01' },
      { name: '02-FSF02' },
      { name: '01-FVE05' },
      { name: '02-FSF03' },
      { name: '02-FSF04' },
      { name: '01-FVE06' },
      { name: '07-DDR01' },
      { name: '01-FVE02' },
      { name: '01-FVE08' },
    ]
 
    expect(products[7].name).toBe('02-FSF03')
  })

  it('object desctructuring', () => {
    const product = {
      "id": 13,
      "attributes": {
          "code": "FSF02",
          "name": "Frozen Whole Pipi Clam (cooked) size 40/60",
          "description": null,
          "barcode": "8936021430057",
          "display_hint": null,
          "createdAt": "2023-08-22T16:24:29.272Z",
          "updatedAt": "2023-08-22T16:24:33.996Z",
          "publishedAt": "2023-08-22T16:24:33.862Z",
          "dimensions": "1kg/bag x 10bags/CTN",
          "category": {
              "data": {
                  "id": 3,
                  "attributes": {
                      "name": "002-FSF",
                      "value": "Frozen Seafoods",
                      "createdAt": "2023-07-15T12:27:56.169Z",
                      "updatedAt": "2023-10-20T03:14:56.692Z",
                      "publishedAt": "2023-07-15T12:27:59.020Z",
                      "description": "Elevate your meals with convenient and nutrient-rich frozen seafood. Enjoy preserved freshness and diverse options like fish fillets, shrimp, and calamari. Relish the goodness, reduce waste, and explore culinary horizons affordably. Embrace safety, sustainability, and year-round availability. Make every dish a practical, delicious, and responsible delight."
                  }
              }
          }
      }
    }

    const { category, code } = product.attributes

    expect(category.data.attributes.value).toBe('Frozen Seafoods')
    expect(code).toBe('FSF02')

  })

  it('get products from json file and sort them', () => {
    const products = require('./data/products.json')
    expect(products.data.length).toBe(25)

    const { data } = products

    // sort data by category and code
    const sortedData = data.sort((a, b) => {
      if (a.attributes.category.data.attributes.name < b.attributes.category.data.attributes.name) {
        return -1
      }
      if (a.attributes.category.data.attributes.name > b.attributes.category.data.attributes.name) {
        return 1
      }
      if (a.attributes.code < b.attributes.code) {
        return -1
      }
      if (a.attributes.code > b.attributes.code) {
        return 1
      }
      return 0
    })

    sortedData.forEach((product, index) => {
      console.log(`${index} ${product.attributes.category.data.attributes.name} ${product.attributes.code}`)
    })
  })
})