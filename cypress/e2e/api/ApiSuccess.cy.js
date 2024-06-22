// cypress/e2e/api/todosApiTest.spec.js

import { apiGet, apiPost, apiPut, apiDelete } from '../../utils/apiUtils';
import { TODOS_ENDPOINT } from '../../config/endpoints';

describe('API Testing for JSONPlaceholder Todos - Success Cases', () => {
  const newTodo = {
    title: "Learn Cypress",
    completed: false,
    userId: 1,
    id: 1
  };

  it('GET request - fetch all todos', () => {
    apiGet(TODOS_ENDPOINT).then((response) => {
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('POST request - create a new todo', () => {
    apiPost(TODOS_ENDPOINT, newTodo).then((response) => {
      expect(response.body).to.have.property('title', newTodo.title);
      expect(response.body).to.have.property('completed', newTodo.completed);
      expect(response.body).to.have.property('userId', newTodo.userId);
      newTodo.id = response.body.id; // Save the ID for later use
    });
  });

  it('PUT request - update a todo', () => {
    const updatedTodo = {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    }

    apiPut(`${TODOS_ENDPOINT}/${updatedTodo.id}`, updatedTodo).then((response) => {
      expect(response.body).to.have.property('title', updatedTodo.title);
      expect(response.body).to.have.property('completed', updatedTodo.completed);
      expect(response.body).to.have.property('userId', updatedTodo.userId);
    });
  });

  it('DELETE request - delete a todo', () => {
    apiDelete(`${TODOS_ENDPOINT}/${newTodo.id}`);
  });
});
