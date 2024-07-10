import { useRouteError ,Link} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="flex flex-col max-w-md h-screen items-center justify-center mx-auto text-2xl">
        <h1>OOPS!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/' className="bg-gray-500 rounded-xl px-4 py-2 mt-4">Go back to Home Page</Link>
      </div>
    </>
  );
}
