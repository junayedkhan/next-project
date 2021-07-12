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

    const getallProducts = async (req,res)=>{
        try{
          const products =  await productModel.find()
          products.reverse()
          res.status(200).json(products)
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



