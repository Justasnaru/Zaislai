const baseURL = 'http://localhost:3000';

class API {
  static fetchToys = (success, failure) => {
    fetch(`${baseURL}/toys`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteToy = (id, success, failure) => {
    fetch(`${baseURL}/toys/${id}`, { method: 'DELETE' })
      .then(success)
      .catch(failure)
  }
}