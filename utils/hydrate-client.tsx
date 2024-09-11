'use client';

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query';

function Hydrate(props: Readonly<HydrateProps>) {
  return <RQHydrate {...props} />;
}

export default Hydrate;
