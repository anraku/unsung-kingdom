import config from '../data/config'
import Baloon from './Balloon'
export default class Substance extends Phaser.GameObjects.Container {
  constructor (scene, x, y, key = null, option = {}) {
    super(scene, x, y)
    const { width, height } = option
    this.scene = scene
    this.key = key
    this.image = key ? scene.add.sprite(0, 0, key) : scene.add.rectangle(0, 0, config.TILE_SIZE, config.TILE_SIZE)
    this.image.setPosition(0, -this.image.height.half)
    const w = width || this.image.width
    const h = height || this.image.height
    this.setSize(w, h)
    if (key) {
      this.shadow = scene.add.circle(0, h / -18, (w + h) / 8, config.COLORS.black, 0.3).setScale(1, 0.5)
      this.add(this.shadow)
    }
    this.add(this.image)
    scene.add.existing(this)
    scene.substances.add(this)
    scene.physics.world.enable(this)
    this.body.setDrag(300)
    this.setId(null)
  }
  preUpdate () {
    if (this.target && !this.target.isAlive) this.unsetFollowing()
    this.setDepth(this.y)
    if (this.balloon) this.balloon.visible = this.distanceToPlayer < 150
  }
  setId (id) {
    this.id = id
    return this
  }
  setTapEvent (balloon = true) {
    const distance = 150
    this.tapArea = this.scene.add.rectangle(0, -this.image.height, this.image.width + 20, this.image.height + 50).setInteractive()
    this.add(this.tapArea)
    if (balloon) {
      this.balloon = new Baloon(this.scene).setPosition(0, -this.image.height.half - 50)
      this.add(this.balloon)
    }
    this.tapArea.on('pointerdown', (_pointer, _x, _y, e) => {
      if (balloon && this.distanceToPlayer >= distance) return
      e.stopPropagation()
      this.scene.player.unsetFollowing()
      this.emit('tap', this)
    })
    return this
  }
  setTalk (data) {
    this.setTapEvent().on('tap', () => {
      this.scene.talk(data)
    })
  }
  distanceTo (target) {
    return Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y)
  }
  angleTo (target) {
    return Math.atan2(target.y - this.y, target.x - this.x)
  }
  get distanceToPlayer () {
    return this.distanceTo(this.scene.player)
  }
}
