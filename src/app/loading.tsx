import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" isolate aspect-video h-screen bg-transparent backdrop-blur w-full flex justify-center items-center">
      <FadeLoader color="#2f8415" />
    </div>
  );
};

export default loading;
