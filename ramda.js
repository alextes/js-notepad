const R = require('ramda');

const connectionStatusses = [{ slug: 'uber', status: 'connected' }];
const hiddenProviders = null;

// take cs as context
// check if cs includes a p with pid = slug
// if yes return status if no return unconnectable
const getConnectionStatus = R.unless(
  () => R.isNil(connectionStatusses),
  R.pipe(
    p => R.find(R.propEq('slug', p.id))(connectionStatusses),
    R.propOr('unconnectable', 'status'),
  ),
);
// eslint-disable-next-line
const getIsHiddenStatus = R.unless(() => R.isNil(hiddenProviders), p => R.includes(p, hiddenProviders));

const getProviderProps = R.pipe(
  R.map(R.pick(['name', 'logo', 'registrationUrl', 'id'])),
  R.map(p => ({ ...p, status: getConnectionStatus(p) })),
  R.map(p => ({ ...p, isHiddenFromMap: getIsHiddenStatus(p) })),
);

const providerInfo = [{ id: 'uber', status: 'connected', name: 'Uber' }];
const providers = getProviderProps(providerInfo);

const sections = [
  {
    name: 'Connected',
    data: R.filter(R.propEq('status', 'connected'))(providers),
  },
  {
    name: 'Connectable',
    data: R.filter(R.propEq('status', 'unconnected'))(providers),
  },
  {
    name: 'Other',
    data: R.filter(R.propEq('status', 'unconnectable'))(providers),
  },
];

console.log(sections);
