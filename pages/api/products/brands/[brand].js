import productModel from "../../../../server/mongoose/model/productModel"

const product = async (req, res) => {
    const curPage = req.query.page || 1
    const perPage = 12
    const{brand} = req.query
    try {
        const brandData = await productModel.find({brand:brand})
        .skip((curPage - 1) * perPage)
        .limit(perPage)
        const totalProduct = await productModel.find({brand:brand}).countDocuments()
        res.status(200).json({
            brandData: brandData,
            curPage: curPage,
            maxPage: Math.ceil(totalProduct / perPage),
        })
    } catch (error) {
        console.log(error);
    }
}

export default product