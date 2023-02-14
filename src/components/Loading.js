import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <SpinContainer>
      <Loader
        type="0val"
        color="#3d66ba"
        height={30}
        width={30}
        timeout={3000}
      ></Loader>
    </SpinContainer>
  );
}
