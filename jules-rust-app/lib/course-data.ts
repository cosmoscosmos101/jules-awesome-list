export interface CourseModule {
    id: string;
    title: string;
    description: string;
    content: string;
    initialCode: string;
    solutionCode: string;
}

export interface CourseTrack {
    id: string;
    title: string;
    description: string;
    icon: string; // E.g., "📊", "🤖", "☁️"
    modules: CourseModule[];
}

const FUNDAMENTALS_MODULES: CourseModule[] = [
    {
        id: "getting-started",
        title: "1. Getting Started",
        description: "Your first Rust program.",
        content: `Welcome to Rust! Let's start with the classic "Hello, World!" program.

Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.

In the editor, you'll see a basic function template. Your task is to make it print "Hello, world!".`,
        initialCode: `fn main() {
    // TODO: Print "Hello, world!" to the console
    // Hint: Use the println! macro
    
}`,
        solutionCode: `fn main() {
    println!("Hello, world!");
}`
    },
    {
        id: "basic-syntax",
        title: "2. Basic Syntax",
        description: "Variables and mutability.",
        content: `In Rust, variables are immutable by default. This is a safety feature. To make a variable mutable, you must use the \`mut\` keyword.

Task:
1. Create an immutable variable named \`x\` with value 5.
2. Create a mutable variable named \`y\` with value 10.
3. Print both variables.
4. Change the value of \`y\` to 20 and print it again.`,
        initialCode: `fn main() {
    // TODO: Create immutable variable x
    
    // TODO: Create mutable variable y
    
    // TODO: Print x and y using println!("x: {}, y: {}", x, y);
    
    // TODO: Change y to 20 and print again
}`,
        solutionCode: `fn main() {
    let x = 5;
    let mut y = 10;
    println!("x: {}, y: {}", x, y);
    
    y = 20;
    println!("y is now: {}", y);
}`
    },
    {
        id: "control-flow",
        title: "3. Control Flow",
        description: "If statements and loops.",
        content: `Rust has powerful control flow constructs.

Task:
1. Create a variable \`number\` with value 3.
2. Use an \`if\` statement to check if \`number\` is less than 5.
3. If true, print "condition was true".
4. Create a \`for\` loop that iterates from 0 to 5 (exclusive) and prints the index.`,
        initialCode: `fn main() {
    let number = 3;

    // TODO: Add an if statement checking if number < 5
    
    // TODO: Create a for loop from 0 to 5
}`,
        solutionCode: `fn main() {
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
    
    for i in 0..5 {
        println!("i is {}", i);
    }
}`
    },
    {
        id: "functions",
        title: "4. Functions",
        description: "Defining and calling functions.",
        content: `Functions are pervasive in Rust code. You've already seen \`main\`.

Task:
1. Define a function named \`five\` that takes no arguments and returns \`5\`.
2. Define a function named \`plus_one\` that takes an \`i32\` and returns \`i32\`.
3. Call both in \`main\` and print the results.`,
        initialCode: `fn main() {
    // TODO: Call your functions here and print results
}

// TODO: Define function 'five'

// TODO: Define function 'plus_one'`,
        solutionCode: `fn main() {
    let x = five();
    let y = plus_one(5);
    
    println!("five() returns: {}", x);
    println!("plus_one(5) returns: {}", y);
}

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}`
    },
    {
        id: "ownership",
        title: "5. Ownership",
        description: "Rust's unique ownership system.",
        content: `Ownership is Rust's most unique feature.

Rules:
1. Each value in Rust has a variable that's called its owner.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

Task:
Demonstrate ownership by creating a String \`s1\`, moving it to \`s2\`, and trying to print \`s2\`. (If you try to print \`s1\` afterwards, it would be a compile error!)`,
        initialCode: `fn main() {
    // TODO: Create a String s1
    
    // TODO: Move s1 to s2
    
    // TODO: Print s2
}`,
        solutionCode: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is moved to s2 here

    println!("s2: {}", s2);
    // println!("s1: {}", s1); // This would cause a compile error!
}`
    },
    {
        id: "structs",
        title: "6. Structs",
        description: "Custom data types.",
        content: `Structs let you name and package together multiple related values.

Task:
1. Define a struct \`User\` with fields \`username\` (String) and \`active\` (bool).
2. Create an instance of \`User\` in main.
3. Print the username.`,
        initialCode: `// TODO: Define struct User

fn main() {
    // TODO: Create instance of User
    
    // TODO: Print username
}`,
        solutionCode: `struct User {
    username: String,
    active: bool,
}

fn main() {
    let user1 = User {
        username: String::from("someusername123"),
        active: true,
    };
    
    println!("Username: {}", user1.username);
}`
    },
    {
        id: "enums",
        title: "7. Enums",
        description: "Enumerations and pattern matching.",
        content: `Enums allow you to define a type by enumerating its possible variants.

Task:
1. Define an enum \`IpAddrKind\` with variants \`V4\` and \`V6\`.
2. Create a function \`route\` that takes \`IpAddrKind\`.
3. Call it with both variants.`,
        initialCode: `// TODO: Define enum IpAddrKind

fn main() {
    // TODO: Call route with V4 and V6
}

// TODO: Define function route`,
        solutionCode: `enum IpAddrKind {
    V4,
    V6,
}

fn route(ip_kind: IpAddrKind) {
    // Logic here
}

fn main() {
    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;

    route(four);
    route(six);
    
    println!("Routed both IP types successfully.");
}`
    },
    {
        id: "vectors",
        title: "8. Vectors",
        description: "Growable arrays.",
        content: `Vectors allow you to store more than one value in a single data structure that puts all the values next to each other in memory.

Task:
1. Create a mutable vector \`v\` containing integers.
2. Push values 1, 2, and 3 into it.
3. Print the second element (index 1).`,
        initialCode: `fn main() {
    // TODO: Create a mutable vector v
    
    // TODO: Push 1, 2, 3
    
    // TODO: Print the second element
}`,
        solutionCode: `fn main() {
    let mut v = Vec::new();

    v.push(1);
    v.push(2);
    v.push(3);

    println!("The second element is {}", v[1]);
}`
    },
    {
        id: "hashmaps",
        title: "9. HashMaps",
        description: "Key-value storage.",
        content: `HashMaps store data by mapping keys to values.

Task:
1. Create a HashMap \`scores\`.
2. Insert team "Blue" with score 10 and "Red" with score 50.
3. Print the score for "Blue".`,
        initialCode: `use std::collections::HashMap;

fn main() {
    // TODO: Create a HashMap scores
    
    // TODO: Insert teams and scores
    
    // TODO: Print score for "Blue"
}`,
        solutionCode: `use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Red"), 50);

    let team_name = String::from("Blue");
    let score = scores.get(&team_name);
    
    match score {
        Some(s) => println!("Blue team score: {}", s),
        None => println!("Team not found"),
    }
}`
    },
    {
        id: "error-handling",
        title: "10. Error Handling",
        description: "Recoverable errors with Result.",
        content: `Rust groups errors into recoverable (Result) and unrecoverable (panic!) categories.

Task:
1. Define a function \`divide\` that returns \`Result<i32, String>\`.
2. Return \`Ok(answer)\` if division is valid, or \`Err("Division by zero")\` if dividing by 0.
3. Call it in main and handle the result.`,
        initialCode: `fn divide(a: i32, b: i32) -> Result<i32, String> {
    // TODO: Handle division by zero
    // TODO: Return result
    Ok(0) // placeholder
}

fn main() {
    // TODO: Call divide and handle result
}`,
        solutionCode: `fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        return Err(String::from("Division by zero"));
    }
    Ok(a / b)
}

fn main() {
    let result = divide(10, 2);
    
    match result {
        Ok(val) => println!("Result: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}`
    }
];

// DATA SCIENCE MODULES
const DS_MODULES: CourseModule[] = Array.from({ length: 10 }, (_, i) => ({
    id: `ds-${i + 1}`,
    title: `${i + 1}. Data Science ${i + 1}`,
    description: `Data Science Lesson ${i + 1}`,
    content: `Learn about Data Science concepts in Rust. Topic ${i + 1}.`,
    initialCode: `fn main() {\n    println!("Data Science Module ${i + 1}");\n}`,
    solutionCode: `fn main() {\n    println!("Data Science Module ${i + 1} Complete");\n}`
}));
// Customize titles for DS
const dsTitles = ["Vectors & Matrices", "Reading CSV", "DataFrames", "Data Cleaning", "Filtering Data", "Aggregating Data", "Handling Missing Values", "Basic Statistics", "Plotting Charts", "Exporting Data"];
DS_MODULES.forEach((m, i) => { if (dsTitles[i]) { m.title = `${i + 1}. ${dsTitles[i]}`; m.description = `Master ${dsTitles[i]} in Rust.`; } });


// DATA ANALYTICS MODULES
const DA_MODULES: CourseModule[] = Array.from({ length: 10 }, (_, i) => ({
    id: `da-${i + 1}`,
    title: `${i + 1}. Analytics ${i + 1}`,
    description: `Analytics Lesson ${i + 1}`,
    content: `Learn about Data Analytics in Rust. Topic ${i + 1}.`,
    initialCode: `fn main() {\n    println!("Analytics Module ${i + 1}");\n}`,
    solutionCode: `fn main() {\n    println!("Analytics Module ${i + 1} Complete");\n}`
}));
const daTitles = ["Statistical Analysis", "Moving Averages", "Time Series", "Grouping Data", "Pivot Tables", "Correlation", "Regression Basics", "Data Visualization", "Reporting", "Polars Deep Dive"];
DA_MODULES.forEach((m, i) => { if (daTitles[i]) { m.title = `${i + 1}. ${daTitles[i]}`; m.description = `Master ${daTitles[i]} in Rust.`; } });


// MACHINE LEARNING MODULES
const ML_MODULES: CourseModule[] = Array.from({ length: 10 }, (_, i) => ({
    id: `ml-${i + 1}`,
    title: `${i + 1}. ML ${i + 1}`,
    description: `Machine Learning Lesson ${i + 1}`,
    content: `Learn about Machine Learning in Rust. Topic ${i + 1}.`,
    initialCode: `fn main() {\n    println!("ML Module ${i + 1}");\n}`,
    solutionCode: `fn main() {\n    println!("ML Module ${i + 1} Complete");\n}`
}));
const mlTitles = ["Linear Regression", "Logistic Regression", "K-Means Clustering", "K-Nearest Neighbors", "Decision Trees", "Random Forests", "Support Vector Machines", "Model Evaluation", "Model Persistence", "Linfa Crate"];
ML_MODULES.forEach((m, i) => { if (mlTitles[i]) { m.title = `${i + 1}. ${mlTitles[i]}`; m.description = `Master ${mlTitles[i]} in Rust.`; } });


// AI MODULES
const AI_MODULES: CourseModule[] = Array.from({ length: 10 }, (_, i) => ({
    id: `ai-${i + 1}`,
    title: `${i + 1}. AI ${i + 1}`,
    description: `Artificial Intelligence Lesson ${i + 1}`,
    content: `Learn about AI in Rust. Topic ${i + 1}.`,
    initialCode: `fn main() {\n    println!("AI Module ${i + 1}");\n}`,
    solutionCode: `fn main() {\n    println!("AI Module ${i + 1} Complete");\n}`
}));
const aiTitles = ["Tensors", "Auto-Differentiation", "Neural Networks", "Activation Functions", "Loss Functions", "Optimizers", "Training Loops", "Inference", "Burn Crate", "Computer Vision"];
AI_MODULES.forEach((m, i) => { if (aiTitles[i]) { m.title = `${i + 1}. ${aiTitles[i]}`; m.description = `Master ${aiTitles[i]} in Rust.`; } });

// CLOUD COMPUTING MODULES
const CLOUD_MODULES: CourseModule[] = Array.from({ length: 10 }, (_, i) => ({
    id: `cloud-${i + 1}`,
    title: `${i + 1}. Cloud ${i + 1}`,
    description: `Cloud Computing Lesson ${i + 1}`,
    content: `Learn about Cloud Computing in Rust. Topic ${i + 1}.`,
    initialCode: `fn main() {\n    println!("Cloud Module ${i + 1}");\n}`,
    solutionCode: `fn main() {\n    println!("Cloud Module ${i + 1} Complete");\n}`
}));
const cloudTitles = ["Async Rust", "Tokio Runtime", "HTTP Requests", "Axum Web Framework", "Database Connection", "Dockerizing Rust", "AWS Lambda", "Serverless", "S3 & Storage", "Microservices"];
CLOUD_MODULES.forEach((m, i) => { if (cloudTitles[i]) { m.title = `${i + 1}. ${cloudTitles[i]}`; m.description = `Master ${cloudTitles[i]} in Rust.`; } });


export const COURSE_TRACKS: CourseTrack[] = [
    {
        id: "fundamentals",
        title: "Rust Programming",
        description: "Master the basics of Rust programming.",
        icon: "🦀",
        modules: FUNDAMENTALS_MODULES
    },
    {
        id: "data-science",
        title: "Data Science",
        description: "Analyze and manipulate data with Rust.",
        icon: "📊",
        modules: DS_MODULES
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Statistical analysis and reporting.",
        icon: "📈",
        modules: DA_MODULES
    },
    {
        id: "machine-learning",
        title: "Machine Learning",
        description: "Build logic and prediction models.",
        icon: "🧠",
        modules: ML_MODULES
    },
    {
        id: "ai",
        title: "Artificial Intelligence",
        description: "Deep learning and neural networks.",
        icon: "🤖",
        modules: AI_MODULES
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing",
        description: "Scalable backend and serverless Rust.",
        icon: "☁️",
        modules: CLOUD_MODULES
    }
];

// Flatten all modules for compatibility with existing routing
export const COURSE_MODULES: CourseModule[] = COURSE_TRACKS.flatMap(track => track.modules);
