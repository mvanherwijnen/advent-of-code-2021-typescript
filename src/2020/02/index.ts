interface Job {
  left: number;
  right: number;
  char: string;
  password: string;
}

export const countCorrectPasswords = (input: Job[]): number => {
  let count = 0;
  for(const job of input) {
    const charOccurences = (job.password.match(new RegExp(job.char, "g")) || []).length
    if (charOccurences >= job.left && charOccurences <= job.right) {
      count++;
    }
  }

  return count;
}

export const countCorrectPasswordsUsingPositions = (input: Job[]): number => {
  let count = 0;
  for(const job of input) {
    const leftMatch = job.password.charAt(job.left - 1) === job.char;
    const rightMatch = job.password.charAt(job.right - 1) === job.char;
    
    if (leftMatch !== rightMatch) {
      count++;
    }
  }

  return count;
}