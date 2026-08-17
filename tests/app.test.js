const { describe, it } = require('node:test');
const assert = require('node:assert');
const { greet, add } = require('../src/app');

describe('Suite de tests unitaires - hello-devops', () => {
  it('greet() doit retourner le message par défaut', () => {
    assert.strictEqual(greet(), 'Hello, World!');
  });

  it('greet() doit retourner le message personnalisé', () => {
    assert.strictEqual(greet('DevOps'), 'Hello, DevOps!');
  });

  it('add() doit calculer la somme exacte de deux nombres', () => {
    assert.strictEqual(add(10, 20), 30);
  });
});
