import { useNavigate } from "react-router-dom";
import { isLessThanOneMonthFromNow } from "../../../utils/_helpers";

const Card = ({ item, navPath = "#", ...props }) => {
  const createdDate = new Date(item.created_at);

  // to check if image is latest or not
  const isNew = isLessThanOneMonthFromNow(createdDate);
  const navigate = useNavigate();

  // navigate to detail page on card click
  const handleNavigation = () => {
    navigate(navPath, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div
      className="card w-full max-w-72 bg-base-100 shadow-xl hover:scale-105 transition-transform"
      onClick={handleNavigation}
      {...props}
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
          {item.alt_description &&
            item.alt_description.split(" ").slice(0, 3).join(" ")}
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
