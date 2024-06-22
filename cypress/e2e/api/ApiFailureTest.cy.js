// cypress/e2e/api/todosApiFailureTest.spec.js

import { apiGet, apiPost, apiPut, apiDelete } from '../../utils/apiUtils';
import { TODOS_ENDPOINT } from '../../config/endpoints';

describe('API Failure Testing for JSONPlaceholder Todos', () => {
  const invalidTodo = {
    title: "",
    completed: "invalid",
    userId: "invalid"
  };

  it('GET request - non-existing todo', () => {
    apiGet(`${TODOS_ENDPOINT}/invalid_id`, 404).then((response) => {
      expect(response.body).to.be.empty;
    });
  });

  it('POST request - create a new todo with invalid data', () => {
    apiPost(TODOS_ENDPOINT, invalidTodo, 500).then((response) => {
      expect(response.body).to.have.property('error');
    });
  });

  it('PUT request - update a non-existing todo', () => {
    apiPut(`${TODOS_ENDPOINT}/invalid_id`, invalidTodo, 404).then((response) => {
      expect(response.body).to.be.empty;
    });
  });

  it('DELETE request - delete a non-existing todo', () => {
    apiDelete(`${TODOS_ENDPOINT}/invalid_id`, 404).then((response) => {
      expect(response.body).to.be.empty;
    });
  });

  it('POST request - create a todo without required fields', () => {
    apiPost(TODOS_ENDPOINT, {}, 500).then((response) => {
      expect(response.body).to.have.property('error');
    });
  });
});
