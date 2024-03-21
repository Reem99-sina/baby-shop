import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Shop",
        href: "/shop",
        active: pathname == "/shop",
      },
      {
        label: "Blog",
        href: "/blog",
        active: pathname == "/blog",
      },
      {
        label: "About",
        href: "/about",
        active: pathname == "/about",
      },
      {
        label: "Contact",
        href: "/contact",
        active: pathname == "/contact",
      },
    ],
    [pathname]
  );
  return routes;
};
export default useRoutes;
