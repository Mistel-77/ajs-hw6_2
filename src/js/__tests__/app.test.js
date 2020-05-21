import Character from '../app';

test('рассчитывает итоговое значение health при health >=0', () => {
  const description = new Character('Green', 'Magician');
  Character.prototype.damage.call(description, 10);
  expect(description.health).toBe(94);
});

test('не пересчитывает итоговое значение health при health < 0', () => {
  const description = new Character('Green', 'Magician');
  description.health = -30;
  Character.prototype.damage.call(description, 10);
  expect(description.health).toBe(-30);
});
