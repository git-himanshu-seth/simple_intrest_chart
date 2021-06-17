export const calculateSimpleIntrest = (principal, rate, time, terminate) => {
  const dataSets = [];

  let amount = 0;
  let currentPrincipal = principal;
  for (let i = 1; i <= terminate; i++) {
    amount = currentPrincipal + (currentPrincipal * rate) / 100;
    const temp = {};

    temp.labels = time++;
    temp.data = parseInt(amount);
    dataSets.push(temp);
    currentPrincipal = amount;
  }
  dataSets.data.push(100);
  return dataSets;
};
