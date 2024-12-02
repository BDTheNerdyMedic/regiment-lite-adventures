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

    // Recipe for 36 torches from 1 coal block and 1 bundle of sticks
    event.shaped(Item.of('minecraft:torch', 36), [
        'A',
        'B'
    ], {
        A: '#c:storage_blocks/coal',
        B: 'kubejs:bundle_of_sticks'
    });

    event.shapeless('minecraft:leather', Array(9).fill('kubejs:jerky'));
    event.shapeless('kubejs:block_rotten_flesh', Array(9).fill('minecraft:rotten_flesh'));
    event.shapeless('kubejs:bundle_of_sticks', Array(9).fill('minecraft:stick'));

    // Shapeless decompression recipes
    const decompressions = [
        { block: 'minecraft:quartz_block', item: 'minecraft:quartz', amount: 4 },
        { block: 'minecraft:amethyst_block', item: 'minecraft:amethyst_shard', amount: 4 },
        { block: 'minecraft:clay', item: 'minecraft:clay_ball', amount: 4 },
        { block: 'minecraft:glowstone', item: 'minecraft:glowstone_dust', amount: 4 },
        { block: '#minecraft:wool', item: 'minecraft:string', amount: 4 },
        { block: 'minecraft:honeycomb_block', item: 'minecraft:honeycomb', amount: 4 },
        { block: 'kubejs:block_rotten_flesh', item: 'minecraft:rotten_flesh', amount: 9 },
        { block: 'kubejs:bundle_of_sticks', item: 'minecraft:stick', amount: 9 }
    ];

    decompressions.forEach(entry => {
        event.shapeless(Item.of(entry.item, entry.amount), [entry.block]);
    });

    // Furnace smelting recipes
    const smeltables = [
        { raw: 'minecraft:raw_iron_block', result: 'minecraft:iron_block', xp: 6.3, cookingTime: 1800 },
        { raw: 'minecraft:raw_copper_block', result: 'minecraft:copper_block', xp: 6.3, cookingTime: 1800 },
        { raw: 'minecraft:raw_gold_block', result: 'minecraft:gold_block', xp: 9, cookingTime: 1800 },
        { raw: 'minecraft:rotten_flesh', result: 'kubejs:jerky', xp: 0.35, cookingTime: 200 }
    ];

    smeltables.forEach(entry => {
        event.smelting(entry.result, entry.raw)
            .cookingTime(entry.cookingTime) // Smelting time in ticks
            .xp(entry.xp); // Experience gained
    });
});