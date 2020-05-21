export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  if (this.health >= 0) {
    this.health -= points * (1 - this.defence / 100);
  }
};

const description = new Character('Green', 'Magician');
Character.prototype.damage.call(description, 10);
console.log(description);
