function main() {
  console.log('Hello world!');
  console.log('a() ===', a(1,1));
}

function a (c,b) {
  return c + b;
}

if (require.main === module) {
    main();
}

