const assert = require("assert")
const Definer = require("../lib/mistake");
const Product = require("../models/Product")

let productController = module.exports

productController.getAllProducts = async (req, res) => {
  try {
    console.log("POST: cont/getAllProducts");
    const product = new Product();
    const result = await product.getAllproductsData(req.member, req.body);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getAllProducts, ${err.message}`)
    res.json({state: 'fail', message: err.message})

  }
}

productController.getChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/getChosenProduct");
    const product = new Product();
    const id = req.params.id;
    const result = await product.getChosenProductData(req.member, id);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/getChosenProduct, ${err.message}`)
    res.json({state: 'fail', message: err.message})

  }
}

/****************************************
 * BSSR RELATED METHODS
 ****************************************/

productController.addNewProduct = async(req,res) => {
  try {
      console.log("POST: cont/addNewProduct");
      //console.log(req.files)
      assert(req.files, Definer.general_err3);
product
      const product = new Product();
      let data = req.body;
      //console.log("dghgdhc", data.product_images);
      data.product_images = req.files.map((ele) => {
          return ele.path.replace(/\\/g, '/');//datani ichidagi pro_imagesni yozgan holda req.files dan olgan
          //malumotlarni map qilib path ni qaytarib yubormoqchiman. maqsad uni databasega yozish
      });
      
      
      const result = await product.addNewProductData(data, req.member);

      const html = `<script>
                     alert('new product added successfully');
                     window.location.replace("/resto/products/menu");
                   </script>`;
      res.end(html);
  } catch (err) {
    console.log(`ERROR, cont/addNewProduct, ${err.message}`)
  }
} 
     // console.log(data);
      //res.send('ok');
      //TODO:product creation develop 

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
    const product = new Product();
    const id = req.params.id;
    //console.log(req)
    const result = await product.updateChosenProductData(id, req.body, req.member._id);
    await res.json({state: "success", data: result});
  } catch (err) {
    console.log(`ERROR, cont/updateChosenProduct, ${err.message}`)
    res.json({state: 'fail', message: err.message}) 
  } 
}

