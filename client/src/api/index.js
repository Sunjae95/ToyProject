export const requestGET = async url => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const requestPOST = async (url, bodyData) => {
  const data = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  });

  return data;
};
