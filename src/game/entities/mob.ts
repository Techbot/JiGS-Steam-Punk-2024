/**
 * ------- Mob ---------
 */
import Phaser from "phaser";
import { useJigsStore } from '../../stores/jigs';


export default class Mob extends Phaser.Physics.Arcade.Sprite {
    jigs: any;

    constructor(scene, mob) {
        super(scene, 0, 0, null);
        scene.add.sprite(mob.x, mob.y);
        this.jigs = useJigsStore();
        this.setTexture(mob[5] + '-walk-' + mob[6]);
        this.play(mob[5] + '-stop-' + mob[6]);
        this.setInteractive({ cursor: 'url(/assets/images/cursors/attack.cur), pointer' });
        this.setScale(1);
        this.on('pointerdown', this.onMobDown.bind(this, mob[5]));
        this.loadMob(mob.x);
        this.setDepth(9);
    }

    onMobDown(name) {
        this.jigs.mobClick = name;
        this.jigs.mobShoot = name;
        this.jigs.playerStats.credits++;
        if (this.jigs.debug) {
            console.log('mob clicked: ' + name);
        }
    }

    loadMob(sprite) {
        console.log('mob added' + sprite);
    }
}
