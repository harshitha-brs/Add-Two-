function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0); // Dummy head to simplify the code
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = carry + x + y;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

// Function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

document.getElementById("submit").addEventListener("click", function() {
  const input = document.getElementById("intervalsInput").value;
  const matches = input.match(/l1\s*=\s*\[(.*?)\]\s*,\s*l2\s*=\s*\[(.*?)\]/); // Extract numbers from input
  if (matches) {
    const l1Values = matches[1].split(",").map(Number); // Extract values for the first linked list
    const l2Values = matches[2].split(",").map(Number); // Extract values for the second linked list
    const l1 = createLinkedList(l1Values); // Create linked list from first set of values
    const l2 = createLinkedList(l2Values); // Create linked list from second set of values
    const result = addTwoNumbers(l1, l2);
    const output = linkedListToArray(result);
    document.getElementById("output").innerText =
      "Output: [" + output.join(", ") + "]";
  } else {
    document.getElementById("output").innerText =
      "Invalid input. Please enter input in the format: l1 = [2,4,3], l2 = [5,6,4]";
  }
});

document
  .getElementById("intervalsInput")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAdditionOfLinkedLists();
    }
  });

function handleAdditionOfLinkedLists() {
  const input = document.getElementById("intervalsInput").value;
  const matches = input.match(/l1\s*=\s*\[(.*?)\]\s*,\s*l2\s*=\s*\[(.*?)\]/); // Extract numbers from input
  if (matches) {
    const l1Values = matches[1].split(",").map(Number); // Extract values for the first linked list
    const l2Values = matches[2].split(",").map(Number); // Extract values for the second linked list
    const l1 = createLinkedList(l1Values); // Create linked list from first set of values
    const l2 = createLinkedList(l2Values); // Create linked list from second set of values
    const result = addTwoNumbers(l1, l2);
    const output = linkedListToArray(result);
    document.getElementById("output").innerText =
      "Output: [" + output.join(", ") + "]";
  } else {
    document.getElementById("output").innerText =
      "Invalid input. Please enter input in the format: l1 = [2,4,3], l2 = [5,6,4]";
  }
}
