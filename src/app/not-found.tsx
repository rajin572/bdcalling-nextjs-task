import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center min-h-screen m-auto text-primary-foreground bg-background">
      <h1 className="text-secondary text-6xl md:text-7xl lg:text-9xl font-extrabold mb-10">
        404
      </h1>
      <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold text-zinc-800">
        OOPS! NOTHING WAS FOUND
      </h3>
      <p className="text-base lg:text-xl text-zinc-800">
        <span>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.{" "}
        </span>
        <Link
          href="/"
          className="text-secondary font-bold underline decoration-secondary"
        >
          Return to homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
