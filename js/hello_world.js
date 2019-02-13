function main() {
  console.log('Hello world!');
  console.log('a() ===', b(5,6));
}

function b(x, y) {
  return x * y;
}

if (require.main === module) {
    main();
}

