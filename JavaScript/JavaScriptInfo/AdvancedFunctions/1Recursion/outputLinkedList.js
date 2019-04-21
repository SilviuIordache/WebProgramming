let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printListRecursion(list) {
    console.log(list.value);
    if (list.next != null) {
        printListRecursion(list.next);
    } 
}
//printListRecursion(list);

function printListLoop(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }

}
printListLoop(list);

function printListRecursionReverseOrder(list){
    if (list.next) {
        printListRecursionReverseOrder(list.next);
    }
    console.log(list.value);
}

//printListRecursionReverseOrder(list);