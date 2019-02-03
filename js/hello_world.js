function main() {
  console.log('Hello world!');
  console.log('b() ===', b(1, 1));
}

function b(first, second) {
  return first * second;
}

if (require.main === module) {
    main();
}

