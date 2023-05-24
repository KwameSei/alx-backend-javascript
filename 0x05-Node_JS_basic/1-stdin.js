process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const user_input = process.stdin.read();  // Read user input
  if (user_input !== null) {  // If user input is not empty
    const trimmed_input = user_input.trim();  // Trim any leading/trailing whitespace
    if (trimmed_input === 'exit') {
      process.stdout.write('This important software is now closing\n');
      process.exit();  // Terminate the program
    } else {
      process.stdout.write(`Your name is: ${trimmed_input}\n`);
    }
  }
});

// Handle the case when user input is empty (user ends the program)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
