import Loadable from 'react-loadable';
import loadingService from './loadingService';

export default function dynamicWrapper(component) {
  return Loadable({
    loader: component,
    loading: loadingService.get(),
  });
}
