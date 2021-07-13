import productModel from "../../../server/mongoose/model/productModel"

const product = async (req, res) => {
    const{pid} = req.query
    const data = await productModel.findOne({_id:pid})
    res.status(200).json(data)
}

export default product