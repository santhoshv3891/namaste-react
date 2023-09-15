import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops... There is an error!!</h1>
      <span>{err.status}</span>
    </div>
  );
};

export default Error;
