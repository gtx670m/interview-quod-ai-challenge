const listApi = {
  fetch: (payload) => {
    return new Promise((resolve, reject) => {
      const { page = 1, per_page = 5 } = payload;
      fetch(
        `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=${per_page}`,
        {
          method: "GET",
        }
      ).then((data) => resolve(data.json()));
    });
  },
};

export default listApi;
