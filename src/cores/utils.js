// transform the http query & params
export const filterObject = (o, filter) => {
  const r = {};
  Object.keys(o).forEach(k => {
    if (filter(o[k], k)) {
      r[k] = o[k];
    }
  });
  return r;
};