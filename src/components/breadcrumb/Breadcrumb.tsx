import { useLocation } from 'react-router-dom';
import "./Breadcrumb.css"

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(part => part !== '');

  if (pathParts[0] !== 'account') {
    pathParts.unshift('Home');
  } else {
    pathParts.splice(pathParts.indexOf('account'), 1);
    pathParts.unshift('My account')
  }

  return (
    <div className='ml-4'>
      {pathParts.map((part, index) => (
        <span key={index}>
          {index < pathParts.length - 1 ? (
            <span className="text-gray font-medium">{decodeURIComponent(part)} / </span>
          ) : (
            <span className="capitalize font-medium">{decodeURIComponent(part).replace(/-/g, ' ')}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;