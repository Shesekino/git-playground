function main() {
  console.log('Hello world!');
  console.log('l() ===', l(1,1));
}

function l (c,b) {
  return c * b;
}

if (require.main === module) {
    main();
}

