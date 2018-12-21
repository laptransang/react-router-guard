import { Loading, NoLoading } from '../components';

function loadingService() {
  let loading = null;

  function set(value) {
    loading = value;
  }

  function get() {
    if (!loading) {
      return NoLoading;
    }

    if (loading === true) {
      return Loading;
    }

    return loading;
  }

  return {
    set,
    get,
  };
}

export default loadingService();
