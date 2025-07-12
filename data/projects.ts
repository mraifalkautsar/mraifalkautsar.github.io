import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Matrix Calculator",
    description: "A matrix calculator program made in Java",
    image: "/projects/matrix.png?height=200&width=300",
    technologies: ["Java"],
    githubUrl: "https://github.com/mraifalkautsar/Algeo01-23011",
    fullDescription: "Program to solve matrix problems like determinants and inverses. Additionally, this program can solve linear equation systems using several methods such as Gauss elimination, Gauss-Jordan elimination, inverse, and Cramer's rule. This program can also solve interpolation and regression.",
    features: [
      "Matrix problems calculator",
      "Linear equations solver", 
      "Regression and interpolations",
      "Bicubic spline interpolation"
    ],
    rarity: "Assignment",
  },
  {
    id: 2,
    title: "PurryMail",
    description: "E-mail program built in C.",
    image: "/projects/purrymail.png?height=200&width=300",
    technologies: ["C"],
    githubUrl: "https://github.com/mraifalkautsar/if2110-tugas-besar-2024-if2110-01-e",
    fullDescription: "PurryMail is a Command-Line Interface (CLI) simulation application designed to resemble an email system. This application is developed using C language and utilizes various Abstract Data Types (ADT) to ensure optimal performance and data management.",
    features: [
      "Full email features",
      "Email encryption",
      "Notifications", 
      "Save and load functionality"
    ],
    rarity: "Assignment",
  },
  {
    id: 3,
    title: "Thick of I.T.",
    description: "Program to find similar songs and photos.",
    image: "/projects/thickofit.png?height=200&width=300",
    technologies: ["Python", "HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Darsua/Algeo02-23011",
    fullDescription: "Thick of I.T. is a program capable of receiving a song or cover song and then detecting its similarity with songs in its dataset. This program is built with Python as the back-end and HTML, JavaScript, CSS as the frontend.",
    features: [
      "Photo similarity detection",
      "Song similarity detection"
    ],
    rarity: "Assignment",
  },
  {
    id: 4,
    title: "Camel Pop!",
    description: "A game based on the board game Camel Up! written in Prolog.",
    image: "/projects/camelpop.png?height=200&width=300",
    technologies: ["Prolog"],
    githubUrl: "",
    fullDescription: "Camel Up! is an adaptation of the famous board game Camel Up! using the declarative programming language Prolog (GNU Prolog). This implementation contains recursion, lists, cut, fail, and loops.",
    features: [
      "Full-fledged playable game",
      "Implements Prolog important concepts"
    ],
    rarity: "Assignment",
  },
  {
    id: 5,
    title: "Dukun Modern",
    description: "A game about brewing potions as a modern-day alchemist.",
    image: "/projects/dukunmodern.png?height=200&width=300",
    technologies: ["Unity"],
    githubUrl: "",
    liveUrl: "https://lotsadelight.itch.io/dukun-modern",
    fullDescription: "Dukun Modern or Modern Alchemist is a game about receiving orders from various shady people and brewing potions for them. It was built in a week using Unity for GIMJAM 2024.",
    features: [
      "Analyzing emails from customers",
      "Brewing potions",
      "Multiple endings"
    ],
    rarity: "Club/Work",
  },
  {
    id: 6,
    title: "Lintas Sumatra",
    description: "An endless runner game about driving a truck through Sumatra.",
    image: "/projects/lintassumatra.png?height=200&width=300",
    technologies: ["Unity"],
    liveUrl: "https://lotsadelight.itch.io/lintas-sumatera",
    fullDescription: "Lintas Sumatra or Sumatran Trail is a game about driving your truck through the highway of Sumatra while avoiding obstacles and criminals. The road of Sumatra will challenge the player's skill. It was built in a week using Unity for Hands-On GIM Apprenticeship 2023.",
    features: [
      "Scoring system",
      "Power-up system",
      "Changing background"
    ],
    rarity: "Club/Work",
  },
  {
    id: 7,
    title: "Godslayer",
    description: "Action hack and slash game made for IGDX Bootcamp 2024.",
    image: "/projects/godslayer.png?height=200&width=300",
    technologies: ["Unity"],
    liveUrl: "https://lotsadelight.itch.io/godslayer",
    fullDescription: "Save the people, slay the gods! Godslayer is a (intended) roguelike hack and slash game made for IGDX Bootcamp 2024 by Kominfo. The game is built in Unity with the Top Down Engine framework.",
    features: [
      "Flashy action",
      "Original made assets and sprites"
    ],
    rarity: "Personal",
  },
  {
    id: 8,
    title: "Cybertrek",
    description: "Simple platformer in Unity.",
    image: "/projects/cybertrek.png?height=200&width=300",
    technologies: ["Unity"],
    liveUrl: "https://lotsadelight.itch.io/cybertrek",
    fullDescription: "The player traverses the skylines of the futuristic Neogoth City in the pixelated platformer. It is built with vanilla Unity and C# for Hands-On SPARTA 2024.",
    features: [
      "Silk smooth platforming",
      "Coyote time and jump buffer"
    ],
    rarity: "Personal",
  },
  {
    id: 9,
    title: "PurryLeveling",
    description: "An RPG made in C++ for Object-Oriented Programming course. It features a fully-featured GUI using SFML and various object-oriented paradigm implementations.",
    image: "/projects/purryleveling.png?height=200&width=300",
    technologies: ["C++", "SFML", "Imgui", "Make"],
    githubUrl: "https://github.com/l0stplains/PurryLeveling",
    fullDescription: "Purry Leveling is a strategic RPG-based game where players can use skills and items to conquer the dungeon break. Featuring SFML for rendering and ImGui for debugging overlays for stunning GUI. The game challenges players through a series of levels with turn-based battle mechanics.",
    features: [
      "GUI using SFML and Imgui",
      "Beautiful assets",
      "Various implementations of object-oriented concepts"
    ],
    rarity: "Assignment",
  },
  {
    id: 10,
    title: "O.W.C.A Logistics",
    description: "A shipment company app implementing Basic CRUD with some weird specifications.",
    image: "/projects/owcalogistics.png?height=200&width=300",
    technologies: ["Java", "JavaFX", "Maven"],
    githubUrl: "https://github.com/mraifalkautsar/if2010-tubes-2-2425-ctf",
    fullDescription: "O.W.C.A Logistics is a desktop application based on Java and JavaFX, designed to make it easier for the operational team—both admin and courier—to manage, monitor, and track package deliveries. With an intuitive interface, users can log in according to their roles, view a summary of delivery statuses on the main dashboard, and create, edit, and trace package details in real-time.",
    features: [
      "GUI",
      "CRUD operations",
      "Notification"
    ],
    rarity: "Assignment",
  },
  {
    id: 11,
    title: "IQ Puzzle Pro Solver",
    description: "Program to solve IQ Puzzle Pro games using brute-force algorithm.",
    image: "/projects/puzzleprosolver.png?height=200&width=300",
    technologies: ["Java", "JavaFX"],
    githubUrl: "https://github.com/mraifalkautsar/Tucil1_13523011",
    fullDescription: "IQ Puzzle Pro Solver (Pazurupurosorubā) is a program capable of solving an IQ Puzzler Pro board using brute force algorithm. This program provides both command-line and graphical interfaces.",
    features: [
      "GUI",
      "Save result to text or image"
    ],
    rarity: "Assignment",
  },
  {
    id: 12,
    title: "Quadtree Compresser",
    description: "Image compression program using quadtree method.",
    image: "/projects/compresser.jpg?height=200&width=300",
    technologies: ["C++", "C"],
    githubUrl: "https://github.com/mraifalkautsar/Tucil2_13523011",
    fullDescription: "This program compresses images using the Quadtree method, a hierarchical data structure often used in image processing. Quadtree divides images into small blocks based on pixel color uniformity (in RGB format). If a block is not uniform, it will be divided again into four sub-blocks until it meets the uniformity threshold or reaches the specified minimum size.",
    features: [
      "Quadtree compression using various methods"
    ],
    rarity: "Assignment",
  },
  {
    id: 13,
    title: "Robocode Tank Royale Bots",
    description: "Tank bots for Robocode Tank Royale game",
    image: "/projects/tankroyale.png?height=200&width=300",
    technologies: ["C#", ".NET"],
    githubUrl: "https://github.com/mraifalkautsar/Tubes1_SateAmbalPakTino",
    fullDescription: "In this repository there are four bots that implement greedy algorithms with different heuristics, namely Bot Psatir, Bot Psilat, Bot Prundung, and Bot Pecundunk.",
    features: [
      "4 greedy bots with different variations"
    ],
    rarity: "Assignment",
  },
  {
    id: 14,
    title: "Little Alchemy 2 Solver",
    description: "Recipe tree search program for Little Alchemy 2 game using DFS and BFS algorithms in tree data structure.",
    image: "/projects/littlealchemy.png?height=200&width=300",
    technologies: ["HTML", "CSS", "JavaScript", "Go"],
    githubUrl: "https://github.com/Henshou/Tubes2_BE_CraftingTable",
    fullDescription: "CraftingTable is a recipe tree search program for Little Alchemy 2 game using Depth-first Search and Breadth-first Search algorithms in tree data structure. This program is designed to create recipe trees that contain several ways to make an element from the game, starting from basic elements. This program was created to fulfill Major Assignment 2 of the Algorithm Strategy course (IF2211).",
    features: [
      "Depth-first search",
      "Breadth-first search",
      "Fully-fledged front end"
    ],
    rarity: "Assignment",
  },
  {
    id: 15,
    title: "Rush Hour Solver",
    description: "Program for finding routes (pathfinding) in the Rush Hour game with the aim of moving a car to a specific coordinate.",
    image: "/projects/rushhour.png?height=200&width=300",
    technologies: ["Java", "JavaFX"],
    githubUrl: "https://github.com/Kurosue/Tucil3_13523011_13523028",
    fullDescription: "This Rush Hour Solver is a program for finding routes (pathfinding) in the Rush Hour game with the aim of moving a car to a specific coordinate. This program implements Uniform Cost Search, Greedy Best First Search, and A* Search algorithms and uses JavaFX as module for GUI.",
    features: [
      "UCS, GBFS, and A* implementation",
      "JavaFX GUI"
    ],
    rarity: "Assignment",
  },
  {
    id: 16,
    title: "CV Finder",
    description: "Application that efficiently processes and filters job applicant CVs based on required skills and keywords.",
    image: "/projects/cekcv.png?height=200&width=300",
    technologies: ["Python"],
    githubUrl: "https://github.com/ryonlunar/Tubes3_TolongJanganDihapusLagi",
    fullDescription: "Built with Python, CekCV is an application that efficiently processes and filters job applicant CVs based on required skills and keywords. The application implements multiple string matching algorithms to find the best candidates for specific job roles.",
    features: [
      "Multiple Search Algorithms: Knuth-Morris-Pratt (KMP), Boyer-Moore, and Aho-Corasick algorithms for exact matches",
      "Fuzzy Matching: Levenshtein distance algorithm to find approximate matches",
      "Interactive UI: Clean and responsive PyQt6 interface",
      "PDF Processing: Extracts text from PDF CVs",
      "Secure Data: RSA encryption for sensitive applicant information",
      "Comprehensive Results: CV scoring, summaries, and full PDF viewing",
      "Multi-threading: Efficient parallel processing of large CV databases"
    ],
    rarity: "Assignment",
  },
  {
    id: 17,
    title: "CandiOS",
    description: "An x86-32 OS built from scratch to be run with QEMU.",
    image: "/projects/candios.png?height=200&width=300",
    technologies: ["Assembly", "C"],
    githubUrl: "https://github.com/mraifalkautsar/os-2025-candios",
    fullDescription: "CandiOS is a 32-bit x86 Protected Mode based operating system developed to understand kernel development concepts and implementation of operating system subsystems in depth. This project features comprehensive implementation of fundamental features of modern operating systems.",
    features: [
      "Memory management (virtual memory management, memory allocation, protection rings)",
      "Process management (PCB, preemptive scheduler, concurrent execution)",
      "Input/output and drivers (text framebuffer driver, ATA disk driver, keyboard driver, CMOS driver)",
      "File system (EXT2 file system, CRUD operations, file permissions)",
      "Interrupt and system calls (IDT, syscall interface, exception handling)",
      "User interface (shell CLI, built-in commands, program execution)",
      "Development tools (toolchain integration, debugging support)"
    ],
    rarity: "Assignment",
  },
  {
    id: 18,
    title: "Database for PapChat",
    description: "A database made for theoretical PapChat application.",
    image: "/projects/database.png?height=200&width=300",
    technologies: ["SQL", "Python"],
    fullDescription: "A work elaborating database theories for PapChat, a SnapChat-like application.",
    features: [
      "Normalized databases",
      "Seeder"
    ],
    rarity: "Assignment",
  },
  {
    id: 19,
    title: "GrocerEase",
    description: "Application to manage small businesses.",
    image: "/projects/grocerease.png?height=200&width=300",
    technologies: ["JavaScript", "CSS", "ElectronJS"],
    fullDescription: "GrocerEase is an application designed with the aim of facilitating the buying and selling process along with its data collection for MSME sellers. GrocerEase can record customer orders, record transactions, and display MSME financial reports to sellers. The name GrocerEase consists of two main elements, namely Grocer (seller) and Ease (easy). It is hoped that through the development of this application, it can make it easier for MSME sellers to conduct their business.",
    features: [
      "Transactions",
      "Inventory",
      "Reports"
    ],
    rarity: "Assignment",
  },
  {
    id: 20,
    title: "TCP-over-UDP",
    description: "A TCP-over-UDP implementation with chat room application",
    image: "/projects/tcpoverudp.png?height=200&width=300",
    technologies: ["Python"],
    githubUrl: "https://github.com/labsister22/tugas-besar-if2230-jaringan-komputer-nguawurcik",
    fullDescription: "A TCP-over-UDP implementation with chat room application for IF2230 Computer Networks course. It features custom TCP implementation over UDP, reliable data transmission with flow control, etc.",
    features: [
      "Custom TCP implementation over UDP",
      "Reliable data transmission with flow control", 
      "Simple command-line chat room application",
      "Support for multiple concurrent clients",
      "Sliding window algorithm for efficient transmission",
      "Three-way handshake for connection establishment",
      "Error detection and correction mechanisms"
    ],
    rarity: "Assignment",
  }
]