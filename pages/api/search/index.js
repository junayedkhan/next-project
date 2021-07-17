import productModel from "../../../server/mongoose/model/productModel"

const index = async (req, res) => {
    let brands = await productModel.find()
    res.status(200).json(brands)
}

export default index