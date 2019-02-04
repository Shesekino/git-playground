function main() {
  console.log('Hello world!');
  console.log('a() ===', a( 1 ));
}

function a( param ) {
  return param * param;
}

if (require.main === module) {
    main();
}

