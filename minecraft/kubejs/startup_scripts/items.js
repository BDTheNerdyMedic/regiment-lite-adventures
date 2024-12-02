StartupEvents.registry('item', event => {
  event.create('jerky')
    .displayName('Jerky')
    .texture('kubejs:item/jerky')
    .food(food => {
      food
        .nutrition(5)
        .saturation(0.6)
    });

  event.create('bundle_of_sticks')
    .displayName('Bundle of Sticks')
    .texture('kubejs:item/bundle_of_sticks')
    .burnTime(900); // Burn time in ticks (9 sticks × 100 ticks each)
});
