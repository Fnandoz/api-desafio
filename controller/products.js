const list = (req, res) => {
  try {
    const products = [{
      id: 1,
      descricao: 'Pen drives',
      valor: '8988',
      codigo: '324wert'
    },
    {
      id: 2,
      descricao: 'Relógios',
      valor: '2331',
      codigo: 'wt554'
    },
    {
      id: 3,
      descricao: 'Perfumes',
      valor: '213123',
      codigo: '534tv45'
    },
    {
      id: 4,
      descricao: 'Tablets',
      valor: '345',
      codigo: 'x3453c4'
    },
    {
      id: 5,
      descricao: 'Malas',
      valor: '231',
      codigo: '3t54tv'
    },
    {
      id: 6,
      descricao: 'TV LED',
      valor: '21321',
      codigo: '345xt3'
    },
    {
      id: 7,
      descricao: 'Nikon D5100',
      valor: '453',
      codigo: 'b576b5'
    },
    {
      id: 8,
      descricao: 'Samsung Galaxy S4',
      valor: '121',
      codigo: 'bb675b65'
    },
    {
      id: 9,
      descricao: 'Cartão de memória',
      valor: '43545',
      codigo: 'vbbu657'
    },
    {
      id: 10,
      descricao: 'Lembrancinha de festas',
      valor: '1231',
      codigo: '75b7b'
    },
    {
      id: 11,
      descricao: 'Redmi Note 9S',
      valor: '4353',
      codigo: 'v75758'
    },
    {
      id: 12,
      descricao: 'iPhone 12S Pro Max',
      valor: '3424',
      codigo: 'b577657n'
    },
    {
      id: 13,
      descricao: 'Kit para unhas em gel',
      valor: '1313123',
      codigo: 'v57v'
    },
    {
      id: 14,
      descricao: 'Samsung A01',
      valor: '6545',
      codigo: 'v5bbu'
    },
    {
      id: 15,
      descricao: 'Capa de chuva para motoqueiro',
      valor: '4654',
      codigo: '6yb4'
    },
    {
      id: 16,
      descricao: 'Capacho',
      valor: '75656',
      codigo: 'wer5'
    },
    {
      id: 17,
      descricao: 'Churrasqueira tijolinho',
      valor: '43545',
      codigo: 'wxrfw44'
    },
    {
      id: 18,
      descricao: 'Mousepad gamer',
      valor: '54656',
      codigo: 'xqwefew34'
    },
    {
      id: 19,
      descricao: 'Placa de vídeo 4GB',
      valor: '5464',
      codigo: 'xwerfrw'
    },
    {
      id: 20,
      descricao: 'Chevette',
      valor: '34',
      codigo: 'ewcq4ver'
    }]

    res.send(products)
  } catch (err) {
    res.error(err)
  }
}

module.exports = {
  list
}
