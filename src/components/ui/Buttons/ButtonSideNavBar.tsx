import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function ButtonSideNavBar(props: {
  active?: boolean;
  children?: ReactNode;
  text: string;
  to: string;
}) {
  const { t } = useTranslation();

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname == props.to) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, setIsActive, isActive, props.to]);

  return (
    <Link
      to={props.to}
      className={`flex gap-x-1 cursor-pointer items-center  py-2 rounded-md px-1 font-Roboto text-sm ${
        isActive
          ? "bg-green-500 text-white"
          : "text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-400"
      }`}
    >
      <div className={` flex items-center justify-center`}>
        {props.children}
      </div>
      {props.text && (
        <h1 className="flex items-center justify-center select-none">
          {t(props.text)}
        </h1>
      )}
    </Link>
  );
}
