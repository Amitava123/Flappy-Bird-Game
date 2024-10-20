let move_speed = 5, gravity = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('assets/sounds/point.mp3');
let sound_die = new Audio('assets/sounds/die.mp3');

// Getting bird element properties
let bird_props = bird.getBoundingClientRect();
let background = document.querySelector('.background').getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');
let score = document.querySelector('.score');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
    if (e.key === 'Enter' && game_state !== 'Play') {
        startGame();
    }
}

function startGame() {
    document.querySelectorAll('.pipe_sprite').forEach(e => e.remove());
    img.style.display = 'block';
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score: ';
    score_val.innerHTML = '0';
    message.classList.remove('messageStyle');
    play();
}

function play() {
    requestAnimationFrame(movePipes);
    requestAnimationFrame(applyGravity);
    requestAnimationFrame(createPipe);
}

function movePipes() {
    if (game_state !== 'Play') return;

    let pipe_sprites = document.querySelectorAll('.pipe_sprite');
    pipe_sprites.forEach(element => {
        let pipe_sprite_props = element.getBoundingClientRect();
        bird_props = bird.getBoundingClientRect();

        if (pipe_sprite_props.right <= 0) {
            element.remove();
        } else {
            if (isCollision(pipe_sprite_props)) {
                endGame();
                return;
            } else {
                if (shouldIncreaseScore(pipe_sprite_props, element)) {
                    increaseScore();
                    sound_point.play();
                }
                element.style.left = pipe_sprite_props.left - move_speed + 'px';
            }
        }
    });
    requestAnimationFrame(movePipes);
}

function isCollision(pipe_sprite_props) {
    return bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width &&
           bird_props.left + bird_props.width > pipe_sprite_props.left &&
           bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height &&
           bird_props.top + bird_props.height > pipe_sprite_props.top;
}

function shouldIncreaseScore(pipe_sprite_props, element) {
    return pipe_sprite_props.right < bird_props.left &&
           pipe_sprite_props.right + move_speed >= bird_props.left &&
           element.increase_score === '1';
}

function increaseScore() {
    score_val.innerHTML = +score_val.innerHTML + 1;
}

function endGame() {
    game_state = 'End';
    message.innerHTML = 'GAME OVER!'.fontcolor('red') + '<br>Press Enter To Restart';
    message.classList.add('messageStyle');
    img.style.display = 'none';
    sound_die.play();
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            window.location.reload();
        }
    });
}

let bird_dy = 0;

function applyGravity() {
    if (game_state !== 'Play') return;

    bird_dy += gravity;
    document.addEventListener('keydown', handleBirdFlap);
    document.addEventListener('keyup', handleBirdFlapEnd);

    if (isBirdOutOfBounds()) {
        endGame();
        return;
    }

    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();
    requestAnimationFrame(applyGravity);
}

function handleBirdFlap(e) {
    if (e.key === 'ArrowUp' || e.key === ' ') {
        img.src = 'assets/images/Bird-2.png';
        bird_dy = -6;
    }
}

function handleBirdFlapEnd(e) {
    if (e.key === 'ArrowUp' || e.key === ' ') {
        img.src = 'assets/images/Bird.png';
    }
}

function isBirdOutOfBounds() {
    return bird_props.top <= 0 || bird_props.bottom >= background.bottom;
}

let pipe_separation = 0;
const pipe_gap = 35;

function createPipe() {
    if (game_state !== 'Play') return;

    if (pipe_separation > 115) {
        pipe_separation = 0;
        generatePipes();
    }
    pipe_separation++;
    requestAnimationFrame(createPipe);
}

function generatePipes() {
    let pipe_posi = Math.floor(Math.random() * 43) + 8;

    let pipe_sprite_inv = document.createElement('div');
    pipe_sprite_inv.className = 'pipe_sprite';
    pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
    pipe_sprite_inv.style.left = '100vw';
    document.body.appendChild(pipe_sprite_inv);

    let pipe_sprite = document.createElement('div');
    pipe_sprite.className = 'pipe_sprite';
    pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
    pipe_sprite.style.left = '100vw';
    pipe_sprite.increase_score = '1';
    document.body.appendChild(pipe_sprite);
}