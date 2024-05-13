export const fetchData = (props) => {
  const { url, callback } = props;
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data));
};
