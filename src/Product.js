import capitalize from "capitalize";

function Product({ id,name, url, brand, tags, rating }) {
  return (
    <a href={`http://localhost:3000/product?id=${id}`}>
      <div className="card w-72 bg-[#e7d9ca] shadow-xl overflow-hidden text-black hover:scale-105">
        <div className="w-full h-52 bg-white">
          <figure><img src={url} alt="product" className="w-full h-52 object-contain" /></figure>
        </div>
        <div className="card-body p-2 px-3 pb-3 h-36 ">
          <h2 className="card-title">
            {capitalize.words(brand)}
            {rating && rating.trim().length > 0 && <div className="ml-auto flex flex-row">
              <span className="text-sm text-[#52462b]">
                {rating}/5
              </span>
              <div className="rating rating-sm ">
                <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked />
              </div>
            </div>}
          </h2>
          <p className="text-sm">{capitalize.words(name)}</p>
          <div className="card-actions justify-end text-[#52462b]">
            {tags.split(",").map((t) => {
              if (t) {
                return (
                  <div className="badge badge-outline bg-[#dfccb8] border-0" key={t}>{t}</div>
                )
              }
              else { return "" }
            })}
          </div>
          <div className="flex flex-row">

            {/* <div className="card-actions justify-end mt-5">
              <button className="btn btn-sm btn-secondary">View Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </a>
    // <div className="flex flex-col hover:scale-105 cursor-pointer">
    //   <img src={url} className="w-52 h-52 rounded-lg" />
    //   <div className="mx-auto text-[#1D201F]">{name}</div>
    // </div>
  )
}
export default Product;