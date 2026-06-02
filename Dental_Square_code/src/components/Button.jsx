function Button({ href, children, variant = 'primary', className = '', icon: Icon, ...props }) {
  const styles = {
    primary: 'bg-amber-700 text-white shadow-lg shadow-amber-700/20 hover:bg-amber-800',
    secondary: 'bg-white text-amber-800 ring-1 ring-amber-200 hover:bg-amber-50',
    outline: 'bg-transparent text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50',
    dark: 'bg-slate-950 text-white hover:bg-slate-800',
  }

  const sharedClass = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`

  if (href) {
    return (
      <a className={sharedClass} href={href} {...props}>
        {Icon && <Icon aria-hidden="true" />}
        {children}
      </a>
    )
  }

  return (
    <button className={sharedClass} type="button" {...props}>
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </button>
  )
}

export default Button
