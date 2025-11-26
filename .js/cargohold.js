let cargoHold = [
    'oxygen tanks',
    'space suits',
    'parrot',
    'instruction manual',
    'meal packs',
    'slinky',
    'security blanket'
  ];
  
  cargoHold[5] = 'space tether';
  console.log("Sau khi thay 'slinky':", cargoHold);
  
  let removedLast = cargoHold.pop();
  console.log("Phần tử bị xóa (pop):", removedLast);
  console.log("Mảng sau khi pop:", cargoHold);
  
  let removedFirst = cargoHold.shift();
  console.log("Phần tử bị xóa (shift):", removedFirst);
  console.log("Mảng sau khi shift:", cargoHold);
  
  cargoHold.unshift(1138);
  cargoHold.push('20 meters');
  console.log("Mảng sau khi thêm phần tử:", cargoHold);
  
  console.log(`Mảng cuối cùng: ${cargoHold}, chiều dài: ${cargoHold.length}`);
  