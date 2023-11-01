export function Button(
  className,
  active = false,
  rounded = false,
  children,
  onClick
) {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
}
