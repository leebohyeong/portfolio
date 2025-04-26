import TypeIt from "typeit";

new TypeIt(".home__text", {
  loop: true,
  speed: 100,
})
  .move(-4)
  .type("깔끔하게, ")
  .move(4)
  .pause(1000)
  .go();
