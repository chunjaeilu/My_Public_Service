import { MutatingDots } from "react-loader-spinner";

export default function Loading({ desc }) {
  return (
    <div className="loading-box">
      <MutatingDots
        height="100"
        width="100"
        color="#3382E9"
        secondaryColor="#A1EEFF"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="loading-desc">{desc}</p>
    </div>
  );
}
