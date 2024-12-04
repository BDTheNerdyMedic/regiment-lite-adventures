StartupEvents.registry('block', event => {
    function textureMultipleSides(builder, sides, texture) {
        sides.forEach(side => builder.texture(side, texture));
        return builder;
    }

    event.create('block_rotten_flesh')
        .displayName('Rotten Flesh Block')
        .slipperiness(0.8)
        .soundType('slime_block');

    let sugarCaneBuilder = event.create('block_sugar_cane')
        .displayName('Block of Sugar Cane')
        .soundType('moss');
    
    textureMultipleSides(sugarCaneBuilder, ['north', 'south', 'east', 'west'], 'kubejs:block/block_sugar_cane')
    textureMultipleSides(sugarCaneBuilder, ['up', 'down'], 'kubejs:block/block_sugar_cane_end');
});
