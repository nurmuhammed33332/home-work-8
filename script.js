
    function createLikeCounter() {
      let likes = 0;
      return function () {
        likes++;
        return likes;
      };
    }

    const nextLike = createLikeCounter();
    const countElement = document.getElementById('count');
    document.getElementById('likeBtn').addEventListener('click', function () {
      countElement.textContent = nextLike();
    });

    
    function greet(greetingWord) {
      return function (userName) {
        return `${greetingWord}, ${userName}`;
      };
    }

    const officialGreeting = greet('Здравствуйте');
    const friendlyGreeting = greet('Привет');
    const nameInput = document.getElementById('nameInput');
    const greetingText = document.getElementById('greetingText');

    function showGreeting(makeGreeting) {
      const userName = nameInput.value.trim();
      greetingText.textContent = userName
        ? makeGreeting(userName)
        : 'Сначала введите имя.';
    }

    document.getElementById('officialBtn').addEventListener('click', function () {
      showGreeting(officialGreeting);
    });
    document.getElementById('friendlyBtn').addEventListener('click', function () {
      showGreeting(friendlyGreeting);
    });

    
    function sumTo(n) {
      if (n <= 0) return 0; // базовый случай
      return n + sumTo(n - 1); 
    }

    const numInput = document.getElementById('numInput');
    const sumResult = document.getElementById('sumResult');
    document.getElementById('sumBtn').addEventListener('click', function () {
      const n = Number(numInput.value);
      if (!Number.isInteger(n) || n < 0 || n > 1000) {
        sumResult.textContent = 'Введите целое число от 0 до 1000.';
        return;
      }
      sumResult.textContent = sumTo(n);
    });
