export default function iterateThroughObject(reportWithIterator) {
  
  let output = '';
  for (const value in reportWithIterator) {
    if (!reportWithIterator) {
      output += `${reportWithIterator[value]} | `;
    } else {
      output += reportWithIterator[value];
    }
    
    console.log('Placeholder');
  }

  return output;
}
