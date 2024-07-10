import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" isolate aspect-video h-screen bg-transparent backdrop-blur w-full flex justify-center items-center">
      <FadeLoader color="#56E6A5" />
    </div>
  );
};

export default loading;
