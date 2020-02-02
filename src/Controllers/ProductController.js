const Product = require("../Models/Products");

module.exports = {

  async index(request, response) {
    // Da para passar filtro de param
    const products = await Product.find();

    return response.json(products);
  },

  async show(request, response) {
    const { id } = request.params;

    let product = await Product.findOne({ id });

    if (product) {
      response.json({ product });
    } else {
      response.json({ message: "Produto não encontrado" });
    }
  },

  async store(request, response) {

    const { id, name, price, description, imagem } = request.body;

    let product = await Product.findOne({ id })

    if (!product) {
      // função que adiciona la no mongo
      product = await Product.create({
        id,
        name,
        price,
        description,
        imagem
      })
    }

    response.json(product);
  },

  async update(request, response) {
    const { id } = request.params;
    console.log(id);

    let product = await Product.findOne({ id });

    console.log(product);

    if (product) {
      const { name, price, description, imagem } = request.body;
      product = await Product.updateOne({ id }, { $set: { id, name, price, description, imagem } });

      response.json({ product });
    } else {
      response.json({ message: "Produto não encontrado" });
    }

    // db.table.update({ sigla: 'SP' }, { $set: { poupulacao: 40000 } })
  },

  async destroy(request, response) {
    const { id } = request.params;
    console.log(id);

    let product = await Product.findOne({ id });

    console.log(product);

    if (product) {
      product = await Product.deleteOne({ id });
      response.json({ product });
    } else {
      response.json({ message: "Produto não encontrado" });
    }
  },

}