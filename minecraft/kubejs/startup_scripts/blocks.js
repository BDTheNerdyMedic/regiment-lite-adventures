StartupEvents.registry('block', event => {
    event.create('block_rotten_flesh')
        .displayName('Rotten Flesh Block')
        .hardness(1.0)
        .requiresTool(false)
        .slipperiness(0.8)
        .soundType('slime_block')
});
