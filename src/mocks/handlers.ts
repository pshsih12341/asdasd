import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/feed', () => {
    return HttpResponse.json({
      message: 'Hello from mocks',
    });
  }),
];
