// quest33.js

function isValidNode(nodeId) {
    if (nodeId.startsWith("ND")) {
      const numberPart = Number(nodeId.slice(2));
      return !isNaN(numberPart);
    }
    return false;
  }
  
  const valid1 = isValidNode("ND404");
  
  console.log(`Node valid: ${valid1}`);
  