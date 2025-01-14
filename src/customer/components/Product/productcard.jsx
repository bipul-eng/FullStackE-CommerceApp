import "./productcard.css"
const ProductCard=({data})=>
{
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img className="h-full w-full object-cover object-left-top"
                src={data.imageUrl}
                alt=""/>
            </div>

            <div className="textPart bg-white p-1">
                <p className="font-bold opacity-60">{data.brand}</p>
                <p className="">{data.title}</p>
            </div>

            <div className="textPart flex items-center space-x-2 p-1">
                <p className="font-semibold">{data.discountedPrice}</p>
                <p className="line-through opacity-50">{data.price}</p>
                <p className="text-green-600 font-semibold">{data.discountPersent}% off</p>
            </div>
        </div>
    )
}
export default ProductCard;