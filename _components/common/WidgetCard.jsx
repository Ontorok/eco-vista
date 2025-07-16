export default function WidgetCard({ children, title, size = 'lg' }) {
  let sizeClass = 'col-span-6';
  switch (size) {
    case 'sm':
      sizeClass = 'col-span-3';
      break;
    case 'lg':
      sizeClass = 'col-span-6';
      break;
    default:
      break;
  }
  return (
    <div className={`col-span-12 lg:col-span-4 2xl:${sizeClass}`}>
      <div className="card">
        <h6 className="feature-name">{title}</h6>
        {children}
      </div>
    </div>
  );
}
