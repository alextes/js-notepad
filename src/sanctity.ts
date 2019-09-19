import R from 'ramda'

// const getProviderProps = (providersWithStatus, hiddenProviders) => R.pipe(
//     Object.values,
//     R.map(pa => ({
//         ...R.pick(['name', 'logo', 'registrationUrl', 'id'])(pa),
//         status: getConnectionStatus(providersWithStatus)(pa),
//         isHiddenFromMap: getIsHiddenFromMap(hiddenProviders)(pa),
//       })),
//   )(providerAttributes);

const providers: PWS = {
  donkey: { id: "donkey", name: "Donkey", status: "unconnected" },
  uber: { id: "uber", name: "Uber", status: "connected" },
};

const hPs: Provider[] = ["donkey"];

type Provider = "donkey" | "uber";
interface ProviderAtt {
  id: Provider;
  name: string;
  status: "connected" | "unconnected";
}
type HP = Provider[];
type PWS = { [key in Provider]: ProviderAtt };

const getProviderProps = (providersWithStatus: PWS, hiddenProviders: HP) =>
  R.map(p => { 
    ...R.pick(['id', 'name'])(providers) 
  })

const result = getProviderProps(providers, hPs)(providers);
console.log(result);
