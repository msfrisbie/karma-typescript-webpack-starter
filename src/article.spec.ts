import { Article } from './article';

describe('Article unit tests', () => {
  it('Has Jake as its content', () => {
    let a = new Article();
    expect(a.content).toBe("Jake");
  });
});
