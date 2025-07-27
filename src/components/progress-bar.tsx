'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const PageProgressBar = () => {
  return <ProgressBar height="4px" color="hsl(var(--primary))" options={{ showSpinner: false }} shallowRouting />;
};

export default PageProgressBar;
