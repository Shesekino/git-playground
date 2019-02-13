function main() {
  console.log('Hello world!');
  console.log('a() ===', a(1,21,2));
}

function a(n,m) {
  return n*m;
}

if (require.main === module) {
    main();
}

