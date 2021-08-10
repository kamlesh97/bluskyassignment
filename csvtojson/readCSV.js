const csv2Json = require('convert-csv-to-json')
// csv2Json.generateJsonFileFromCsv('greenhouse_gas_inventory_data_data.csv','address.json')


// let jsonResponse = csv2Json.getJsonFromCsv('greenhouse_gas_inventory_data_data.csv')
// for(let jsonCounter=0;jsonCounter<jsonResponse.length;jsonCounter++){
//     console.log(jsonResponse[jsonCounter]);
// }


const csvToJson=require('csvtojson')
const fileSystem=require('fs')

csvToJson().fromFile('./greenhouse_gas_inventory_data_data.csv').then(source=>{
    // console.log(source)
    let data = JSON.stringify(source);
    fileSystem.writeFileSync('./greenhouse_gas_inventory_data_data.json',data)
    
})

csvToJson().fromFile('./world_country_and_usa_states_latitude_and_longitude_values.csv').then(source=>{
    // console.log(source)
    let data = JSON.stringify(source);
    fileSystem.writeFileSync('./world_country_and_usa_states_latitude_and_longitude_values.json',data)
    
})