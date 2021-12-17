import { Player } from "../src/player";

//testing a property from the Player class
describe("Player class", function () {
  test("name is set from constructor", function () {
    //create a new player
    let bill: Player = new Player("Bill", 25);
    //check the name property
    expect(bill.name).toBe("Bill");
  });

  test("jersey is set from constructor", function () {
    let bill: Player = new Player("Bill", 25);
    expect(bill.jersey).toBe(25); //expecting to see an updated value
  });
  test("Get Name returns a name", function () {
    let bill: Player = new Player("Bill", 25);
    expect(bill.getName()).toBe("Bill"); //expecting to see an updated value
  });
});
