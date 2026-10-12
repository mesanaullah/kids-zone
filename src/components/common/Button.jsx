import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const variants = {
  navy: 'bg-brand-navy text-white hover:bg-brand-navy-dark',
  red: 'bg-brand-red text-white hover:bg-red-600',
};

export default function Button({
  to,
  href,
  variant = 'navy',
  arrow = false,
  icon: Icon,
  children,
  className = '',
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-display text-sm font-semibold shadow-md transition-colors sm:text-base ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon && <Icon size={18} />}
      {children}
      {arrow && <ArrowRight size={18} />}
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}
