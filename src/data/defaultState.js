import battlers from './battlers'
export default () => {
  return {
    map: 'room1',
    x: 500,
    y: 600,
    field: {},
    quest: {
      five: { started: false, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, completed: false }
    },
    battlers: battlers.filter((_, i) => i < 3).map(v => Object.assign(v, { exp: 0, maxHp: v.hp })),
    items: [{ item_id: 1, count: 5 }],
    weapons: [{ id: 1, weapon_id: 1 }, { id: 2, weapon_id: 1 }]
  }
}