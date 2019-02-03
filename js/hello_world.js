function main() {
  console.log('Hello world!');
  console.log('a() ===', a());
}

function a() {
  return 1 + 1;
}

if (require.main === module) {
    main();
}

