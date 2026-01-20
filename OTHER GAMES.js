// js/games/fighter.js - 2D Fighting Game
class FighterGame extends Canvas2DEngine {
    init() {
        super.init();
        this.players = [
            { x: 100, y: 300, health: 100, character: 'ryu' },
            { x: 700, y: 300, health: 100, character: 'ken' }
        ];
        this.punches = [];
        this.gameTime = 99;
    }
    
    update(deltaTime) {
        // Player movement and combat logic
        // AI for single player
        // Multiplayer sync
    }
    
    render() {
        // Draw arena
        // Draw fighters
        // Draw health bars
    }
}

// js/games/horror.js - 3D Horror Game
class HorrorGame extends WebGL3DEngine {
    init() {
        super.init();
        this.scene.fog = new THREE.Fog(0x000000, 1, 50);
        this.flashlight = new THREE.SpotLight(0xffffff, 1, 20, Math.PI / 6);
        this.player = { x: 0, z: 0, rotation: 0 };
        this.monsters = [];
        this.createMaze();
    }
    
    createMaze() {
        // Generate procedural maze
        // Add jump scares
        // Monster AI
    }
}

// js/games/battleArena.js - Multiplayer FPS
class BattleArenaGame extends WebGL3DEngine {
    init() {
        super.init();
        this.players = new Map();
        this.bullets = [];
        this.map = this.loadMap();
        this.setupWeapons();
        
        // Listen for network events
        GamePlatform.network.onMessage((msg) => {
            if (msg.data.type === 'playerMove') {
                this.updatePlayerPosition(msg.from, msg.data.position);
            }
        });
    }
    
    update(deltaTime) {
        // FPS controls
        // Shooting mechanics
        // Health system
        this.syncPlayer();
    }
    
    syncPlayer() {
        GamePlatform.network.broadcastToRoom(roomId, {
            type: 'playerMove',
            position: this.player.position
        });
    }
}