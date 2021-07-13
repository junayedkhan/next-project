import productModel from "../../../../server/mongoose/model/productModel"

const index = async (req, res) => {
    let brands = await productModel.distinct("brand")
    res.status(200).json(brands)
}

export default index