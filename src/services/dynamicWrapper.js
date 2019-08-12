import Loadable from 'react-loadable';
import Loading from 'components/Loading';
// import loadingService from './loadingService';

export default function dynamicWrapper(component) {
  return Loadable({
    loader: component,
    loading: Loading,
  });
}
