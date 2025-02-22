import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface AuthLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export default function AuthLink({ text, linkText, to }: AuthLinkProps) {
  const { t } = useTranslation();

  return (
    <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
      {t(text)}{" "}
      <Link to={to} className="font-medium text-green-500 hover:text-green-600">
        {t(linkText)}
      </Link>
    </p>
  );
}
