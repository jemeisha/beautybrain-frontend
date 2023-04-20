import capitalize from "capitalize";

function MiniProduct({ name, url, brand, tags, rating }) {
    return (
      <div className="card w-42 bg-[#e7d9ca] shadow-xl overflow-hidden text-black">
        <div className="w-full h-52 bg-white">
          <figure><img src={url} alt="product" className="w-full h-52 object-contain" /></figure>
        </div>
        <div className="card-body p-2 px-3 pb-3 ">
          <h2 className="card-title text-sm">
            {capitalize.words(brand)}
           {rating &&  <div className="ml-auto flex flex-row">
              <span className="text-xs text-[#52462b]">
              {rating}/5
              </span>
              <div className="rating rating-sm h-[0.8rem] w-[0.8rem] ">
                <input type="radio" name="rating-1" className="mask mask-star bg-primary" checked />
              </div>
            </div>}
          </h2>
          <p className="text-xs">{capitalize.words(name)}</p>
          <div className="card-actions justify-end text-[#52462b]">
            {tags.split(",").map((t) => {
              if (t) {
                return (
                  <div className="badge badge-outline bg-[#dfccb8] border-0 text-xs px-1" key={t}>{t}</div>
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
      // <div className="flex flex-col hover:scale-105 cursor-pointer">
      //   <img src={url} className="w-52 h-52 rounded-lg" />
      //   <div className="mx-auto text-[#1D201F]">{name}</div>
      // </div>
    )
  }
export default MiniProduct;