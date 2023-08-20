

const quizzes = [
  {
    name: "Real Madrid Quiz",
    id: 5,
    timer: {
      minutes: 10,
      seconds: 0,
    },
    imgUrl: "https://wallpapercave.com/wp/wc1793842.jpg",
    slug: "real-madrid",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "In which year was Real Madrid founded?",
        options: ["1902", "1923", "1945", "1931"],
        correctAnswer: "1902",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Who is Real Madrid's all-time top scorer?",
        options: ["Cristiano Ronaldo", "Raul", "Ferenc Puskás", "Karim Benzema"],
        correctAnswer: "Cristiano Ronaldo",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Which stadium is the home of Real Madrid?",
        options: ["Camp Nou", "Santiago Bernabeu", "Anfield", "Old Trafford"],
        correctAnswer: "Santiago Bernabeu",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 4
      {
        name: "How many times has Real Madrid won the UEFA Champions League?",
        options: ["10", "13", "7", "8"],
        correctAnswer: "13",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 5
      {
        name: "Which player is known as the 'Galactico'?",
        options: ["Zinedine Zidane", "Luis Figo", "Roberto Carlos", "David Beckham"],
        correctAnswer: "Luis Figo",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Which manager led Real Madrid to three consecutive UEFA Champions League titles?",
        options: ["Carlo Ancelotti", "Jose Mourinho", "Zinedine Zidane", "Rafael Benitez"],
        correctAnswer: "Zinedine Zidane",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Who holds the record for the most appearances for Real Madrid?",
        options: ["Sergio Ramos", "Iker Casillas", "Raul", "Fernando Hierro"],
        correctAnswer: "Sergio Ramos",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Which player is often referred to as 'The Wizard of Oz'?",
        options: ["Luka Modric", "Gareth Bale", "Cristiano Ronaldo", "Karim Benzema"],
        correctAnswer: "Luka Modric",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 9
      {
        name: "In which city is Real Madrid based?",
        options: ["Barcelona", "Madrid", "Seville", "Valencia"],
        correctAnswer: "Madrid",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Who is known as 'The White Feather'?",
        options: ["Ferenc Puskás", "Raul", "Iker Casillas", "Karim Benzema"],
        correctAnswer: "Ferenc Puskás",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 11
      {
        name: "Which Real Madrid player is the son of the legendary Brazilian defender, Mazinho?",
        options: ["Marcelo", "Casemiro", "Vinicius Junior", "Rodrygo Goes"],
        correctAnswer: "Vinicius Junior",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 12
      {
        name: "In which year did Real Madrid win their first UEFA Champions League title?",
        options: ["1956", "1960", "1963", "1966"],
        correctAnswer: "1956",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 13
      {
        name: "Who was the top scorer of Real Madrid's La Liga title-winning season in 2020-21?",
        options: ["Karim Benzema", "Luka Modric", "Sergio Ramos", "Vinicius Junior"],
        correctAnswer: "Karim Benzema",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 14
      {
        name: "Which legendary player is nicknamed 'The Blond Arrow'?",
        options: ["Hugo Sanchez", "Emilio Butragueño", "Ferenc Puskás", "Zinedine Zidane"],
        correctAnswer: "Hugo Sanchez",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 15
      {
        name: "What is the name of Real Madrid's official anthem?",
        options: ["Hala Madrid", "El Cant del Barça", "You'll Never Walk Alone", "Glory Glory Man United"],
        correctAnswer: "Hala Madrid",
        correctOption: "A",
        answerPicked: "",
      },
    ],
  },
  {
    name: "Barcelona Quiz",
    id: 6,
    timer: {
      minutes: 8,
      seconds: 30,
    },
    imgUrl: "https://images8.alphacoders.com/969/thumb-1920-969492.jpg",
    slug: "barcelona",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "In which year was FC Barcelona founded?",
        options: ["1899", "1905", "1920", "1930"],
        correctAnswer: "1899",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Who is FC Barcelona's all-time top scorer?",
        options: ["Lionel Messi", "Cesar Rodriguez", "Ronaldinho", "Xavi Hernandez"],
        correctAnswer: "Lionel Messi",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Which stadium is the home of FC Barcelona?",
        options: ["Santiago Bernabeu", "Camp Nou", "Anfield", "Old Trafford"],
        correctAnswer: "Camp Nou",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 4
      {
        name: "How many times has FC Barcelona won the UEFA Champions League?",
        options: ["3", "5", "7", "8"],
        correctAnswer: "5",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 5
      {
        name: "Which player is known as 'La Pulga'?",
        options: ["Xavi Hernandez", "Andres Iniesta", "Lionel Messi", "Sergio Busquets"],
        correctAnswer: "Lionel Messi",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Which manager led FC Barcelona to their first UEFA Champions League title?",
        options: ["Frank Rijkaard", "Pep Guardiola", "Luis Enrique", "Ronald Koeman"],
        correctAnswer: "Frank Rijkaard",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Who holds the record for the most appearances for FC Barcelona?",
        options: ["Andres Iniesta", "Xavi Hernandez", "Lionel Messi", "Sergio Busquets"],
        correctAnswer: "Xavi Hernandez",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Which player is often referred to as 'The Atomic Flea'?",
        options: ["Andres Iniesta", "Xavi Hernandez", "Lionel Messi", "Sergio Busquets"],
        correctAnswer: "Lionel Messi",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 9
      {
        name: "In which city is FC Barcelona based?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correctAnswer: "Barcelona",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Who is known as 'El Mago'?",
        options: ["Andres Iniesta", "Xavi Hernandez", "Lionel Messi", "Sergio Busquets"],
        correctAnswer: "Andres Iniesta",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 11
      {
        name: "Which FC Barcelona player is known for his skills and flair with the ball?",
        options: ["Luis Suarez", "Jordi Alba", "Philippe Coutinho", "Neymar"],
        correctAnswer: "Neymar",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 12
      {
        name: "In which year did FC Barcelona win their first UEFA Champions League title?",
        options: ["1970", "1986", "1992", "2005"],
        correctAnswer: "1992",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 13
      {
        name: "Who was the top scorer of FC Barcelona's La Liga title-winning season in 2020-21?",
        options: ["Antoine Griezmann", "Lionel Messi", "Ansu Fati", "Ousmane Dembele"],
        correctAnswer: "Lionel Messi",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 14
      {
        name: "Which legendary player is known as 'The Dream Team'?",
        options: ["Johan Cruyff", "Xavi Hernandez", "Lionel Messi", "Andres Iniesta"],
        correctAnswer: "Johan Cruyff",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 15
      {
        name: "What is the name of FC Barcelona's official anthem?",
        options: ["Hala Madrid", "Cant del Barça", "You'll Never Walk Alone", "Glory Glory Man United"],
        correctAnswer: "Cant del Barça",
        correctOption: "B",
        answerPicked: "",
      },
    ],
  },
  {
    name: "Arsenal Quiz",
    id: 7,
    timer: {
      minutes: 11,
      seconds: 0,
    },
    slug: "arsenal-quiz",
    imgUrl: "https://www.hdwallpapers.in/download/arsenal_logo_in_colorful_fire_background_hd_arsenal-HD.jpg",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "In which year was Arsenal Football Club founded?",
        options: ["1886", "1892", "1901", "1910"],
        correctAnswer: "1886",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 2
      {
        name: "What is the nickname of Arsenal Football Club?",
        options: ["The Blues", "The Reds", "The Gunners", "The Hammers"],
        correctAnswer: "The Gunners",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Which stadium is the home of Arsenal Football Club?",
        options: ["Old Trafford", "Anfield", "Etihad Stadium", "Emirates Stadium"],
        correctAnswer: "Emirates Stadium",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 4
      {
        name: "Who is Arsenal's all-time top scorer?",
        options: ["Thierry Henry", "Ian Wright", "Dennis Bergkamp", "Tony Adams"],
        correctAnswer: "Thierry Henry",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 5
      {
        name: "Which manager famously led Arsenal's 'Invincibles' season?",
        options: ["Jose Mourinho", "Arsene Wenger", "Pep Guardiola", "Jurgen Klopp"],
        correctAnswer: "Arsene Wenger",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Who is the current captain of Arsenal Football Club?",
        options: ["Pierre-Emerick Aubameyang", "Alexandre Lacazette", "Hector Bellerin", "Granit Xhaka"],
        correctAnswer: "Pierre-Emerick Aubameyang",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Which Arsenal player famously wore the number 14 jersey?",
        options: ["Ian Wright", "Thierry Henry", "Dennis Bergkamp", "Cesc Fabregas"],
        correctAnswer: "Thierry Henry",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Which club is considered Arsenal's biggest rival?",
        options: ["Chelsea", "Tottenham Hotspur", "Manchester United", "Liverpool"],
        correctAnswer: "Tottenham Hotspur",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 9
      {
        name: "In which competition did Arsenal win the 'Double' in the 1997-1998 season?",
        options: ["Premier League and FA Cup", "UEFA Champions League and FA Cup", "FA Cup and League Cup", "Premier League and League Cup"],
        correctAnswer: "Premier League and FA Cup",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Which French midfielder joined Arsenal in 1996 and became a club legend?",
        options: ["Patrick Vieira", "Emmanuel Petit", "Robert Pires", "Thierry Henry"],
        correctAnswer: "Patrick Vieira",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 11
      {
        name: "In which season did Arsenal move to the Emirates Stadium?",
        options: ["2001-2002", "2003-2004", "2004-2005", "2006-2007"],
        correctAnswer: "2006-2007",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 12
      {
        name: "Which Dutch striker scored a memorable goal for Arsenal in the FA Cup final against Manchester United?",
        options: ["Robin van Persie", "Dennis Bergkamp", "Ruud van Nistelrooy", "Thierry Henry"],
        correctAnswer: "Dennis Bergkamp",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 13
      {
        name: "Who holds the record for the most appearances for Arsenal Football Club?",
        options: ["Patrick Vieira", "Thierry Henry", "Tony Adams", "David O'Leary"],
        correctAnswer: "David O'Leary",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 14
      {
        name: "Which Italian goalkeeper was known for his time at Arsenal and his penalty saves?",
        options: ["Gianluigi Buffon", "Walter Zenga", "Angelo Peruzzi", "David Seaman"],
        correctAnswer: "David Seaman",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 15
      {
        name: "Who scored the winning goal for Arsenal in the 1989 title-deciding match against Liverpool?",
        options: ["Alan Smith", "Ian Wright", "Tony Adams", "Michael Thomas"],
        correctAnswer: "Michael Thomas",
        correctOption: "D",
        answerPicked: "",
      },
      // ... (Add more questions up to a random number between 15 and 20)
    ],
  },
  {
    name: "LaLiga Quiz",
    id: 8,
    timer: {
      minutes: 7,
      seconds: 20,
    },
    slug: "laliga-quiz",
    imgUrl: "https://files.laliga.es/seccion_logos/laliga-v-negativo-1200x1200_2018.jpg",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "Which club is known as the 'Blaugrana'?",
        options: ["Real Madrid", "Atletico Madrid", "Barcelona", "Valencia"],
        correctAnswer: "Barcelona",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Who holds the record for the most goals scored in LaLiga?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Telmo Zarra", "Hugo Sanchez"],
        correctAnswer: "Lionel Messi",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Which Spanish city is home to the Estadio Santiago Bernabeu?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correctAnswer: "Madrid",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 4
      {
        name: "Which club is known as 'Los Colchoneros'?",
        options: ["Real Madrid", "Atletico Madrid", "Sevilla", "Espanyol"],
        correctAnswer: "Atletico Madrid",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 5
      {
        name: "Who is the all-time top scorer for Atletico Madrid?",
        options: ["Luis Aragones", "Diego Forlan", "Antoine Griezmann", "Fernando Torres"],
        correctAnswer: "Luis Aragones",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Which club has won the most LaLiga titles?",
        options: ["Real Madrid", "Barcelona", "Atletico Madrid", "Valencia"],
        correctAnswer: "Real Madrid",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Which Argentine forward is known as 'El Kun'?",
        options: ["Lionel Messi", "Angel Di Maria", "Gonzalo Higuain", "Sergio Aguero"],
        correctAnswer: "Sergio Aguero",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Which club is known as 'Los Merengues'?",
        options: ["Barcelona", "Real Madrid", "Sevilla", "Villarreal"],
        correctAnswer: "Real Madrid",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 9
      {
        name: "In which year was LaLiga founded?",
        options: ["1929", "1935", "1942", "1950"],
        correctAnswer: "1929",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Which club is known as 'Los Che'?",
        options: ["Valencia", "Real Betis", "Real Valladolid", "Celta Vigo"],
        correctAnswer: "Valencia",
        correctOption: "A",
        answerPicked: "",
      },
      // ... (Add more questions up to a random number between 15 and 20)
    ],
  },
  {
    name: "EPL Quiz",
    id: 9,
    timer: {
      minutes: 7,
      seconds: 20,
    },
    slug: "epl-quiz",
    imgUrl: "https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2018/10/04/ed3353e1-89de-4d30-a2aa-f5464b3bdb29/epl-Logo-v3.jpg",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "Which club won the 2020-2021 EPL season?",
        options: ["Manchester City", "Manchester United", "Liverpool", "Chelsea"],
        correctAnswer: "Manchester City",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Which player holds the record for the most goals scored in a single EPL season?",
        options: ["Cristiano Ronaldo", "Alan Shearer", "Thierry Henry", "Luis Suarez"],
        correctAnswer: "Alan Shearer",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Which EPL club is nicknamed the 'Gunners'?",
        options: ["Manchester United", "Arsenal", "Leicester City", "Everton"],
        correctAnswer: "Arsenal",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 4
      {
        name: "Who is the all-time top scorer for Liverpool in the EPL?",
        options: ["Steven Gerrard", "Kenny Dalglish", "Fernando Torres", "Ian Rush"],
        correctAnswer: "Steven Gerrard",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 5
      {
        name: "Which EPL club is known as the 'Blues'?",
        options: ["Chelsea", "Manchester City", "Everton", "Leeds United"],
        correctAnswer: "Chelsea",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Who was the first non-British player to win the EPL Golden Boot?",
        options: ["Dennis Bergkamp", "Ruud van Nistelrooy", "Thierry Henry", "Didier Drogba"],
        correctAnswer: "Thierry Henry",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Which EPL club is nicknamed the 'Red Devils'?",
        options: ["Liverpool", "Manchester City", "Leicester City", "Manchester United"],
        correctAnswer: "Manchester United",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Who holds the record for the most assists in a single EPL season?",
        options: ["Frank Lampard", "Cesc Fabregas", "Thierry Henry", "Kevin De Bruyne"],
        correctAnswer: "Kevin De Bruyne",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 9
      {
        name: "Which EPL club's home ground is Anfield?",
        options: ["Manchester United", "Leeds United", "Arsenal", "Liverpool"],
        correctAnswer: "Liverpool",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Which EPL club is nicknamed the 'Toffees'?",
        options: ["Everton", "Newcastle United", "Burnley", "Aston Villa"],
        correctAnswer: "Everton",
        correctOption: "A",
        answerPicked: "",
      },
      // ... (Add more questions up to at least 15)
    ],
  },
  {
    name: "UEFA CL Quiz",
    id: 10,
    timer: {
      minutes: 8,
      seconds: 0,
    },
    slug: "uefa-champions-league-quiz",
    imgUrl: "https://wallpapercave.com/wp/wp7245877.jpg",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "Which team has won the most UEFA Champions League titles?",
        options: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
        correctAnswer: "Real Madrid",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Who holds the record for the most goals scored in UEFA Champions League history?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Raul", "Robert Lewandowski"],
        correctAnswer: "Cristiano Ronaldo",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Which stadium hosted the UEFA Champions League final in 2021?",
        options: ["Wembley Stadium", "Atatürk Olympic Stadium", "San Siro", "Parc des Princes"],
        correctAnswer: "Atatürk Olympic Stadium",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 4
      {
        name: "Which player has won the UEFA Champions League with three different clubs?",
        options: ["Andres Iniesta", "Cristiano Ronaldo", "Lionel Messi", "Xavi"],
        correctAnswer: "Cristiano Ronaldo",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 5
      {
        name: "Which club won the inaugural UEFA Champions League in the 1955-1956 season?",
        options: ["AC Milan", "Real Madrid", "Bayern Munich", "Liverpool"],
        correctAnswer: "Real Madrid",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Which country has the most UEFA Champions League winners?",
        options: ["Spain", "Italy", "Germany", "England"],
        correctAnswer: "Spain",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Which player has won the most UEFA Champions League titles?",
        options: ["Paolo Maldini", "Zinedine Zidane", "Lionel Messi", "Cristiano Ronaldo"],
        correctAnswer: "Paolo Maldini",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Which club is known for their 'Galácticos' era?",
        options: ["Barcelona", "Manchester United", "AC Milan", "Real Madrid"],
        correctAnswer: "Real Madrid",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 9
      {
        name: "Who is the all-time top scorer in a single UEFA Champions League season?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Neymar"],
        correctAnswer: "Cristiano Ronaldo",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Which club has won the UEFA Champions League the most consecutive times?",
        options: ["Bayern Munich", "Liverpool", "Barcelona", "Real Madrid"],
        correctAnswer: "Real Madrid",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 11
    {
      name: "Which player holds the record for the fastest hat-trick in UEFA Champions League history?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Gareth Bale"],
      correctAnswer: "Gareth Bale",
      correctOption: "D",
      answerPicked: "",
    },
    // Question 12
    {
      name: "Which club has won the UEFA Champions League the most times without ever losing a final?",
      options: ["AC Milan", "Liverpool", "Bayern Munich", "Chelsea"],
      correctAnswer: "Liverpool",
      correctOption: "B",
      answerPicked: "",
    },
      // ... (Add more questions up to at least 15)
    ],
  },

  {
    name: "World Cup Quiz",
    id: 11,
    timer: {
      minutes: 15,
      seconds: 0,
    },
    slug: "world-cup-quiz",
    imgUrl: "https://wallpapercave.com/wp/wp2521997.jpg",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "Which country won the first-ever FIFA World Cup in 1930?",
        options: ["Brazil", "Uruguay", "Germany", "Argentina"],
        correctAnswer: "Uruguay",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Which player has scored the most goals in FIFA World Cup history?",
        options: ["Pelé", "Miroslav Klose", "Lionel Messi", "Ronaldo"],
        correctAnswer: "Miroslav Klose",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 3
      {
        name: "In which year did England win their first and only FIFA World Cup?",
        options: ["1966", "1970", "1982", "1990"],
        correctAnswer: "1966",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 4
      {
        name: "Which nation has won the most FIFA World Cups?",
        options: ["Brazil", "Germany", "Italy", "Argentina"],
        correctAnswer: "Brazil",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 5
      {
        name: "In which country was the 2010 FIFA World Cup held?",
        options: ["Brazil", "South Africa", "Germany", "Russia"],
        correctAnswer: "South Africa",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Who won the Golden Ball award for the best player at the 2018 FIFA World Cup?",
        options: ["Kylian Mbappé", "Luka Modrić", "Cristiano Ronaldo", "Antoine Griezmann"],
        correctAnswer: "Luka Modrić",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Which country hosted the 2002 FIFA World Cup?",
        options: ["Germany", "France", "South Korea & Japan", "Italy"],
        correctAnswer: "South Korea & Japan",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 8
      {
        name: "Which nation won the most recent FIFA World Cup held in 2018?",
        options: ["Brazil", "France", "Germany", "Argentina"],
        correctAnswer: "France",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 9
      {
        name: "Who is the all-time top scorer in World Cup history?",
        options: ["Pelé", "Miroslav Klose", "Diego Maradona", "Ronaldo"],
        correctAnswer: "Miroslav Klose",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 10
      {
        name: "Which nation was the runner-up in the 2014 FIFA World Cup?",
        options: ["Netherlands", "Argentina", "Germany", "Brazil"],
        correctAnswer: "Argentina",
        correctOption: "B",
        answerPicked: "",
      },
      // ... (Previous questions)

// Question 11
{
  name: "Which country won the 1978 FIFA World Cup?",
  options: ["Brazil", "Argentina", "Italy", "Germany"],
  correctAnswer: "Argentina",
  correctOption: "B",
  answerPicked: "",
},
// Question 12
{
  name: "In which year was the FIFA World Cup first held?",
  options: ["1930", "1950", "1958", "1962"],
  correctAnswer: "1930",
  correctOption: "A",
  answerPicked: "",
},
// Question 13
{
  name: "Which player scored the fastest hat-trick in FIFA World Cup history?",
  options: ["Cristiano Ronaldo", "Miroslav Klose", "Hakan Şükür", "Geoff Hurst"],
  correctAnswer: "Hakan Şükür",
  correctOption: "C",
  answerPicked: "",
},
// Question 14
{
  name: "Which African nation reached the quarter-finals of the FIFA World Cup in 1990?",
  options: ["Cameroon", "Nigeria", "Ghana", "Senegal"],
  correctAnswer: "Cameroon",
  correctOption: "A",
  answerPicked: "",
},
// Question 15
{
  name: "Who is the youngest player to score a goal in a FIFA World Cup?",
  options: ["Kylian Mbappé", "Pele", "Lionel Messi", "Diego Maradona"],
  correctAnswer: "Pele",
  correctOption: "B",
  answerPicked: "",
}

      // Question 11
      // ... (Add more questions up to 15)
      // Question 12
      // ... (Add more questions up to 15)
      // Question 13
      // ... (Add more questions up to 15)
      // Question 14
      // ... (Add more questions up to 15)
      // Question 15
      // ... (Add more questions up to 15)
    ],
  },
  {
    name: "Lionel Messi Quiz",
    id: 10,
    timer: {
      minutes: 7,
      seconds: 30,
    },
    imgUrl: "https://media.giphy.com/media/l0MYsOZQZ8FTdxgiY/giphy.gif",
    slug: "lionel-messi-quiz",
    description: "",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "In which year was Lionel Messi born?",
        options: ["1985", "1986", "1987", "1988"],
        correctAnswer: "1987",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Which country is Lionel Messi from?",
        options: ["Brazil", "Argentina", "Spain", "Portugal"],
        correctAnswer: "Argentina",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 3
      {
        name: "Lionel Messi played for which club for most of his entire professional career?",
        options: ["Real Madrid", "Barcelona", "Manchester United", "Juventus"],
        correctAnswer: "Barcelona",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 4
      {
        name: "How many FIFA World Cups has Lionel Messi won? (2022)",
        options: ["0", "1", "2", "3"],
        correctAnswer: "1",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 5
      {
        name: "What is Lionel Messi's jersey number?",
        options: ["7", "9", "10", "11"],
        correctAnswer: "10",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Lionel Messi is known for his exceptional skills in which area?",
        options: ["Heading", "Dribbling", "Tackling", "Goalkeeping"],
        correctAnswer: "Dribbling",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Lionel Messi is often compared to which other football legend?",
        options: ["Pele", "Diego Maradona", "Johan Cruyff", "Michel Platini"],
        correctAnswer: "Diego Maradona",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 8
      {
        name: "How many times has Lionel Messi won the UEFA Champions League with Barcelona?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 9
      {
        name: "What is the nickname often used to refer to Lionel Messi?",
        options: ["The King", "The Sultan", "The Magician", "The Emperor"],
        correctAnswer: "The Magician",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 10
      {
        name: "In which year did Lionel Messi make his senior debut for Barcelona?",
        options: ["2000", "2003", "2006", "2009"],
        correctAnswer: "2004",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 11
{
  name: "In which year did Lionel Messi win his first Ballon d'Or?",
  options: ["2007", "2008", "2009", "2010"],
  correctAnswer: "2009",
  correctOption: "C",
  answerPicked: "",
},
// Question 12
{
  name: "Lionel Messi began his professional career with which club?",
  options: ["Barcelona", "Real Madrid", "River Plate", "Newell's Old Boys"],
  correctAnswer: "Barcelona",
  correctOption: "A",
  answerPicked: "",
},
// Question 13
{
  name: "How many Ballon d'Or awards has Lionel Messi won?",
  options: ["4", "6", "8", "10"],
  correctAnswer: "6",
  correctOption: "B",
  answerPicked: "",
},
// Question 14
{
  name: "What is Lionel Messi's playing position?",
  options: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
  correctAnswer: "Forward",
  correctOption: "A",
  answerPicked: "",
},
// Question 15
{
  name: "Lionel Messi holds the record for the most goals scored in which league?",
  options: ["LaLiga", "Serie A", "Premier League", "Bundesliga"],
  correctAnswer: "LaLiga",
  correctOption: "A",
  answerPicked: "",
}
      // Question 11
      // ... (Add more questions up to 15)
      // Question 12
      // ... (Add more questions up to 15)
      // Question 13
      // ... (Add more questions up to 15)
      // Question 14
      // ... (Add more questions up to 15)
      // Question 15
      // ... (Add more questions up to 15)
    ],
  },
  {
    name: "CR7 Quiz",
    id: 11,
    timer: {
      minutes: 8,
      seconds: 0,
    },
    slug: "cr7-quiz",
    description: "",
    imgUrl: "https://images3.alphacoders.com/980/980281.jpg",
    author: "Admin",
    questions: [
      // Question 1
      {
        name: "In which country was Cristiano Ronaldo born?",
        options: ["Brazil", "Argentina", "Portugal", "Spain"],
        correctAnswer: "Portugal",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 2
      {
        name: "Cristiano Ronaldo started his professional career at which club?",
        options: ["Sporting CP", "Benfica", "Porto", "Barcelona"],
        correctAnswer: "Sporting CP",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 3
      {
        name: "How many Ballon d'Or awards has Cristiano Ronaldo won?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 4
      {
        name: "Which club did Cristiano Ronaldo join after leaving Manchester United?",
        options: ["Real Madrid", "Barcelona", "Bayern Munich", "Juventus"],
        correctAnswer: "Real Madrid",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 5
      {
        name: "What is Cristiano Ronaldo's jersey number?",
        options: ["7", "9", "10", "11"],
        correctAnswer: "7",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 6
      {
        name: "Cristiano Ronaldo is known for his exceptional skills in which area?",
        options: ["Heading", "Dribbling", "Tackling", "Goalkeeping"],
        correctAnswer: "Heading",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 7
      {
        name: "Which other football superstar is often compared to Cristiano Ronaldo?",
        options: ["Pele", "Lionel Messi", "Zinedine Zidane", "George Best"],
        correctAnswer: "Lionel Messi",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 8
      {
        name: "How many UEFA Champions League titles has Cristiano Ronaldo won?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 9
      {
        name: "Cristiano Ronaldo is known for his trademark celebration, which is often called:",
        options: ["Moonwalk", "The Robot", "The Samba", "The Siiii"],
        correctAnswer: "The Siiii",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 10
      {
        name: "In which year did Cristiano Ronaldo win his first Ballon d'Or award?",
        options: ["2007", "2008", "2009", "2010"],
        correctAnswer: "2008",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 11
      {
        name: "What is the name of the stadium where Cristiano Ronaldo scored his famous bicycle kick against Juventus?",
        options: ["Camp Nou", "Santiago Bernabeu", "Old Trafford", "Allianz Stadium"],
        correctAnswer: "Allianz Stadium",
        correctOption: "D",
        answerPicked: "",
      },
      // Question 12
      {
        name: "Cristiano Ronaldo spent how many seasons with Juventus?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        correctOption: "C",
        answerPicked: "",
      },
      // Question 13
      {
        name: "In which year did Cristiano Ronaldo return to Manchester United?",
        options: ["2020", "2021", "2022", "2023"],
        correctAnswer: "2021",
        correctOption: "B",
        answerPicked: "",
      },
      // Question 14
      {
        name: "Cristiano Ronaldo won his first UEFA European Championship with which national team?",
        options: ["Portugal", "Spain", "Germany", "France"],
        correctAnswer: "Portugal",
        correctOption: "A",
        answerPicked: "",
      },
      // Question 15
      {
        name: "What is the name of the book Cristiano Ronaldo published in 2015?",
        options: ["My Story", "Ronaldo: The Journey", "Cristiano Unleashed", "The Ronaldo Phenomenon"],
        correctAnswer: "Ronaldo: The Journey",
        correctOption: "B",
        answerPicked: "",
      },
    ],
  },
  
  
  
  
  
  
  
]

  
const tests = [...quizzes];
  
export default tests;