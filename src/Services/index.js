
import dataMock from '../data.json';

export function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: dataMock.data }), 500)
  );
}
