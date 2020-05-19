export const fetching = (function() {
  const baseUrl = "https://second-fishergame.firebaseio.com/catches";

  const get = () => {
    return fetch(`${baseUrl}.json`).then(data => data.json());
  };

  const post = data => {
    return fetch(`${baseUrl}.json`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(data)
    }).then(data => data.json());
  };

  const put = (data, id) => {
    return fetch(`${baseUrl}/${id}.json`, {
      method: "PUT",
      "Content-Type": "application/json",
      body: JSON.stringify(data)
    }).then(data => data.json());
  };

  const del = id => {
    return fetch(`${baseUrl}/${id}.json`, {
      method: "DELETE",
      "Content-Type": "application/json"
    }).then(data => data.json());
  };

  return {
    get,
    post,
    put,
    del
  };
})();
