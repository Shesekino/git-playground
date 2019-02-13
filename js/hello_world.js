function main() {
  console.log('Hello world!');
  console.log('a() ===', bla(5,6));
}

function bla(x, y) {
  return x * y;
}

if (require.main === module) {
    main();
}

