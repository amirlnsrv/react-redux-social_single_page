import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";

export function Spin(props) {
  const spinner = useSelector((state) => state.appReducer.loading);
  return (
    <div className="loader-styles">
      <ColorRing
        visible={spinner}
        width={100}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["blue"]}
      />
    </div>
  );
}
