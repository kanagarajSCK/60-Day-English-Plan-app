import { Week } from "../types";

export const studyPlanData: Week[] = [
  {
    week: 1,
    title: "The Foundations",
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    days: [
      {
        day: 1,
        title: "The Verb 'to be' (am, is, are)",
        grammar:
          "Use 'am' with 'I'. Use 'is' with 'he', 'she', 'it', or a single noun. Use 'are' with 'you', 'we', 'they', or plural nouns.",
        vocabulary: [
          {
            word: "Happy",
            meaning: "Feeling pleasure",
            example: "I am happy.",
          },
          {
            word: "Student",
            meaning: "A person studying",
            example: "She is a student.",
          },
          { word: "Ready", meaning: "Prepared", example: "We are ready." },
          { word: "Tired", meaning: "Needing rest", example: "He is tired." },
          {
            word: "From",
            meaning: "Indicating origin",
            example: "I am from India.",
          },
        ],
        speakingPractice:
          'Introduce yourself. Say your name, where you are from, and how you are feeling. (e.g., "Hello, I am [Your Name]. I am from [Your City]. Today, I am happy.")',
        dailyConversation: { a: "Are you ready?", b: "Yes, I am." },
        miniExercise: {
          type: "quiz",
          instruction: "Fill in the blank (am/is/are):",
          questions: [
            {
              question: "They ___ hungry.",
              options: ["am", "is", "are"],
              correctAnswer: "are",
            },
            {
              question: "I ___ excited.",
              options: ["am", "is", "are"],
              correctAnswer: "am",
            },
            {
              question: "The book ___ new.",
              options: ["am", "is", "are"],
              correctAnswer: "is",
            },
            {
              question: "She ___ a doctor.",
              options: ["am", "is", "are"],
              correctAnswer: "is",
            },
            {
              question: "You ___ my friend.",
              options: ["am", "is", "are"],
              correctAnswer: "are",
            },
            {
              question: "He ___ tired today.",
              options: ["am", "is", "are"],
              correctAnswer: "is",
            },
            {
              question: "We ___ in the park.",
              options: ["am", "is", "are"],
              correctAnswer: "are",
            },
            {
              question: "I ___ from India.",
              options: ["am", "is", "are"],
              correctAnswer: "am",
            },
            {
              question: "The dogs ___ loud.",
              options: ["am", "is", "are"],
              correctAnswer: "are",
            },
            {
              question: "It ___ a sunny day.",
              options: ["am", "is", "are"],
              correctAnswer: "is",
            },
          ],
        },
      },

      {
        day: 2,
        title: "Nouns & Articles (a, an)",
        grammar:
          "A noun is a person (teacher), place (office), or thing (laptop). Use 'a' before a consonant sound (a book). Use 'an' before a vowel sound (an apple).",
        vocabulary: [
          { word: "Apple", meaning: "A fruit", example: "I ate an apple." },
          {
            word: "Book",
            meaning: "A written work",
            example: "He needs a book.",
          },
          { word: "Car", meaning: "A vehicle", example: "It is a fast car." },
          {
            word: "Engineer",
            meaning: "A job",
            example: "She is an engineer.",
          },
          {
            word: "Hour",
            meaning: "60 minutes",
            example: "We will meet in an hour.",
          },
        ],
        speakingPractice:
          "Look around your room. Name 10 nouns you can see. Use 'a' or 'an' with each one. (e.g., \"I see a laptop. I see a chair. I see an orange.\")",
        dailyConversation: {
          a: "What do you need?",
          b: "I need a pen and a notebook.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Fill in the blank (a/an):",
          questions: [
            {
              question: "___ old man.",
              options: ["a", "an"],
              correctAnswer: "an",
            },
            {
              question: "___ big house.",
              options: ["a", "an"],
              correctAnswer: "a",
            },
            {
              question: "___ umbrella.",
              options: ["a", "an"],
              correctAnswer: "an",
            },
            { question: "___ cat.", options: ["a", "an"], correctAnswer: "a" },
            {
              question: "___ apple.",
              options: ["a", "an"],
              correctAnswer: "an",
            },
            {
              question: "___ honest person.",
              options: ["a", "an"],
              correctAnswer: "an",
            }, // silent h
            {
              question: "___ university.",
              options: ["a", "an"],
              correctAnswer: "a",
            }, // "yu" = consonant sound
            {
              question: "___ orange.",
              options: ["a", "an"],
              correctAnswer: "an",
            },
            {
              question: "___ teacher.",
              options: ["a", "an"],
              correctAnswer: "a",
            },
            {
              question: "___ hour.",
              options: ["a", "an"],
              correctAnswer: "an",
            }, // silent h
          ],
        },
      },
      {
        day: 3,
        title: "Subject Pronouns & Simple Present Tense",
        grammar:
          "Pronouns replace nouns (I, you, he, she, it, we, they). Simple Present Tense is for habits or facts. (e.g., I walk. He walks. We study.)",
        vocabulary: [
          {
            word: "Read",
            meaning: "Look at and understand text",
            example: "I read every day.",
          },
          {
            word: "Work",
            meaning: "Do a job",
            example: "He works in an office.",
          },
          { word: "Speak", meaning: "To talk", example: "They speak English." },
          { word: "Like", meaning: "To enjoy", example: "She likes tea." },
          {
            word: "Live",
            meaning: "To reside in",
            example: "We live in this city.",
          },
        ],
        speakingPractice:
          'Describe your daily routine using 5 simple present verbs. (e.g., "I wake up. I brush my teeth. I read a book. I work. I sleep.")',
        dailyConversation: {
          a: "Do you speak English?",
          b: "Yes, I speak a little.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Choose the correct pronoun:",
          questions: [
            {
              question: "___ like coffee.",
              options: ["I", "My", "Me"],
              correctAnswer: "I",
            },
            {
              question: "___ reads books.",
              options: ["She", "Her", "Hers"],
              correctAnswer: "She",
            },
            {
              question: "___ work together.",
              options: ["We", "Our", "Us"],
              correctAnswer: "We",
            },
            {
              question: "___ is my brother.",
              options: ["He", "Him", "His"],
              correctAnswer: "He",
            },
            {
              question: "___ are students.",
              options: ["They", "Them", "Their"],
              correctAnswer: "They",
            },
            {
              question: "___ live in India.",
              options: ["We", "Us", "Our"],
              correctAnswer: "We",
            },
            {
              question: "___ likes music.",
              options: ["She", "Her", "Hers"],
              correctAnswer: "She",
            },
            {
              question: "___ am a good student.",
              options: ["I", "Me", "Mine"],
              correctAnswer: "I",
            },
            {
              question: "___ is raining.",
              options: ["It", "He", "She"],
              correctAnswer: "It",
            },
            {
              question: "___ speak English well.",
              options: ["You", "Your", "Yours"],
              correctAnswer: "You",
            },
          ],
        },
      },
      {
        day: 4,
        title: "Adjectives",
        grammar:
          "Adjectives describe nouns. They tell us how something is (big, small, red, fast, good).",
        vocabulary: [
          {
            word: "Big",
            meaning: "Large in size",
            example: "It is a big house.",
          },
          {
            word: "Small",
            meaning: "Not large",
            example: "I have a small cat.",
          },
          {
            word: "Good",
            meaning: "High quality",
            example: "That is a good idea.",
          },
          {
            word: "Bad",
            meaning: "Low quality",
            example: "The weather is bad today.",
          },
          {
            word: "New",
            meaning: "Recently made",
            example: "I bought a new phone.",
          },
        ],
        speakingPractice:
          'Describe your favorite food, movie, or person using at least 3 adjectives. (e.g., "My favorite food is pizza. It is hot, delicious, and cheesy.")',
        dailyConversation: { a: "How was the movie?", b: "It was very good." },
        miniExercise: {
          type: "quiz",
          instruction: "Choose the correct adjective:",
          questions: [
            {
              question: "The ___ car is fast.",
              options: ["new", "work"],
              correctAnswer: "new",
            },
            {
              question: "He is a ___ student.",
              options: ["good", "read"],
              correctAnswer: "good",
            },
            {
              question: "It is a ___ day.",
              options: ["bad", "eat"],
              correctAnswer: "bad",
            },
            {
              question: "I have a ___ phone.",
              options: ["new", "run"],
              correctAnswer: "new",
            },
            {
              question: "The ___ dog is small.",
              options: ["big", "small"],
              correctAnswer: "small",
            },
            {
              question: "She has ___ shoes.",
              options: ["big", "speak"],
              correctAnswer: "big",
            },
            {
              question: "This is a ___ idea.",
              options: ["good", "walk"],
              correctAnswer: "good",
            },
            {
              question: "The weather is ___ today.",
              options: ["bad", "read"],
              correctAnswer: "bad",
            },
            {
              question: "I live in a ___ house.",
              options: ["big", "play"],
              correctAnswer: "big",
            },
            {
              question: "He bought a ___ bike.",
              options: ["new", "drink"],
              correctAnswer: "new",
            },
          ],
        },
      },
      {
        day: 5,
        title: "The Article 'The'",
        grammar:
          'Use "The" when you are talking about a specific thing that both the speaker and listener know. (e.g., "I see a car." (any car). "I see the car." (a specific car we know)).',
        vocabulary: [
          {
            word: "Sun",
            meaning: "The star our planet orbits",
            example: "The sun is bright.",
          },
          {
            word: "Moon",
            meaning: "The natural satellite of Earth",
            example: "I can see the moon.",
          },
          {
            word: "Sky",
            meaning: "The atmosphere above",
            example: "The sky is blue.",
          },
          {
            word: "President",
            meaning: "The leader of a country",
            example: "The president gave a speech.",
          },
          {
            word: "Door",
            meaning: "An entrance",
            example: "Please close the door.",
          },
        ],
        speakingPractice:
          'Compare "a" and "the". Say: "I have a pen. The pen is blue." "I see a man. The man is tall." "I need the book on your table."',
        dailyConversation: { a: "Where is my phone?", b: "It's on the table." },
        miniExercise: {
          type: "quiz",
          instruction: "Fill in the blank (a/an/the):",
          questions: [
            {
              question: "I bought ___ new shirt.",
              options: ["a", "an", "the"],
              correctAnswer: "a",
            },
            {
              question: "Can you pass me ___ salt?",
              options: ["a", "an", "the"],
              correctAnswer: "the",
            },
            {
              question: "___ sun rises in the east.",
              options: ["A", "An", "The"],
              correctAnswer: "The",
            },
            {
              question: "She is ___ engineer.",
              options: ["a", "an", "the"],
              correctAnswer: "an",
            },
            {
              question: "Where is ___ door?",
              options: ["a", "an", "the"],
              correctAnswer: "the",
            },
            {
              question: "He has ___ dog.",
              options: ["a", "an", "the"],
              correctAnswer: "a",
            },
            {
              question: "I saw ___ movie yesterday.",
              options: ["a", "an", "the"],
              correctAnswer: "a",
            },
            {
              question: "___ moon looks beautiful tonight.",
              options: ["A", "An", "The"],
              correctAnswer: "The",
            },
            {
              question: "Open ___ window, please.",
              options: ["a", "an", "the"],
              correctAnswer: "the",
            },
            {
              question: "She ate ___ apple.",
              options: ["a", "an", "the"],
              correctAnswer: "an",
            },
          ],
        },
      },
      {
        day: 6,
        title: "Possessive Adjectives",
        grammar:
          "These show who owns something: my, your, his, her, its, our, their.",
        vocabulary: [
          {
            word: "My",
            meaning: "Belonging to me",
            example: "This is my book.",
          },
          {
            word: "Your",
            meaning: "Belonging to you",
            example: "Is this your bag?",
          },
          {
            word: "His",
            meaning: "Belonging to a male",
            example: "His name is Raj.",
          },
          {
            word: "Her",
            meaning: "Belonging to a female",
            example: "Her job is interesting.",
          },
          {
            word: "Our",
            meaning: "Belonging to us",
            example: "We love our family.",
          },
        ],
        speakingPractice:
          'Introduce your family or friends using possessive adjectives. (e.g., "My mother\'s name is... Her job is... My friend is... His hobby is...")',
        dailyConversation: {
          a: "What is your name?",
          b: "My name is Kanagaraj.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Choose the correct word:",
          questions: [
            {
              question: "___ name is...",
              options: ["I", "My"],
              correctAnswer: "My",
            },
            {
              question: "___ car is new.",
              options: ["She", "Her"],
              correctAnswer: "Her",
            },
            {
              question: "___ live in that house.",
              options: ["They", "Their"],
              correctAnswer: "They",
            },
            {
              question: "This is ___ friend.",
              options: ["my", "me"],
              correctAnswer: "my",
            },
            {
              question: "He lost ___ keys.",
              options: ["his", "him"],
              correctAnswer: "his",
            },
            {
              question: "We love ___ country.",
              options: ["our", "us"],
              correctAnswer: "our",
            },
            {
              question: "Is this ___ phone?",
              options: ["your", "you"],
              correctAnswer: "your",
            },
            {
              question: "The dog ate ___ food.",
              options: ["its", "it"],
              correctAnswer: "its",
            },
            {
              question: "They are with ___ parents.",
              options: ["their", "them"],
              correctAnswer: "their",
            },
            {
              question: "She forgot ___ bag at home.",
              options: ["her", "she"],
              correctAnswer: "her",
            },
          ],
        },
      },
      {
        day: 7,
        title: "Weekly Review",
        grammar:
          "Review all grammar points from Week 1. Focus on 'am/is/are', articles 'a/an/the', and possessive adjectives.",
        vocabulary: [],
        speakingPractice:
          "Talk about yourself for 1 minute. Introduce yourself, your job/studies, and what you like. Use vocabulary and grammar from this week.",
        dailyConversation: {
          a: "How was your first week of study?",
          b: "It was good. I learned a lot.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Choose the correct answer:",
          questions: [
            {
              question: "I ___ a student.",
              options: ["am", "is", "are"],
              correctAnswer: "am",
            },
            {
              question: "She ___ happy.",
              options: ["am", "is", "are"],
              correctAnswer: "is",
            },
            {
              question: "Open ___ door.",
              options: ["a", "an", "the"],
              correctAnswer: "the",
            },
            {
              question: "He is ___ friend.",
              options: ["my", "me"],
              correctAnswer: "my",
            },
            {
              question: "They are in ___ park.",
              options: ["a", "an", "the"],
              correctAnswer: "the",
            },
            {
              question: "This is ___ apple.",
              options: ["a", "an", "the"],
              correctAnswer: "an",
            },
            {
              question: "We love ___ school.",
              options: ["our", "us"],
              correctAnswer: "our",
            },
            {
              question: "It is a ___ car.",
              options: ["big", "run"],
              correctAnswer: "big",
            },
            {
              question: "The sky ___ blue.",
              options: ["am", "is", "are"],
              correctAnswer: "is",
            },
            {
              question: "___ name is Kanagaraj.",
              options: ["My", "Me"],
              correctAnswer: "My",
            },
          ],
        },
      },
    ],
  },
  // ... Additional weeks would be structured similarly
  {
    week: 2,
    title: "Building Sentences",
    quote:
      "A different language is a different vision of life. - Federico Fellini",
    days: [
      {
        day: 8,
        title: "Simple Past (Regular Verbs)",
        grammar:
          "Use Simple Past for actions that finished in the past. For regular verbs, add '-ed'. (e.g., walk -> walked, talk -> talked).",
        vocabulary: [
          {
            word: "Walked",
            meaning: "Past of 'walk'",
            example: "I walked to the store.",
          },
          {
            word: "Talked",
            meaning: "Past of 'talk'",
            example: "We talked for an hour.",
          },
          {
            word: "Watched",
            meaning: "Past of 'watch'",
            example: "She watched a movie.",
          },
          {
            word: "Played",
            meaning: "Past of 'play'",
            example: "They played football.",
          },
          {
            word: "Yesterday",
            meaning: "The day before today",
            example: "I worked yesterday.",
          },
        ],
        speakingPractice:
          'Talk about what you did yesterday using 5 past tense verbs. (e.g., "Yesterday, I worked. I cooked dinner. I watched TV. I listened to music.")',
        dailyConversation: {
          a: "What did you do last night?",
          b: "I watched a movie.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Change to past tense:",
          questions: [
            {
              question: "I ___ cricket yesterday.",
              options: ["play", "played", "playing"],
              correctAnswer: "played",
            },
            {
              question: "He ___ his room last night.",
              options: ["clean", "cleans", "cleaned"],
              correctAnswer: "cleaned",
            },
            {
              question: "We ___ to the teacher this morning.",
              options: ["talk", "talked", "talking"],
              correctAnswer: "talked",
            },
            {
              question: "She ___ TV last night.",
              options: ["watch", "watched", "watching"],
              correctAnswer: "watched",
            },
            {
              question: "They ___ music at home.",
              options: ["listen", "listened", "listening"],
              correctAnswer: "listened",
            },
            {
              question: "I ___ a letter to my friend.",
              options: ["write", "wrote", "writed"],
              correctAnswer: "wrote",
            }, // irregular, but okay for learning
            {
              question: "We ___ football yesterday.",
              options: ["played", "plays", "play"],
              correctAnswer: "played",
            },
            {
              question: "He ___ his homework.",
              options: ["finished", "finish", "finishing"],
              correctAnswer: "finished",
            },
            {
              question: "My sister ___ a cake.",
              options: ["baked", "bake", "baking"],
              correctAnswer: "baked",
            },
            {
              question: "They ___ in the park.",
              options: ["walk", "walked", "walking"],
              correctAnswer: "walked",
            },
          ],
        },
      },
      {
        day: 9,
        title: "Simple Past (Irregular Verbs)",
        grammar:
          "Irregular verbs change in the past tense. You must memorize them. (e.g., go -> went, see -> saw, eat -> ate).",
        vocabulary: [
          {
            word: "Went",
            meaning: "Past of 'go'",
            example: "I went to the market.",
          },
          { word: "Saw", meaning: "Past of 'see'", example: "She saw a bird." },
          { word: "Ate", meaning: "Past of 'eat'", example: "We ate lunch." },
          {
            word: "Had",
            meaning: "Past of 'have'",
            example: "He had a good idea.",
          },
          {
            word: "Said",
            meaning: "Past of 'say'",
            example: "The manager said hello.",
          },
        ],
        speakingPractice:
          'Describe your last weekend. Use at least 3 irregular verbs. (e.g., "On Saturday, I went to a park. I saw my friends. We ate biryani.")',
        dailyConversation: {
          a: "Did you eat breakfast?",
          b: "Yes, I ate idli.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Fill in the blank (past tense):",
          questions: [
            {
              question: "I ___ home early.",
              options: ["go", "gone", "went"],
              correctAnswer: "went",
            },
            {
              question: "They ___ me at the park.",
              options: ["see", "saw", "seen"],
              correctAnswer: "saw",
            },
            {
              question: "She ___ a pen, but she lost it.",
              options: ["have", "has", "had"],
              correctAnswer: "had",
            },
            {
              question: "We ___ lunch at 2 PM.",
              options: ["eat", "ate", "eaten"],
              correctAnswer: "ate",
            },
            {
              question: "He ___ hello to everyone.",
              options: ["say", "said", "says"],
              correctAnswer: "said",
            },
            {
              question: "My friend ___ a new bike.",
              options: ["buy", "bought", "buyed"],
              correctAnswer: "bought",
            },
            {
              question: "The cat ___ the milk.",
              options: ["drink", "drank", "drunk"],
              correctAnswer: "drank",
            },
            {
              question: "I ___ a movie yesterday.",
              options: ["see", "saw", "seen"],
              correctAnswer: "saw",
            },
            {
              question: "She ___ to school by bus.",
              options: ["go", "went", "gone"],
              correctAnswer: "went",
            },
            {
              question: "They ___ many photos.",
              options: ["take", "took", "taken"],
              correctAnswer: "took",
            },
          ],
        },
      },
      {
        day: 10,
        title: "Simple Future ('will')",
        grammar:
          "Use 'will' + verb for actions or predictions about the future. (e.g., I will call you. It will rain.)",
        vocabulary: [
          {
            word: "Tomorrow",
            meaning: "The day after today",
            example: "I will see you tomorrow.",
          },
          {
            word: "Next",
            meaning: "The following one",
            example: "We will meet next week.",
          },
          {
            word: "Call",
            meaning: "To telephone",
            example: "I will call you later.",
          },
          {
            word: "Finish",
            meaning: "To complete",
            example: "He will finish the project.",
          },
          {
            word: "Learn",
            meaning: "To gain knowledge",
            example: "You will learn English.",
          },
        ],
        speakingPractice:
          "Talk about your plans for tomorrow. Use 'I will...' 5 times. (e.g., \"Tomorrow, I will wake up early. I will study English. I will meet my friend...\")",
        dailyConversation: {
          a: "When will you be free?",
          b: "I will be free at 6 PM.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Make future sentences:",
          questions: [
            {
              question: "I ___ tomorrow.",
              options: ["will go", "go", "am going"],
              correctAnswer: "will go",
            },
            {
              question: "She ___ you later.",
              options: ["call", "calls", "will call"],
              correctAnswer: "will call",
            },
            {
              question: "It ___ soon.",
              options: ["rains", "will rain", "raining"],
              correctAnswer: "will rain",
            },
            {
              question: "We ___ a test next week.",
              options: ["will have", "have", "having"],
              correctAnswer: "will have",
            },
            {
              question: "They ___ for the exam.",
              options: ["will study", "study", "studying"],
              correctAnswer: "will study",
            },
            {
              question: "He ___ the work today.",
              options: ["will finish", "finishes", "finish"],
              correctAnswer: "will finish",
            },
            {
              question: "You ___ great things.",
              options: ["will do", "doing", "does"],
              correctAnswer: "will do",
            },
            {
              question: "She ___ a new phone.",
              options: ["will buy", "buys", "buy"],
              correctAnswer: "will buy",
            },
            {
              question: "I think it ___ hot tomorrow.",
              options: ["will be", "is", "be"],
              correctAnswer: "will be",
            },
            {
              question: "We ___ to Chennai next month.",
              options: ["will travel", "travel", "travelling"],
              correctAnswer: "will travel",
            },
          ],
        },
      },

      {
        day: 11,
        title: "WH- Questions (Who, What, Where)",
        grammar:
          "Use these words to ask for information.\nWho = for a person.\nWhat = for a thing or action.\nWhere = for a place.",
        vocabulary: [
          { word: "Who", meaning: "Which person", example: "Who is that?" },
          {
            word: "What",
            meaning: "Which thing",
            example: "What is your name?",
          },
          {
            word: "Where",
            meaning: "Which place",
            example: "Where do you live?",
          },
          {
            word: "Friend",
            meaning: "A person you like",
            example: "Who is your best friend?",
          },
          { word: "Job", meaning: "Your work", example: "What is your job?" },
        ],
        speakingPractice:
          'Ask 5 WH- questions to an imaginary person. (e.g., "What is your name? Where are you from? Who is your teacher? What do you study?")',
        dailyConversation: {
          a: "Where is the bus stop?",
          b: "It is over there.",
        },
        miniExercise: {
          type: "quiz",
          instruction: "Choose (Who/What/Where):",
          questions: [
            {
              question: "___ is your favorite color?",
              options: ["Who", "What", "Where"],
              correctAnswer: "What",
            },
            {
              question: "___ is your boss?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Who",
            },
            {
              question: "___ is the meeting?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Where",
            },
            {
              question: "___ is your best friend?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Who",
            },
            {
              question: "___ is that noise?",
              options: ["Who", "What", "Where"],
              correctAnswer: "What",
            },
            {
              question: "___ do you live?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Where",
            },
            {
              question: "___ is calling you?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Who",
            },
            {
              question: "___ is your phone?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Where",
            },
            {
              question: "___ is your favorite food?",
              options: ["Who", "What", "Where"],
              correctAnswer: "What",
            },
            {
              question: "___ are you talking to?",
              options: ["Who", "What", "Where"],
              correctAnswer: "Who",
            },
          ],
        },
      },

      {
  day: 12,
  title: "WH- Questions (When, Why, How)",
  grammar:
    "When = for a time.\nWhy = for a reason.\nHow = for a method or condition.",
  vocabulary: [
    { word: "When", meaning: "At what time", example: "When is the party?" },
    { word: "Why", meaning: "For what reason", example: "Why are you late?" },
    { word: "How", meaning: "In what way", example: "How are you?" },
    { word: "Because", meaning: "For the reason that", example: "I am late because of traffic." },
    { word: "Fine", meaning: "Good / Well", example: "I am fine, thank you." }
  ],
  speakingPractice:
    'Practice asking and answering. Ask "Why are you learning English?" and answer "Because I want...". Ask "How do you study?" and answer "I study by...".',
  dailyConversation: {
    a: "Why are you tired?",
    b: "Because I worked late."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (When/Why/How):",
    questions: [
      { question: "___ is the exam?", options: ["When", "Why", "How"], correctAnswer: "When" },
      { question: "___ do you cook rice?", options: ["When", "Why", "How"], correctAnswer: "How" },
      { question: "___ did you leave early?", options: ["When", "Why", "How"], correctAnswer: "Why" },
      { question: "___ is your birthday?", options: ["When", "Why", "How"], correctAnswer: "When" },
      { question: "___ are you crying?", options: ["When", "Why", "How"], correctAnswer: "Why" },
      { question: "___ do you go to school?", options: ["When", "Why", "How"], correctAnswer: "How" },
      { question: "___ does the movie start?", options: ["When", "Why", "How"], correctAnswer: "When" },
      { question: "___ are you happy?", options: ["When", "Why", "How"], correctAnswer: "Why" },
      { question: "___ are you feeling now?", options: ["When", "Why", "How"], correctAnswer: "How" },
      { question: "___ did you arrive?", options: ["When", "Why", "How"], correctAnswer: "When" }
    ]
  }
},

{
  day: 13,
  title: "Do / Does / Did",
  grammar:
    "Use 'do' / 'does' for questions and negatives in the Simple Present. Use 'did' for questions and negatives in the Simple Past.\nQuestions: Do you work? Does he work? Did you work?\nNegatives: I do not (don't) work. He does not (doesn't) work. I did not (didn't) work.",
  vocabulary: [
    { word: "Don't", meaning: "Do not", example: "I don't know." },
    { word: "Doesn't", meaning: "Does not", example: "He doesn't like coffee." },
    { word: "Didn't", meaning: "Did not", example: "They didn't come." },
    { word: "Know", meaning: "To have information", example: "Do you know the answer?" },
    { word: "Understand", meaning: "To comprehend", example: "I don't understand." }
  ],
  speakingPractice:
    "Make 3 negative sentences (I don't..., He doesn't...) and 3 questions (Do you...?, Does he...?, Did you...?).",
  dailyConversation: {
    a: "Did you finish the work?",
    b: "No, I didn't."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in the blank (do/does/did):",
    questions: [
      { question: "___ she live here?", options: ["Do", "Does", "Did"], correctAnswer: "Does" },
      { question: "I ___ not see him yesterday.", options: ["do", "does", "did"], correctAnswer: "did" },
      { question: "___ you like ice cream?", options: ["Do", "Does", "Did"], correctAnswer: "Do" },
      { question: "He ___ not work on Sundays.", options: ["do", "does", "did"], correctAnswer: "does" },
      { question: "___ they play football?", options: ["Do", "Does", "Did"], correctAnswer: "Do" },
      { question: "She ___ not come yesterday.", options: ["do", "does", "did"], correctAnswer: "did" },
      { question: "___ you finish your homework?", options: ["Do", "Does", "Did"], correctAnswer: "Did" },
      { question: "I ___ not like tea.", options: ["do", "does", "did"], correctAnswer: "do" },
      { question: "___ he speak English?", options: ["Do", "Does", "Did"], correctAnswer: "Does" },
      { question: "They ___ not know the answer.", options: ["do", "does", "did"], correctAnswer: "do" }
    ]
  }
},

{
  day: 14,
  title: "Weekly Review",
  grammar:
    "Review Simple Past (regular & irregular), Simple Future (will), and WH-questions (Who/What/Where/When/Why/How).",
  vocabulary: [],
  speakingPractice:
    "1) Vocabulary review: revise all 25 Week-2 words.\n2) Writing (10 min): Write 5–7 sentences about last weekend using simple past (regular + irregular).\n3) Speaking test (5 min): Answer — What did you do yesterday? What will you do tomorrow? Why are you learning English?\n4) Listening (10 min): Watch a short travel vlog (e.g., Mark Wiens). Note 3 phrases describing places/food.",
  dailyConversation: {
    a: "How was your study this week?",
    b: "It was great. I learned a lot."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct answer:",
    questions: [
      { question: "I ___ to the market yesterday.", options: ["go", "went", "gone"], correctAnswer: "went" },
      { question: "They ___ football last Sunday.", options: ["play", "played", "playing"], correctAnswer: "played" },
      { question: "She ___ breakfast at 8 AM.", options: ["eat", "ate", "eaten"], correctAnswer: "ate" },
      { question: "We ___ meet next week.", options: ["will", "did", "do"], correctAnswer: "will" },
      { question: "___ is your hometown?", options: ["When", "Where", "Why"], correctAnswer: "Where" },
      { question: "___ did you come late?", options: ["When", "Why", "How"], correctAnswer: "Why" },
      { question: "I ___ not see him yesterday.", options: ["do", "does", "did"], correctAnswer: "did" },
      { question: "She ___ a new phone.", options: ["buy", "bought", "buyed"], correctAnswer: "bought" },
      { question: "___ you like ice cream?", options: ["Do", "Does", "Did"], correctAnswer: "Do" },
      { question: "It ___ rain tomorrow.", options: ["will", "did", "does"], correctAnswer: "will" }
    ]
  }
}



    ],
  },
  // This is a truncated version for brevity. A full implementation would include all 60 days.
  {
  week: 3,
  title: "Continuous Actions",
  quote: "To have another language is to possess a second soul. - Charlemagne",
  days: [
    {
      day: 15,
      title: "Present Continuous",
      grammar:
        "Use 'am/is/are' + verb-ing for an action happening right now. (e.g., I am talking. She is reading.)",
      vocabulary: [
        { word: "Reading", meaning: "(verb)", example: "He is reading a book." },
        { word: "Writing", meaning: "(verb)", example: "I am writing an email." },
        { word: "Talking", meaning: "(verb)", example: "They are talking loudly." },
        { word: "Working", meaning: "(verb)", example: "She is working now." },
        { word: "Now", meaning: "At this moment", example: "I am busy now." }
      ],
      speakingPractice:
        'Describe what you are doing right now. "I am sitting at my desk. I am learning English. I am thinking."',
      dailyConversation: {
        a: "What are you doing?",
        b: "I am cooking dinner."
      },
      miniExercise: {
        type: "quiz",
        instruction: "Change to present continuous:",
        questions: [
          { question: "I ___ a book right now.", options: ["read", "am reading", "reads"], correctAnswer: "am reading" },
          { question: "They ___ outside at the moment.", options: ["play", "are playing", "plays"], correctAnswer: "are playing" },
          { question: "He ___ on a new project.", options: ["work", "is working", "works"], correctAnswer: "is working" },
          { question: "You ___ too fast.", options: ["speak", "are speaking", "speaks"], correctAnswer: "are speaking" },
          { question: "We ___ for the test.", options: ["study", "are studying", "studies"], correctAnswer: "are studying" },
          { question: "She ___ TV.", options: ["watch", "is watching", "watches"], correctAnswer: "is watching" },
          { question: "I ___ dinner now.", options: ["am cooking", "cook", "cooks"], correctAnswer: "am cooking" },
          { question: "They ___ the house.", options: ["clean", "are cleaning", "cleans"], correctAnswer: "are cleaning" },
          { question: "He ___ to music.", options: ["is listening", "listen", "listens"], correctAnswer: "is listening" },
          { question: "The kids ___ in the garden.", options: ["are playing", "play", "plays"], correctAnswer: "are playing" }
        ]
      }
    },

    {
  day: 16,
  title: "Past Continuous",
  grammar:
    "Use 'was/were' + verb-ing for an action that was in progress at a specific time in the past. (e.g., 'Yesterday at 7 PM, I was eating dinner.')",
  vocabulary: [
    { word: "Sleeping", meaning: "(verb)", example: "I was sleeping when you called." },
    { word: "Driving", meaning: "(verb)", example: "He was driving all night." },
    { word: "Raining", meaning: "(verb)", example: "It was raining this morning." },
    { word: "Studying", meaning: "(verb)", example: "They were studying for the exam." },
    { word: "When", meaning: "At the time that", example: "I was out when you called." }
  ],
  speakingPractice:
    "Say what you were doing at 8 PM last night. Example: 'Last night at 8 PM, I was watching TV. My mother was cooking.'",
  dailyConversation: {
    a: "What were you doing when I called?",
    b: "I was taking a shower."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in the blank (was/were + verb-ing):",
    questions: [
      { question: "I ___ studying when he arrived.", options: ["was", "were", "am"], correctAnswer: "was" },
      { question: "They ___ playing football.", options: ["was", "were", "are"], correctAnswer: "were" },
      { question: "She ___ sleeping at 10 PM.", options: ["was", "were", "is"], correctAnswer: "was" },
      { question: "We ___ watching a movie.", options: ["was", "were", "are"], correctAnswer: "were" },
      { question: "It ___ raining in the morning.", options: ["was", "were", "is"], correctAnswer: "was" },
      { question: "He ___ driving when the phone rang.", options: ["was", "were", "is"], correctAnswer: "was" },
      { question: "I ___ cooking dinner.", options: ["was", "were", "am"], correctAnswer: "was" },
      { question: "The kids ___ playing outside.", options: ["was", "were", "is"], correctAnswer: "were" },
      { question: "She ___ talking to her friend.", options: ["was", "were", "are"], correctAnswer: "was" },
      { question: "They ___ studying for the test.", options: ["was", "were", "is"], correctAnswer: "were" }
    ]
  }
},

{
  day: 17,
  title: "Future Continuous",
  grammar:
    "Use 'will be' + verb-ing for an action that will be in progress at a specific time in the future. (e.g., 'Tomorrow at 10 AM, I will be working.')",
  vocabulary: [
    { word: "Flying", meaning: "(verb)", example: "This time tomorrow, I will be flying to Delhi." },
    { word: "Meeting", meaning: "(verb)", example: "He will be meeting the client." },
    { word: "Waiting", meaning: "(verb)", example: "We will be waiting for you." },
    { word: "At", meaning: "Preposition for time", example: "I will be there at 5 PM." },
    { word: "This time", meaning: "At this specific moment", example: "This time next week, I'll be on holiday." }
  ],
  speakingPractice:
    "Say what you will be doing tomorrow at 11 AM. Example: 'Tomorrow at 11 AM, I will be attending a class.' or 'I will be working.'",
  dailyConversation: {
    a: "Can I call you at 4 PM?",
    b: "No, I will be driving then."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Make future continuous:",
    questions: [
      { question: "I ___ at 3 PM.", options: ["will work", "will be working", "am working"], correctAnswer: "will be working" },
      { question: "They ___ this time next month.", options: ["will travel", "will be traveling", "travel"], correctAnswer: "will be traveling" },
      { question: "She ___ dinner at 8 PM.", options: ["will cook", "will be cooking", "cooks"], correctAnswer: "will be cooking" },
      { question: "We ___ for you.", options: ["will be waiting", "wait", "waiting"], correctAnswer: "will be waiting" },
      { question: "He ___ the report tomorrow morning.", options: ["will be finishing", "finished", "is finishing"], correctAnswer: "will be finishing" },
      { question: "I ___ to music at that time.", options: ["will be listening", "listen", "listened"], correctAnswer: "will be listening" },
      { question: "The kids ___ in the park.", options: ["will be playing", "play", "played"], correctAnswer: "will be playing" },
      { question: "She ___ for her flight.", options: ["will be waiting", "waits", "waiting"], correctAnswer: "will be waiting" },
      { question: "We ___ a meeting at 2 PM.", options: ["will be having", "have", "had"], correctAnswer: "will be having" },
      { question: "He ___ the car when you arrive.", options: ["will be driving", "drives", "drive"], correctAnswer: "will be driving" }
    ]
  }
}
,
{
  day: 18,
  title: "Adverbs of Manner",
  grammar:
    "Adverbs describe verbs. Many end in '-ly'. They answer how an action is done. (e.g., He speaks slowly.)",
  vocabulary: [
    { word: "Quickly", meaning: "At a fast speed", example: "He ran quickly." },
    { word: "Slowly", meaning: "At a slow speed", example: "Please speak slowly." },
    { word: "Loudly", meaning: "With a lot of noise", example: "The music is playing loudly." },
    { word: "Quietly", meaning: "With little noise", example: "She spoke quietly." },
    { word: "Carefully", meaning: "With care", example: "Drive carefully." }
  ],
  speakingPractice:
    '"I speak English slowly." "I type quickly." "I listen carefully." Describe how you do different actions.',
  dailyConversation: {
    a: "Can you speak more slowly?",
    b: "Of course. Is this better?"
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose adjective or adverb:",
    questions: [
      { question: "He is a ___ driver.", options: ["slow", "slowly"], correctAnswer: "slow" },
      { question: "He drives ___ .", options: ["slow", "slowly"], correctAnswer: "slowly" },
      { question: "She sings ___ .", options: ["beautiful", "beautifully"], correctAnswer: "beautifully" },
      { question: "They are ___ students.", options: ["quick", "quickly"], correctAnswer: "quick" },
      { question: "They work ___ at night.", options: ["quiet", "quietly"], correctAnswer: "quietly" },
      { question: "The dog ran ___ .", options: ["fast", "fastly"], correctAnswer: "fast" }, // correct irregular adverb
      { question: "The teacher spoke ___ .", options: ["loud", "loudly"], correctAnswer: "loudly" },
      { question: "He is a ___ singer.", options: ["good", "well"], correctAnswer: "good" },
      { question: "She dances very ___ .", options: ["good", "well"], correctAnswer: "well" },
      { question: "Please drive ___ .", options: ["careful", "carefully"], correctAnswer: "carefully" }
    ]
  }
},

{
  day: 19,
  title: "Prepositions of Time (in, on, at)",
  grammar:
    "in = non-specific times (in the morning, in July, in 2025)\non = days and dates (on Monday, on October 31st)\nat = specific times (at 5 PM, at night, at sunrise)",
  vocabulary: [
    { word: "In", meaning: "(time)", example: "My birthday is in June." },
    { word: "On", meaning: "(time)", example: "The meeting is on Friday." },
    { word: "At", meaning: "(time)", example: "I wake up at 6 AM." },
    { word: "Morning", meaning: "time of day", example: "I work in the morning." },
    { word: "Night", meaning: "time of day", example: "I sleep at night." }
  ],
  speakingPractice:
    "Make 5 sentences about your schedule. Example: 'I wake up at 7 AM. I have a meeting on Monday. My exam is in December.'",
  dailyConversation: {
    a: "When is the party?",
    b: "It's on Saturday at 8 PM."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in (in/on/at):",
    questions: [
      { question: "___ Sunday.", options: ["In", "On", "At"], correctAnswer: "On" },
      { question: "___ 10:30 AM.", options: ["In", "On", "At"], correctAnswer: "At" },
      { question: "___ the afternoon.", options: ["In", "On", "At"], correctAnswer: "In" },
      { question: "We will travel ___ July.", options: ["In", "On", "At"], correctAnswer: "In" },
      { question: "School starts ___ Monday.", options: ["In", "On", "At"], correctAnswer: "On" },
      { question: "The movie is ___ 7 PM.", options: ["In", "On", "At"], correctAnswer: "At" },
      { question: "My birthday is ___ March.", options: ["In", "On", "At"], correctAnswer: "In" },
      { question: "The class is ___ the evening.", options: ["In", "On", "At"], correctAnswer: "In" },
      { question: "We eat dinner ___ night.", options: ["In", "On", "At"], correctAnswer: "At" },
      { question: "The event is ___ January 1st.", options: ["In", "On", "At"], correctAnswer: "On" }
    ]
  }
},

{
  day: 20,
  title: "Prepositions of Place (in, on, at)",
  grammar:
    "in = enclosed spaces or large areas (in the box, in London)\non = surfaces (on the table, on the wall)\nat = specific points or locations (at the bus stop, at home)",
  vocabulary: [
    { word: "In", meaning: "(place)", example: "The keys are in the bag." },
    { word: "On", meaning: "(place)", example: "The book is on the desk." },
    { word: "At", meaning: "(place)", example: "I am at the office." },
    { word: "Home", meaning: "(place)", example: "He is at home." },
    { word: "Wall", meaning: "(place)", example: "The painting is on the wall." }
  ],
  speakingPractice:
    "Describe where things are in your room. Example: 'My laptop is on the table. My clothes are in the cupboard. I am at my desk.'",
  dailyConversation: {
    a: "Where are you?",
    b: "I'm at the cafe."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in (in/on/at):",
    questions: [
      { question: "He lives ___ Chennai.", options: ["in", "on", "at"], correctAnswer: "in" },
      { question: "The cup is ___ the table.", options: ["in", "on", "at"], correctAnswer: "on" },
      { question: "I'll meet you ___ the station.", options: ["in", "on", "at"], correctAnswer: "at" },
      { question: "My clothes are ___ the cupboard.", options: ["in", "on", "at"], correctAnswer: "in" },
      { question: "The poster is ___ the wall.", options: ["in", "on", "at"], correctAnswer: "on" },
      { question: "She is ___ school right now.", options: ["in", "on", "at"], correctAnswer: "at" },
      { question: "We are ___ the park.", options: ["in", "on", "at"], correctAnswer: "in" },
      { question: "The cat is ___ the chair.", options: ["in", "on", "at"], correctAnswer: "on" },
      { question: "They are ___ home.", options: ["in", "on", "at"], correctAnswer: "at" },
      { question: "The food is ___ the fridge.", options: ["in", "on", "at"], correctAnswer: "in" }
    ]
  }
},

{
  day: 21,
  title: "Weekly Review",
  grammar:
    "Review Present Continuous, Past Continuous, Future Continuous, and Prepositions of time & place (in/on/at).",
  vocabulary: [],
  speakingPractice:
    "1) Vocabulary review: revise all 25 Week-3 words.\n2) Writing task (10 min): Write a paragraph describing what is happening in your house or office right now. Use Present Continuous.\n3) Speaking test (5 min): Describe what you were doing yesterday at 5 PM, and what you will be doing tomorrow at 5 PM.\n4) Listening (10 min): Listen to an English song (Beatles / Adele). Read lyrics while listening.",
  dailyConversation: {
    a: "How is your English practice going?",
    b: "It's getting better every week!"
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct answer:",
    questions: [
      { question: "I ___ watching TV right now.", options: ["am", "was", "will"], correctAnswer: "am" },
      { question: "They ___ studying when I called.", options: ["were", "are", "will be"], correctAnswer: "were" },
      { question: "Tomorrow at 6 PM, I ___ driving home.", options: ["am", "will be", "was"], correctAnswer: "will be" },
      { question: "She ___ cooking dinner at the moment.", options: ["is", "was", "will"], correctAnswer: "is" },
      { question: "It ___ raining last night.", options: ["is", "was", "will be"], correctAnswer: "was" },
      { question: "We will meet ___ Monday.", options: ["in", "on", "at"], correctAnswer: "on" },
      { question: "He wakes up ___ 7 AM.", options: ["in", "on", "at"], correctAnswer: "at" },
      { question: "My brother is ___ the kitchen.", options: ["in", "on", "at"], correctAnswer: "in" },
      { question: "The book is ___ the table.", options: ["in", "on", "at"], correctAnswer: "on" },
      { question: "I will be traveling ___ July.", options: ["in", "on", "at"], correctAnswer: "in" }
    ]
  }
}




  ]
},

{
  week: 4,
  title: "Perfect Tenses",
  quote: "Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
  days: [
    {
  day: 22,
  title: "Present Perfect (have/has + past participle)",
  grammar:
    "Use 'have/has' + Past Participle (e.g., eaten, seen, worked) for an action in the past with a result now, or for life experiences.\nExample: 'I have finished my work.' (Result now)\nExample: 'I have seen that movie.' (Experience)",
  vocabulary: [
    { word: "Finished", meaning: "(p.p. of finish)", example: "I have finished the report." },
    { word: "Eaten", meaning: "(p.p. of eat)", example: "Have you eaten lunch?" },
    { word: "Been", meaning: "(p.p. of be)", example: "I have been to Mumbai." },
    { word: "Never", meaning: "At no time", example: "She has never tried sushi." },
    { word: "Already", meaning: "Before now", example: "He has already left." }
  ],
  speakingPractice:
    "Talk about your life experiences using 'I have...' and 'I have never...'. Example: 'I have visited Delhi. I have never seen snow. I have eaten Chinese food.'",
  dailyConversation: {
    a: "Have you finished your homework?",
    b: "Yes, I have just finished it."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in (have/has + past participle):",
    questions: [
      { question: "She ___ read that book.", options: ["have", "has"], correctAnswer: "has" },
      { question: "They ___ gone home.", options: ["have", "has"], correctAnswer: "have" },
      { question: "I ___ not seen him.", options: ["have", "has"], correctAnswer: "have" },
      { question: "He ___ already eaten.", options: ["have", "has"], correctAnswer: "has" },
      { question: "We ___ visited Chennai many times.", options: ["have", "has"], correctAnswer: "have" },
      { question: "She ___ never been to America.", options: ["have", "has"], correctAnswer: "has" },
      { question: "I ___ finished my homework.", options: ["have", "has"], correctAnswer: "have" },
      { question: "They ___ not started the project yet.", options: ["have", "has"], correctAnswer: "have" },
      { question: "He ___ lived here for 10 years.", options: ["have", "has"], correctAnswer: "has" },
      { question: "I ___ seen that movie already.", options: ["have", "has"], correctAnswer: "have" }
    ]
  }
},

{
  day: 23,
  title: "Present Perfect (for vs. since)",
  grammar:
    "Use 'for' with a period of time (for 3 years, for 10 minutes).\nUse 'since' with a specific starting point (since 2020, since 8 AM).",
  vocabulary: [
    { word: "For", meaning: "(duration)", example: "I have lived here for five years." },
    { word: "Since", meaning: "(starting point)", example: "She has worked here since 2021." },
    { word: "Lived", meaning: "(p.p. of live)", example: "We have lived here for a long time." },
    { word: "Known", meaning: "(p.p. of know)", example: "I have known him since childhood." },
    { word: "Waited", meaning: "(p.p. of wait)", example: "They have waited for an hour." }
  ],
  speakingPractice:
    "Talk about how long you have done things.\nExamples:\n'I have been a student for 2 years.'\n'I have lived in this city since 2020.'\n'I have known my best friend for 5 years.'",
  dailyConversation: {
    a: "How long have you worked here?",
    b: "I have worked here for two years."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (for / since):",
    questions: [
      { question: "I have waited ___ 4 PM.", options: ["for", "since"], correctAnswer: "since" },
      { question: "He has been sick ___ three days.", options: ["for", "since"], correctAnswer: "for" },
      { question: "We have lived here ___ 2015.", options: ["for", "since"], correctAnswer: "since" },
      { question: "She has studied English ___ two months.", options: ["for", "since"], correctAnswer: "for" },
      { question: "I have known him ___ childhood.", options: ["for", "since"], correctAnswer: "since" },
      { question: "They have worked here ___ a long time.", options: ["for", "since"], correctAnswer: "for" },
      { question: "He has been my friend ___ 10 years.", options: ["for", "since"], correctAnswer: "for" },
      { question: "It has rained ___ morning.", options: ["for", "since"], correctAnswer: "since" },
      { question: "I have lived in Chennai ___ 8 years.", options: ["for", "since"], correctAnswer: "for" },
      { question: "She has played the piano ___ she was a child.", options: ["for", "since"], correctAnswer: "since" }
    ]
  }
},

{
  day: 24,
  title: "Past Perfect",
  grammar:
    "Use 'had' + Past Participle for an action that happened before another action in the past. Example: 'I had finished my work before my boss arrived.'",
  vocabulary: [
    { word: "Arrived", meaning: "(p.p. of arrive)", example: "When I arrived, the movie had started." },
    { word: "Left", meaning: "(p.p. of leave)", example: "He had left before I called." },
    { word: "Already", meaning: "(adv.)", example: "She had already eaten." },
    { word: "By the time", meaning: "phrase", example: "By the time we got there, the train had gone." },
    { word: "Realized", meaning: "(p.p. of realize)", example: "I realized I had forgotten my keys." }
  ],
  speakingPractice:
    "Think of 2 past events. Say what happened first using Past Perfect.\nExamples:\n'I went to the store, but it was closed. It had closed at 9 PM.'\n'I couldn't eat. I had already eaten.'",
  dailyConversation: {
    a: "Why was he so late?",
    b: "His car had broken down."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Complete the sentence:",
    questions: [
      { question: "By the time I arrived, he ___ left.", options: ["has", "had", "have"], correctAnswer: "had" },
      { question: "She ___ not studied before the exam.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "They ___ already eaten when we reached.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "He ___ finished the homework before class.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "We ___ not met before that day.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "The bus ___ left when we got to the stop.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "I ___ gone to bed when the phone rang.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "She ___ never seen snow before.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "He ___ already packed his bags.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "They ___ finished the project before the deadline.", options: ["had", "has", "have"], correctAnswer: "had" }
    ]
  }
}
,


{
  day: 25,
  title: "Future Perfect",
  grammar:
    "Use 'will have' + Past Participle for an action completed before a specific time in the future. Example: 'By 8 PM, I will have finished my homework.'",
  vocabulary: [
    { word: "By", meaning: "(preposition)", example: "I will have finished by 6 PM." },
    { word: "Completed", meaning: "(p.p. of complete)", example: "She will have completed the course by next year." },
    { word: "Graduated", meaning: "(p.p. of graduate)", example: "He will have graduated by 2026." },
    { word: "Retired", meaning: "(p.p. of retire)", example: "They will have retired in 10 years." },
    { word: "Saved", meaning: "(p.p. of save)", example: "We will have saved enough money by then." }
  ],
  speakingPractice:
    "Talk about your future goals.\nExample: 'By next year, I will have improved my English.'\n'By 2030, I will have started my own company.'",
  dailyConversation: {
    a: "Can I call you at 9 PM?",
    b: "Yes, I will have finished dinner by then."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Make Future Perfect: (will have + p.p.)",
    questions: [
      { question: "I ___ finished by 5 o'clock.", options: ["will have", "have", "will"], correctAnswer: "will have" },
      { question: "She ___ left by the time you arrive.", options: ["will have", "has", "will"], correctAnswer: "will have" },
      { question: "They ___ completed the work before Monday.", options: ["will have", "have", "had"], correctAnswer: "will have" },
      { question: "We ___ saved enough money by next year.", options: ["will have", "have", "had"], correctAnswer: "will have" },
      { question: "He ___ graduated by 2026.", options: ["will have", "has", "had"], correctAnswer: "will have" },
      { question: "I ___ finished the project by tomorrow morning.", options: ["will have", "have", "has"], correctAnswer: "will have" },
      { question: "She ___ read 50 books by the end of this year.", options: ["will have", "has", "will"], correctAnswer: "will have" },
      { question: "They ___ eaten dinner before we arrive.", options: ["will have", "have", "had"], correctAnswer: "will have" },
      { question: "You ___ learned a lot by Day 60.", options: ["will have", "have", "had"], correctAnswer: "will have" },
      { question: "The train ___ left by 8 PM.", options: ["will have", "has", "had"], correctAnswer: "will have" }
    ]
  }
}
,
{
  day: 26,
  title: "Conjunctions (and, but, or)",
  grammar:
    "Use conjunctions to connect sentences.\nand = add information\nbut = show contrast\nor = show a choice",
  vocabulary: [
    { word: "And", meaning: "(conjunction)", example: "I like tea and coffee." },
    { word: "But", meaning: "(conjunction)", example: "He is rich but unhappy." },
    { word: "Or", meaning: "(conjunction)", example: "Do you want tea or coffee?" },
    { word: "Cold", meaning: "(adjective)", example: "The water is cold." },
    { word: "Hot", meaning: "(adjective)", example: "The tea is hot." }
  ],
  speakingPractice:
    "Make 3 sentences using 'and', 'but', and 'or'. Examples: 'I am studying and listening to music.' 'I want to go out, but it is raining.' 'We can watch a movie or play a game.'",
  dailyConversation: {
    a: "Do you want to go out?",
    b: "I want to, but I'm too tired."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (and / but / or):",
    questions: [
      { question: "I studied hard, ___ I failed the test.", options: ["and", "but", "or"], correctAnswer: "but" },
      { question: "We can eat at home ___ go to a restaurant.", options: ["and", "but", "or"], correctAnswer: "or" },
      { question: "He is smart ___ lazy.", options: ["and", "but", "or"], correctAnswer: "but" },
      { question: "She likes pizza ___ pasta.", options: ["and", "but", "or"], correctAnswer: "and" },
      { question: "Do you want tea ___ coffee?", options: ["and", "but", "or"], correctAnswer: "or" },
      { question: "I called you ___ you didn't answer.", options: ["and", "but", "or"], correctAnswer: "but" },
      { question: "He is tall ___ strong.", options: ["and", "but", "or"], correctAnswer: "and" },
      { question: "You can stay here ___ leave.", options: ["and", "but", "or"], correctAnswer: "or" },
      { question: "The room is small ___ comfortable.", options: ["and", "but", "or"], correctAnswer: "but" },
      { question: "She is tired ___ happy.", options: ["and", "but", "or"], correctAnswer: "but" }
    ]
  }
}
,
{
  day: 27,
  title: "Conjunctions (so, because)",
  grammar:
    "because = gives a reason (Why?)\nso = gives a result (What happened?)",
  vocabulary: [
    { word: "Because", meaning: "(conjunction)", example: "I am tired because I worked late." },
    { word: "So", meaning: "(conjunction)", example: "I worked late, so I am tired." },
    { word: "Hungry", meaning: "(adjective)", example: "He is hungry because he didn't eat." },
    { word: "Missed", meaning: "(verb)", example: "I woke up late, so I missed the bus." },
    { word: "Study", meaning: "(verb)", example: "I need to pass the exam, so I must study." }
  ],
  speakingPractice:
    "Make sentences with 'because' and 'so'. Examples: 'I am learning English because I want a better job.' 'I want a better job, so I am learning English.'",
  dailyConversation: {
    a: "Why are you happy?",
    b: "I'm happy because I got good news."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (so / because):",
    questions: [
      { question: "It was raining, ___ we stayed inside.", options: ["so", "because"], correctAnswer: "so" },
      { question: "We stayed inside ___ it was raining.", options: ["so", "because"], correctAnswer: "because" },
      { question: "I was hungry, ___ I made food.", options: ["so", "because"], correctAnswer: "so" },
      { question: "I made food ___ I was hungry.", options: ["so", "because"], correctAnswer: "because" },
      { question: "She is smiling ___ she won the prize.", options: ["so", "because"], correctAnswer: "because" },
      { question: "She won the prize, ___ she is smiling.", options: ["so", "because"], correctAnswer: "so" },
      { question: "He didn't have money, ___ he walked home.", options: ["so", "because"], correctAnswer: "so" },
      { question: "He walked home ___ he didn't have money.", options: ["so", "because"], correctAnswer: "because" },
      { question: "They are tired ___ they worked all day.", options: ["so", "because"], correctAnswer: "because" },
      { question: "They worked all day, ___ they are tired.", options: ["so", "because"], correctAnswer: "so" }
    ]
  }
}
,
{
  day: 28,
  title: "Weekly Review",
  grammar:
    "Review Present Perfect, Present Perfect (for/since), Past Perfect, and Future Perfect.",
  vocabulary: [],
  speakingPractice:
    "1) Vocabulary review: Review all 25 words from Week 4.\n2) Writing Task (10 min): Write a paragraph (5-7 sentences) about something you have achieved in your life using Present Perfect.\n3) Speaking Test (5 min): Answer:\n- How long have you been studying English?\n- What had you done before you started this plan?\n- What will you have achieved by next year?\n4) Listening (10 min): Watch a TED-Ed video on YouTube with subtitles.",
  dailyConversation: {
    a: "How was your week of studying?",
    b: "It was great! I learned a lot."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct answer:",
    questions: [
      { question: "I ___ finished my work.", options: ["have", "had", "will"], correctAnswer: "have" },
      { question: "She ___ never been to London.", options: ["has", "have", "had"], correctAnswer: "has" },
      { question: "They ___ already eaten when we arrived.", options: ["had", "have", "has"], correctAnswer: "had" },
      { question: "By next year, I ___ completed this course.", options: ["will have", "have", "had"], correctAnswer: "will have" },
      { question: "We ___ lived here since 2019.", options: ["have", "has", "had"], correctAnswer: "have" },
      { question: "He ___ studied English for 5 years.", options: ["has", "had", "will have"], correctAnswer: "has" },
      { question: "She ___ finished before the test started.", options: ["had", "has", "have"], correctAnswer: "had" },
      { question: "I ___ seen that movie already.", options: ["have", "has", "had"], correctAnswer: "have" },
      { question: "They ___ known each other since childhood.", options: ["have", "has", "had"], correctAnswer: "have" },
      { question: "By tomorrow, he ___ completed the report.", options: ["will have", "had", "has"], correctAnswer: "will have" }
    ]
  }
}



  ]
},

{
    week: 5,
    title: "Modals (Ability, Permission & Advice)",
    quote: "The limits of my language are the limits of my world. - Ludwig Wittgenstein",
    days: [
       {
  day: 29,
  title: "Modal: Can / Can't (Ability)",
  grammar:
    "Use 'can' + verb to talk about ability. Use 'can't' (cannot) for no ability.\nExample: 'I can swim.' 'I can't drive.'",
  vocabulary: [
    { word: "Can", meaning: "(modal)", example: "I can speak English." },
    { word: "Can't", meaning: "(modal)", example: "I can't swim." },
    { word: "Drive", meaning: "(verb)", example: "Can you drive a car?" },
    { word: "Hear", meaning: "(verb)", example: "I can't hear you." },
    { word: "See", meaning: "(verb)", example: "We can see the mountains." }
  ],
  speakingPractice:
    "Say 3 things you can do and 2 things you can't do.\nExample: 'I can cook. I can use a computer. I can't speak French.'",
  dailyConversation: {
    a: "Can you help me?",
    b: "Sure, what's the problem?"
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in (can / can't):",
    questions: [
      { question: "A bird ___ fly.", options: ["can", "can't"], correctAnswer: "can" },
      { question: "A fish ___ walk.", options: ["can", "can't"], correctAnswer: "can't" },
      { question: "___ you play the guitar?", options: ["Can", "Can't"], correctAnswer: "Can" },
      { question: "I ___ speak English.", options: ["can", "can't"], correctAnswer: "can" },
      { question: "They ___ see in the dark.", options: ["can", "can't"], correctAnswer: "can't" },
      { question: "He ___ drive a car.", options: ["can", "can't"], correctAnswer: "can" },
      { question: "She ___ lift a car.", options: ["can", "can't"], correctAnswer: "can't" },
      { question: "___ you swim?", options: ["Can", "Can't"], correctAnswer: "Can" },
      { question: "We ___ hear you. Speak louder.", options: ["can", "can't"], correctAnswer: "can't" },
      { question: "I ___ cook very well.", options: ["can", "can't"], correctAnswer: "can" }
    ]
  }
}
,

{
  day: 30,
  title: "Modal: Could",
  grammar:
    "Use 'could' + verb for:\n1) Past ability (e.g., 'When I was young, I could run fast.')\n2) Polite requests (e.g., 'Could you please open the window?')",
  vocabulary: [
    { word: "Could", meaning: "(modal)", example: "I could swim when I was 5." },
    { word: "Please", meaning: "(adv.)", example: "Could you please pass the salt?" },
    { word: "Help", meaning: "(verb)", example: "Could you help me with this?" },
    { word: "Younger", meaning: "(adj.)", example: "When I was younger, I could climb trees." },
    { word: "Remember", meaning: "(verb)", example: "I couldn't remember his name." }
  ],
  speakingPractice:
    "Make two polite requests using 'Could you...?' Then say one thing you could do as a child.\nExample: 'Could you speak slower? Could you repeat that? When I was a child, I could play all day.'",
  dailyConversation: {
    a: "Could you lend me 100 rupees?",
    b: "I'm sorry, I couldn't do that."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (can/could):",
    questions: [
      { question: "___ you help me (polite)?", options: ["Can", "Could"], correctAnswer: "Could" },
      { question: "I ___ speak English now.", options: ["can", "could"], correctAnswer: "can" },
      { question: "When I was a baby, I ___ not talk.", options: ["could", "can"], correctAnswer: "could" },
      { question: "___ you please open the window?", options: ["Can", "Could"], correctAnswer: "Could" },
      { question: "He ___ run very fast when he was young.", options: ["could", "can"], correctAnswer: "could" },
      { question: "I ___ hear you. Speak louder.", options: ["can't", "couldn't"], correctAnswer: "can't" },
      { question: "We ___ not find the key yesterday.", options: ["could", "can"], correctAnswer: "could" },
      { question: "___ you pass the salt, please?", options: ["Could", "Can"], correctAnswer: "Could" },
      { question: "She ___ sing well now.", options: ["can", "could"], correctAnswer: "can" },
      { question: "He ___ not remember her name.", options: ["could", "can"], correctAnswer: "could" }
    ]
  }
}
,

{
  day: 31,
  title: "Modal: May / Might (Possibility)",
  grammar:
    "Use 'may' or 'might' + verb to express possibility.\nExample: 'It might rain tomorrow.'\nUse 'may' for formal permission.\nExample: 'May I come in?'",
  vocabulary: [
    { word: "May", meaning: "(modal)", example: "May I use your phone?" },
    { word: "Might", meaning: "(modal)", example: "It might be late." },
    { word: "Rain", meaning: "(verb)", example: "It might rain this afternoon." },
    { word: "Late", meaning: "(adj.)", example: "He may be late for the meeting." },
    { word: "Possible", meaning: "(adj.)", example: "It is possible it will snow." }
  ],
  speakingPractice:
    "Talk about your weekend plans using 'may' and 'might'. Example: 'On Saturday, I might go to the cinema. I may visit my friend. It depends on the weather.'",
  dailyConversation: {
    a: "Where is Raju?",
    b: "I don't know. He might be in the cafeteria."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in (may/might):",
    questions: [
      { question: "___ I ask a question?", options: ["May", "Might"], correctAnswer: "May" },
      { question: "Take an umbrella. It ___ rain.", options: ["may", "might"], correctAnswer: "might" },
      { question: "He ___ be busy now.", options: ["may", "might"], correctAnswer: "may" },
      { question: "I ___ go to the market later.", options: ["may", "might"], correctAnswer: "might" },
      { question: "She ___ be at home. I'm not sure.", options: ["may", "might"], correctAnswer: "might" },
      { question: "___ I come in?", options: ["May", "Might"], correctAnswer: "May" },
      { question: "It ___ snow tonight.", options: ["may", "might"], correctAnswer: "may" },
      { question: "They ___ visit us tomorrow.", options: ["may", "might"], correctAnswer: "might" },
      { question: "He ___ call you later, I'm not sure.", options: ["may", "might"], correctAnswer: "might" },
      { question: "You ___ need a jacket. It's cold outside.", options: ["may", "might"], correctAnswer: "may" }
    ]
  }
}
,
{
  day: 32,
  title: "Modal: Should (Advice)",
  grammar:
    "Use 'should' + verb to give advice (good idea).\nUse 'shouldn't' for negative advice.\nExample: 'You should study every day.' 'You shouldn't smoke.'",
  vocabulary: [
    { word: "Should", meaning: "(modal)", example: "You should study every day." },
    { word: "Shouldn't", meaning: "(modal)", example: "You shouldn't smoke." },
    { word: "Eat", meaning: "(verb)", example: "You should eat healthy food." },
    { word: "Sleep", meaning: "(verb)", example: "You should sleep 8 hours." },
    { word: "Worry", meaning: "(verb)", example: "You shouldn't worry so much." }
  ],
  speakingPractice:
    "Give 3 pieces of advice to a new English learner.\nExample: 'You should practice speaking every day. You should listen to English music. You shouldn't be afraid to make mistakes.'",
  dailyConversation: {
    a: "I have an exam tomorrow.",
    b: "You should get some rest."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (should/shouldn't):",
    questions: [
      { question: "It's cold. You ___ wear a jacket.", options: ["should", "shouldn't"], correctAnswer: "should" },
      { question: "He is sick. He ___ go to work.", options: ["should", "shouldn't"], correctAnswer: "shouldn't" },
      { question: "You ___ drink more water.", options: ["should", "shouldn't"], correctAnswer: "should" },
      { question: "We ___ waste time.", options: ["should", "shouldn't"], correctAnswer: "shouldn't" },
      { question: "You ___ relax sometimes.", options: ["should", "shouldn't"], correctAnswer: "should" },
      { question: "They ___ talk loudly in the library.", options: ["should", "shouldn't"], correctAnswer: "shouldn't" },
      { question: "He ___ study harder.", options: ["should", "shouldn't"], correctAnswer: "should" },
      { question: "You ___ eat too much junk food.", options: ["should", "shouldn't"], correctAnswer: "shouldn't" },
      { question: "You ___ go to bed early.", options: ["should", "shouldn't"], correctAnswer: "should" },
      { question: "She ___ worry about small things.", options: ["should", "shouldn't"], correctAnswer: "shouldn't" }
    ]
  }
}
,

{
  day: 33,
  title: "Modal: Must / Have to (Obligation)",
  grammar:
    "Use 'must' + verb for a strong necessity or rule (from the speaker).\nExample: 'I must finish this today.'\nUse 'have to' + verb for external rules or obligations.\nExample: 'I have to wear a uniform.'\n'Mustn't' = forbidden.\n'Don't have to' = no obligation.",
  vocabulary: [
    { word: "Must", meaning: "(modal)", example: "You must stop at a red light." },
    { word: "Have to", meaning: "(modal)", example: "I have to go to work at 9 AM." },
    { word: "Mustn't", meaning: "(modal)", example: "You mustn't park here." },
    { word: "Don't have to", meaning: "(modal)", example: "You don't have to come." },
    { word: "Wear", meaning: "(verb)", example: "We have to wear helmets." }
  ],
  speakingPractice:
    "Talk about your obligations.\nExample: 'I have to wake up early for college. I must complete my project. I don't have to work on Sunday.'",
  dailyConversation: {
    a: "Do we have to finish this today?",
    b: "Yes, we must. The deadline is tomorrow."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct answer (must / mustn't / have to / don't have to):",
    questions: [
      { question: "It's a secret. You ___ tell anyone.", options: ["mustn't", "don't have to"], correctAnswer: "mustn't" },
      { question: "Sunday is a holiday. We ___ go to work.", options: ["must", "don't have to"], correctAnswer: "don't have to" },
      { question: "You ___ stop when the traffic light is red.", options: ["must", "have to"], correctAnswer: "must" },
      { question: "I ___ finish this by tonight. It's important to me.", options: ["must", "don't have to"], correctAnswer: "must" },
      { question: "We ___ wear a uniform. It's the school rule.", options: ["have to", "mustn't"], correctAnswer: "have to" },
      { question: "You ___ smoke here. It's not allowed.", options: ["mustn't", "must"], correctAnswer: "mustn't" },
      { question: "She ___ go if she doesn't want to. It's optional.", options: ["doesn't have to", "must"], correctAnswer: "doesn't have to" },
      { question: "He ___ arrive early. The teacher said it is important.", options: ["must", "don't have to"], correctAnswer: "must" },
      { question: "We ___ clean the room today. It's already clean.", options: ["don't have to", "must"], correctAnswer: "don't have to" },
      { question: "You ___ wear a seatbelt in a car. It's the law.", options: ["have to", "don't have to"], correctAnswer: "have to" }
    ]
  }
}
,

{
  day: 34,
  title: "Review of Modals",
  grammar:
    "Review:\n- Can (ability): I can code.\n- Could (polite request/past ability): Could you help me?\n- May (permission): May I sit here?\n- Might (possibility): It might rain.\n- Should (advice): You should rest.\n- Must (strong obligation): You must be quiet.",
  vocabulary: [],
  speakingPractice:
    "Create a short story (3-5 sentences) using at least 3 different modals.\nExample: 'I have a test tomorrow. I must study. I should turn off my phone. I might get a good grade if I work hard.'",
  dailyConversation: {
    a: "Can I go to the party?",
    b: "You can, but you should finish your homework first."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the best modal:",
    questions: [
      { question: "I ___ speak English.", options: ["can", "should"], correctAnswer: "can" },
      { question: "___ I borrow your pen? (polite)", options: ["Must", "Could"], correctAnswer: "Could" },
      { question: "It looks cloudy. It ___ rain.", options: ["must", "might"], correctAnswer: "might" },
      { question: "You ___ not park here. It's forbidden.", options: ["must", "mustn't"], correctAnswer: "mustn't" },
      { question: "You ___ rest. You look tired.", options: ["should", "may"], correctAnswer: "should" },
      { question: "___ I come in?", options: ["May", "Should"], correctAnswer: "May" },
      { question: "We ___ wear a helmet when driving a bike. It's the law.", options: ["must", "might"], correctAnswer: "must" },
      { question: "She ___ speak three languages.", options: ["can", "should"], correctAnswer: "can" },
      { question: "He studied hard, so he ___ pass the exam.", options: ["might", "should"], correctAnswer: "should" },
      { question: "I’m not sure. He ___ come later.", options: ["might", "must"], correctAnswer: "might" }
    ]
  }
}
,

{
  day: 35,
  title: "Weekly Review",
  grammar:
    "Review all modal verbs from Week 5: can, could, may, might, should, must, have to, mustn't, don't have to.",
  vocabulary: [],
  speakingPractice:
    "Writing Task (10 min): Write a paragraph giving advice to a tourist visiting your city. Use 'should', 'shouldn't', 'must', and 'can'.\n\nSpeaking Test (5 min): Talk for 1-2 minutes.\n- What can you do?\n- What should you do this week?\n- What might you do this weekend?\n- What do you have to do tomorrow?\n\nListening (10 min): Watch a movie trailer on YouTube. First time without subtitles, second time with English subtitles.",
  dailyConversation: {
    a: "Should I bring an umbrella?",
    b: "Yes, you should. It might rain."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct modal:",
    questions: [
      { question: "You ___ show your ID to enter.", options: ["must", "might"], correctAnswer: "must" },
      { question: "It’s sunny. We ___ go to the beach.", options: ["may", "might"], correctAnswer: "might" },
      { question: "Tourists ___ visit the city museum. It’s great.", options: ["should", "mustn't"], correctAnswer: "should" },
      { question: "You ___ smoke here. It's forbidden.", options: ["mustn't", "should"], correctAnswer: "mustn't" },
      { question: "___ I take photos here?", options: ["May", "Should"], correctAnswer: "May" },
      { question: "You ___ try the local food!", options: ["should", "don't have to"], correctAnswer: "should" },
      { question: "I ___ wake up early tomorrow. I have work.", options: ["have to", "might"], correctAnswer: "have to" },
      { question: "You ___ buy a ticket. The park is free.", options: ["don't have to", "must"], correctAnswer: "don't have to" },
      { question: "I’m not sure. He ___ come with us.", options: ["might", "must"], correctAnswer: "might" },
      { question: "Students ___ wear uniforms in this school.", options: ["have to", "should"], correctAnswer: "have to" }
    ]
  }
}

    ]
      
},

{
    week: 6,
    title: "Comparisons & Structure",
    quote: "One language sets you in a corridor for life. Two languages open every door along the way. - Frank Smith",
    days: [
      {
  day: 36,
  title: "Comparatives",
  grammar:
    "Use comparatives to compare two things.\nShort adjectives: add '-er' (fast → faster, big → bigger).\nLong adjectives: use 'more' (beautiful → more beautiful).\nUse 'than' to show the comparison.",
  vocabulary: [
    { word: "Faster", meaning: "(comparative)", example: "A car is faster than a bicycle." },
    { word: "Bigger", meaning: "(comparative)", example: "An elephant is bigger than a mouse." },
    { word: "Colder", meaning: "(comparative)", example: "Winter is colder than summer." },
    { word: "More", meaning: "(comparative)", example: "This book is more interesting." },
    { word: "Than", meaning: "(conjunction)", example: "She is taller than her brother." }
  ],
  speakingPractice:
    "Compare 2 things:\nExample: 'My phone is newer than your phone.' 'Coffee is better than tea.' 'A car is more expensive than a bike.'",
  dailyConversation: {
    a: "Which is better, Chennai or Mumbai?",
    b: "I think Mumbai is more crowded."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in the blank with the correct comparative form:",
    questions: [
      { question: "He is ___ (tall) than me.", options: ["taller", "more tall"], correctAnswer: "taller" },
      { question: "This exam is ___ (difficult) than the last one.", options: ["difficulter", "more difficult"], correctAnswer: "more difficult" },
      { question: "My house is ___ (big) than yours.", options: ["big", "bigger"], correctAnswer: "bigger" },
      { question: "A plane is ___ (fast) than a train.", options: ["faster", "more fast"], correctAnswer: "faster" },
      { question: "Math is ___ (easy) than science.", options: ["easier", "more easy"], correctAnswer: "easier" },
      { question: "This phone is ___ (expensive) than that one.", options: ["expensiver", "more expensive"], correctAnswer: "more expensive" },
      { question: "Winter is ___ (cold) than summer.", options: ["colder", "more cold"], correctAnswer: "colder" },
      { question: "She is ___ (smart) than her friend.", options: ["smarter", "more smart"], correctAnswer: "smarter" },
      { question: "This movie is ___ (interesting) than the last one.", options: ["interestinger", "more interesting"], correctAnswer: "more interesting" },
      { question: "A bike is ___ (slow) than a car.", options: ["slower", "more slow"], correctAnswer: "slower" }
    ]
  }
}
,

{
  day: 37,
  title: "Superlatives",
  grammar:
    "Use superlatives to compare three or more things (to find the #1).\nShort adjectives: 'the' + '-est' (fast → the fastest).\nLong adjectives: 'the most' (beautiful → the most beautiful).\nIrregular: good → the best, bad → the worst.",
  vocabulary: [
    { word: "The fastest", meaning: "(superlative)", example: "He is the fastest runner." },
    { word: "The biggest", meaning: "(superlative)", example: "That is the biggest building." },
    { word: "The best", meaning: "(superlative)", example: "This is the best food." },
    { word: "The worst", meaning: "(superlative)", example: "That was the worst movie." },
    { word: "The most", meaning: "(superlative)", example: "She is the most intelligent student." }
  ],
  speakingPractice:
    "Talk about 'the best' and 'the most' in your life.\nExample: 'My best friend is…' 'The most difficult subject for me is…' 'The most beautiful place in my city is…'",
  dailyConversation: {
    a: "What is the best movie you have ever seen?",
    b: "I think 3 Idiots is the best movie."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Fill in the blank with the correct superlative:",
    questions: [
      { question: "Mount Everest is ___ (high) mountain.", options: ["the higher", "the highest"], correctAnswer: "the highest" },
      { question: "He is ___ (intelligent) person in the class.", options: ["the most intelligent", "the intelligentest"], correctAnswer: "the most intelligent" },
      { question: "This is ___ (bad) restaurant in town.", options: ["the badder", "the worst"], correctAnswer: "the worst" },
      { question: "She is ___ (beautiful) girl in school.", options: ["the most beautiful", "the beautifulest"], correctAnswer: "the most beautiful" },
      { question: "My father is ___ (strong) person I know.", options: ["the strongest", "the most strong"], correctAnswer: "the strongest" },
      { question: "This is ___ (good) chocolate.", options: ["the best", "the most good"], correctAnswer: "the best" },
      { question: "July is ___ (hot) month of the year.", options: ["the hottest", "the most hot"], correctAnswer: "the hottest" },
      { question: "He is ___ (tall) student in the class.", options: ["the tallest", "the most tall"], correctAnswer: "the tallest" },
      { question: "That was ___ (funny) joke!", options: ["the funniest", "the most funny"], correctAnswer: "the funniest" },
      { question: "This is ___ (interesting) book I have ever read.", options: ["the most interesting", "the interestingest"], correctAnswer: "the most interesting" }
    ]
  }
}
,

{
  day: 38,
  title: "Sentence Formation (S-V-O)",
  grammar:
    "The most common sentence structure in English is Subject - Verb - Object.\nSubject = who/what does the action\nVerb = the action\nObject = who/what receives the action\nExample: She (S) reads (V) a book (O).",
  vocabulary: [
    { word: "Subject", meaning: "The doer", example: "He is the subject." },
    { word: "Verb", meaning: "The action", example: "Eats is the verb." },
    { word: "Object", meaning: "Receiver of action", example: "Apples is the object." },
    { word: "S-V-O", meaning: "Sentence order", example: "I (S) love (V) cricket (O)." },
    { word: "S-V-O", meaning: "Sentence order", example: "My brother (S) bought (V) a new car (O)." }
  ],
  speakingPractice:
    "Create 5 simple SVO sentences.\nExample: 'I play football.' 'My mother cooks food.' 'We watch movies.' 'The student studies English.'",
  dailyConversation: {
    a: "What did you do?",
    b: "I (S) finished (V) my work (O)."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Put the words in correct S-V-O order:",
    questions: [
      { question: "(likes / she / music)", options: ["She likes music", "She music likes"], correctAnswer: "She likes music" },
      { question: "(a car / bought / he)", options: ["He bought a car", "Bought he a car"], correctAnswer: "He bought a car" },
      { question: "(tea / drinks / my father)", options: ["My father drinks tea", "Tea drinks my father"], correctAnswer: "My father drinks tea" },
      { question: "(pizza / we / eat)", options: ["We eat pizza", "Eat we pizza"], correctAnswer: "We eat pizza" },
      { question: "(English / studies / she)", options: ["She studies English", "English studies she"], correctAnswer: "She studies English" },
      { question: "(the ball / kicked / Rahul)", options: ["Rahul kicked the ball", "Kicked Rahul the ball"], correctAnswer: "Rahul kicked the ball" },
      { question: "(a story / told / the teacher)", options: ["The teacher told a story", "Told a story the teacher"], correctAnswer: "The teacher told a story" },
      { question: "(flowers / gives / he / her)", options: ["He gives her flowers", "He her flowers gives"], correctAnswer: "He gives her flowers" },
      { question: "(coffee / wants / she)", options: ["She wants coffee", "Wants she coffee"], correctAnswer: "She wants coffee" },
      { question: "(a song / sang / they)", options: ["They sang a song", "Sang they a song"], correctAnswer: "They sang a song" }
    ]
  }
}
,

{
  day: 39,
  title: "Sentence Formation (Compound)",
  grammar:
    "A compound sentence combines two simple S-V-O sentences using a conjunction.\nExamples:\n- I like tea **and** my brother likes coffee.\n- He studied hard, **but** he failed.\n- It was raining, **so** I took an umbrella.",
  vocabulary: [],
  speakingPractice:
    "Combine simple sentences:\n'I am tired.' + 'I need to work.' → 'I am tired, but I need to work.'\n'He was hungry.' + 'He ate.' → 'He was hungry, so he ate.'",
  dailyConversation: {
    a: "Should I call him?",
    b: "You can call him, or you can send a text."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Combine the sentences using the correct conjunction:",
    questions: [
      { question: "I went to the store. It was closed. (but)", options: ["I went to the store, but it was closed.", "I went to the store, so it was closed."], correctAnswer: "I went to the store, but it was closed." },
      { question: "She studied a lot. She passed the exam. (so)", options: ["She studied a lot, so she passed the exam.", "She studied a lot, but she passed the exam."], correctAnswer: "She studied a lot, so she passed the exam." },
      { question: "It was late. I went home. (so)", options: ["It was late, so I went home.", "It was late, but I went home."], correctAnswer: "It was late, so I went home." },
      { question: "He is smart. He is lazy. (but)", options: ["He is smart, but he is lazy.", "He is smart, so he is lazy."], correctAnswer: "He is smart, but he is lazy." },
      { question: "I can make tea. I can make coffee. (or)", options: ["I can make tea, or I can make coffee.", "I can make tea, but I can make coffee."], correctAnswer: "I can make tea, or I can make coffee." },
      { question: "It was raining. We stayed inside. (so)", options: ["It was raining, so we stayed inside.", "It was raining, but we stayed inside."], correctAnswer: "It was raining, so we stayed inside." },
      { question: "He is rich. He is unhappy. (but)", options: ["He is rich, but he is unhappy.", "He is rich, so he is unhappy."], correctAnswer: "He is rich, but he is unhappy." },
      { question: "I was sick. I went to the doctor. (so)", options: ["I was sick, so I went to the doctor.", "I was sick, but I went to the doctor."], correctAnswer: "I was sick, so I went to the doctor." },
      { question: "We can watch a movie. We can play a game. (or)", options: ["We can watch a movie, or we can play a game.", "We can watch a movie, but we can play a game."], correctAnswer: "We can watch a movie, or we can play a game." },
      { question: "She is tired. She will keep working. (but)", options: ["She is tired, but she will keep working.", "She is tired, so she will keep working."], correctAnswer: "She is tired, but she will keep working." }
    ]
  }
}
,

{
  day: 40,
  title: "Common Mistake: Subject-Verb Agreement",
  grammar:
    "A singular subject needs a singular verb (with -s). A plural subject needs a plural verb (no -s).\nExamples:\nCorrect: He works. Incorrect: He work.\nCorrect: They work. Incorrect: They works.",
  vocabulary: [
    { word: "Has", meaning: "(singular verb)", example: "The car has four wheels." },
    { word: "Have", meaning: "(plural verb)", example: "The cars have four wheels." },
    { word: "Is", meaning: "(singular verb)", example: "The book is old." },
    { word: "Are", meaning: "(plural verb)", example: "The books are old." },
    { word: "Goes", meaning: "(singular verb)", example: "My friend goes to the gym." }
  ],
  speakingPractice:
    "Say aloud: 'He likes.' 'They like.' 'She has.' 'We have.' 'It is.' 'They are.'",
  dailyConversation: {
    a: "Where is your friend?",
    b: "He is at home."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct verb:",
    questions: [
      { question: "My keys ___ on the table.", options: ["is", "are"], correctAnswer: "are" },
      { question: "That phone ___ expensive.", options: ["is", "are"], correctAnswer: "is" },
      { question: "My colleagues ___ hard.", options: ["work", "works"], correctAnswer: "work" },
      { question: "He ___ to school every day.", options: ["go", "goes"], correctAnswer: "goes" },
      { question: "They ___ a big house.", options: ["has", "have"], correctAnswer: "have" },
      { question: "This car ___ four doors.", options: ["has", "have"], correctAnswer: "has" },
      { question: "The students ___ happy today.", options: ["is", "are"], correctAnswer: "are" },
      { question: "My friend ___ English very well.", options: ["speak", "speaks"], correctAnswer: "speaks" },
      { question: "We ___ late.", options: ["is", "are"], correctAnswer: "are" },
      { question: "She ___ coffee in the morning.", options: ["drink", "drinks"], correctAnswer: "drinks" }
    ]
  }
}
,

{
  day: 41,
  title: "Common Mistake: Countable / Uncountable",
  grammar:
    "Countable nouns can be counted (one book, two books). Uncountable nouns cannot be counted (water, rice, information).\nUse 'many' with countable nouns.\nUse 'much' with uncountable nouns.\nUse 'a lot of' with both.",
  vocabulary: [
    { word: "Many", meaning: "(countable)", example: "I have many friends." },
    { word: "Much", meaning: "(uncountable)", example: "I don't have much time." },
    { word: "A lot of", meaning: "(both)", example: "I have a lot of friends / a lot of time." },
    { word: "Information", meaning: "(uncountable)", example: "He gave me some information." },
    { word: "Advice", meaning: "(uncountable)", example: "Can you give me some advice?" }
  ],
  speakingPractice:
    "Say: 'I have many…' (friends, books, problems).\nSay: 'I don't have much…' (money, time, patience).",
  dailyConversation: {
    a: "How much money do you have?",
    b: "Not much. But I have many ideas."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose (much/many):",
    questions: [
      { question: "How ___ people were there?", options: ["much", "many"], correctAnswer: "many" },
      { question: "I don't drink ___ coffee.", options: ["much", "many"], correctAnswer: "much" },
      { question: "There are ___ cars on the road today.", options: ["much", "many"], correctAnswer: "many" },
      { question: "We don't have ___ time.", options: ["much", "many"], correctAnswer: "much" },
      { question: "He made ___ mistakes on the exam.", options: ["much", "many"], correctAnswer: "many" },
      { question: "She doesn't eat ___ sugar.", options: ["much", "many"], correctAnswer: "much" },
      { question: "I have ___ good friends.", options: ["much", "many"], correctAnswer: "many" },
      { question: "They didn't give us ___ information.", options: ["much", "many"], correctAnswer: "much" },
      { question: "There isn't ___ water in the bottle.", options: ["much", "many"], correctAnswer: "much" },
      { question: "We saw ___ birds at the park.", options: ["much", "many"], correctAnswer: "many" }
    ]
  }
}
,

{
  day: 42,
  title: "Weekly Review",
  grammar:
    "Review comparatives (-er/more), superlatives (-est/most), S-V-O structure, compound sentences, subject-verb agreement, and countable vs uncountable nouns.",
  vocabulary: [],
  speakingPractice:
    "Writing Task (10 min): Write a paragraph comparing two of your favorite things (movies, foods, cities). Use comparatives and superlatives.\nSpeaking Test (5 min): Compare your life today to your life 5 years ago.\nListening: Find a short simple news story on YouTube (VOA Learning English) and listen twice.",
  dailyConversation: {
    a: "Which city is better?",
    b: "I think Chennai is better, but Mumbai is bigger."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Mixed review: choose the correct answer",
    questions: [
      { question: "This book is ___ (interesting) than that one.", options: ["more interesting", "interestinger"], correctAnswer: "more interesting" },
      { question: "He is the ___ (tall) person in the room.", options: ["tallest", "most tall"], correctAnswer: "tallest" },
      { question: "My phone ___ on the table.", options: ["is", "are"], correctAnswer: "is" },
      { question: "We don't have ___ time.", options: ["much", "many"], correctAnswer: "much" },
      { question: "I was hungry, ___ I ate.", options: ["so", "but"], correctAnswer: "so" },
      { question: "She ___ a new car.", options: ["bought", "buy"], correctAnswer: "bought" },
      { question: "The red bag is ___ (big) than the blue one.", options: ["bigger", "more big"], correctAnswer: "bigger" },
      { question: "He ___ to school every day.", options: ["goes", "go"], correctAnswer: "goes" },
      { question: "There were ___ people at the event.", options: ["many", "much"], correctAnswer: "many" },
      { question: "This is the ___ (good) restaurant in town.", options: ["best", "most good"], correctAnswer: "best" }
    ]
  }
}

    ]
},

{
    week: 7,
    title: "Advanced Structures (Intro)",
    quote: "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart. - Nelson Mandela",
    days: [
        {
  day: 43,
  title: "Passive Voice (Simple Present)",
  grammar:
    "We use the passive voice when the action is more important than the doer.\nActive: The manager signs the documents.\nPassive: The documents are signed by the manager.\nForm: am / is / are + Past Participle",
  vocabulary: [
    { word: "Is built", meaning: "(passive)", example: "The house is built of brick." },
    { word: "Are made", meaning: "(passive)", example: "The phones are made in China." },
    { word: "Is spoken", meaning: "(passive)", example: "English is spoken here." },
    { word: "Is cleaned", meaning: "(passive)", example: "The room is cleaned every day." },
    { word: "By", meaning: "(preposition)", example: "The letter was written by him." }
  ],
  speakingPractice:
    "Describe how something is made.\nExample: 'First, the materials are collected. Then, they are put together. Finally, the product is checked.'",
  dailyConversation: {
    a: "Who cleans the office?",
    b: "The office is cleaned by the staff."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Change the sentences to passive voice:",
    questions: [
      { question: "People speak English here.", options: ["English is spoken here.", "English spoken here."], correctAnswer: "English is spoken here." },
      { question: "They make cars in this factory.", options: ["Cars are made in this factory.", "Cars is made in this factory."], correctAnswer: "Cars are made in this factory." },
      { question: "He cleans the room every day.", options: ["The room is cleaned every day.", "The room cleaned every day."], correctAnswer: "The room is cleaned every day." },
      { question: "Teachers teach students.", options: ["Students are taught by teachers.", "Students is taught by teachers."], correctAnswer: "Students are taught by teachers." },
      { question: "People use this app worldwide.", options: ["This app is used worldwide.", "This app used worldwide."], correctAnswer: "This app is used worldwide." },
      { question: "They sell fruits here.", options: ["Fruits are sold here.", "Fruits is sold here."], correctAnswer: "Fruits are sold here." },
      { question: "Someone washes my car.", options: ["My car is washed.", "My car washed."], correctAnswer: "My car is washed." },
      { question: "People grow rice in Asia.", options: ["Rice is grown in Asia.", "Rice grown in Asia."], correctAnswer: "Rice is grown in Asia." },
      { question: "They deliver packages every morning.", options: ["Packages are delivered every morning.", "Packages is delivered every morning."], correctAnswer: "Packages are delivered every morning." },
      { question: "People speak Tamil in Tamil Nadu.", options: ["Tamil is spoken in Tamil Nadu.", "Tamil spoken in Tamil Nadu."], correctAnswer: "Tamil is spoken in Tamil Nadu." }
    ]
  }
}
,
{
  day: 44,
  title: "Passive Voice (Simple Past)",
  grammar:
    "Passive voice in the past: was / were + Past Participle.\nActive: The manager signed the documents.\nPassive: The documents were signed by the manager.",
  vocabulary: [
    { word: "Was built", meaning: "(passive)", example: "This bridge was built in 1990." },
    { word: "Were made", meaning: "(passive)", example: "These cars were made in Japan." },
    { word: "Was written", meaning: "(passive)", example: "This book was written by a famous author." },
    { word: "Was told", meaning: "(passive)", example: "I was told to wait here." },
    { word: "Invented", meaning: "(past participle)", example: "The telephone was invented by Bell." }
  ],
  speakingPractice:
    "Talk about a famous invention.\nExample: 'The lightbulb was invented by Edison. The first computer was built many years ago.'",
  dailyConversation: {
    a: "Did you break the window?",
    b: "No, it was broken when I arrived."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Change the sentences to passive voice:",
    questions: [
      { question: "Someone stole my wallet.", options: ["My wallet was stolen.", "My wallet stole."], correctAnswer: "My wallet was stolen." },
      { question: "They built this school in 2005.", options: ["This school was built in 2005.", "This school built in 2005."], correctAnswer: "This school was built in 2005." },
      { question: "They made the cake yesterday.", options: ["The cake was made yesterday.", "The cake were made yesterday."], correctAnswer: "The cake was made yesterday." },
      { question: "He wrote the letter.", options: ["The letter was written by him.", "The letter written by him."], correctAnswer: "The letter was written by him." },
      { question: "Someone broke the glass.", options: ["The glass was broken.", "The glass were broken."], correctAnswer: "The glass was broken." },
      { question: "The police arrested him.", options: ["He was arrested by the police.", "He were arrested by the police."], correctAnswer: "He was arrested by the police." },
      { question: "They painted the walls last week.", options: ["The walls were painted last week.", "The walls painted last week."], correctAnswer: "The walls were painted last week." },
      { question: "People invented the wheel long ago.", options: ["The wheel was invented long ago.", "The wheel were invented long ago."], correctAnswer: "The wheel was invented long ago." },
      { question: "They repaired the car.", options: ["The car was repaired.", "The car repaired."], correctAnswer: "The car was repaired." },
      { question: "Someone opened the door.", options: ["The door was opened.", "The door opened."], correctAnswer: "The door was opened." }
    ]
  }
}
,
{
  day: 45,
  title: "Reported Speech (Statements)",
  grammar:
    "Used to report what someone else said. The tense usually goes back one step.\nDirect: He said, 'I am busy.'\nReported: He said that he was busy.\nDirect: She said, 'I will call you.'\nReported: She said that she would call me.",
  vocabulary: [
    { word: "Said", meaning: "(verb)", example: "He said that he was tired." },
    { word: "Told", meaning: "(verb, used with a person)", example: "She told me that she was happy." },
    { word: "That", meaning: "(conjunction, optional)", example: "He said that he was late." },
    { word: "Would", meaning: "(past of will)", example: "She said she would call later." },
    { word: "Had", meaning: "(past of have)", example: "He said he had finished." }
  ],
  speakingPractice:
    "Report what someone said today. Example: 'My mother told me to eat breakfast.' 'My friend said that he was busy.'",
  dailyConversation: {
    a: "What did the boss say?",
    b: "He said that the meeting was cancelled."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Change to reported speech:",
    questions: [
      { question: "She said, 'I am sick.'", options: ["She said that she was sick.", "She says she is sick."], correctAnswer: "She said that she was sick." },
      { question: "He said, 'I am happy.'", options: ["He said that he was happy.", "He said that he is happy."], correctAnswer: "He said that he was happy." },
      { question: "She said, 'I will help you.'", options: ["She said that she would help me.", "She said she will help me."], correctAnswer: "She said that she would help me." },
      { question: "He said, 'I have finished.'", options: ["He said that he had finished.", "He said he has finished."], correctAnswer: "He said that he had finished." },
      { question: "They said, 'We are busy.'", options: ["They said that they were busy.", "They said they are busy."], correctAnswer: "They said that they were busy." },
      { question: "She said, 'He is late.'", options: ["She said that he was late.", "She said that he is late."], correctAnswer: "She said that he was late." },
      { question: "He said, 'I can come.'", options: ["He said that he could come.", "He said that he can come."], correctAnswer: "He said that he could come." },
      { question: "She said, 'I want pizza.'", options: ["She said that she wanted pizza.", "She said she wants pizza."], correctAnswer: "She said that she wanted pizza." },
      { question: "He said, 'It is raining.'", options: ["He said that it was raining.", "He said it is raining."], correctAnswer: "He said that it was raining." },
      { question: "They said, 'We will travel.'", options: ["They said that they would travel.", "They said they will travel."], correctAnswer: "They said that they would travel." }
    ]
  }
}
,
{
  day: 46,
  title: "Reported Speech (Questions)",
  grammar:
    "For WH- questions:\nDirect: He asked, 'Where is the bank?'\nReported: He asked where the bank was.\n(No question format, no '?')\n\nFor Yes/No questions, use 'if' or 'whether':\nDirect: She asked, 'Do you like coffee?'\nReported: She asked if I liked coffee.",
  vocabulary: [
    { word: "Asked", meaning: "(verb)", example: "He asked me where I lived." },
    { word: "If", meaning: "(conjunction for Yes/No questions)", example: "She asked if I was ready." },
    { word: "Where", meaning: "(WH word)", example: "He asked where the station was." },
    { word: "What", meaning: "(WH word)", example: "I asked what his name was." },
    { word: "Wanted", meaning: "(verb)", example: "They asked me what I wanted." }
  ],
  speakingPractice:
    "Report a question you heard.\nExample: 'My friend asked me if I wanted to go out.' 'My colleague asked what I was doing.'",
  dailyConversation: {
    a: "What did he ask you?",
    b: "He asked me if I spoke English."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Change to reported speech:",
    questions: [
      { question: "He asked, 'What is your name?'", options: ["He asked me what my name was.", "He asked me what my name is."], correctAnswer: "He asked me what my name was." },
      { question: "She asked, 'Do you like coffee?'", options: ["She asked if I liked coffee.", "She asked do I like coffee."], correctAnswer: "She asked if I liked coffee." },
      { question: "He asked, 'Where do you live?'", options: ["He asked where I lived.", "He asked where I live."], correctAnswer: "He asked where I lived." },
      { question: "They asked, 'Are you tired?'", options: ["They asked if I was tired.", "They asked am I tired."], correctAnswer: "They asked if I was tired." },
      { question: "She asked, 'Why are you late?'", options: ["She asked why I was late.", "She asked why are you late."], correctAnswer: "She asked why I was late." },
      { question: "He asked, 'What do you want?'", options: ["He asked what I wanted.", "He asked what I want."], correctAnswer: "He asked what I wanted." },
      { question: "She asked, 'When will he come?'", options: ["She asked when he would come.", "She asked when he will come."], correctAnswer: "She asked when he would come." },
      { question: "He asked, 'Is this your bag?'", options: ["He asked if that was my bag.", "He asked is that my bag."], correctAnswer: "He asked if that was my bag." },
      { question: "They asked, 'Can you help us?'", options: ["They asked if I could help them.", "They asked if I can help them."], correctAnswer: "They asked if I could help them." },
      { question: "She asked, 'Did you call me?'", options: ["She asked if I had called her.", "She asked if I called her."], correctAnswer: "She asked if I had called her." }
    ]
  }
}
,

{
  day: 47,
  title: "Phrasal Verbs (Common Set 1)",
  grammar:
    "A phrasal verb is a verb + preposition that creates a special meaning. Example: get up, turn on, sit down. These must be memorized because their meaning is not always clear from the words.",
  vocabulary: [
    { word: "Get up", meaning: "To wake up and get out of bed", example: "I get up at 6 AM." },
    { word: "Sit down", meaning: "To take a seat", example: "Please sit down." },
    { word: "Stand up", meaning: "To rise to one's feet", example: "He stood up to speak." },
    { word: "Turn on", meaning: "To start (a light, TV, device)", example: "Can you turn on the light?" },
    { word: "Turn off", meaning: "To stop (a light, TV, device)", example: "Turn off your phone." }
  ],
  speakingPractice:
    "Describe your morning using 3 phrasal verbs. Example: 'I get up at 7 AM. I turn on the coffee machine. Then I turn on my laptop.'",
  dailyConversation: {
    a: "Please sit down.",
    b: "Thank you."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct phrasal verb:",
    questions: [
      {
        question: "It's dark. ___ the light.",
        options: ["Turn on", "Get up"],
        correctAnswer: "Turn on"
      },
      {
        question: "The class is over. ___ the lights.",
        options: ["Turn off", "Stand up"],
        correctAnswer: "Turn off"
      },
      {
        question: "The teacher entered. Everyone had to ___.",
        options: ["Stand up", "Get up"],
        correctAnswer: "Stand up"
      },
      {
        question: "I always ___ at 6 AM.",
        options: ["Get up", "Sit down"],
        correctAnswer: "Get up"
      },
      {
        question: "Please ___ and relax.",
        options: ["Sit down", "Turn on"],
        correctAnswer: "Sit down"
      }
    ]
  }
}
,

{
  day: 48,
  title: "Phrasal Verbs (Common Set 2)",
  grammar:
    "More common phrasal verbs used in daily life. Many phrasal verbs have meanings different from the original verb (example: give up = quit, not 'give' + 'up').",
  vocabulary: [
    { word: "Look for", meaning: "To search", example: "I am looking for my keys." },
    { word: "Look at", meaning: "To direct your eyes to something", example: "Look at that bird!" },
    { word: "Give up", meaning: "To quit", example: "Don't give up learning." },
    { word: "Go on", meaning: "To continue", example: "Please go on with your story." },
    { word: "Find out", meaning: "To discover information", example: "I need to find out the price." }
  ],
  speakingPractice:
    "Use 3 new phrasal verbs in sentences. Example: 'I am looking for a new job.' 'Don't give up.' 'I will find out the answer.'",
  dailyConversation: {
    a: "What are you looking for?",
    b: "My phone. I can't find it."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct phrasal verb:",
    questions: [
      {
        question: "If you fail, ___ trying.",
        options: ["give up", "go on"],
        correctAnswer: "go on"
      },
      {
        question: "I need to ___ when the train leaves.",
        options: ["find out", "look at"],
        correctAnswer: "find out"
      },
      {
        question: "___ that beautiful sunset!",
        options: ["Look at", "Look for"],
        correctAnswer: "Look at"
      },
      {
        question: "He lost his keys, so he is ___ them.",
        options: ["looking for", "giving up"],
        correctAnswer: "looking for"
      },
      {
        question: "Learning is hard, but don't ___.",
        options: ["give up", "find out"],
        correctAnswer: "give up"
      }
    ]
  }
}
,
{
  day: 49,
  title: "Weekly Review",
  grammar:
    "Review Passive Voice (present & past), Reported Speech (statements + questions), and Phrasal Verbs.",
  vocabulary: [],
  speakingPractice:
    "Speak for 1-2 minutes. Describe a famous building. Say when it was built, who it was designed by, and what it is used for. Use the passive voice.",
  dailyConversation: {
    a: "Did you finish this week's lessons?",
    b: "Yes! I learned passive voice, reported speech, and many phrasal verbs."
  },
  miniExercise: {
    type: "writing",
    instruction: "Writing Task (10 min):",
    questions: [
      "Write a short paragraph reporting a conversation you had. Use: He said..., She told me..., He asked if..."
    ]
  }
}

    ]
},

{
    week: 8,
    title: "Fluency & Final Review",
    quote: "You can never understand one language until you understand at least two. - Geoffrey Willans",
    days: [
      {
  day: 50,
  title: "Fluency Practice: Linking Sounds",
  grammar:
    "Native speakers connect words when speaking. Example: 'turn off' sounds like 'tur-noff'. 'What are you doing?' sounds like 'Whatcha doin?'.",
  vocabulary: [],
  speakingPractice:
    "Practice saying these quickly:\n- What are you doing? → Whatcha doin?\n- I am going to → I'm gonna\n- I want to → I wanna\n- A lot of → A lotta",
  dailyConversation: {
    a: "Whatcha doin' this weekend?",
    b: "I'm gonna see a movie."
  },
  miniExercise: {
    type: "writing",
    instruction: "Rewrite using linking/fast speech:",
    questions: [
      "I am going to go → __________ (correct answer: I'm gonna go)"
    ]
  }
}
,

{
  day: 51,
  title: "Review - All Tenses",
  grammar:
    "Simple Present: I work.\nSimple Past: I worked.\nSimple Future: I will work.\nPresent Continuous: I am working.\nPast Continuous: I was working.\nPresent Perfect: I have worked.",
  vocabulary: [],
  speakingPractice:
    "Talk about your job or studies. Example: 'I am a student. I have been a student for 3 years. After I graduate, I will look for a job.'",
  dailyConversation: {
    a: "Have you eaten?",
    b: "No, I will eat later."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Identify the tense:",
    questions: [
      {
        question: "\"She was sleeping.\"",
        options: ["Simple Past", "Past Continuous", "Present Perfect"],
        correctAnswer: "Past Continuous"
      },
      {
        question: "\"He will arrive.\"",
        options: ["Simple Future", "Simple Present", "Past Continuous"],
        correctAnswer: "Simple Future"
      },
      {
        question: "\"I have never seen it.\"",
        options: ["Present Perfect", "Simple Past", "Present Continuous"],
        correctAnswer: "Present Perfect"
      }
    ]
  }
}
,

{
  day: 52,
  title: "Common Idioms (Set 1)",
  grammar:
    "An idiom is a phrase where the meaning is different from the meaning of the individual words. Example: 'piece of cake' means something is very easy.",
  vocabulary: [
    { word: "Piece of cake", meaning: "Very easy", example: "The test was a piece of cake." },
    { word: "Break a leg", meaning: "Good luck", example: "\"You have a test? Break a leg!\"" },
    { word: "Under the weather", meaning: "Feeling sick", example: "I'm feeling a bit under the weather." },
    { word: "Cost an arm and a leg", meaning: "Very expensive", example: "That new phone costs an arm and a leg." },
    { word: "Hit the books", meaning: "To study hard", example: "I have an exam, I need to hit the books." }
  ],
  speakingPractice:
    "Use 2 idioms in sentences. Example: 'I'm feeling under the weather, so I can't go out.' 'This project is not a piece of cake.'",
  dailyConversation: {
    a: "Are you ready for your presentation?",
    b: "Yes, but I'm nervous.\nA: Break a leg!"
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct idiom:",
    questions: [
      {
        question: "Which idiom means 'very expensive'?",
        options: ["Under the weather", "Cost an arm and a leg", "Piece of cake"],
        correctAnswer: "Cost an arm and a leg"
      },
      {
        question: "Which idiom means 'good luck'?",
        options: ["Break a leg", "Hit the books", "Piece of cake"],
        correctAnswer: "Break a leg"
      },
      {
        question: "Which idiom means 'to study hard'?",
        options: ["Hit the books", "Piece of cake", "Under the weather"],
        correctAnswer: "Hit the books"
      }
    ]
  }
}
,

{
  day: 53,
  title: "Common Idioms (Set 2)",
  grammar:
    "More useful idioms commonly used by fluent speakers.",
  vocabulary: [
    { word: "On the ball", meaning: "Alert and competent", example: "Our new manager is really on the ball." },
    { word: "Once in a blue moon", meaning: "Very rarely", example: "I only see him once in a blue moon." },
    { word: "Bite the bullet", meaning: "To do something difficult or unpleasant", example: "I have to bite the bullet and finish this work." },
    { word: "Get cold feet", meaning: "To get nervous and lose courage", example: "I got cold feet before the interview." },
    { word: "The ball is in your court", meaning: "It’s your decision/turn", example: "I've done my part. The ball is in your court." }
  ],
  speakingPractice:
    "Use 2 idioms in sentences. Example: 'I only eat fast food once in a blue moon.' 'I need to bite the bullet and call the boss.'",
  dailyConversation: {
    a: "Are you going to apply for the job?",
    b: "I don't know, I'm getting cold feet."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Choose the correct idiom:",
    questions: [
      {
        question: "Which idiom means 'rarely'?",
        options: ["On the ball", "Once in a blue moon", "Get cold feet"],
        correctAnswer: "Once in a blue moon"
      },
      {
        question: "Which idiom means 'it's your turn to decide'?",
        options: ["The ball is in your court", "Bite the bullet", "On the ball"],
        correctAnswer: "The ball is in your court"
      },
      {
        question: "Which idiom means 'to get nervous and not do something'?",
        options: ["Get cold feet", "Bite the bullet", "On the ball"],
        correctAnswer: "Get cold feet"
      }
    ]
  }
}
,

{
  day: 54,
  title: "Review - Modals & Conditionals (Intro)",
  grammar:
    "A conditional sentence uses 'if'. Type 1 (Real Future): If + Simple Present, ... will + verb.\nExample: If it rains, I will stay home.",
  vocabulary: [],
  speakingPractice:
    "Complete 3 sentences:\n- If I have time tomorrow, I will...\n- If I study hard, I will...\n- If I get money, I will...",
  dailyConversation: {
    a: "If you see him, will you give him a message?",
    b: "Yes, I will."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Complete the sentence:",
    questions: [
      {
        question: "If I ___ (pass) the exam, my parents ___ (be) happy.",
        options: [
          "pass / will be",
          "will pass / are",
          "passed / will be"
        ],
        correctAnswer: "pass / will be"
      }
    ]
  }
}
,

{
  day: 55,
  title: "Review - Error Correction",
  grammar:
    "Correct common grammar mistakes:\n- He don't like coffee. → He doesn't like coffee.\n- I am go to work. → I am going to work / I go to work.\n- She is more taller than me. → She is taller than me.\n- I have seen him yesterday. → I saw him yesterday.",
  vocabulary: [],
  speakingPractice:
    "Record yourself speaking for 1 minute. Listen and find one grammar or pronunciation mistake. Self-correction is powerful.",
  dailyConversation: {
    a: "Did you check your writing?",
    b: "Yes, I tried to correct my mistakes."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Find and correct the mistake:",
    questions: [
      {
        question: "\"We was watching TV.\"",
        options: [
          "We were watching TV.",
          "We was watched TV.",
          "We are watching TV."
        ],
        correctAnswer: "We were watching TV."
      }
    ]
  }
}
,

{
  day: 56,
  title: "Review - All Grammar",
  grammar:
    "Consolidate everything you learned: Nouns, Tenses, Modals, Comparatives & Superlatives, Passive Voice, Reported Speech, Conditionals, Phrasal Verbs.",
  vocabulary: [],
  speakingPractice:
    "Give a 2-minute speech titled: 'My 60-Day English Journey.'\nStart: 'Before, I couldn't speak much...'\nMiddle: 'Now, I can... I have learned... It was difficult, but...'\nFuture: 'In the future, I will continue...'",
  dailyConversation: {
    a: "Your English has improved!",
    b: "Thank you. I have been practicing every day."
  },
  miniExercise: {
    type: "writing",
    instruction: "Prepare for your final test tomorrow. Review all your notes.",
    questions: [
      "Write the 3 hardest things you learned and 3 things you are confident about."
    ]
  }
}
,

{
  day: 57,
  title: "Final Review (Grammar)",
  grammar:
    "Review all grammar topics from the past 56 days:\n- Verb 'to be'\n- All tenses (Simple / Continuous / Perfect)\n- Modals (can, could, should, must, may, might)\n- Comparatives & Superlatives\n- Passive Voice\n- Reported Speech\n- Conditionals\n- Phrasal Verbs",
  vocabulary: [],
  speakingPractice:
    "Try to explain any grammar topic to a friend as if you are the teacher. When you can teach it, you truly understand it.",
  dailyConversation: {
    a: "Are you ready for the final test?",
    b: "Yes, I studied everything."
  },
  miniExercise: {
    type: "writing",
    instruction: "Take a sheet of paper and write:",
    questions: [
      "One example sentence for each of these topics:\n1. Verb 'to be'\n2. Past tense\n3. Future tense\n4. A modal verb\n5. A comparative or superlative\n6. A passive sentence"
    ]
  }
}
,

{
  day: 58,
  title: "Final Review (Speaking)",
  grammar:
    "Speaking fluently requires confidence. Tomorrow, you will speak for 1–2 minutes on a topic. Today, practice organizing your ideas: introduction → details → conclusion.",
  vocabulary: [],
  speakingPractice:
    "Choose ONE topic and speak for 1–2 minutes:\n- Describe your city.\n- What is your dream job and why?\n- Talk about the most important person in your life.\n- Explain how technology has changed the world.\nRecord yourself and check: pronunciation, pauses, and confidence.",
  dailyConversation: {
    a: "Are you ready for your speaking test?",
    b: "Yes, I practiced speaking for 2 minutes."
  },
  miniExercise: {
    type: "writing",
    instruction: "Action task:",
    questions: [
      "Choose one topic and record yourself speaking for 1–2 minutes."
    ]
  }
}
,

{
  day: 59,
  title: "FINAL TEST (30 minutes)",
  grammar:
    "Final exam of grammar, tenses, modals, comparatives, passive, reported speech, and conditionals.",
  vocabulary: [],
  speakingPractice:
    "Choose ONE topic and speak for 2 minutes (record yourself):\n1. What are your plans for the next 5 years? (use will / going to / will have)\n2. Talk about your English learning journey (use Simple Past / Present Perfect / Modals)\n3. What is the best advice you have ever received? (use Reported Speech / Modals)",
  dailyConversation: {
    a: "Is this the final test?",
    b: "Yes! Show everything you learned."
  },
  miniExercise: {
    type: "quiz",
    instruction: "Part 1: Grammar (Choose the correct answer):",
    questions: [
      {
        question: "He ___ at a bank.",
        options: ["work", "works"],
        correctAnswer: "works"
      },
      {
        question: "I ___ him yesterday.",
        options: ["see", "saw"],
        correctAnswer: "saw"
      },
      {
        question: "___ you like pizza?",
        options: ["Do", "Does"],
        correctAnswer: "Do"
      },
      {
        question: "I am ___ to the store now.",
        options: ["go", "going"],
        correctAnswer: "going"
      },
      {
        question: "She is ___ than her brother.",
        options: ["tall", "taller"],
        correctAnswer: "taller"
      },
      {
        question: "It ___ rain tomorrow.",
        options: ["might", "must"],
        correctAnswer: "might"
      },
      {
        question: "I have lived here ___ 2010.",
        options: ["for", "since"],
        correctAnswer: "since"
      },
      {
        question: "This car ___ in Germany.",
        options: ["is made", "made"],
        correctAnswer: "is made"
      },
      {
        question: "He asked me ___ I was tired.",
        options: ["if", "what"],
        correctAnswer: "if"
      },
      {
        question: "You ___ eat healthy food.",
        options: ["should", "mustn't"],
        correctAnswer: "should"
      }
    ]
  }
}
,

{
  day: 60,
  title: "Your Future in English",
  grammar:
    "Congratulations! You completed the 60-day English plan. Learning is a long journey — not a destination.\n\nYour New Daily Routine:\n- 5 min: Review 10 vocabulary words.\n- 10 min: Listen to a podcast or news report.\n- 10 min: Speak about your day.\n- 5 min: Write 3 sentences in a journal.\n\nFluency Tips:\n- Think in English, not your native language.\n- Shadow speakers: copy pronunciation 1 second behind.\n- Mistakes are normal — fluency > perfection.\n- Read news, blogs, or books daily.\n\nUseful Resources:\nApps: Duolingo, Anki, HelloTalk\nYouTube: Rachel's English, English with Lucy, TED\nWebsites: BBC Learning English, VOA Learning English, Cambridge Dictionary",
  vocabulary: [],
  speakingPractice:
    "Speak for 1 minute about your future English goals. Example:\n'I will continue practicing every day. I will watch English videos and speak with friends. I will not stop learning.'",
  dailyConversation: {
    a: "Is this the end of the 60-day plan?",
    b: "Yes, but it is the beginning of your fluency journey!"
  },
  miniExercise: {
    type: "writing",
    instruction: "Action Plan:",
    questions: [
      "Write your 7-day English plan. What will you review? What will you listen to? How will you practice speaking?"
    ]
  }
}

    ]
}


];
