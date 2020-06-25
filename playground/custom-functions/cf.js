// Function definition
function calculateBill( bill, tax = 0.13, tip = 0.2 ) {

  // Function body
  const total = ( bill + ( bill * tax ) + ( bill * tip ) ).toFixed( 2 );

  return total;

}
