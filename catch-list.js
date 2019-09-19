const doAsync = async num =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });

const main = async () => {
  const results = await [1, 2, 3].map(num => doAsync(num));
  return results;
};

main();
