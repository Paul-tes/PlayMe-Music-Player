import { FaGooglePlay } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function Song() {
  return(
    <div className="card bg-base-100 image-full w-56 shadow-xl carousel-item">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Song</h2>
        <div className="card-action flex gap-2">
          <button className="btn btn-outline"><FaGooglePlay /></button>
          <button className="btn btn-outline btn-accent"><FaEdit /></button>
          <button className="btn btn-outline btn-error"><RiDeleteBin5Fill /></button>
        </div>
      </div>
    </div>
  );
}

export default Song