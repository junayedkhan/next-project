import productModel from "../../../../server/mongoose/model/productModel"

const product = async (req, res) => {
    const{brand} = req.query
    const brandData = await productModel.find({brand:brand})
    res.status(200).json(brandData)
}

export default product