import Plus from "./Plus.png"


export const AddCart = ({className}) => {
  return (
    <div className={className} style={{ zIndex: "1" }}>
      <img
        style={{ width: "30px", height: "30px", marginRight: "8px" }}
        src={Plus}
      />
    </div>
  );
};
