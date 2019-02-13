function main() {
  console.log('Hello world!');
  console.log('a() ===', a(3,4));
}

function a(x, y) {
  return x * y;
}

if (require.main === module) {
    main();
}

