
export const apiGet = (endpoint, status = 200) => {
    return cy.request({
        method: 'GET',
        url: endpoint,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(status);
        return response;
    });
};

export const apiPost = (endpoint, body, status = 201) => {
    return cy.request({
        method: 'POST',
        url: endpoint,
        body: body,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(status);
        return response;
    });
};

export const apiPut = (endpoint, body, status = 201) => {
    return cy.request({
        method: 'PUT',
        url: endpoint,
        body: body,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(500);
        return response;
    });
};

export const apiDelete = (endpoint, status = 200) => {
    return cy.request({
        method: 'DELETE',
        url: endpoint,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(status);
        return response;
    });
};
