const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const box = 20; // Taille d'une case
        let snake = [{ x: box * 5, y: box * 5 }]; // Position initiale du serpent
        let food = { x: Math.floor(Math.random() * (canvas.width / box)) * box, y: Math.floor(Math.random() * (canvas.height / box)) * box };
        let direction = 'RIGHT';
        let score = 0;

        document.addEventListener('keydown', changeDirection);

        function changeDirection(event) {
            if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
            else if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
            else if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
            else if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canevas

            // Dessine la nourriture
            ctx.fillStyle = 'red';
            ctx.fillRect(food.x, food.y, box, box);

            // Dessine le serpent
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = (i === 0) ? 'green' : 'lightgreen'; // Tête du serpent
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
                ctx.strokeStyle = 'darkgreen';
                ctx.strokeRect(snake[i].x, snake[i].y, box, box);
            }

            // Position de la tête
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (direction === 'LEFT') snakeX -= box;
            if (direction === 'UP') snakeY -= box;
            if (direction === 'RIGHT') snakeX += box;
            if (direction === 'DOWN') snakeY += box;

            // Vérifie si le serpent mange la nourriture
            if (snakeX === food.x && snakeY === food.y) {
                score++;
                food = { x: Math.floor(Math.random() * (canvas.width / box)) * box, y: Math.floor(Math.random() * (canvas.height / box)) * box };
            } else {
                snake.pop(); // Supprime la dernière case du serpent
            }

            // Ajoute la nouvelle tête
            const newHead = { x: snakeX, y: snakeY };
            snake.unshift(newHead);

            // Vérifie les collisions avec les murs ou avec soi-même
            if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
                clearInterval(game);
                alert('Game Over! Votre score: ' + score);
            }
        }

        function collision(head, array) {
            for (let i = 1; i < array.length; i++) {
                if (head.x === array[i].x && head.y === array[i].y) {
                    return true;
                }
            }
            return false;
        }

        const game = setInterval(draw, 100); // Boucle de jeu