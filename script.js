// Array of quote objects
const quotes = [
    { 
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" 
    },
    { 
        text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" 
    },
    { 
        text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" 
    },
    { 
        text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" 
    },
    { 
        text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" 
    },
    { 
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" 
    },
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
    const quote = getRandomQuote();
    document.getElementById('quoteText').textContent = `${quote.text}`;
    document.getElementById('quoteAuthor').textContent = `${quote.author}`;
}

document.getElementById('quoteButton').addEventListener('click', displayRandomQuote);