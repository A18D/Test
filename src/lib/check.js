export let isNumber = num => {
  return !isNaN (parseFloat (num)) && isFinite (num);
};
