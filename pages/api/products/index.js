import productModel from "../../../server/mongoose/model/productModel"
import mongoose from "../../../server/mongoose/config/mongoose"
mongoose()

const data = async(req, res) => {

    switch (req.method) {
        case "GET":
            await getallProducts(req, res)   
            break;
        case "POST":
            await saveProducts(req, res)   
            break;
    }
}

    const getallProducts = async (req,res,next)=>{
      const curPage = req.query.page || 1
      const perPage = 12
        try{
          const products =  await productModel.find()
          .skip((curPage - 1) * perPage)
          .limit(perPage)
          const totalProduct = await productModel.find().countDocuments()
          res.status(200).json({
            products: products,
            curPage: curPage,
            maxPage: Math.ceil(totalProduct / perPage),
          })
        }catch(err){
          console.log(err)
        }
      }

    const saveProducts = async(req, res) => {
        try{
            const products = new productModel(req.body)
            await products.save()
            res.status(200).json(products)
          }catch(err){
            console.log(err)
          }
    }

export default data;



