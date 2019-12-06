import React from 'react';

type ContextProps = {
  loading?: boolean | React.ReactElement;
};

export default React.createContext<ContextProps>({
  loading: true,
});
