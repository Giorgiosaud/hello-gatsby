const fetch= require('node-fetch');

exports.sourceNodes=async({
  actions:{createNode},
  createContentDigest
})=>{
  const currencies=['dolar','euro'];
  const [dolar,euro]=await Promise.all(currencies.map(async (currency)=>{
    const result = await fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/${currency}?formato=json&apikey=9b5cef0ba2f4f3c4a7cda4d4a609e080bd497c6a`)
    const resultData = await result.json()
    console.log(resultData)
    let [key]=Object.keys(resultData);
    console.log('jey',key)
    return {
      valor:resultData[key][0].Valor,
      fecha: resultData[key][0].Fecha,
    }
  }))
  const nodeCurrencies={
    dolar,euro
  } 

  console.log('nodeCurrencies',nodeCurrencies)
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    ...nodeCurrencies,
  
    // required fields
    id: 'currencies',
    parent: null,
    children: [],
    internal: {
      type: 'currencies',
      contentDigest: createContentDigest(nodeCurrencies),
    },
  })
}