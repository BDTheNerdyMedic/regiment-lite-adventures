StartupEvents.registry('item', event => {
  event.create('jerky')
    .displayName('Jerky')
    .texture('kubejs:item/jerky')
    .food(food => {
      food
        .nutrition(5)
        .saturation(0.6)
    })
})
