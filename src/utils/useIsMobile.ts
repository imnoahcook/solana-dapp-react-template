import { useMediaQuery } from '@material-ui/core';

const useIsMobile = () => {
  return useMediaQuery('only screen and (max-width: 768px)');
};

export default useIsMobile;
