import { useEffect, useState } from "react";

const useAnimateRoute = () => {
  const [animationRouteClass, setAnimationRouteClass] = useState('route-enter');
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationRouteClass('');
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  });
  return animationRouteClass;
};

export default useAnimateRoute;
