import { useNavigate } from "react-router-dom";
import { isLessThanOneMonthFromNow } from "../../../utils/_helpers";

const Card = ({ item, ...props }) => {
  const createdDate = new Date(item.created_at);

  const isNew = isLessThanOneMonthFromNow(createdDate);
  const navigate = useNavigate();

  const handleNavigation = (navigation) => {
    navigate("/home/" + item.id, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div
      className="card w-full max-w-72 bg-base-100 shadow-xl hover:scale-105 transition-transform"
      onClick={handleNavigation}
    >
      <div className="rounded-sm overflow-hidden">
        <img
          src={item["urls"]["thumb"]}
          alt={item.alt_description}
          className="object-fill h-48 w-96"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {item.alt_description.split(" ").slice(0, 3).join(" ")}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{item.alt_description}</p>
        <div className="card-actions justify-start">
          <span>Author:</span>
          <span>{item.user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
