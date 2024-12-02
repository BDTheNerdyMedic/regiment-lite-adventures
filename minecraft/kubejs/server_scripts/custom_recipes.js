ServerEvents.recipes(event => {
    // Recipe for 4 chests from 8 logs
    event.shaped(Item.of('minecraft:chest', 4), [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#minecraft:logs'
    });

    // Recipe for 16 sticks from 2 logs
    event.shaped(Item.of('minecraft:stick', 16), [
        'A',
        'A'
    ], {
        A: '#minecraft:logs'
    });

    event.shapeless('minecraft:leather', Array(9).fill('kubejs:jerky'));

    // Shapeless decompression recipes
    const decompressions = [
        { block: 'minecraft:quartz_block', item: 'minecraft:quartz', amount: 4 },
        { block: 'minecraft:amethyst_block', item: 'minecraft:amethyst_shard', amount: 4 },
        { block: 'minecraft:clay', item: 'minecraft:clay_ball', amount: 4 },
        { block: 'minecraft:glowstone', item: 'minecraft:glowstone_dust', amount: 4 },
        { block: '#minecraft:wool', item: 'minecraft:string', amount: 4 },
        { block: 'minecraft:honeycomb_block', item: 'minecraft:honeycomb', amount: 4 }
    ];

    decompressions.forEach(entry => {
        event.shapeless(Item.of(entry.item, entry.amount), [entry.block]);
    });

    // Furnace smelting recipes
    const smeltables = [
        { raw: 'minecraft:raw_iron_block', result: 'minecraft:iron_block', xp: 5, cookingTime: 2400 },
        { raw: 'minecraft:raw_copper_block', result: 'minecraft:copper_block', xp: 5, cookingTime: 2400 },
        { raw: 'minecraft:raw_gold_block', result: 'minecraft:gold_block', xp: 5, cookingTime: 2400 },
        { raw: 'minecraft:rotten_flesh', result: 'kubejs:jerky', xp: 0.35, cookingTime: 200 }
    ];

    smeltables.forEach(entry => {
        event.smelting(entry.result, entry.raw)
            .cookingTime(entry.cookingTime) // Smelting time in ticks
            .xp(entry.xp); // Experience gained
    });
});